<template>
  <Icon 
    :name="`promtech-icons:${name}`" 
    :class="['promtech-icon', className]"
    :size="iconSize"
  />
</template>

<script setup lang="ts">
export type PromtechIconName = 'arrow' | 'burger-menu' | 'paperclip' | 'shopping-bag' | 'check'

export interface PromtechIconProps {
    name: PromtechIconName
    className?: string
    iconSize?: number
}

defineProps<PromtechIconProps>()
</script>

<style scoped lang="scss">
.promtech-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1em;
    height: 1em;
    font-size: inherit;

    :deep(svg) {
        width: 100%;
        height: 100%;
    }
}
</style>

