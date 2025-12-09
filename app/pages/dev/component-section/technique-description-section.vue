<script setup lang="ts">
import {useCatalogStore} from '~/entities';
import {TechniqueDescription} from '~/widgets/technique-page';

const catalogStore = useCatalogStore();
const { currentMachine } = storeToRefs(catalogStore);

await useAsyncData('currentMachine', async () => {
    await catalogStore.fetchMachineById(0);
});
</script>

<template>
  <section class="component-section">
    <h2 class="component-section__title">
      Technique Description Component
    </h2>
    <div class="demo-grid">
      <div
        v-if="currentMachine"
        class="demo-item technique-description-item"
      >
        <TechniqueDescription
          :applying="currentMachine.applying"
          :description="currentMachine.description"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.technique-description-item {
  background-color: $background-1;
}
</style>
