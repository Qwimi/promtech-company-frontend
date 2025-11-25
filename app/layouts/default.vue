<template>
  <div class="default-layout">
    <Header />
    <main class="main-content">
      <slot />
    </main>
    <Feedback />
    <Footer />
  </div>
</template>

<script setup>
import {Header, Footer, Feedback} from '~/widgets'
</script>

<style scoped lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: $background-1;
  color: white;
}

.main-content {
  flex: 1;
}
</style>