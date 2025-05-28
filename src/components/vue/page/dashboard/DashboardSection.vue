<template>
  <div class="min-h-screen">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <!-- Chart Section -->
      <div
        class="bg-white rounded-lg shadow p-4 transition-all ease-in-out duration-300"
      >
        <h3 class="text-gray-700 font-medium mb-4">Revenue Overview</h3>
        <BarChart />
      </div>

      <!-- Orders Trend -->
      <div
        class="bg-white rounded-lg shadow p-4 transition-all ease-in duration-300"
      >
        <h3 class="text-gray-700 font-medium mb-4">Orders Trend</h3>
        <SplineChart />
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '../../BarChart.vue';
import SplineChart from '../../SplineChart.vue';

export default {
  name: 'DashboardSection',
  components: {
    BarChart,
    SplineChart
  },
  data() {
    return {
      recentOrders: [
        {
          id: '#12345',
          customer: 'John Doe',
          amount: '$120',
          status: 'Completed'
        },
        {
          id: '#12346',
          customer: 'Jane Smith',
          amount: '$200',
          status: 'Pending'
        },
        {
          id: '#12347',
          customer: 'Robert Johnson',
          amount: '$350',
          status: 'Processing'
        }
      ]
    };
  }
};
</script>
