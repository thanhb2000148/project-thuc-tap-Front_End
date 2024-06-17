import createApiClient from "./api.service";
class OrderService {
  constructor(baseUrl = "/api/v1/order") {
    this.api = createApiClient(baseUrl);
  }
  async addOrder() {
    try {
      const response = await this.api.post("/");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new OrderService();
