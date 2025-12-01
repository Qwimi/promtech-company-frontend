<template>
  <section class="container ">
    <div class="map-section">
      <div class="page-info">
        <h1 class="page-info__title">
          Наши контакты
        </h1>
        <p class="page-info__subtitle">
          Всегда на связи для партнёров и клиентов
        </p>
      </div>
      <DottMap class="map-section__map" />
    </div>
  </section>
</template>

<script setup lang="ts">
import DottMap from './dott-map.vue';
</script>

<style lang="scss" scoped>
.map-section {
  display: grid;
  position: relative;
  margin-bottom: 40px;
  margin-top: 60px;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: 4fr 8fr;
    grid-area: none map;
  }

  @media (min-width: $breakpoint-desktop) {
    margin-top: 0;
    grid-template-columns: 5fr 7fr;
  }


  .page-info {
    @media (min-width: $breakpoint-tablet) {
      position: absolute;
      left: 0;
    }

    @media (min-width: $breakpoint-desktop) {
      top: 23%;
    }
  }

  &__map {
    width: 100%;
    grid-area: map;
  }
}
</style>
