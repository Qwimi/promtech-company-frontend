<template>
    <h2>Техника</h2>
    <ul>
        <li v-for="n in 10">
            <NuxtLink :to="`/technique-catalog/${n}`">
                Техника {{ n }}
            </NuxtLink>
        </li>
    </ul>
</template>