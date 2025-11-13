<script setup lang="ts">
import { Cursor } from '~/shared';

</script>

<template>
  <div>
    <nav>
      <NuxtLink to="/dev">
        Сторибук
      </NuxtLink>
      <NuxtLink to="/about-us">
        О компании
      </NuxtLink>
      <NuxtLink to="/technique-catalog">
        Техника
      </NuxtLink>
      <NuxtLink to="/components-catalog">
        Комплектующие
      </NuxtLink>
      <NuxtLink to="/contacts">
        Контакты
      </NuxtLink>
      <NuxtLink to="/basket">
        Корзина
      </NuxtLink>
    </nav>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <Cursor />
  </div>
</template>


<style lang="scss">
nav {
  display: flex;
  gap: .5rem;
}

#__nuxt {
  width: 100%;
  min-height: 100vh;
}
</style>
