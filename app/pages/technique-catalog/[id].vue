<template>
  <div class="container">
    <h1
      class="page-info__title"
      :style="{ 'margin-bottom': '20px' }"
    >
      Техника с id: {{ id }}
    </h1>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
</script>