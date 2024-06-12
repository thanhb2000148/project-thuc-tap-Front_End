<template>
  <div class="login-page">
    <NavBar />
    <div class="login-container d-flex align-items-center justify-content-center">
      <div class="card login-card shadow-lg p-3 mb-5 bg-white rounded">
        <div class="card-body">
          <h5 class="card-title text-center mb-4">Đăng nhập</h5>
          <form @submit.prevent="login" class="px-md-2">
            <div data-mdb-input-init class="form-outline mb-4">
              <input v-model="user_name" type="text" id="form2Example1" class="form-control text-center" />
              <label class="form-label text-center text-muted" for="form2Example1">Tên người dùng</label>
            </div>
            <div data-mdb-input-init class="form-outline mb-4">
              <input v-model="password" type="password" id="form2Example2" class="form-control text-center" />
              <label class="form-label text-center text-muted" for="form2Example2">Mật khẩu</label>
            </div>
            <div class="text-center mb-4">
              <button type="submit" class="btn-custom-green">Đăng nhập</button>
            </div>
          </form>
          <div class="text-center mb-4">
            <p class="text-muted">Trở thành thành viên của chúng tôi</p>
            <p><strong class="register-link" @click="redirectToRegister">Đăng ký ngay</strong></p>
          </div>
          <div v-if="errorMessage" class="alert alert-danger" role="alert">
            {{ errorMessage }}
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "@/components/User/layout/AppFooter.vue";
import NavBar from "@/components/User/layout/NavBar.vue";
import AuthService from "@/services/auth.service";
import Cookies from 'js-cookie';

export default {
  name: "loginUser",
  components: {
    AppFooter,
    NavBar,
  },
  data() {
    return {
      user_name: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {
    async login() {
  console.log("Bắt đầu yêu cầu đăng nhập");
  try {
    const data = await AuthService.login({
      user_name: this.user_name,
      password: this.password
    });
    console.log("Dữ liệu phản hồi:", data);

    // Kiểm tra xem biến data có tồn tại không
    if (data && typeof data === 'object') {
      // Kiểm tra xem biến data có thuộc tính accessToken không
      if (data.accessToken) {
        console.log("Đăng nhập thành công");
        Cookies.set("access_token", data.accessToken, { expires: 1 });
        Cookies.set("refresh_token", data.refreshToken, { expires: 1 });
        this.$router.push("/");
      } else {
        throw new Error("Không có accessToken trong phản hồi");
      }
    } else {
      throw new Error("Dữ liệu phản hồi không hợp lệ");
    }
  } catch (error) {
    console.error("Lỗi:", error);
    this.errorMessage = error.message || "Đăng nhập không thành công. Vui lòng thử lại sau.";
  }
},
    redirectToRegister() {
      this.$router.push("/register");
    }
  }
};
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
  background-color: #f9f9f9;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
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
  color: #666;
}

.btn-custom-green {
  background-color: #81C408;
  border-color: #81C408;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 10px 20px;
  color: white;
}

.btn-custom-green:hover {
  background-color: #6aa106;
  border-color: #6aa106;
}

.register-link {
  cursor: pointer;
  color: #007bff;
  transition: color 0.3s;
}

.register-link:hover {
  color: #0056b3;
}
</style>
