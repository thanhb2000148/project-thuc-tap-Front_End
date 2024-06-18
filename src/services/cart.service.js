import createApiClient from "./api.service";
class CartService {
  constructor(baseUrl = "/api/v1/cart") {
    this.api = createApiClient(baseUrl);
  }
  async addCart(id) {
    try {
      const response = await this.api.post(`/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async getCart() {
    try {
      const response = await this.api.get("/?page=1&limit=4");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async updateCart(payload) {
    try {
      const response = await this.api.put("/", payload);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new CartService();
