<template>
  <div class="admin-dashboard">
    <header class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#"
          >雜誌訂閱管理系統</a
        >
      </div>
    </header>

    <div class="container-fluid">
      <div class="row">
        <nav
          id="sidebarMenu"
          class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <div class="position-sticky pt-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <nuxt-link
                  to="/admin"
                  class="nav-link"
                >
                  <i class="bi bi-house-door"></i>
                  儀表板
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/chart"
                  class="nav-link"
                >
                  <i class="bi bi-card-list"></i>
                  訂閱管理
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/users"
                  class="nav-link"
                >
                  <i class="bi bi-people"></i>
                  用戶管理
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/magazines"
                  class="nav-link"
                >
                  <i class="bi bi-book"></i>
                  雜誌管理
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/orders"
                  class="nav-link"
                >
                  <i class="bi bi-receipt"></i>
                  訂單管理
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/payments"
                  class="nav-link"
                >
                  <i class="bi bi-credit-card"></i>
                  支付管理
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/content"
                  class="nav-link"
                >
                  <i class="bi bi-file-text"></i>
                  內容管理
                </nuxt-link>
              </li>
            </ul>
          </div>
        </nav>

        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-2">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title">註冊人數</h5>
                  <p class="card-text display-4">100</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title">訂閱人數</h5>
                  <p class="card-text display-4">100</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title">在線人數</h5>
                  <p class="card-text display-4">20</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-8">
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title">訂閱趨勢</h5>
                  <canvas ref="chartCanvas"></canvas>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.admin-dashboard {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.row {
  flex: 1;
}

.sidebar {
  position: sticky;
  top: 0;
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
  color: #0056b3;
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
</style>
