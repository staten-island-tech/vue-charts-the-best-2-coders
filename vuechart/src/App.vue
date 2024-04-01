<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="title">
    <nav>
      <RouterLink class = "link" to="/pie">Pie Chart</RouterLink>
      <RouterLink class = "link" to="/bar">Bar Graph</RouterLink>
      <RouterLink class = "link" to="/home">Home</RouterLink>
    </nav>
  </header>

  <RouterView/>
</template>
<style scoped>

.title{
text-align:center;
font-size: 4rem;
}
.link {
  font-size: 2.5rem;
  margin: auto;
  margin-left: 2rem;
  color: black;
}

</style>