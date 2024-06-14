<template>
  <div>
    <NavBar />
    <section class="h-100 h-custom" style="background-color: #ffffff">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-7 col-xl-5">
            <div class="card rounded-3 shadow-lg">
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-center">
                  Thông Tin Đăng Ký
                </h3>
                <form class="px-md-2" @submit.prevent="register">
                  
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div data-mdb-input-init class="form-outline">
                        <input
                          type="text"
                          id="firstName"
                          class="form-control form-control-lg"
                          v-model="formData.first_name"
                          required
                          pattern="[a-zA-ZÀ-ỹ ]+"
                          title="Chỉ chấp nhận ký tự chữ cái và dấu (bao gồm cả tiếng Việt)"
                        />
                        <label class="form-label" for="firstName">Tên của bạn</label>
                        <small v-if="!isFirstNameValid" class="text-danger">Tên chỉ chấp nhận chữ cái và dấu (bao gồm cả tiếng Việt).</small>
                      </div>
                    </div>
                    
                    <div class="col-md-6 mb-4">
                      <div data-mdb-input-init class="form-outline">
                        <input
                          type="text"
                          id="lastName"
                          class="form-control form-control-lg"
                          v-model="formData.last_name"
                          required
                          pattern="[a-zA-ZÀ-ỹ ]+"
                          title="Chỉ chấp nhận ký tự chữ cái và dấu (bao gồm cả tiếng Việt)"
                        />
                        <label class="form-label" for="lastName">Họ</label>
                        <small v-if="!isLastNameValid" class="text-danger">Họ chỉ chấp nhận chữ cái và dấu (bao gồm cả tiếng Việt).</small>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div data-mdb-input-init class="form-outline">
                        <input
                          type="text"
                          id="middleName"
                          class="form-control form-control-lg"
                          v-model="formData.middle_name"
                          required
                          pattern="[a-zA-ZÀ-ỹ ]+"
                          title="Chỉ chấp nhận ký tự chữ cái và dấu (bao gồm cả tiếng Việt)"
                        />
                        <label class="form-label" for="middleName">Tên lót</label>
                        <small v-if="!isMiddleNameValid" class="text-danger">Tên lót chỉ chấp nhận chữ cái và dấu (bao gồm cả tiếng Việt).</small>
                      </div>
                    </div>
                    
                    <div class="col-md-6 mb-4">
                      <div data-mdb-input-init class="form-outline">
                        <input
                          type="tel"
                          id="phoneNumber"
                          class="form-control form-control-lg"
                          v-model="formData.phone_number"
                          required
                          pattern="[0-9]{10}"
                          title="Số điện thoại gồm 10 chữ số"
                        />
                        <label for="phoneNumber" class="form-label">Số điện thoại</label>
                        <small v-if="!isPhoneNumberValid" class="text-danger">Số điện thoại là bắt buộc và phải là số, gồm 10 chữ số.</small>
                      </div>
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div data-mdb-input-init class="form-outline">
                        <input
                          type="text"
                          id="userName"
                          class="form-control form-control-lg"
                          v-model="formData.user_name"
                          required
                        />
                        <label for="userName" class="form-label">Tên đăng nhập</label>
                      </div>
                    </div>

                    <div class="col-md-6 mb-4">
                      <div data-mdb-input-init class="form-outline">
                        <input
                          type="email"
                          id="emailAddress"
                          class="form-control form-control-lg"
                          v-model="formData.email_user"
                          required
                        />
                        <label class="form-label" for="emailAddress">Địa chỉ Email</label>
                      </div>
                    </div>
                  </div>
  
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div data-mdb-input-init class="form-outline">
                        <input
                          type="password"
                          id="password"
                          class="form-control form-control-lg"
                          v-model="formData.password"
                          required
                        />
                        <label class="form-label" for="password">Mật khẩu</label>
                      </div>
                    </div>
  
                    <div class="col-md-6 mb-4">
                      <div data-mdb-input-init class="form-outline">
                        <input
                          type="password"
                          id="confirmPassword"
                          class="form-control form-control-lg"
                         
                          required
                        />
                        <label class="form-label" for="confirmPassword">Nhập lại mật khẩu</label>
                        <small v-if="!isPasswordMatch" class="text-danger">Mật khẩu không khớp.</small>
                      </div>
                    </div>
                  </div>
  
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div data-mdb-input-init class="form-outline">
                        <select
                          v-model="formData.gender_user"
                          id="gender"
                          class="form-control form-control-lg"
                          required
                        >
                          <option value="" disabled>Chọn giới tính</option>
                          <option value="male">Nam</option>
                          <option value="female">Nữ</option>
                          <option value="other">Khác</option>
                        </select>
                        <label class="form-label" for="gender">Giới tính</label>
                      </div>
                    </div>
                  </div>
                  
                  <div class="text-center">
                    <button
                      type="submit"
                      class="btn btn-primary btn-lg btn-block"
                    >
                      Đăng ký
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
import AuthService from "@/services/auth.service";
import NavBar from "@/components/User/layout/NavBar.vue";
import AppFooter from "@/components/User/layout/AppFooter.vue";

export default {
  name: "RegisterUser",
  components: {
    NavBar,
    AppFooter,
  },
  data() {
    return {
      formData: {
        first_name: "",
        middle_name: "",
        last_name: "",
        user_name: "",
        email_user: "",
        phone_number: "",
        password: "",
        //confirm_password: "",
        gender_user: "",
      },
      message: "",
      alertClass: "",
      isFirstNameValid: true,
      isLastNameValid: true,
      isMiddleNameValid: true,
      isPhoneNumberValid: true,
      isPasswordMatch: true,
    };
  },
  methods: {
    async register() {
      if (!this.isFirstNameValid || !this.isLastNameValid || !this.isMiddleNameValid || !this.isPhoneNumberValid || !this.isPasswordMatch) {
        return;
      }

      try {
        const response = await AuthService.register(this.formData);
        this.message = "Đăng ký thành công!";
        this.alertClass = "alert-success";
        console.log("Registration response:", response);
        // Tùy chọn redirect sang trang khác sau khi đăng ký thành công
         this.$router.push({ name: "OTP" });
      } catch (error) {
        this.message = `Lỗi: ${error.message}`;
        this.alertClass = "alert-danger";
        console.error("Registration error:", error);
      }
    },
  },
  watch: {
    'formData.first_name'(newVal) {
      this.isFirstNameValid = /^[a-zA-ZÀ-ỹ]+$/.test(newVal.trim());
    },
    'formData.last_name'(newVal) {
      this.isLastNameValid = /^[a-zA-ZÀ-ỹ]+$/.test(newVal.trim());
    },
    'formData.middle_name'(newVal) {
      this.isMiddleNameValid = /^[a-zA-ZÀ-ỹ]+$/.test(newVal.trim());
    },
    'formData.phone_number'(newVal) {
      this.isPhoneNumberValid = /^\d{10}$/.test(newVal.trim());
    },
    'formData.confirm_password'(newVal) {
      this.isPasswordMatch = newVal === this.formData.password;
    }
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
  background-color: #4caf50;
  border-color: #4caf50;
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
