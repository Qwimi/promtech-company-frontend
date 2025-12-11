<template>
  <div class="default-layout">
    <Header />
    <main class="main-content">
      <slot />
    </main>
    <Feedback v-show="!route.meta.hideFeedback" />
    <Footer />
  </div>
</template>

<script setup>
import {Header, Footer, Feedback} from '~/widgets'

const route = useRoute()
</script>

<style scoped lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: white;
}

.main-content {
  flex: 1;
}
</style>