import createApiClient from "./api.service";

class AuthService {
  constructor(baseUrl = "/api/v1/auth") {
    this.api = createApiClient(baseUrl);
  }

  async register(user) {
    return (await this.api.post("/register", user)).data;
  }

  async login(user) {
    return (await this.api.post("/login", user)).data;
  }

  async sendOtp(user) {
    return (await this.api.post("/otp", user)).data;
  }
}

export default new AuthService();
