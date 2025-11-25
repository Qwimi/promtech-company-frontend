<template>
  <section class="component-section">
    <h2 class="component-section__title">
      Main Page Hero
    </h2>
    <p class="component-section__description">
      Компонент для отображения hero-секции главной страницы cо старым видео
      <Button
        label="Перезапустить видео"
        @click="refreshComponent"
      />
    </p>
    <HeroSection v-if="showHeroSection" />
  </section>
</template>

<script setup lang="ts">
import { HeroSection } from '@/widgets/main-page'
import { Button } from '@/shared'

const showHeroSection = ref(true)

const refreshComponent = () => {
    showHeroSection.value = false
    nextTick(() => {
        showHeroSection.value = true
    })
}
</script>
