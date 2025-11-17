<template>
  <div class="component-section">
    <h2 class="component-section__title">About Us Widget</h2>
    <p class="component-section__description">
      Виджет "О нас" с адаптивной версткой. На desktop отображается в 4 колонки, 
      на tablet — в 2 колонки, на mobile — в 1 колонку. 
      Измените ширину окна браузера, чтобы увидеть адаптивность.
    </p>
    
    <AboutUs />
  </div>
</template>

<script setup lang="ts">
import { AboutUs } from '@/widgets'
</script>

