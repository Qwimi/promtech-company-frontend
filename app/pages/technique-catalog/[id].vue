<template>
    <h2>Техника с id: {{ id }}</h2>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
</script>