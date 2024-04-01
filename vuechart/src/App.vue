<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="title">
    <nav>
      <h4 class="stuff">Click to see more information on NYPD Complaint History in Different Boroughs!</h4>
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
width: 80%rem;
}
.link {
  font-size: 2.5rem;
  margin: auto;
  margin-left: 2rem;
  color: black;
  font-weight: bold;
}
h4 {
  font-size: 2rem;
  color: black;
}

</style>