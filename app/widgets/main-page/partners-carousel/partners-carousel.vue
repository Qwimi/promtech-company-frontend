<script setup lang="ts">
import {
    HouseCogLogo,
    AmkodorInvar,
    FidGroupLogo
} from '~/shared/ui'
</script>

<template>
  <div class="partners-carousel">
    <div class="partners-carousel__label container section-label">
      Наши партнеры:
    </div>
    <div class="partners-carousel__carousel">
      <div class="partners-carousel__group">
        <HouseCogLogo class="partners-carousel__item" />
        <AmkodorInvar class="partners-carousel__item" />
        <FidGroupLogo class="partners-carousel__item" />
        <HouseCogLogo class="partners-carousel__item" />
        <AmkodorInvar class="partners-carousel__item" />
        <FidGroupLogo class="partners-carousel__item" />
        <HouseCogLogo class="partners-carousel__item" />
        <AmkodorInvar class="partners-carousel__item" />
        <FidGroupLogo class="partners-carousel__item" />
      </div>

      <div
        class="partners-carousel__group"
        aria-hidden="true"
      >
        <HouseCogLogo class="partners-carousel__item" />
        <AmkodorInvar class="partners-carousel__item" />
        <FidGroupLogo class="partners-carousel__item" />
        <HouseCogLogo class="partners-carousel__item" />
        <AmkodorInvar class="partners-carousel__item" />
        <FidGroupLogo class="partners-carousel__item" />
        <HouseCogLogo class="partners-carousel__item" />
        <AmkodorInvar class="partners-carousel__item" />
        <FidGroupLogo class="partners-carousel__item" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .partners-carousel {
    --speed: 20s;
    --gap: 20px;
    --max-height: 36px;

    @media (min-width: $breakpoint-tablet) {
      --gap: 19px;
      --max-height: 47px;
    }

    @media (min-width: $breakpoint-desktop) {
      --gap: 95px;
      --max-height: 76px;
    }

    display: flex;
    flex-direction: column;
    gap: 44px;
    padding-bottom: 30px;
    padding-top: 30px;

    @media (min-width: $breakpoint-desktop) {
      gap: 32px;
      padding-bottom: 60px;
      padding-top: 60px;
    }

    &__carousel {
      display: flex;
      overflow: hidden;
      user-select: none;
      gap: var(--gap);
    }

    &__group {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      min-width: 100%;
      gap: var(--gap);
      animation: scroll-left var(--speed) linear infinite;
    }

    &__item {
      max-height: var(--max-height);
    }
  }

  @keyframes scroll-left {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(calc(-100% - (var(--gap) * 1)));
    }
  }
</style>