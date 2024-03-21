<template>
    <div>
        <h2>{{ Tree.tree }}</h2>
        <h3>{{ Tree.boroname }}</h3>
        <h3>{{ Tree.zipcode }}</h3>
    </div>
</template>

<script setup>
    const props = defineProps( {
        Tree: Object
    })
</script>

<style scoped>

</style>