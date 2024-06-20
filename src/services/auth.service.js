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
        throw error; // Rethrow lỗi để cho phép xử lý lỗi ở phía gọi hàm
      }
    }

    async login(user) {
      try {
        const response = await this.api.post("/login", user);
        console.log("Login response data:", response.data); // Thêm logging ở đây nếu cần thiết
        return response;
      } catch (error) {
        this.handleError(error);
        throw error; // Rethrow lỗi để cho phép xử lý lỗi ở phía gọi hàm
      }
    }

    async sendOtp(user) {
      try {
        const response = await this.api.post("/otp", user);
        return response.data;
      } catch (error) {
        this.handleError(error);
        throw error; // Rethrow lỗi để cho phép xử lý lỗi ở phía gọi hàm
      }
    }

    handleError(error) {
      if (error.response) {
        // Lỗi phản hồi từ server (ví dụ: lỗi 400, 500, ...)
        console.error("Response error:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        // Yêu cầu đã gửi đi nhưng không có phản hồi từ server
        console.error("Request error:", error.request);
      } else {
        // Lỗi xảy ra khi thiết lập yêu cầu (ví dụ: lỗi mạng)
        console.error("Error message:", error.message);
      }
      console.error("Config:", error.config);
    }
  }

  export default new AuthService();
