<template>
  <div class="container px-0">
    <nav class="navbar navbar-light bg-white navbar-expand-xl">
      <router-link to="/" class="navbar-brand">
        <h1 class="text-primary display-6">Mua sắm trực tuyến</h1>
      </router-link>
      <button
        class="navbar-toggler py-2 px-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="fa fa-bars text-primary"></span>
      </button>
      <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
        <ul class="navbar-nav mx-auto">
        <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active">
                <i class="fas fa-home"></i> Trang chủ
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/shop" class="nav-link" active-class="active">
                <i class="fas fa-store"></i> Cửa hàng
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/details" class="nav-link" active-class="active">
                <i class="fas fa-info-circle"></i> Chi tiết cửa hàng
            </router-link>
        </li>
        <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <i class="fas fa-bars"></i> Trang
            </a>

            <div class="dropdown-menu m-0 bg-secondary rounded-0">
              <a href="cart.html" class="dropdown-item"><i class="fas fa-shopping-cart"></i> Giỏ hàng</a>
                <a href="checkout.html" class="dropdown-item"><i class="fas fa-money-check"></i> Thanh toán</a>
                <a href="testimonial.html" class="dropdown-item"><i class="fas fa-star"></i> Đánh giá sản phẩm</a>
                <a href="404.html" class="dropdown-item"><i class="fas fa-exclamation-circle"></i> Lỗi trang</a>
            </div>
          </li>
        <li class="nav-item">
            <router-link to="/contact" class="nav-link" active-class="active">
                <i class="fas fa-envelope"></i> Liên hệ
            </router-link>
        </li>
        </ul>
        <div class="d-flex m-3 me-0">
          <button
            class="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i class="fas fa-search text-primary"></i>
          </button>
          <router-link to="/cart" class="position-relative me-4 my-auto">
              <i class="fa fa-shopping-bag fa-2x"></i>
              <span
                class="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                style="top: -5px; left: 15px; height: 20px; min-width: 20px"
                >3</span>
          </router-link>
          <router-link to="/login" class="my-auto">
            <i class="fas fa-user fa-2x"></i>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "UserNavbar",
};
</script>

<style></style>
