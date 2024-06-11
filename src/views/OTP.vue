<template>
  <NavBar />
  <div>
    <div class="container">
      <div class="content">
        <h2>Xác Minh Tài Khoản</h2>
        <p>Mã OTP đã được gửi đến địa chỉ email của bạn. Vui lòng nhập mã OTP để xác minh.</p>
        <form @submit.prevent="verifyOtp">
          <input type="text" v-model="otp" maxlength="6" placeholder="Nhập mã OTP" required>
          <button type="submit">Xác Minh</button>
          <p v-if="timeRemaining > 0" class="time-remaining">Thời gian còn lại: {{ timeRemainingDisplay }}</p>
        </form>
        <p v-if="showResendMessage" class="resend-message">{{ resendMessage }}</p>
        <p class="resend">Không nhận được mã? <router-link to="otp/reset">Gửi lại mã</router-link></p>
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<script>
import router  from "@/router"; // Import router từ Vue Router
import AppFooter from "@/components/User/layout/AppFooter.vue";
import NavBar from "@/components/User/layout/NavBar.vue";

export default {
  name: "otpUser",
  components: {
    AppFooter,
    NavBar,
  },
  data() {
    return {
      otp: '',
      otpSentTime: null, // Thời gian bắt đầu khi gửi OTP
      timeRemaining: 300, // Thời gian còn lại của OTP (5 phút = 300 giây)
      showResendMessage: false, // Hiển thị thông báo khi gửi lại mã
      resendMessage: 'Mã OTP mới đã được gửi.' // Thông báo khi gửi lại mã
    };
  },
  computed: {
    timeRemainingDisplay() {
      const minutes = Math.floor(this.timeRemaining / 60);
      const seconds = this.timeRemaining % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
  },
  methods: {
    verifyOtp() {
      const currentTime = new Date();
      if (!this.otpSentTime || (currentTime - this.otpSentTime) > 300000) {
        alert('Mã OTP đã hết hạn. Vui lòng gửi lại mã.');
        return;
      }
      
      // Fake OTP validation (you need to implement real validation with backend)
      if (this.otp === '123456') {
        alert('Xác minh thành công!');
      } else {
        alert('Mã OTP không hợp lệ. Vui lòng thử lại.');
      }
    },
    resendOtp() {
      this.showResendMessage = true; // Hiển thị thông báo khi gửi lại mã
      this.otpSentTime = new Date(); // Cập nhật thời gian bắt đầu khi gửi lại OTP
      this.timeRemaining = 300; // Reset thời gian còn lại về 5 phút (300 giây)
      // Here you would actually trigger a resend OTP action on your backend
    },
    updateTimeRemaining() {
      const currentTime = new Date();
      const elapsedTime = Math.floor((currentTime - this.otpSentTime) / 1000); // Tính thời gian còn lại theo giây
      this.timeRemaining = Math.max(300 - elapsedTime, 0); // Cập nhật thời gian còn lại
    }
  },
  mounted() {
    this.resendOtp(); // Khởi tạo thời gian còn lại khi component được tạo
    setInterval(this.updateTimeRemaining, 1000); // Cập nhật thời gian còn lại mỗi giây
    this.showResendMessage = false; // Ẩn thông báo khi lần đầu truy cập
  },
  router // Thêm router vào component
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.content {
  margin: 50px 0;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: white;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

p {
  margin-bottom: 20px;
  color: #666;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  padding: 15px;
  width: 100%;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

button {
  padding: 15px 30px;
  font-size: 16px;
  background-color: #0072ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #005bb5;
}

.resend {
  margin-top: 20px;
  color: #666;
}

.resend a {
  color: #0072ff;
  text-decoration: none;
}

.resend a:hover {
  text-decoration: underline;
}
</style>
