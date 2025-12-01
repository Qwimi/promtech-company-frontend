<template>
  <HeroSection />
  <AboutUs />
  <OurPartners />
  <OurProduction :categories="categories" />
  <ExtraService />
  <OurAdvantages />
  <Faq />
  <PartnersCarousel />
</template>

<script setup lang="ts">
import { AboutUs, ExtraService, HeroSection,OurAdvantages, OurPartners, Faq, OurProduction, PartnersCarousel } from '~/widgets/main-page';
import {useCatalogStore} from '~/entities';
const catalogStore = useCatalogStore();

const { categories } = storeToRefs(catalogStore);

await useAsyncData('categories', async () => {
    if (!categories.value?.length) {
        await catalogStore.getCategories();
    }
    return true;
});
</script>
