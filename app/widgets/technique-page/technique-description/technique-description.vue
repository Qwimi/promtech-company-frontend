<script setup lang="ts">
import type { MachineFullCard } from '~/shared/types';
export type TechniqueDescriptionProps = Pick<MachineFullCard, 'applying' | 'description'>

const props = defineProps<TechniqueDescriptionProps>();

const LIMIT = 4;
const hasHiddenItems = computed(() => props.description && props.description.length > LIMIT);

const isExpanded = ref(false);
const handleExpand = () => {
    isExpanded.value = true;
};
</script>

<template>
  <div class="technique-description">
    <div class="technique-description__block">
      <div class="technique-description__title">
        Применение:
      </div>
      <div class="technique-description__description">
        {{ props.applying }}
      </div>
    </div>
    <div class="technique-description__block">
      <div class="technique-description__title">
        Описание:
      </div>
      <ul class="technique-description__list-wrapper">
        <li
          v-for="(item, index) in props.description"
          v-show="isExpanded || index < LIMIT"
          :key="index"
          class="technique-description__list-item"
        >
          {{ item }}
          <span
            v-show="!isExpanded && index === LIMIT - 1 && hasHiddenItems"
            class="technique-description__read-more"
            @click="handleExpand"
          >
            ...читать далее
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.technique-description {
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @include text3;

  &__block {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__title {
    @include headline4;

    color: $accent;
  }

  &__list-wrapper {
    list-style: disc;
    padding-left: 1.5rem;
  }

  &__list-item {
    list-style: disc;
  }

  &__read-more {
    color: $accent;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>