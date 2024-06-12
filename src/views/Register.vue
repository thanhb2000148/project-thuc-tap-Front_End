<template>
  <div>
    <NavBar />
    <section class="h-100 h-custom" style="background-color: #ffffff;">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-7 col-xl-5">
            <div class="card rounded-3 shadow-lg">
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-center">
                  Thông Tin Đăng Ký
                </h3>
                <form class="px-md-2" @submit.prevent="register">
                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      v-model="first_name"
                      type="text"
                      id="form3Example1q"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example1q">Tên</label>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      v-model="middle_name"
                      type="text"
                      id="form3Example1q"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example1q">Tên Đệm</label>
                  </div>
                  
                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      v-model="last_name"
                      type="text"
                      id="form3Example1q"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example1q">Họ</label>
                  </div>
                  
                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      v-model="user_name"
                      type="text"
                      id="form3Example1q"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example1q">Tên Đăng nhập</label>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      v-model="email_user"
                      type="text"
                      id="form3Example1q"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example1q">Địa chỉ email</label>
                  </div>
                  
                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      v-model="phone_number"
                      type="text"
                      id="form3Example1q"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example1q">Số điện thoại</label>
                  </div>
                  
                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      v-model="password"
                      type="password"
                      id="form3Example1q"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example1q">Mật khẩu</label>
                  </div>
                  
                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      v-model="password"
                      type="password"
                      id="form3Example1q"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example1q">Nhập lại mật khẩu</label>
                  </div>
                  
                  <div class="form-outline mb-4 text-center">
                    <select v-model="formData.gender_user" id="gender" class="form-control form-control-lg">
                      <option value="" disabled>Chọn giới tính</option>
                      <option value="male">Nam</option>
                      <option value="female">Nữ</option>
                      <option value="other">Khác</option>
                    </select>
                    <label class="form-label" for="gender">Giới tính</label>
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-lg btn-block">
                      Submit
                    </button>
                  </div>
                </form>
                <div v-if="message" class="mt-3 alert" :class="alertClass">
                  {{ message }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script>
import router from "@/router";
import AuthService from "@/services/auth.service";
import AppFooter from "@/components/User/layout/AppFooter.vue";
import NavBar from "@/components/User/layout/NavBar.vue";

export default {
  name: "registerUser",
  components: {
    AppFooter,
    NavBar,
  },
  data() {
    return {
      formFields: {
        first_name: "Tên",
        middle_name: "Tên Đệm",
        last_name: "Họ",
        user_name: "Tên Đăng nhập",
        email_user: "Địa chỉ Email",
        phone_number: "SDT",
        password: "Mật khẩu",
      },
      formData: {
        first_name: "",
        middle_name: "",
        last_name: "",
        user_name: "",
        email_user: "",
        phone_number: "",
        password: "",
        gender_user: "",
        //avt: null,
      },
      message: "",
      alertClass: "",
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthService.register(this.formData);
        this.message = "Đăng ký thành công!";
        this.alertClass = "alert-success";
        console.log("Success response data:", response);

        // Chuyển hướng đến trang OTP
        router.push({ name: 'OTP' }); // Thay 'OTPPage' bằng tên của route đến trang OTP của bạn
      } catch (error) {
        if (error.response) {
          this.message = `Lỗi: ${error.response.data.message}`;
          this.alertClass = "alert-danger";
          console.error("Error response data:", error.response.data); // Debugging line
        } else if (error.request) {
          this.message = "Không nhận được phản hồi từ server.";
          this.alertClass = "alert-warning";
          console.error("Error request:", error.request); // Debugging line
        } else {
          this.message = `Lỗi: ${error.message}`;
          this.alertClass = "alert-danger";
          console.error("Error message:", error.message); // Debugging line
        }
      }
    },
    
  },
};
</script>

<style scoped>
.alert {
  padding: 15px;
  margin-top: 15px;
  border: 1px solid transparent;
  border-radius: 4px;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.alert-warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}

.card {
  border-radius: 0.5rem;
  overflow: hidden;
}

.btn-primary {
  background-color: #4CAF50;
  border-color: #4CAF50;
}

.btn-primary:hover {
  background-color: #45a049;
  border-color: #45a049;
}

.h-100 {
  height: 100vh;
}

.h-custom {
  height: auto;
}

.text-center {
  text-align: center;
}

.form-outline {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
