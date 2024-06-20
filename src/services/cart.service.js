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
      console.log(error);
    }
  }
  async getCart() {
    try {
      const response = await this.api.get("/?page=1&limit=4");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  async addToCart(id, payload) {
    try {
      console.log(payload)
      const response = await this.api.post(`/${id}`, payload);
      return response.data;
    } catch (error) {
      console.error("Error adding to cart with key-value:", error);
      throw error;
    }
  }
}

export default new CartService();
