<template>
  <div class="login-container d-flex justify-content-center align-items-center vh-100">
    <div class="login-box bg-white p-5 rounded shadow-lg text-center">
      <div>
        <n-logo class="mx-auto mb-2" />
        <h1>{{ titleText }}</h1>
      </div>

      <form @submit.prevent="submit">
        <div class="mb-3 text-start">
          <label
            for="email"
            class="form-label"
            >帳號</label
          >
          <input
            id="email"
            v-model="email"
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
            v-model="password"
            type="password"
            class="form-control"
            required
          />
        </div>
        <button
          class="btn btn-primary w-100"
          type="submit"
        >
          登入
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'login'
});

const cookieOption = {
  maxAge: 60 * 60
};

const token: any = useCookie('token', cookieOption);

const titleText = ref<string>('後台管理系統');
const email = ref<string>('');
const password = ref<string>('');

const { login } = useAdminApi();

const submit = async () => {
  try {
    const formData = {
      email: email.value,
      password: password.value
    };

    const response = await login(formData);
    if (response.token) {
      token.value = response.token;
      navigateTo('/dashboard');
    } else {
      console.error('Login failed: No token received');
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
  margin-bottom: 1.5rem;
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
</style>
