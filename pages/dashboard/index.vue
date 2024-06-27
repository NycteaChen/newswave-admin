<template>
  <div class="dashboard">
    <div class="row g-4 px-0 mt-0">
      <div
        v-for="item in dataList"
        :key="item.title"
        class="col-4 mt-0"
      >
        <div class="card shadow-sm h-100">
          <div class="card-body text-end">
            <h4 class="display-6">{{ item.title }}</h4>
            <p class="display-4">{{ item.count }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="mb-4">註冊人數趨勢圖</h4>
            <canvas
              ref="registrationChart"
              height="100"
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Chart, registerables } from 'chart.js';

definePageMeta({
  middleware: 'auth',
  title: '統計數據'
});

Chart.register(...registerables);

const registrationChart = ref<HTMLCanvasElement | null>(null);

const createChart = (ctx: CanvasRenderingContext2D) =>
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      datasets: [
        {
          label: '註冊人數',
          data: [100, 120, 150, 130, 120, 200, 100, 120, 150, 130, 120, 200],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

const dataList = computed(() => [
  {
    title: '在線人數',
    count: '23'
  },
  {
    title: '註冊人數',
    count: '1,092'
  },
  {
    title: '訂閱人數',
    count: '92'
  }
]);

onMounted(() => {
  const ctx = registrationChart.value?.getContext('2d');
  if (ctx) {
    createChart(ctx);
  }
});
</script>
<style lang="scss" scoped>
.dashboard {
  .card {
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 0 2px rgb(0 0 0 / 15%);
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;
    }

    .card-body {
      padding: 1.5rem;

      .display-6 {
        margin-bottom: 0.5rem;
        color: #343a40;
      }

      .display-4 {
        color: #007bff;
        font-weight: 700;
      }

      .fs-3 {
        font-size: 1.5rem;
      }
    }
  }

  .row {
    margin-top: 2rem;

    .col-md-4 {
      margin-bottom: 1.5rem;
    }
  }
}
</style>
