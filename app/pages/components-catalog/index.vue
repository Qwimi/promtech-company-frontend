<template>
  <div class="container">
    <h1
      class="page-info__title"
      :style="{ 'margin-bottom': '20px' }"
    >
      Комплектующие
    </h1>
    <ul>
      <li
        v-for="n in 10"
        :key="n"
        :style="{ 'margin-bottom': '20px' }"
      >
        <NuxtLink
          :to="`/components-catalog/${n}`"
          class="section-label"
        >
          Комплектующий {{ n }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>