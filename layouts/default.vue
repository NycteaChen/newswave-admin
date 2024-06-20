<template>
  <div class="admin-dashboard">
    <header class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#"
          >NewsWave後台管理系統</a
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
                  to="/dashboard"
                  class="nav-link"
                >
                  <i class="bi bi-house-door me-2"></i>
                  首頁
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to=""
                  class="nav-link"
                >
                  <i class="bi bi-card-list me-2"></i>
                  訂閱管理
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to=""
                  class="nav-link"
                >
                  <i class="bi bi-people me-2"></i>
                  用戶管理
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to=""
                  class="nav-link"
                >
                  <i class="bi bi-book me-2"></i>
                  雜誌管理
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to=""
                  class="nav-link"
                >
                  <i class="bi bi-receipt me-2"></i>
                  訂單管理
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to=""
                  class="nav-link"
                >
                  <i class="bi bi-file-text me-2"></i>
                  內容管理
                </nuxt-link>
              </li>
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link"
                >
                  <i class="bi bi-box-arrow-right me-2"></i>
                  登出
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-2">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

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
