<template>
  <div class="login-container d-flex justify-content-center align-items-center vh-100">
    <div class="login-box bg-white p-5 rounded shadow-lg text-center d-flex flex-column gap-4 align-items-center">
      <n-logo />
      <h1 class="mb-0">後台管理系統</h1>
      <form
        class="w-100"
        @submit.prevent="submit"
      >
        <div class="mb-3 text-start">
          <label
            for="username"
            class="form-label"
            >帳號</label
          >
          <input
            id="username"
            v-model="formState.email"
            type="text"
            class="form-control"
            required
          />
        </div>
        <div class="mb-4 text-start">
          <label
            for="password"
            class="form-label"
            >密碼</label
          >
          <input
            id="password"
            v-model="formState.password"
            type="password"
            class="form-control"
            required
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary w-100"
          :disabled="isLoading"
        >
          <span
            v-if="isLoading"
            class="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          />
          <span>{{ isLoading ? '登入中...' : '登入' }}</span>
        </button>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'login',
  middleware: 'no-auth'
});

const { login } = useAdminApi();
const cookieOption = {
  maxAge: 60 * 60
};

const token: any = useCookie('token', cookieOption);

const formState = reactive({ email: '', password: '' });
const isLoading = ref(false);

const submit = async () => {
  isLoading.value = true;
  const { status, data, message } = await login(formState);

  if (status) {
    token.value = data?.token;

    await navigateTo('/dashboard');
  } else {
    showToast({
      id: 'fail-message',
      icon: 'icon/warning.svg',
      delay: 2500,
      message
    });
  }

  isLoading.value = false;
};
</script>
<style lang="scss" scoped>
.login-container {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  font-family: Roboto, sans-serif;
}

.login-box {
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 20px rgb(0 0 0 / 10%);
  text-align: center;
  animation: fade-in 1s ease-in-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1 {
  color: #333;
  font-size: 1.8rem;
}

.form-label {
  color: #555;
}

.form-control {
  display: block;
  padding: 0.75rem;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f7f7f7;
  font-size: 1rem;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: #1e3c72;
    box-shadow: 0 0 0 0.2rem rgb(30 60 114 / 25%);
  }
}

.btn-primary {
  padding: 0.75rem;
  width: 100%;
  border: none;
  background-color: #1e3c72;
  font-weight: 500;
  font-size: 1rem;
  transition:
    background-color 0.3s,
    transform 0.2s;

  &:hover {
    background-color: #2a5298;
    transform: translateY(-2px);
  }
}

.spinner-border {
  vertical-align: text-bottom;
}
</style>
