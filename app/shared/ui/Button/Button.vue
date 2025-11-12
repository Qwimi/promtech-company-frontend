<template>
    <component 
        :is="componentType" 
        :to="to"
        :type="type"
        :disabled="disabled"
        :class="buttonClasses"
        :style="{ '--icon-gap': iconGap, width: width }"
        @click="handleClick"
    >
        <slot name="leading">
            <PromtechIcon 
                v-if="leadingIcon" 
                :name="leadingIcon" 
                :iconSize="iconSize"
            />
        </slot>
        <span v-if="label || $slots.default" class="button__label">
            <slot>{{ label }}</slot>
        </span>
        <slot name="trailing">
            <PromtechIcon 
                v-if="trailingIcon" 
                :name="trailingIcon" 
                :iconSize="iconSize"
            />
        </slot>
    </component>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { PromtechIcon, type PromtechIconName } from '../PromtechIcon'

export type ButtonVariant = 'primary'
export type ButtonSize = 'sm' | 'md'

export interface ButtonProps {
    /**
     * Путь для навигации (если указан, кнопка работает как router-link)
     */
    to?: string
    /**
     * Текст кнопки
     */
    label?: string
    /**
     * Вариант стиля кнопки
     */
    variant?: ButtonVariant
    /**
     * Размер кнопки
     */
    size?: ButtonSize
    /**
     * Тип кнопки (для HTML button)
     */
    type?: 'button' | 'submit' | 'reset'
    /**
     * Иконка слева
     */
    leadingIcon?: PromtechIconName
    /**
     * Иконка справа
     */
    trailingIcon?: PromtechIconName
    /**
     * Размер иконок
     */
    iconSize?: string
    /**
     * Gap между текстом и иконкой
     */
    iconGap?: string
    /**
     * Ширина кнопки (любое валидное CSS значение: '100%', '300px', 'auto' и т.д.)
     */
    width?: string
    /**
     * Отключенное состояние
     */
    disabled?: boolean
    /**
     * Дополнительные CSS классы
     */
    className?: string
}

const props = withDefaults(defineProps<ButtonProps>(), {
    variant: 'primary',
    size: 'md',
    type: 'button',
    disabled: false,
    iconSize: '7px',
    iconGap: '2px',
})

const emit = defineEmits<{
    click: [event: MouseEvent]
}>()

const componentType = computed(() => props.to ? 'router-link' : 'button')

const buttonClasses = computed(() => [
    'button',
    `button--${props.variant}`,
    `button--${props.size}`,
    {
        'button--disabled': props.disabled,
        'button--icon-only': !props.label && !useSlots().default && (props.leadingIcon || props.trailingIcon),
    },
    props.className,
])

const handleClick = (event: MouseEvent) => {
    if (!props.disabled) {
        emit('click', event)
    }
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/variables';
@import '~/assets/scss/typography';

.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--icon-gap, 2px);
    border: none;
    border-radius: 0;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease;
    white-space: nowrap;
    box-sizing: border-box;
    user-select: none;
    
    &:focus-visible {
        outline: 2px solid rgba($accent, 0.5);
        outline-offset: 2px;
    }

    // Variants
    &--primary {
        background-color: $accent;
        color: $text-main;
        @include link;
        padding: 14px 22px;

        &:hover:not(.button--disabled) {
            background-color: $accent-hover;
        }

        &:active:not(.button--disabled) {
            background-color: $accent-hover;
        }
    }

    // Sizes
    // Размер шрифта всегда 14px (из миксина @include link), меняется только padding
    &--sm {
        padding: 8px 16px;
    }


    // States
    &--disabled {
        background-color: $background-4;
        color: $text-main;
        cursor: not-allowed;
        pointer-events: none;
        
        &:hover,
        &:active {
            background-color: $background-4;
            box-shadow: none;
        }
    }

    // Icon only
    &--icon-only {
        padding: 14px;
        aspect-ratio: 1;

        &.button--sm {
            padding: 8px;
        }
    }

    &__label {
        display: inline-flex;
        align-items: center;
    }
}
</style>

