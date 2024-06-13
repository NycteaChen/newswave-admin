<template>
  <div class="login-container d-flex justify-content-center align-items-center vh-100">
    <div class="login-box bg-white p-5 rounded shadow-lg text-center">
      <div class="newswave mb-4">newswave</div>
      <h1 class="mb-4">後台管理者登入</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-3 text-start">
          <label for="username" class="form-label">用戶名</label>
          <input type="text" id="username" v-model="username" class="form-control" required />
        </div>
        <div class="mb-4 text-start">
          <label for="password" class="form-label">密碼</label>
          <input type="password" id="password" v-model="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary w-100">登入</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = () => {
  // 這裡可以添加你的驗證邏輯，例如調用 API 來驗證用戶名和密碼
  if (username.value === 'admin' && password.value === 'admin') {
    router.push('/admin/dashboard');
  } else {
    alert('用戶名或密碼錯誤');
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

.login-container {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  font-family: 'Roboto', sans-serif;
}

.login-box {
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.newswave {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
}

h1 {
  font-size: 1.8rem;
  color: #333;
}

.form-label {
  color: #555;
}

.form-control {
  padding: 0.75rem;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #1e3c72;
    box-shadow: 0 0 0 0.2rem rgba(30, 60, 114, 0.25);
    outline: none;
  }
}

.btn-primary {
  background-color: #1e3c72;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #2a5298;
    transform: translateY(-2px);
  }
}
</style>
