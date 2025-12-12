<script setup lang="ts">
import type {ParameterTable} from '~/shared/types';
import {PromtechIcon} from '~/shared';

interface TableProps {
  items: ParameterTable;
  header?: string;
}

const props = defineProps<TableProps>();

const itemList = computed(() => {
    return Object.entries(props.items).map(([name, specs]) => ({
        name,
        specs
    }));
});

const specKeys = computed(() => {
    const keys = new Set<string>();
    itemList.value.forEach(item => {
        Object.keys(item.specs).forEach(key => keys.add(key));
    });
    return Array.from(keys);
});

const currentIndex = ref(0);

const hasNext = computed(() => currentIndex.value < itemList.value.length - 1);
const hasPrev = computed(() => currentIndex.value > 0);

const next = () => {
    if (hasNext.value) currentIndex.value++;
};

const prev = () => {
    if (hasPrev.value) currentIndex.value--;
};
</script>

<template>
  <div class="table">
    <div class="table__controls">
      <button
        class="table__arrow"
        :class="{ 'table__arrow--active': hasPrev }"
        :disabled="!hasPrev"
        type="button"
        @click="prev"
      >
        <PromtechIcon
          name="arrow-2"
          :size="25"
          style="transform:rotate(-180deg);"
        />
      </button>

      <button
        class="table__arrow"
        :class="{ 'table__arrow--active': hasNext }"
        :disabled="!hasNext"
        type="button"
        @click="next"
      >
        <PromtechIcon
          name="arrow-2"
          :size="25"
        />
      </button>
    </div>

    <div class="table__row table__row--header">
      <div class="table__cell table__cell--fixed">
        {{ header ?? '' }}
      </div>

      <div
        v-for="(item, index) in itemList"
        v-show="index === currentIndex"
        :key="index"
        class="table__cell table__cell--dynamic"
      >
        <div class="table__nav">
          <span class="table__title">{{ item.name }}</span>
        </div>
      </div>
    </div>

    <div
      v-for="specName in specKeys"
      :key="specName"
      class="table__row"
    >
      <div class="table__cell table__cell--fixed">
        {{ specName }}
      </div>

      <div
        v-for="(item, index) in itemList"
        v-show="index === currentIndex"
        :key="index"
        class="table__cell table__cell--dynamic"
      >
        <span class="table__value">
          {{ item.specs[specName] ?? '-' }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  &__controls {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-bottom: 10px;
  }

  &__arrow {
    cursor: pointer;
    color: $text-additional;

    /// без этого не красится, или иконка битая или я идиот
    :deep(path) {
      fill: currentColor !important;
    }

    &--active {
      color: $accent;
    }
  }

  &__row {
    @include text4;

    padding: 15px 10px 5px;
    display: flex;
    gap: 20px;
    border-bottom: 1px solid $divider-2;

    &:first-child {
      border-bottom: none;
    }

    &--header {
      background-color: $accent;

      @include headline6;

      padding: 10px;
    }
  }

  &__cell {
    display: flex;
    align-items: start;

    &--fixed {
      flex: 0 0 50%;
      min-width: 0;
      overflow-wrap: anywhere;
      align-items: center;
    }

    &--dynamic {
      flex: 1;
      justify-content: start;
    }
  }

  &__nav {
    display: flex;
    width: 100%;
    align-items: center;
  }

  &__title {
    width: 100%;
  }

  @media (min-width: $breakpoint-tablet) {
    &__cell {
      &--fixed {
        flex: 0 0 30%;
      }

      &--dynamic {
        display: flex !important;
      }
    }

    &__controls {
      display: none;
    }

    &__nav {
      justify-content: center;
    }
  }
}
</style>