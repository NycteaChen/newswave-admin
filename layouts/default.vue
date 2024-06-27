<template>
  <div class="admin-dashboard">
    <header class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#"
        >
          NewsWave後台管理系統
        </a>
      </div>
    </header>

    <div class="admin-container container-fluid">
      <div class="row">
        <nav
          id="sidebarMenu"
          class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <div class="position-sticky pt-3">
            <ul class="nav flex-column">
              <li
                v-for="item in menuList"
                :key="item.name"
                class="nav-item"
              >
                <div
                  v-if="item.path === 'logout'"
                  class="nav-link cursor-pointer d-flex gap-2 align-items-center"
                  @click="logoutHandler"
                >
                  <i :class="item.icon" />
                  <span>{{ item.name }}</span>
                </div>
                <nuxt-link
                  v-else
                  :to="item.path"
                  class="nav-link d-flex gap-2 align-items-center"
                  :class="{ active: $route.name === item.path }"
                >
                  <i :class="item.icon" />
                  <span>{{ item.name }}</span>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </nav>

        <main class="col-md-9 ms-sm-auto col-lg-10 p-4">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const token: any = useCookie('token');
const logoutHandler = async () => {
  token.value = null;
  navigateTo('/login');
};

const menuList = [
  {
    name: '首頁',
    icon: 'bi bi-house-door',
    path: 'dashboard'
  },
  {
    name: '訂閱管理',
    icon: 'bi bi-card-list',
    path: 'subscription'
  },
  {
    name: '用戶管理',
    icon: 'bi bi-people',
    path: 'member'
  },
  {
    name: '雜誌管理',
    icon: 'bi bi-book',
    path: 'magazine'
  },
  {
    name: '訂單管理',
    icon: 'bi bi-receipt',
    path: 'orders'
  },
  {
    name: '文章管理',
    icon: 'bi bi-file-text',
    path: 'article'
  },
  {
    name: '登出',
    icon: 'bi bi-box-arrow-right',
    path: 'logout'
  }
];
</script>
<style lang="scss" scoped>
.admin-dashboard {
  display: flex;
  flex-direction: column;
  padding-top: $header-height;

  .admin-container {
    height: calc(100vh - $header-height);
  }
}

.row {
  flex: 1;
}

.sidebar {
  position: sticky;
  top: 56px;
  overflow-y: auto;
  height: calc(100vh - 56px);
  background-color: #f8f9fa;
  transition: background-color 0.3s;
}

.sidebar:hover {
  background-color: #e9ecef;
}

.nav-link {
  border-radius: 5px;
  color: #0d6efd;
  transition:
    color 0.3s,
    background-color 0.3s;
}

.nav-link:hover {
  border-radius: 5px;
  background-color: #9cc8f4;
  color: #0f5cb9;
}

.nav-link.active {
  background-color: #0d6efd;
  color: #fff;
}

.card {
  border: none;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 7.5%);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-0.25rem);
}

.card-title {
  color: #0d6efd;
}

.card-text {
  color: #495057;
  font-weight: bold;
  font-size: 2rem;
}

.sticky-top {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
