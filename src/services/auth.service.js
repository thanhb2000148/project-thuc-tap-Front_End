import createApiClient from "./api.service";

class AuthService {
  constructor(baseUrl = "/api/v1/auth") {
    this.api = createApiClient(baseUrl);
  }

  async register(user) {
    try {
      const response = await this.api.post("/register", user);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async login(user) {
    try {
      const response = await this.api.post("/login", user);
      console.log("Login response data:", response); // Thêm logging ở đây
      return response;
    } catch (error) {
      this.handleError(error);
    }
  }

  async sendOtp(user) {
    try {
      const response = await this.api.post("/otp", user);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response) {
      // Máy chủ đã phản hồi với trạng thái khác 200
      console.error('Response error:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    } else if (error.request) {
      // Yêu cầu đã được thực hiện nhưng không có phản hồi
      console.error('Request error:', error.request);
    } else {
      // Đã xảy ra lỗi khi thiết lập yêu cầu
      console.error('Error message:', error.message);
    }
    console.error('Config:', error.config);
  }
}

export default new AuthService();
