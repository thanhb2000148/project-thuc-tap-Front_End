<template>
  <div class="container px-0">
    <nav class="navbar navbar-light bg-white navbar-expand-xl">
      <a href="index.html" class="navbar-brand"
        ><h1 class="text-primary display-6">Không lo về giá</h1></a
      >
      <button
        class="navbar-toggler py-2 px-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="fa fa-bars text-primary"></span>
      </button>
      <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
        <div class="navbar-nav mx-auto">
          <router-link to="/"
            ><a class="nav-item nav-link active">Trang chủ</a></router-link
          >
          <router-link to="/shop"
            ><a class="nav-item nav-link">Cửa hàng</a></router-link
          >
          <router-link to=""
            ><a class="nav-item nav-link">Chi tiết cửa hàng</a></router-link
          >
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >Trang</a
            >
            <div class="dropdown-menu m-0 bg-secondary rounded-0">
              <a href="cart.html" class="dropdown-item">Giỏ hàng</a>
              <a href="chackout.html" class="dropdown-item">Thanh toán</a>
              <a href="testimonial.html" class="dropdown-item">Đánh giá sản phẩm</a>
              <a href="404.html" class="dropdown-item">Lỗi trang</a>
            </div>
          </div>
          <router-link to=""
            ><a class="nav-item nav-link">Liên hệ</a></router-link
          >
        </div>
        <div class="d-flex m-3 me-0">
          <button
            class="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i class="fas fa-search text-primary"></i>
          </button>
          <router-link to="/cart"
            ><a href="#" class="position-relative me-4 my-auto">
              <i class="fa fa-shopping-bag fa-2x"></i>
              <span
                class="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                style="top: -5px; left: 15px; height: 20px; min-width: 20px"
                >3</span
              >
            </a></router-link
          >
         <router-link to="/login"> <a href="#" class="my-auto">
            <i class="fas fa-user fa-2x"></i>
          </a></router-link>
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
