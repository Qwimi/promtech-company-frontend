<script setup lang="ts">
import { PromtechIcon } from '~/shared';
import type {Category} from '~/shared/types';

defineProps<{
  categories: Category[];
}>();

const activeId = defineModel<number | string | null>({ required: true });


</script>

<template>
  <div class="category-list">
    <div
      v-for="category in categories"
      :key="category.id"
      class="category-list__item"
      :class="{ 'category-list__item--active': activeId === category.id }"
      @click="activeId = category.id"
    >
      <div class="category-list__content">
        <span class="category-list__number" />
        <span class="category-list__title">{{ category.name }}</span>
      </div>

      <transition name="fade">
        <div
          v-show="activeId === category.id"
          class="category-list__actions"
        >
          <a

            class="category-list__details-btn"
            href="/technique-catalog"
          >
            <span class="category-list__btn-text">подробнее</span>
            <PromtechIcon
              name="arrow-2"
              :icon-size="25"
            />
          </a>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";

.category-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  counter-reset: cat-counter;

  &__number {
    @include link;

    color: $background-4;
    transition: color 0.3s ease;

    &::before {
      content: counter(cat-counter, decimal-leading-zero);
    }
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 60px;
    padding: 15px 20px;
    border-top: 1px solid $divider;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    color: $text-main;
    counter-increment: cat-counter;
    box-sizing: border-box;
    gap: 11px;

    @media (min-width: $breakpoint-tablet) {
      gap: 5px;
    }

    @media (min-width: $breakpoint-desktop) {
      gap: 76px;
    }

    &:hover {
      background-color: rgb(255 255 255 / 5%);
    }

    &--active {
      background-color: $accent;

      &:hover {
        background-color: color.adjust($accent, $lightness: 5%);
      }

      .category-list__number {
        color: $text-main;
      }
    }
  }

  &__content {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 10px;

    @media (min-width: $breakpoint-tablet) {
      gap: 20px;
    }

    @media (min-width: $breakpoint-desktop) {
      gap: 30px;
    }
  }

  &__title {
    @include text5;
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-width: auto;

    @media (min-width: $breakpoint-desktop) {
      min-width: 140px;
    }
  }

  &__details-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;

    @include text4;

    padding: 0;
    line-height: 1;
  }

  &__btn-text {
    display: none;

    @media (min-width: $breakpoint-desktop) {
      display: block;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-5px);
}
</style>