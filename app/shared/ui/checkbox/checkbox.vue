<template>
  <label
    v-cursor="{ stylePreset: 'colorBurn' }"
    class="custom-checkbox"
  >
    <input
      v-model="modelValue"
      type="checkbox"
      class="custom-checkbox__native"
    />

    <span class="custom-checkbox__box">
      <PromtechIcon
        v-show="modelValue"
        name="check"
      />
    </span>

    <span class="custom-checkbox__label">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
import { PromtechIcon } from '@/shared'

const modelValue = defineModel({
    type: Boolean,
    default: false,
})
</script>

<style lang="scss" scoped>
.custom-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: 20px;

  &__box {
    width: 25px;
    height: 25px;
    border: 1px solid $text-main;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  &__label {
    @include link;

    color: $text-main;

    :deep(a) {
      color: $text-link-1;
    }
  }

  &__native {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }
}
</style>