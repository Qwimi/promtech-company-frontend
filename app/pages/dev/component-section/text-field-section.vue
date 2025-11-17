<template>
  <section class="component-section">
    <h2 class="component-section__title">TextField Component</h2>
    <div class="demo-grid">
      <div class="demo-item">
        <TextField placeholder="Фамилия и имя" v-model="value"/>

        <p style="color: white; margin-top: 20px;">
          Текущее значение в поле: {{ value }}
        </p>
      </div>

      <div class="demo-item">
        <TextField placeholder="Телефон" v-model="value1" :mask="'+7 (###) ### ## ##'"/>

        <p style="color: white; margin-top: 20px;">
          Текущее значение в поле: {{ value1 }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {TextField} from '@/shared'

let value = ref('');
let value1 = ref('');
</script>

<style scoped lang="scss">

</style>