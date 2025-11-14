<template>
  <h2 class="component-section__title">TextField Component</h2>
  <div class="demo-grid">
    <div class="demo-item">
      <TextField placeholder="Фамилия и имя" v-model="value"/>

      <p style="color: white; margin-top: 20px;">
        Текущее значение в поле: {{ value }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Link, TextField} from '@/shared'

let value = ref('');
</script>

<style scoped lang="scss">

</style>