<template>
  <section class="about-hero">
    <div class="about-hero__bg">
      <div class="container about-hero__content">
        <h1 class="about-hero__title">
          О компании
        </h1>
        <p class="about-hero__subtitle">
          Ваш надёжный партнёр в техническом<br />обслуживании и поставке горной техники
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.about-hero {
  &__bg {
    position: relative;
    background-image: url('/images/aboutUs-hero.png');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    justify-content: flex-start;

    @media (min-width: $breakpoint-tablet) {
      flex-direction: row; 
      align-items: center;
      justify-content: center;
    }
  }

  &__content {
    margin-top: 84px; 
    padding-bottom: 32px;

    @media (min-width: $breakpoint-tablet) {
      margin-top: 360px; 
    }
  }

  &__title {
    @include headline1;
  }

  &__subtitle {
    @include text3;

    padding-top: 32px;
  }
}
</style>
