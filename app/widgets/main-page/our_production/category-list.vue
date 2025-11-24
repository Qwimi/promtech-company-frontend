<script setup lang="ts">
import { PromtechIcon } from "~/shared";
import { ref } from 'vue';
import type {Category} from "~/shared/types";

const props = defineProps<{
  categories: Category[];
}>();

const activeCategoryId = ref<number | string | null>(props.categories[0]?.id || null);

const selectCategory = (id: number | string) => {
  activeCategoryId.value = id;
};
</script>

<template>
  <div class="category-list">
    <div
        v-for="category in categories"
        :key="category.id"
        class="category-list__item"
        :class="{ 'category-list__item--active': activeCategoryId === category.id }"
        @click="selectCategory(category.id)"
    >
      <div class="category-list__content">
        <span class="category-list__number"></span>
        <span class="category-list__title">{{ category.name }}</span>
      </div>

      <div class="category-list__actions">
        <transition name="fade">
          <button
              v-if="activeCategoryId === category.id"
              class="category-list__details-btn"
          >
            <span class="category-list__btn-text">подробнее</span>
            <PromtechIcon name="arrow-2" :iconSize="25" />
          </button>
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  counter-reset: cat-counter;

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

    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }

    &--active {
      background-color: $accent;

      &:hover {
        background-color: lighten($accent, 5%);
      }

      .category-list__number {
        color: $text-main;
      }
    }
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 1;
  }

  &__number {
    @include link;
    color: $background-4;
    transition: color 0.3s ease;
    min-width: 24px;

    &::before {
      content: counter(cat-counter, decimal-leading-zero);
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