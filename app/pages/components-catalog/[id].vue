<template>
  <h2>Комплектующий с id: {{ id }}</h2>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
</script>