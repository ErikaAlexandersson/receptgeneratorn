<template>
  <PieChart
    :chart-data="data"
    :options="options"
    css-classes="chart-container"
  />
</template>

<script setup>
  import store from '../store'
  import { computed, ref } from 'vue'
  import { PieChart } from 'vue-chart-3'
  import { ArcElement, Chart, PieController } from 'chart.js'

  Chart.register(PieController, ArcElement)

  const data = computed(() => ({
    labels: ['Time'],
    datasets: [
      {
        label: 'Time',
        data: [store.state.timeChart, store.state.oneHour],
        backgroundColor: ['rgba(43, 22, 14, 0.4)', '#ffffff']
      }
    ]
  }))

  const options = ref({
    plugins: {
      title: {
        text: 'Doughnut'
      }
    }
  })
</script>

<style>
  .chart-container {
    width: 60px;
  }
</style>
