<script>
import VueApexCharts from 'vue3-apexcharts';

export default {
  components: {
    VueApexCharts
  },
  data() {
    return {
      series: [
        {
          name: 'Inflation',
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top'
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: val => `${val}%`,
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#304758']
          }
        },
        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: val => `${val}%`
          }
        },
        title: {
          text: 'Monthly Inflation in Argentina, 2002',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
      }
    };
  }
};
</script>

<template>
  <div>
    <VueApexCharts
      type="bar"
      height="350"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>
