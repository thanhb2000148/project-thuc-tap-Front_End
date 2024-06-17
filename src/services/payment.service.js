import createApiClient from "./api.service";
class PaymentService {
  constructor(baseUrl = "/api/v1/payment") {
    this.api = createApiClient(baseUrl);
  }
  async paymentCOD() {
    try {
      const response = await this.api.post("/cod");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new PaymentService();
