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
                    :src="
                      item.ITEM.PRODUCT_DETAILS.LIST_FILE_ATTACHMENT_DEFAULT[0]
                        .FILE_URL
                    "
                    class="img-fluid me-5 rounded-circle"
                    style="width: 80px; height: 80px"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <p class="mb-0 mt-4">
                  {{ item.ITEM.PRODUCT_DETAILS.NAME_PRODUCT }}
                </p>
              </td>
              <td>
                <p class="mb-0 mt-4">{{ item.ITEM.PRICE }}</p>
              </td>
              <td>
                <div class="input-group quantity mt-4" style="width: 100px">
                  <div class="input-group-btn">
                    <button
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
                      class="btn btn-sm btn-plus rounded-circle bg-light border"
                    >
                      <i class="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </td>
              <td>
                <p class="mb-0 mt-4">
                  {{ totalPrice(item.ITEM.PRICE, item.ITEM.QUANTITY) }}
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
      <!-- Phần khác cho mã giảm giá, vận chuyển và tổng cộng -->
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
  },
};
</script>

<style></style>
