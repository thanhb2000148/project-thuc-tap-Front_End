<template>
  <NavBar />
  <SinglePageHeaderVue />
  <div class="container-fluid py-5">
    <div class="container py-5">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Ảnh sản phẩm</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Tổng cộng</th>
              <th scope="col">Xử lý</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cart" :key="index">
              <td>
                <div class="d-flex align-items-center">
                  <img
                    v-if="
                      item.ITEM.PRODUCT_DETAILS &&
                      item.ITEM.PRODUCT_DETAILS.imageUrl &&
                      item.ITEM.PRODUCT_DETAILS.imageUrl.length > 0
                    "
                    :src="item.ITEM.PRODUCT_DETAILS.imageUrl"
                    class="img-fluid me-5 rounded-circle"
                    style="width: 80px; height: 80px"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <p class="mb-0 mt-4" v-if="item.ITEM.PRODUCT_DETAILS">
                  {{ item.ITEM.PRODUCT_DETAILS.name }}
                </p>
                <p class="mb-0 mt-4" v-else>Thông tin sản phẩm không có sẵn</p>
              </td>
              <td>
                <p class="mb-0 mt-4">{{ formatPrice(item.ITEM.PRICE) }}</p>
              </td>
              <td>
                <div class="input-group quantity mt-4" style="width: 100px">
                  <div class="input-group-btn">
                    <button
                      @click="
                        updateNumberCartMinus(
                          item.ITEM.ID_PRODUCT,
                          '',
                          item.ITEM.QUANTITY - 1
                        )
                      "
                      class="btn btn-sm btn-minus rounded-circle bg-light border"
                    >
                      <i class="fa fa-minus"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    class="form-control form-control-sm text-center border-0"
                    :value="item.ITEM.QUANTITY"
                  />
                  <div class="input-group-btn">
                    <button
                      @click="
                        updateNumberCartPlus(
                          item.ITEM.ID_PRODUCT,
                          '',
                          item.ITEM.QUANTITY + 1
                        )
                      "
                      class="btn btn-sm btn-plus rounded-circle bg-light border"
                    >
                      <i class="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </td>
              <td>
                <p class="mb-0 mt-4">
                  {{
                    formatPrice(totalPrice(item.ITEM.PRICE, item.ITEM.QUANTITY))
                  }}
                </p>
              </td>
              <td>
                <button class="btn btn-md rounded-circle bg-light border mt-4">
                  <i class="fa fa-times text-danger"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-5">
        <input
          type="text"
          class="border-0 border-bottom rounded me-5 py-3 mb-4"
          placeholder="Coupon Code"
        />
        <button
          class="btn border-secondary rounded-pill px-4 py-3 text-primary"
          type="button"
        >
          Apply Coupon
        </button>
      </div>
      <div class="row g-4 justify-content-end">
        <div class="col-8"></div>
        <div class="col-sm-8 col-md-7 col-lg-6 col-xl-4">
          <div class="bg-light rounded">
            <div class="p-4">
              <h1 class="display-6 mb-4">
                Cart <span class="fw-normal">Total</span>
              </h1>
              <div class="d-flex justify-content-between mb-4">
                <h5 class="mb-0 me-4">Subtotal:</h5>
                <p class="mb-0">$96.00</p>
              </div>
              <div class="d-flex justify-content-between">
                <h5 class="mb-0 me-4">Shipping</h5>
                <div class="">
                  <p class="mb-0">Flat rate: $3.00</p>
                </div>
              </div>
              <p class="mb-0 text-end">Shipping to Ukraine.</p>
            </div>
            <div
              class="py-4 mb-4 border-top border-bottom d-flex justify-content-between"
            >
              <h5 class="mb-0 ps-4 me-4">Total</h5>
              <p class="mb-0 pe-4">$99.00</p>
            </div>

            <button
              @click="checkLenghtCart()"
              class="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
              type="button"
            >
              Proceed Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<script>
import cartService from "@/services/cart.service";
import productService from "@/services/product.service";
import NavBar from "@/components/User/layout/NavBar.vue";
import AppFooter from "@/components/User/layout/AppFooter.vue";
import SinglePageHeaderVue from "@/components/User/cart/SinglePageHeader.vue";
import checkLogin from "../utils/checkLogin";
import formatUtils from "../utils/format";
export default {
  name: "CartView",
  components: {
    NavBar,
    AppFooter,
    SinglePageHeaderVue,
  },
  data() {
    return {
      cart: [], // Khởi tạo mảng giỏ hàng
    };
  },
  async created() {
    if (!checkLogin()) {
      this.$router.push("/login");
    } else {
      await this.getCart(); // Lấy dữ liệu giỏ hàng
      console.log("giỏ hàng:", this.cart);
      await this.populateProducts(); // Lấy chi tiết sản phẩm cho từng mục trong giỏ hàng
      await this.updateNumberCartPlus();
    }
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
          item.ITEM.PRODUCT_DETAILS = productDetails;
        } else {
          // Xử lý khi không tìm thấy sản phẩm, ví dụ gán một giá trị mặc định
          item.ITEM.PRODUCT_DETAILS = {
            NAME_PRODUCT: "Sản phẩm không tồn tại",
            LIST_FILE_ATTACHMENT_DEFAULT: [
              { FILE_URL: "default-image-url.jpg" },
            ],
          };
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
    formatPrice(price) {
      if (typeof price !== "undefined") {
        const formatter = formatUtils.formatNumber(); // Initialize the formatter function
        return formatter(price); // Format the price using the formatter function
      } else {
        return "0"; // Hoặc giá trị mặc định khác tùy vào yêu cầu của bạn
      }
    },
    checkLenghtCart() {
      if (this.cart.length > 0) {
        this.$router.push("/checkout");
      } else {
        alert("bạn chưa có hàng trong giỏ");
      }
    },
    async updateNumberCartPlus(id_product, list_match_key, newNumber) {
      try {
        const response = await cartService.updateCart({
          id_product: id_product,
          list_match_key: list_match_key,
          numberCart: newNumber,
        });

        if (response && response.success) {
          // Cập nhật số lượng trong giỏ hàng cục bộ
          const itemIndex = this.cart.findIndex(
            (item) => item.ITEM.ID_PRODUCT === id_product
          );
          if (itemIndex !== -1) {
            // Update QUANTITY trong ITEM
            this.cart[itemIndex].ITEM.QUANTITY = newNumber;
          }
        } else {
          console.error("Cập nhật giỏ hàng thất bại", response.message);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async updateNumberCartMinus(id_product, list_match_key, newNumber) {
      try {
        if (newNumber >= 0) {
          const response = await cartService.updateCart({
            id_product: id_product,
            list_match_key: list_match_key,
            numberCart: newNumber && newNumber >= 0,
          });

          if (response && response.success) {
            // Cập nhật số lượng trong giỏ hàng cục bộ
            const itemIndex = this.cart.findIndex(
              (item) => item.ITEM.ID_PRODUCT === id_product
            );
            if (itemIndex !== -1) {
              // Update QUANTITY trong ITEM
              this.cart[itemIndex].ITEM.QUANTITY = newNumber;
            }
          } else {
            console.error("Cập nhật giỏ hàng thất bại", response.message);
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style></style>
