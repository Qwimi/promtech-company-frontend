<script setup lang="ts">
import {TechniqueTable} from '~/widgets/technique-page';

/// данные для примера
const table =  {
    RX200: {
        'Эксплуатационная масса': '21 600 кг',
        'Мощность двигателя': '186 кВт',
        'Объём ковша': '1.25 м³',
    },
    RX200E: {
        'Эксплуатационная масса': '22 100 кг',
        'Мощность двигателя': '195 кВт',
        'Объём ковша': '1.35 м³',
    },
    RX200R: {
        'Эксплуатационная масса': '22 100 кг',
        'Мощность двигателя': '195 кВт',
        'Объём ковша': '1.35 м³',
    },
};
</script>

<template>
  <section class="component-section">
    <h2 class="component-section__title">
      Technique Table Component
    </h2>
    <div class="demo-grid">
      <div
        class="demo-item technique-table-item"
      >
        <TechniqueTable :items="table" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.technique-table-item {
  background-color: $background-1;
}
</style>