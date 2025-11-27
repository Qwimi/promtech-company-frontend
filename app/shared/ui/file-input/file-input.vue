<template>
  <label
    v-cursor="{stylePreset: 'colorBurn'}"
    class="file-input"
    :class="{ 'file-input--error': error }"
  >
    <PromtechIcon
      name="paperclip"
      :icon-size="25"
    />
    <span class="file-input__text">{{ displayText }}</span>
    <input
      type="file"
      class="file-input__native"
      @change="handleFileChange"
      @blur="emit('blur')"
    />
  </label>
</template>

<script setup lang="ts">
import { PromtechIcon } from '@/shared/ui';

const modelValue = defineModel<File | undefined>();
const emit = defineEmits(['blur'])

const props = withDefaults(defineProps<{
  placeholder?: string;
  error?: string;
}>(), {
    placeholder: 'Прикрепить файл',
    error: undefined,
});

const displayText = computed(() => {
    return modelValue.value?.name || props.error || props.placeholder;
});

const handleFileChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const files = input.files;

    if (files && files.length > 0) {
        modelValue.value = files[0];
    } else {
        modelValue.value = undefined;
    }
};

</script>

<style scoped lang="scss">
.file-input {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  width: 100%;
  color: $text-additional;

  @include link2;

  &__native {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }

  &--error {
    color: $error;
  }
}
</style>