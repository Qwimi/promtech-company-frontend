<template>
  <teleport :to="cursorPositionMode.localElement || 'body'">
    <div
      class="cursor"
      :style="cursorStyle"
    />
  </teleport>
</template>

<script setup lang="ts">
import { cursorPositionMode, cursorStyle } from './model/cursor-style'

const xCoord = ref('0px')
const yCoord = ref('0px')


const mouseMoveHandler = (event: MouseEvent) => {
    if (cursorPositionMode.localElement) {
        const rect = cursorPositionMode.localElement.getBoundingClientRect()
        const localX = event.clientX - rect.left
        const localY = event.clientY - rect.top

        // ограничиваем движение внутри элемента
        if (localX >= 0 && localX <= rect.width && localY >= 0 && localY <= rect.height) {
            xCoord.value = localX + 'px'
            yCoord.value = localY + 'px'
        }
    } else {
    // обычное глобальное позиционирование
        xCoord.value = event.pageX + 'px'
        yCoord.value = event.pageY + 'px'
    }
}


onMounted(() =>
    document.addEventListener('mousemove', mouseMoveHandler))

onUnmounted(() => document.removeEventListener('mousemove', mouseMoveHandler))
</script>

<style scoped lang="scss">
.cursor {
  border-radius: 50%;
  position: absolute;
  height: 20px;
  width: 20px;
  z-index: 100;
  pointer-events: none;
  transform: translate(-50%, -50%);
  background: $accent;
  top: v-bind(yCoord);
  left: v-bind(xCoord);
  transition: all 0.3s ease-in-out, top 0s, left 0s;
}
</style>