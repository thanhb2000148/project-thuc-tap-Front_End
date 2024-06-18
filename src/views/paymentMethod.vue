<template>
  <NavBar />
  <SinglePageHeader />
  <div class="container-fluid py-5">
    <div class="container py-5">
      <h1 class="mb-4">Phương thức thanh toán</h1>
      <form action="#">
        <div class="row g-5">
          <div class="col-md-12 col-lg-6 col-xl-7">
            <button
              @click="paymentCOD()"
              type="button"
              class="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary my-3"
            >
              Thanh toán tại nhà
            </button>
            <button
              @click="paymentMomo()"
              type="button"
              class="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary my-3"
            >
              Thanh toán qua Momo
            </button>
          </div>
          <div class="col-md-12 col-lg-6 col-xl-5">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Products</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in cart" :key="index">
                    <th scope="row">
                      <div class="d-flex align-items-center mt-2">
                        <img
                          :src="
                            item.ITEM.PRODUCT_DETAILS
                              .LIST_FILE_ATTACHMENT_DEFAULT[0].FILE_URL
                          "
                          class="img-fluid rounded-circle"
                          style="width: 90px; height: 90px"
                          alt=""
                        />
                      </div>
                    </th>
                    <td class="py-5">
                      {{ item.ITEM.PRODUCT_DETAILS.NAME_PRODUCT }}
                    </td>
                    <td class="py-5">{{ item.ITEM.PRICE }}</td>
                    <td class="py-5">{{ item.ITEM.QUANTITY }}</td>
                    <td class="py-5">
                      {{ totalPrice(item.ITEM.PRICE, item.ITEM.QUANTITY) }}
                    </td>
                  </tr>

                  <tr>
                    <th scope="row"></th>
                    <td class="py-5"></td>
                    <td class="py-5"></td>
                    <td class="py-5">
                      <p class="mb-0 text-dark py-3">Subtotal</p>
                    </td>
                    <td class="py-5">
                      <div class="py-3 border-bottom border-top">
                        <p class="mb-0 text-dark">$414.00</p>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row"></th>
                    <td class="py-5">
                      <p class="mb-0 text-dark text-uppercase py-3">TOTAL</p>
                    </td>
                    <td class="py-5"></td>
                    <td class="py-5"></td>
                    <td class="py-5">
                      <div class="py-3 border-bottom border-top">
                        <p class="mb-0 text-dark">$135.00</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              class="row g-4 text-center align-items-center justify-content-center pt-4"
            ></div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <AppFooter />
</template>

<script>
import orderService from "@/services/order.service";
import cartService from "@/services/cart.service";
import productService from "@/services/product.service";
import NavBar from "@/components/User/layout/NavBar.vue";
import AppFooter from "@/components/User/layout/AppFooter.vue";
import SinglePageHeader from "../components/User/checkout/SinglePageHeader.vue";
import paymentService from "@/services/payment.service";
export default {
  name: "paymentMethod",
  components: {
    NavBar,
    AppFooter,
    SinglePageHeader,
  },
  data() {
    return {
      cart: [], // Khởi tạo mảng giỏ hàng
    };
  },
  async created() {
    await this.getCart(); // Lấy dữ liệu giỏ hàng
    await this.populateProducts(); // Lấy chi tiết sản phẩm cho từng mục trong giỏ hàng
    console.log("mãng product");
  },
  methods: {
    async getCart() {
      try {
        const response = await cartService.getCart();
        if (response && response.data) {
          this.cart = response.data; // Đặt dữ liệu giỏ hàng vào biến cục bộ
        }
      } catch (error) {
        console.error(error);
      }
    },
    async populateProducts() {
      for (let item of this.cart) {
        // Duyệt qua từng mục trong giỏ hàng và lấy chi tiết sản phẩm sử dụng `getProduct`
        const productDetails = await this.getProduct(item.ITEM.ID_PRODUCT);
        if (productDetails) {
          item.productDetails = productDetails; // Giả sử bạn muốn thêm productDetails cho mỗi mục
        }
      }
    },
    async getProduct(productId) {
      try {
        const response = await productService.getById(productId);
        if (response && response.data) {
          return {
            name: response.data.NAME_PRODUCT,
            imageUrl: response.data.LIST_FILE_ATTACHMENT_DEFAULT[0].FILE_URL,
            // Thêm các trường khác nếu cần
          };
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    totalPrice(price, quantity) {
      return price * quantity;
    },
    checkLenghtCart() {
      if (this.cart.length > 0) {
        this.$router.push("/checkout");
      } else {
        alert("bạn chưa có hàng trong giỏ");
      }
    },
    async addOrder() {
      await orderService.addOrder();
    },
    async paymentCOD() {
      const response = await paymentService.paymentCOD();
      console.log(response);
      if (response && response.success) {
        this.$router.push("/thanks");
      }
    },
    async paymentMomo() {
      try {
        const response = await paymentService.paymentMOMO();
        console.log(response);

        if (response && response.success) {
          // Lấy đường dẫn thanh toán từ response
          const payUrl = response.data.payUrl;

          // Chuyển hướng người dùng tới trang thanh toán
          window.location.href = payUrl;
        } else {
          // Xử lý khi không thành công (nếu cần)
        }
      } catch (error) {
        console.error("Lỗi khi thanh toán qua MOMO:", error);
        // Xử lý lỗi (nếu cần)
      }
    },
  },
};
</script>

<style></style>
