<template>
  <div class="admin-dashboard">
    <header class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#"
        >
          NewsWave 後台管理系統
        </a>
      </div>
    </header>

    <div class="admin-container py-4 pe-4">
      <nav
        id="sidebarMenu"
        class="position-fixed bg-light sidebar z-1"
      >
        <ul class="nav flex-column gap-2 h-100">
          <li
            v-for="item in menuList"
            :key="item.name"
            class="nav-item"
            :class="{ 'mt-auto': item.path === 'logout' }"
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
      </nav>

      <main class="ps-4">
        <h3 class="mb-3">{{ $route?.matched?.[0]?.meta?.title }}</h3>
        <slot />
      </main>
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
    name: '統計數據',
    icon: 'bi bi-bar-chart',
    path: 'dashboard'
  },
  // {
  //   name: '訂閱管理',
  //   icon: 'bi bi-card-list',
  //   path: 'subscription'
  // },
  // {
  //   name: '用戶管理',
  //   icon: 'bi bi-people',
  //   path: 'member'
  // },
  // {
  //   name: '雜誌管理',
  //   icon: 'bi bi-book',
  //   path: 'magazine'
  // },
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
    overflow-y: auto;
    height: calc(100vh - $header-height);

    main {
      margin-left: $sidebar-width;
      min-width: calc(1200px - $sidebar-width);
      max-width: 1920px;
    }
  }
}

.row {
  flex: 1;
}

.sidebar {
  top: $header-height;
  overflow-y: auto;
  padding: 16px 12px;
  width: $sidebar-width;
  height: calc(100vh - $header-height);
  transition: background-color 0.3s;
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
