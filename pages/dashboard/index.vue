<template>
  <main class="main">
    <div class="container py-4">
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card shadow-sm h-100">
            <div class="card-body text-end">
              <h2 class="display-6">在線人數</h2>
              <p class="display-4 mb-0">23</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-sm h-100">
            <div class="card-body text-end">
              <h2 class="display-6">註冊人數</h2>
              <p class="display-4 mb-0">1,092</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-sm h-100">
            <div class="card-body text-end">
              <h2 class="display-6">訂閱人數</h2>
              <p class="display-4 mb-0">92</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h2 class="mb-4">註冊人數趨勢圖</h2>
              <canvas
                ref="registrationChart"
                height="100"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Chart, registerables } from 'chart.js';

definePageMeta({
  middleware: 'auth'
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

onMounted(() => {
  const ctx = registrationChart.value?.getContext('2d');
  if (ctx) {
    createChart(ctx);
  }
});
</script>
<style lang="scss" scoped>
.main {
  min-height: 100vh;
  background-color: #f8f9fa;

  .card {
    border: none;
    border-radius: 0.5rem;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    }

    .card-body {
      padding: 1.5rem;

      .display-6 {
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: #343a40;
      }

      .display-4 {
        font-weight: 700;
        color: #007bff;
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
