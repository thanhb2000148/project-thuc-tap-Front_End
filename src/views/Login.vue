<template>
    <div class="login-page">
      <!-- Sử dụng NavBar trong template -->
      <NavBar />
  
      <div class="login-container d-flex align-items-center justify-content-center">
        <div class="card login-card shadow-lg p-3 mb-5 bg-white rounded">
          <div class="card-body">
            <h5 class="card-title text-center mb-4">Đăng nhập</h5>
            <form @submit.prevent="login" class="px-md-2">
              <!-- Nhập tên người dùng -->
              <div data-mdb-input-init class="form-outline mb-4">
                <input v-model="user_name" type="text" id="form2Example1" class="form-control text-center" />
                <label class="form-label text-center text-muted" for="form2Example1">Tên người dùng</label>
              </div>
  
              <!-- Nhập mật khẩu -->
              <div data-mdb-input-init class="form-outline mb-4">
                <input v-model="password" type="password" id="form2Example2" class="form-control text-center" />
                <label class="form-label text-center text-muted" for="form2Example2">Mật khẩu</label>
              </div>
  
              <!-- Nút đăng nhập -->
              <div class="text-center mb-4">
                <div class="btn-custom-green" @click="login">Đăng nhập</div>
              </div>
            </form>
            <div class="text-center mb-4">
              <p class="text-muted">Trở thành thành viên của chúng tôi</p>
              <p><strong class="register-link" @click="redirectToRegister">Đăng ký ngay</strong></p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Sử dụng AppFooter trong template -->
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppFooter from "@/components/User/layout/AppFooter.vue";
  import NavBar from "@/components/User/layout/NavBar.vue";
  
  export default {
    name: "loginUser",
    components: {
      AppFooter,
      NavBar
    },
    data() {
      return {
        user_name: "",
        password: ""
      };
    },
    methods: {
      login() {
        // Phần xử lý đăng nhập
      },
      redirectToRegister() {
        this.$router.push('/register'); // Chuyển hướng đến trang đăng ký
      }
    }
  }
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .login-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  .login-card {
    max-width: 400px;
    width: 100%;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 20px;
    background-color: #f9f9f9; /* Màu nền của form */
  }
  
  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3); /* Hiệu ứng nổi chữ */
  }
  
  .form-outline .form-control {
    border-radius: 10px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .form-label {
    text-align: center;
    display: block;
  }
  
  .text-muted {
    color: #666; /* Màu chữ nhạt */
  }
  
  .btn-custom-green {
    background-color: #81C408; /* Màu xanh lá cây */
    border-color: #81C408;
    border-radius: 10px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer; /* Thêm hiệu ứng con trỏ khi di chuột */
    padding: 10px 20px; /* Điều chỉnh kích thước của nút */
    color: white; /* Màu chữ */
  }
  
  .btn-custom-green:hover {
    background-color: #6aa106; /* Màu xanh lá cây tối hơn khi hover */
    border-color: #6aa106;
  }
  
  .register-link {
    cursor: pointer; /* Hiệu ứng con trỏ khi di chuột */
    color: #007bff; /* Màu của liên kết */
    transition: color 0.3s; /* Hiệu ứng chuyển đổi màu trong 0.3s */
  }
  
  .register-link:hover {
    color: #0056b3; /* Màu khi hover */
  }
  </style>
  