<template>
  <div>
    <PieChart :chartData="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

// Registrando módulos do Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: 'PieChart',
  components: {
    PieChart: Pie,
  },
  props: {
    despesasPorCategoria: {
      type: Array,
      required: true,
    },
  },
  computed: {
    chartData() {
      return {
        labels: this.despesasPorCategoria.map(item => item.categoria),
        datasets: [
          {
            data: this.despesasPorCategoria.map(item => item.total),
            backgroundColor: [
              '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
            ],
          },
        ],
      };
    },
    chartOptions() {
      return {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      };
    },
  },
};
</script>
