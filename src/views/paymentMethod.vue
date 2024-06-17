<template>
  <NavBar />
  <SinglePageHeader />
  <div class="container-fluid py-5">
    <div class="container py-5">
      <h1 class="mb-4">Billing details</h1>
      <form action="#">
        <div class="row g-5">
          <div class="col-md-12 col-lg-6 col-xl-7">
            <div class="row">
              <div class="col-md-12 col-lg-6">
                <div class="form-item w-100">
                  <label class="form-label my-3">First Name<sup>*</sup></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12 col-lg-6">
                <div class="form-item w-100">
                  <label class="form-label my-3">Last Name<sup>*</sup></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>

            <div class="form-check my-3">
              <input
                type="checkbox"
                class="form-check-input"
                id="Account-1"
                name="Accounts"
                value="Accounts"
              />
              <label class="form-check-label" for="Account-1"
                >Create an account?</label
              >
            </div>
            <hr />
            <div class="form-check my-3">
              <input
                class="form-check-input"
                type="checkbox"
                id="Address-1"
                name="Address"
                value="Address"
              />
              <label class="form-check-label" for="Address-1"
                >Ship to a different address?</label
              >
            </div>
            <div class="form-item">
              <textarea
                name="text"
                class="form-control"
                spellcheck="false"
                cols="30"
                rows="11"
                placeholder="Oreder Notes (Optional)"
              ></textarea>
            </div>
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
            >
              <button
                @click="addOrder"
                type="button"
                class="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary"
              >
                Thanh toán tại nhà
              </button>
              <button
                @click="addOrder"
                type="button"
                class="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary"
              >
                Thanh toán qua Momo
              </button>
            </div>
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
  },
};
</script>

<style></style>
