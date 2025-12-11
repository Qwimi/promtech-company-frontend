<script setup lang="ts">
import {
    HouseCogLogo,
    AmkodorInvar,
    FidGroupLogo
} from '~/shared/ui'

const baseLogos = [
    HouseCogLogo,
    AmkodorInvar,
    FidGroupLogo
]

const carouselItems = Array(4).fill(baseLogos).flat()
</script>

<template>
  <div class="partners-carousel">
    <div class="partners-carousel__label container section-label">
      Наши партнеры:
    </div>

    <div class="partners-carousel__carousel">
      <div class="partners-carousel__group">
        <component
          :is="logo"
          v-for="(logo, index) in carouselItems"
          :key="`group1-${index}`"
          class="partners-carousel__item"
        />
      </div>

      <div
        class="partners-carousel__group"
        aria-hidden="true"
      >
        <component
          :is="logo"
          v-for="(logo, index) in carouselItems"
          :key="`group2-${index}`"
          class="partners-carousel__item"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.partners-carousel {
  --gap: 20px;

  @media (min-width: $breakpoint-tablet) {
    --gap: 19px;
  }

  @media (min-width: $breakpoint-desktop) {
    --gap: 95px;
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
  }

  &__group {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    min-width: 100%;
    gap: var(--gap);
    padding-right: var(--gap);
    animation: scroll-left 40s linear infinite;
  }

  &__item {
    max-height: 36px;

    @media (min-width: $breakpoint-tablet) {
      max-height: 47px;
    }

    @media (min-width: $breakpoint-desktop) {
      max-height: 76px;
    }
  }
}

@keyframes scroll-left {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}
</style>