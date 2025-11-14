<script setup lang="ts">
import { Cursor } from '~/shared';

</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <Cursor />
  </div>
</template>


<style lang="scss">
#__nuxt {
  width: 100%;
  min-height: 100vh;
}
</style>
