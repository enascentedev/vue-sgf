<template>
  <div>
    <apexchart type="pie" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
export default {
  name: 'PizzaChart',
  props: {
    labels: {
      type: Array,
      required: true,
    },
    dataValues: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      series: this.dataValues,
      chartOptions: {
        chart: {
          width: 400, // Ajuste a largura aqui
          height: 400, // Ajuste a altura aqui
          toolbar: {
            show: true, // Mostra a toolbar
            tools: {
              download: true, 
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false,
            },
            export: {
              csv: false, // Oculta a opção de exportar como CSV
              svg: true,  // Habilita a exportação como SVG
              png: true,  // Habilita a exportação como PNG
            },
          },
        },
        labels: this.labels,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
    };
  },
};
</script>
