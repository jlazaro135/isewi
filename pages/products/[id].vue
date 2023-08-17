<template>
    <div>
        <h3>{{ id }}</h3>
    </div>
</template>

<script setup>
const { id } = useRoute().params
</script>

<style scoped>

</style>