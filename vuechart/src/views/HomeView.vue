<template>
  <div class="container">
    <ChartGraphCard v-for="(tree, index + 1) in tree"
    :key="pee.name"
    :id="index + 1" 
    :tree="pee"/>  
    </div>
  <div>

  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import ChartGraphCards from './ChartGraphCards.vue';
const tree = ref('')
async function getTree() {
  let res = await fetch('https://data.cityofnewyork.us/resource/ju3b-rwpy.json')
  let data = await res.json()
  tree.value = data.results
}
onMounted(() => {
  getTree( )
})
</script>

<style scoped>

</style>