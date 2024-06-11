import createApiClient from "./api.service";
class PriceService {
  constructor(baseUrl = "/api/v1/price") {
    this.api = createApiClient(baseUrl);
  }
  async getDefaultPrice(id) {
    try {
      const response = await this.api.get(`/defaultPrice/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
export default new PriceService();
