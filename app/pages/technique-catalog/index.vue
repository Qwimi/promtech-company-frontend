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
import type {Category} from '~/shared/types';

const route = useRoute();
const router = useRouter();

const catalogStore = useCatalogStore();
const { categories, machinesInCurrentCategory } = storeToRefs(catalogStore);

await useAsyncData('categories', async () => {
    if (!categories.value?.length) {
        await catalogStore.getCategories();
    }
    return true;
});

const getInitialId = () => {
    const queryId = route.query.category as Category['id'];
    if (queryId && categories.value?.some(c => c.id.toString() == queryId)) {
        return queryId;
    }
    return categories.value?.[0]?.id ?? null;
};

const selectedCategoryId = ref<Category['id'] | null>(getInitialId());

if (selectedCategoryId.value) {
    if (route.query.category != selectedCategoryId.value.toString()) {
        router.replace({
            query: { category: selectedCategoryId.value }
        });
    }
    await catalogStore.fetchCategoryMachines(selectedCategoryId.value.toString());
}

watch(selectedCategoryId, async (newId, oldId) => {
    if (newId && newId !== oldId) {
        await router.replace({
            query: { category: newId }
        });
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