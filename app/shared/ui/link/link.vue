<template>
    <router-link :to="to" :class="['link', `link--${variant}`]">
        <slot>{{ label }}</slot>
        <slot name="icon">
            <PromtechIcon 
                v-if="icon" 
                :name="icon" 
                :iconSize="iconSize"
            />
        </slot>
    </router-link>
</template>

<script setup lang="ts">
import { PromtechIcon, type PromtechIconName } from '../promtech-icon'

export interface LinkProps { 
    to: string
    variant?: 'bold' | 'regular'
    label?: string
    icon?: PromtechIconName
    iconSize?: number
}

withDefaults(defineProps<LinkProps>(), {
    variant: 'regular',
})
</script>

<style scoped lang="scss">
.link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    opacity: 0.9;
    color: inherit;

    &:visited {
        color: inherit;
    }

    &:hover {
        cursor: pointer;
        opacity: 1;
    }

    &--bold {
        @include link;
    }

    &--regular {
        @include link2;
    }
}
</style>