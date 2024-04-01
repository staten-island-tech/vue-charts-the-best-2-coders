<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="title">
    <nav>
      <RouterLink id = "go" to="/pie">Pie Chart</RouterLink>
    </nav>
  </header>

  <RouterView/>
</template>
<style scoped>

.title{
text-align:center;
font-size: 4rem;
}

</style>