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
                  <div v-for="(field, label) in formFields" :key="label" class="form-outline mb-4 text-center">
                    <input v-model="formData[label]" type="text" :id="label" class="form-control form-control-lg" />
                    <label class="form-label" :for="label">{{ field }}</label>
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
import axios from "axios";
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
      },
      message: "",
      alertClass: "",
    };
  },
  methods: {
    register() {
      axios
        .post("http://localhost:8000/v1/auth/register", this.formData)
        .then(() => {
          this.message = "Đăng ký thành công!";
          this.alertClass = "alert-success";
          this.$router.push({ name: "OTP" });
        })
        .catch((error) => {
          if (error.response) {
            this.message = `Lỗi: ${error.response.data.message}`;
            this.alertClass = "alert-danger";
          } else if (error.request) {
            this.message = "Không nhận được phản hồi từ server.";
            this.alertClass = "alert-warning";
          } else {
            this.message = `Lỗi: ${error.message}`;
            this.alertClass = "alert-danger";
          }
        });
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
