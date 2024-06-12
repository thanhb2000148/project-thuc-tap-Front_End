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
}

export default new CartService();
