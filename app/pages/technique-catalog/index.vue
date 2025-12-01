<template>
  <div class="container technique-catalog">
    <div class="page-info">
      <span class="technique-catalog__title page-info__title">
        Каталог техники
      </span>
      <span class="technique-catalog__subtitle page-info__subtitle">
        Техника, которая работает под землёй и не подводит
      </span>
    </div>

    <div class="technique-catalog__content">
      <CategoryPicker
        v-model="selectedCategoryId"
        :categories="categories"
      />

      <div
        v-if="machinesInCurrentCategory?.length"
        class="technique-catalog__machines"
      >
        <div
          v-for="machine in machinesInCurrentCategory"
          :key="machine.id"
        >
          <TechniqueCard :card="machine" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {CategoryPicker} from '~/widgets/technique-catalog';
import {useCatalogStore} from '~/entities';
import {TechniqueCard} from '~/shared';

const catalogStore = useCatalogStore();

const { categories, machinesInCurrentCategory } = storeToRefs(catalogStore);
const selectedCategoryId = ref<number | string | null>(categories.value?.[0]?.id ?? null);

await useAsyncData('categories', async () => {
    if (!categories.value?.length) {
        await catalogStore.getCategories();
        if (!selectedCategoryId.value && categories.value?.length) {
            selectedCategoryId.value = categories.value[0]?.id ?? null;
        }
    }
    return true;
});

watch(selectedCategoryId, async (newId) => {
    if (newId) {
        await catalogStore.fetchCategoryMachines(newId.toString());
    }
});

</script>

<style lang="scss">
  .technique-catalog {
    padding-top: 60px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    gap: 60px;

    @media (min-width: $breakpoint-tablet) {
      gap: 100px;
    }

    @media (min-width: $breakpoint-desktop) {
      gap: 128px;
      padding-top: 128px;
      padding-bottom: 128px;
    }
    
    &__subtitle {
      width: 55%;

      @media (min-width: $breakpoint-tablet) {
        width: 100%;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 20px;

      @media (min-width: $breakpoint-tablet) {
        gap: 40px;
      }

      @media (min-width: $breakpoint-desktop) {
        gap: 80px;
      }
    }

    &__machines {
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
  }
</style>