import createApiClient from "./api.service";
class UserService {
  constructor(baseUrl = "/api/v1/user") {
    this.api = createApiClient(baseUrl);
  }
  async getUserLogin() {
    try {
      const response = await this.api.get("/UserLogin");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
export default new UserService();
