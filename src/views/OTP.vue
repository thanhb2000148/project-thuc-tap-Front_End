<template>
    <div class="container">
      <h2>Xác Minh Tài Khoản</h2>
      <p>Mã OTP đã được gửi đến số điện thoại/email của bạn. Vui lòng nhập mã OTP để xác minh.</p>
      <form @submit.prevent="verifyOtp">
        <input type="text" v-model="otp" maxlength="6" placeholder="Nhập mã OTP" required>
        <button type="submit">Xác Minh</button>
      </form>
      <p class="resend">Không nhận được mã? <a href="#" @click.prevent="resendOtp">Gửi lại mã</a></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        otp: ''
      };
    },
    methods: {
      verifyOtp() {
        // Fake OTP validation (you need to implement real validation with backend)
        if (this.otp === '123456') {
          alert('Xác minh thành công!');
        } else {
          alert('Mã OTP không hợp lệ. Vui lòng thử lại.');
        }
      },
      resendOtp() {
        alert('Mã OTP mới đã được gửi.');
        // Here you would actually trigger a resend OTP action on your backend
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  p {
    margin-bottom: 10px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input {
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .resend {
    margin-top: 10px;
  }
  
  .resend a {
    color: #007BFF;
    text-decoration: none;
  }
  
  .resend a:hover {
    text-decoration: underline;
  }
  </style>
  