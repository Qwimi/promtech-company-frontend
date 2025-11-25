<template>
  <section class="component-section">
    <h2 class="component-section__title">
      Checkbox Component
    </h2>
    <div class="demo-grid">
      <div class="demo-item">
        <Checkbox v-model="value">
          <span>Согласен с <Link
            label="Правилами обработки персональных данных"
            to="#"
            variant="bold"
          /></span>
        </Checkbox>

        <p style="color: white; margin-top: 20px;">
          Текущее значение в поле: {{ value }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {Checkbox, Link} from '@/shared'

let value = ref(false);
</script>
