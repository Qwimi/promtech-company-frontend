<template>
  <div
    v-cursor="{ stylePreset: 'colorBurn' }"
    class="text-input"
    :class="{ 'text-input--error': error }"
  >
    <input
      v-model="modelValue"
      v-maska
      type="text"
      class="text-input__field"
      :placeholder="placeholder"
      :data-maska="mask"
      @blur="emit('blur')"
    />
    <transition name="fade">
      <p
        v-show="error"
        class="text-input__error"
      >
        {{ error }}
      </p>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { vMaska } from 'maska/vue'

const modelValue = defineModel<string>({ default: '' })
const emit = defineEmits(['blur'])

withDefaults(defineProps<{
  placeholder?: string;
  mask?: string;
  error?: string;
}>(), {
    placeholder: '',
    mask: '',
    error: undefined
});

</script>

<style scoped lang="scss">
.text-input {
  width: 100%;
  position: relative;

  &__field {
    width: 100%;
    display: block;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    padding: 8px 2px;

    @include link;

    color: $text-main;

    &:focus {
      outline: none;
    }

    &::placeholder {
      @include link;

      color: $text-additional;
    }
  }

  &--error {
    color: $error;

    .text-input__field {
      border-bottom-color: $error;
    }
  }

  &__error {
    @include link2;

    overflow: hidden;
    margin-top: 8px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: max-height 0.3s ease, margin-top 0.3s ease, opacity 0.3s ease;
}

.fade-enter-to,
.fade-leave-from {
  max-height: 100px;
}

.fade-leave-to,
.fade-enter-from {
  max-height: 0;
  margin-top: 0;
}
</style>