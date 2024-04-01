<template>
    <h1 class="crime">Crimes Reported in Different Boroughs</h1>
    <div class="piechart">
      <PieChart v-if="loaded" :chartOptions="chartOptions" :chartData="chartData" />
    </div>
  </template>
  
  <script>
  import PieChart from '../components/PieGraph.vue'
  
  export default {
    name: 'pie',
    components: { PieChart },
    data() {
    return {
      loaded: false,
      chartData: {
        labels: ['Manhattan', 'Staten Island', 'Brooklyn', 'Bronx', 'Queens'],
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true,
        backgroundColor: ['#57167E', '#F7B7A3', '#9B3192', '#EA5F89', '#2B0B3F']
      },
      retrievedData: false,
    }
  },
  async mounted() {
    try { const res = await fetch('https://data.cityofnewyork.us/resource/qgea-i56i.json?$query=SELECT%20cmplnt_num%2C%20cmplnt_fr_dt%2C%20cmplnt_fr_tm%2C%20cmplnt_to_dt%2C%20cmplnt_to_tm%2C%20addr_pct_cd%2C%20rpt_dt%2C%20ky_cd%2C%20ofns_desc%2C%20pd_cd%2C%20pd_desc%2C%20crm_atpt_cptd_cd%2C%20law_cat_cd%2C%20boro_nm%2C%20loc_of_occur_desc%2C%20prem_typ_desc%2C%20juris_desc%2C%20jurisdiction_code%2C%20parks_nm%2C%20hadevelopt%2C%20housing_psa%2C%20x_coord_cd%2C%20y_coord_cd%2C%20susp_age_group%2C%20susp_race%2C%20susp_sex%2C%20transit_district%2C%20latitude%2C%20longitude%2C%20lat_lon%2C%20patrol_boro%2C%20station_name%2C%20vic_age_group%2C%20vic_race%2C%20vic_sex')
    let data = await res.json()
    const man = data.filter((complaint) => complaint.boro_nm=== 'MANHATTAN')
    this.chartData.datasets[0].data.push(man.length)
    const si = data.filter((complaint) => complaint.boro_nm=== 'STATEN ISLAND')
    this.chartData.datasets[0].data.push(si.length)
    const bk = data.filter((complaint) => complaint.boro_nm=== 'BROOKLYN')
    this.chartData.datasets[0].data.push(bk.length)
    const bronx = data.filter((complaint) => complaint.boro_nm=== 'BRONX')
    this.chartData.datasets[0].data.push(bronx.length)
    const queen = data.filter((complaint) => complaint.boro_nm=== 'QUEENS')
    this.chartData.datasets[0].data.push(queen.length)   
    this.loaded = true
    } catch (e) {
      console.error(e)
    }
    console.log(this.chartData)
  }
  }
</script> 
  
<style scoped>
.crime {
  font-size: 3rem;
}
.piechart {
  height: 700px;
  width: 700px;
  justify-content: center;
}
</style>