<template>
    <div class="card">
        <h2>{{ tree.name }}</h2>
        <h3>{{ id }}</h3>
    </div>
</template>

<script setup>
const props = ({
    tree:Object,
    id: Number
})
</script>

<style scoped></style>