<template>
  <div>
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(Tooltip, Legend, ArcElement)

export default {
  name: 'PieChart',
  components: { Pie },
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      retrievedData: false
    }
  }
}
</script>

<style lang="scss" scoped></style>


