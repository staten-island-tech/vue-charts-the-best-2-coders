<template>
    <div id="card">
    </div>

    <div class="card">
    <TreeCard v-for="tree in data" :Tree = tree></TreeCard>
  </div>
</template>

<script setup>
import nycchartt from '@/components/nycchart.vue';
const URL = 'https://data.cityofnewyork.us/resource/ju3b-rwpy.json'
let data = ''
import { createApp } from 'vue'
import App from './HomeView.vue';

// function onBeforeMount(callback: () => void): void

async function mounted() { 
  try {
    let response = await fetch(URL)
    data = await response.json()
    console.log(data)
  } catch (e) {
    console.error(e)
  }
}
mounted()

createApp(App).mount('#chart')

</script>

<style scoped>

</style>