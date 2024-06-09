import createApiClient from "./api.service";
class ProductService {
  constructor(baseUrl = "/v1/product") {
    this.api = createApiClient(baseUrl);
  }
  async getAll() {
    return (await this.api.get("/")).data;
  }
  async getById(id) {
    return (await this.api.get(`/${id}`)).data;
  }
  async create(product) {
    return (await this.api.post("/", product)).data;
  }
}
export default new ProductService();
