<template>
  <div>
    <NavBar />
    <section class="h-100 h-custom" style="background-color: #8fc4b7">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-8 col-xl-6">
            <div class="card rounded-3">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                class="w-100"
                style="border-top-left-radius: 0.3rem; border-top-right-radius: 0.3rem;"
                alt="Sample photo"
              />
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  Registration Info
                </h3>

                <form class="px-md-2" @submit.prevent="register">
                  <div v-for="(field, label) in formFields" :key="label" data-mdb-input-init class="form-outline mb-4">
                    <input v-model="formData[label]" type="text" :id="label" class="form-control" />
                    <label class="form-label" :for="label">{{ field }}</label>
                  </div>
                  <div data-mdb-input-init class="form-outline mb-4">
                    <select v-model="formData.gender" id="gender" class="form-control">
                      <option value="" disabled>Chọn giới tính</option>
                      <option value="male">Nam</option>
                      <option value="female">Nữ</option>
                      <option value="other">Khác</option>
                    </select>
                    <label class="form-label" for="gender">Giới tính</label>
                  </div>
                  <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-success btn-lg mb-1">
                    Submit
                  </button>
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
        gender: "", // Thêm trường giới tính
      },
      message: "",
      alertClass: "",
    };
  },
  methods: {
  register() {
    axios
      .post("http://localhost:8000/v1/auth/register", {
        first_name: this.formData.first_name,
        middle_name: this.formData.middle_name,
        last_name: this.formData.last_name,
        user_name: this.formData.user_name,
        email_user: this.formData.email_user,
        phone_number: this.formData.phone_number,
        password: this.formData.password,
        // Không bao gồm trường gender trong yêu cầu
      })
      .then((response) => {
        this.message = "Đăng ký thành công!";
        this.alertClass = "alert-success";
        console.log("Success:", response);
        this.$router.push({ name: "Login" });
      })
      .catch((error) => {
        if (error.response) {
          this.message = `Lỗi: ${error.response.data}`;
          this.alertClass = "alert-danger";
          console.log("Error response:", error.response.data);
        } else if (error.request) {
          this.message = "Không nhận được phản hồi từ server.";
          this.alertClass = "alert-warning";
          console.log("Error request:", error.request);
        } else {
          this.message = `Lỗi: ${error.message}`;
          this.alertClass = "alert-danger";
          console.log("Error message:", error.message);
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
</style>
