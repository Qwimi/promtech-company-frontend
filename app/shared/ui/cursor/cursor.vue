<template>
  <teleport :to="cursorPositionMode.localElement || 'body'">
    <div
      class="cursor"
      :class="{ 'cursor--local': cursorPositionMode.localElement }"
      :style="cursorStyle"
    />
  </teleport>
</template>

<script setup lang="ts">
import { cursorPositionMode, cursorStyle } from './model/cursor-style'

const xCoord = ref('0px')
const yCoord = ref('0px')

// Флаги для отслеживания необходимости обновления
const needsUpdate = ref(false)
const rafId = ref<number | null>(null)

// Последние координаты мыши
const lastMouseX = ref(0)
const lastMouseY = ref(0)

const updateCursorPosition = () => {
    if (!needsUpdate.value) return

    if (cursorPositionMode.localElement) {
        const rect = cursorPositionMode.localElement.getBoundingClientRect()
        const localX = lastMouseX.value - rect.left
        const localY = lastMouseY.value - rect.top

        // ограничиваем движение внутри элемента
        if (localX >= 0 && localX <= rect.width && localY >= 0 && localY <= rect.height) {
            xCoord.value = localX + 'px'
            yCoord.value = localY + 'px'
        }
    } else {
        // глобальное позиционирование относительно экрана (для fixed)
        xCoord.value = lastMouseX.value + 'px'
        yCoord.value = lastMouseY.value + 'px'
    }

    needsUpdate.value = false
}

const requestAnimationFrameUpdate = () => {
    if (rafId.value !== null) {
        cancelAnimationFrame(rafId.value)
    }

    rafId.value = requestAnimationFrame(() => {
        updateCursorPosition()
        rafId.value = null
    })
}

const updatePositionFromEvent = (event: MouseEvent) => {
    lastMouseX.value = event.clientX
    lastMouseY.value = event.clientY

    if (!needsUpdate.value) {
        needsUpdate.value = true
        requestAnimationFrameUpdate()
    }
}

const mouseMoveHandler = (event: MouseEvent) => {
    updatePositionFromEvent(event)
}

const cursorUpdateHandler = (event: CustomEvent<{ x: number, y: number }>) => {
    // Обновляем координаты из кастомного события
    lastMouseX.value = event.detail.x
    lastMouseY.value = event.detail.y

    if (!needsUpdate.value) {
        needsUpdate.value = true
        requestAnimationFrameUpdate()
    }
}

onMounted(() => {
    if (window.matchMedia('(any-pointer:fine)').matches) {
        // Определяем начальное положение курсора при монтировании
        // Пытаемся получить текущие координаты из последнего события мыши
        // Если курсор уже на странице, они будут обновлены при первом движении
        // Иначе устанавливаем в центр экрана
        if (lastMouseX.value === 0 && lastMouseY.value === 0) {
            lastMouseX.value = window.innerWidth / 2
            lastMouseY.value = window.innerHeight / 2
            needsUpdate.value = true
            requestAnimationFrameUpdate()
        }

        // Отслеживаем изменения cursorPositionMode для обновления позиции
        watchEffect(() => {
            if (cursorPositionMode.localElement) {
                // При переключении в локальный режим обновляем позицию
                needsUpdate.value = true
                requestAnimationFrameUpdate()
            }
        })

        document.addEventListener('mousemove', mouseMoveHandler)
        document.addEventListener('cursor:update', cursorUpdateHandler as EventListener)
    }
})

onUnmounted(() => {
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('cursor:update', cursorUpdateHandler as EventListener)
    if (rafId.value !== null) {
        cancelAnimationFrame(rafId.value)
    }
})
</script>

<style scoped lang="scss">
@media (any-pointer:fine) {
    .cursor {
        border-radius: 50%;
        position: absolute;
        height: 20px;
        width: 20px;
        z-index: 10;
        pointer-events: none;
        transform: translate(-50%, -50%);
        background: $accent;
        top: v-bind(yCoord);
        left: v-bind(xCoord);
        transition: all 0.3s ease-in-out, top 0s, left 0s;
        will-change: top, left;

        &:not(.cursor--local) {
            position: fixed;
        }
    }
}

@media (any-pointer:coarse) {
    .cursor {
        display: none;
    }
}
</style>