<script setup lang="ts">
import { Cursor } from '~/shared';

</script>

<template>
  <NuxtLayout>
    <div>
      <NuxtRouteAnnouncer />
      <NuxtPage />
      <Cursor />
    </div>
  </NuxtLayout>
</template>


<style lang="scss">
#__nuxt {
  width: 100%;
  min-height: 100vh;
}
</style>
