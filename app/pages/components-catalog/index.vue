<template>
    <h2>Комплектующие</h2>
    <ul>
        <li v-for="n in 10">
            <NuxtLink :to="`/components-catalog/${n}`">
                Комплектующий {{ n }}
            </NuxtLink>
        </li>
    </ul>
</template>