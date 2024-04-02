<template>
  <div>
    <canvas ref="barChart"></canvas>
  </div>
</template>

<script>
import axios from 'axios';
import Chart from 'chart.js';

export default {
  data() {
    return {
      apiData: [],
      labels: [],
      counts: [],
      chart: null
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://data.cityofnewyork.us/resource/qgea-i56i.json?$limit=10');
        this.apiData = response.data;

        // Process data to extract necessary information
        this.labels = this.apiData.map(item => item.boro_nm);
        const countsObj = this.apiData.reduce((acc, curr) => {
          acc[curr.boro_nm] = (acc[curr.boro_nm] || 0) + 1;
          return acc;
        }, {});
        this.counts = this.labels.map(label => countsObj[label]);

        this.renderChart();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    renderChart() {
      const ctx = this.$refs.barChart.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: [{
            label: 'Crime Counts',
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: this.counts,
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
  },
  watch: {
    apiData() {
      this.renderChart();
    }
  }
};
</script>

</script>

<style lang="scss" scoped></style>
