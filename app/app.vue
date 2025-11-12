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
// Global reset
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#__nuxt {
  width: 100%;
  min-height: 100vh;
}
</style>