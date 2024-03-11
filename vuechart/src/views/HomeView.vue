<template>
  <div>

  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
const tree = ref('')
async function getTree() {
  let res = await fetch('https://data.cityofnewyork.us/resource/ju3b-rwpy.json')
  let data = await res.json()
  tree.value = data.results
}
onMounted(() => {
  getTree()
})
</script>

<style scoped>

</style>