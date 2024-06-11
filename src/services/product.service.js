import createApiClient from "./api.service";
class ProductService {
  constructor(baseUrl = "/api/v1/product") {
    this.api = createApiClient(baseUrl);
  }
  async getAll() {
    try {
      const response = await this.api.get("/");
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getById(id) {
    try {
      const response = await this.api.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async create(product) {
    return (await this.api.post("/", product)).data;
  }
}
export default new ProductService();
