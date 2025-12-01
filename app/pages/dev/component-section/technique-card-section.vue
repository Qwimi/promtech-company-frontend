<script setup lang="ts">
import {TechniqueCard} from '~/shared';
import type {MachineCard} from '~/shared/types';

const templateCardInfo: MachineCard = {
    id: '1',
    name: 'Одностреловые проходческие самоходные буровые установки РС3-05, РС3-01, РС3-10',
    photo: '/images/technique-card-image.png',
}

</script>

<template>
  <section class="component-section">
    <h2 class="component-section__title">
      TechniqueCard Component
    </h2>
    <div class="demo-grid">
      <div class="demo-item technique-grid-template">
        <TechniqueCard :card="templateCardInfo" />
        <TechniqueCard :card="templateCardInfo" />
        <TechniqueCard :card="templateCardInfo" />
        <TechniqueCard :card="templateCardInfo" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.technique-grid-template {
  display: grid;
  grid-template-columns:1fr;
  row-gap: 40px;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns:1fr 1fr;
    column-gap: 20px;
  }

  @media (min-width: $breakpoint-desktop) {
    grid-template-columns:1fr 1fr 1fr;
  }
}


</style>