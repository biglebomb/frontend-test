<template>
  <div>
    <apexchart
      width="100%"
      height="350"
      type="candlestick"
      :options="options"
      :series="series"
    />
  </div>
</template>

<script>
// import VueApexCharts from 'vue-apexcharts'
export default {
  name: "Chart",
  props: {
    chartData: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  computed: {
    series() {
      return [
        {
          data: this.chartData,
        },
      ];
    },
  },
  created() {
    console.log(this.series);
  },
  data() {
    return {
      options: {
        chart: {
          type: "candlestick",
          height: 350,
        },
        title: {
          text: "CandleStick Chart",
          align: "left",
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
      },
      chart: {
        type: "candlestick",
        height: 350,
      },
    };
  },
};
</script>

<style scoped></style>
