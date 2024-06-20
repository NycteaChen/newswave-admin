<template>
  <main class="main">
    <div class="p-4">
      <div class="row g-4">
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-body text-end">
              <h2 class="display-6">在線人數</h2>
              <p class="display-4 mb-0">3,123</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-body text-end">
              <h2 class="display-6">註冊人數</h2>
              <p class="display-4 mb-0">1,092</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-body text-end">
              <h2 class="display-6">訂閱人數</h2>
              <p class="display-4 mb-0">92</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
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
import { ref, onMounted } from 'vue';

Chart.register(...registerables);

const registrationChart = ref<HTMLCanvasElement | null>(null);

const createChart = (ctx: CanvasRenderingContext2D) =>
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      datasets: [
        {
          label: '註冊人數',
          data: [100, 200, 300, 400, 500, 600],
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
  padding-top: 2rem;
  padding-bottom: 2rem;
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
      }

      .display-4 {
        font-weight: 700;
      }

      .fs-3 {
        font-size: 1.5rem;
      }
    }
  }

  .row {
    margin-top: 2rem;

    .col-lg-4,
    .col-lg-8 {
      margin-bottom: 1.5rem;
    }
  }
}
</style>
