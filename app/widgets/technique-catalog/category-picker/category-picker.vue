<script setup lang="ts">
import type {Category} from '~/shared/types';

export type CategoryPickerProps = {
  categories: Category[]
}

defineProps<CategoryPickerProps>();

const activeId = defineModel<Category['id'] | null>({ required: true });

const selectCategory = (id: Category['id']) => {
    activeId.value = id;
};

/**
 * Исправляет «висячие» предлоги и союзы, заменяя пробел после них на неразрывный.
 *
 * @param text - Исходная строка текста.
 * @returns Строка с неразрывными пробелами (`\u00A0`) после коротких слов.
 */
const typo = (text: string) => {
    if (!text) return '';
    return text.replace(/(\s|^)(и|в|на|с|по|о|от|к|из|у|об|для|или)(\s)/gi, '$1$2\u00A0');
};

</script>

<template>
  <div class="category-list">
    <div
      v-for="category in categories"
      :key="category.id"
      class="category-list__item"
      :class="{ 'category-list__item--active': activeId?.toString() === category.id.toString() }"
      @click="selectCategory(category.id)"
    >
      <span class="category-list__text">
        {{ typo(category.name) }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "sass:color";

.category-list {
  display: flex;
  flex-direction: column;

  @media (min-width: $breakpoint-desktop) {
    flex-direction: row;

  }

  &__text {
    @include headline5;
  }

  &__item {
    border-top: $divider 1px solid;
    padding: 15px 20px;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    @media (min-width: $breakpoint-tablet) {
      padding: 20px;
    }

    @media (min-width: $breakpoint-desktop) {
      border-right: $divider 1px solid;
      flex: 1;
    }

    &:hover {
      background-color: rgb(255 255 255 / 5%);
    }

    &--active {
      background-color: $accent;

      &:hover {
        background-color: color.adjust($accent, $lightness: 5%);
      }
    }
  }
}
</style>