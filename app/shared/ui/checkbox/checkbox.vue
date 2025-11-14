<template>
  <label class="custom-checkbox">
    <input
        type="checkbox"
        class="native-checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
    />

    <span class="checkbox-box">
      <PromtechIcon v-if="modelValue" name="check" />
    </span>

    <span class="label-slot">
      <slot>
      </slot>
    </span>
  </label>
</template>

<script setup>
import {PromtechIcon, Link} from '@/shared'

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
.custom-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: 20px;

  .checkbox-box {
    width: 25px;
    height: 25px;
    border: 1px solid $text-main;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    .checkbox-icon {
      width: 14px;
      height: 14px;
      color: $text-main;
    }
  }

  .label-slot {
    @include link;
    color: $text-main;

    :deep(a) {
      color: $text-link-1;
    }
  }

  .native-checkbox {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }
}
</style>