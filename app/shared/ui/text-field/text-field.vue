<template>
  <div class="text-input">
    <input
      v-model="modelValue"
      v-maska
      type="text"
      class="text-input__field"
      :placeholder="placeholder"
      :data-maska="mask"
    />
  </div>
</template>

<script setup lang="ts">
import { vMaska } from 'maska/vue'

const modelValue = defineModel<string>({ default: '' })

withDefaults(defineProps<{
  placeholder?: string;
  mask?: string;
}>(), {
    placeholder: '',
    mask: '',
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

    @include link2;

    color: $text-main;

    &:focus {
      outline: none;
    }

    &::placeholder {
      @include link2;

      color: $text-additional;
    }
  }
}


</style>