<template>
  <section class="component-section">
    <h2 class="component-section__title">
      FileInput Component
    </h2>
    <div class="demo-grid">
      <div class="demo-item">
        <h3>Пример FileInput</h3>
        <FileInput
          v-model="file"
          placeholder="Прикрепить карточку организации"
          :error="hasError"
        />

        <p style="color: white; margin-top: 20px;">
          Текущее значение в поле: {{ file }}
        </p>

        <button @click="submit">
          Отправить
        </button>
      </div>
      <div class="demo-item demo-item--narrow">
        <h3>Пример с переносом текста</h3>
        <FileInput
          v-model="file2"
          placeholder="Прикрепить карточку организации"
        />
        <p style="color: white; margin-top: 20px;">
          Текущее значение: {{ file2?.name || 'не выбран' }}
        </p>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import {FileInput} from '@/shared'

const file = ref<File | undefined>(undefined);
const hasError = ref(false);

const submit = () => {
    if (!file.value) {
        hasError.value = true;
        console.error('Файл не прикреплен!');
    } else {
        hasError.value = false;
        console.log('Отправка файла:', file.value);
    }
};

const file2 = ref<File | undefined>(undefined);

</script>

<style>
.demo-item--narrow {
  width: 180px;
}
</style>