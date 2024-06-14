<template>
  <NavBar />
  <div class="container-fluid fruite py-5">
    <div class="container py-5">
      <h1 class="mb-4">Fresh fruits shop</h1>
      <div class="row g-4">
        <div class="col-lg-12">
          <div class="row g-4">
            <div class="col-xl-3">
              <div class="input-group w-100 mx-auto d-flex">
                <input
                  type="search"
                  class="form-control p-3"
                  placeholder=""
                  aria-describedby="search-icon-1"
                />
                <span id="search-icon-1" class="input-group-text p-3"
                  ><i class="fa fa-search"></i
                ></span>
              </div>
            </div>
            <div class="col-6"></div>
            <div class="col-xl-3">
              <div
                class="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4"  
              >
                <label for="fruits">Default Sorting:</label>
                <select
                  id="fruits"
                  name="fruitlist"
                  class="border-0 form-select-sm bg-light me-3"
                  form="fruitform"
                >
                  <option value="volvo">Nothing</option>
                  <option value="saab">Popularity</option>
                  <option value="opel">Organic</option>
                  <option value="audi">Fantastic</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row g-4">
            <div class="col-lg-3">
              <div class="row g-4">
                <div class="col-lg-12">
                  <div class="mb-3">
                    <h4>Categories</h4>
                    <ul class="list-unstyled fruite-categorie">
                      <li>
                        <div class="d-flex justify-content-between fruite-name">
                          <a href="#"
                            ><i class="fas fa-apple-alt me-2"></i>Thời Trang</a
                          >
                          <span>(3)</span>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex justify-content-between fruite-name">
                          <a href="#"
                            ><i class="fas fa-apple-alt me-2"></i>Đồ Ăn</a
                          >
                          <span>(5)</span>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex justify-content-between fruite-name">
                          <a href="#"
                            ><i class="fas fa-apple-alt me-2"></i>Điện Thoại</a
                          >
                          <span>(2)</span>
                        </div>
                      </li>
                      <!-- <li>
                        <div class="d-flex justify-content-between fruite-name">
                          <a href="#"
                            ><i class="fas fa-apple-alt me-2"></i>Banana</a
                          >
                          <span>(8)</span>
                        </div> -->
                      <!-- </li>
                      <li>
                        <div class="d-flex justify-content-between fruite-name">
                          <a href="#"
                            ><i class="fas fa-apple-alt me-2"></i>Pumpkin</a
                          >
                          <span>(5)</span>
                        </div>
                      </li> -->
                    </ul>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-3">
                    <h4 class="mb-2">Price</h4>
                    <input
                      type="range"
                      class="form-range w-100"
                      id="rangeInput"
                      name="rangeInput"
                      min="0"
                      max="500"
                      value="0"
                      oninput="amount.value=rangeInput.value"
                    />
                    <output
                      id="amount"
                      name="amount"
                      min-velue="0"
                      max-value="500"
                      for="rangeInput"
                      >0</output
                    >
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-3">
                    <h4>Additional</h4>
                    <div class="mb-2">
                      <input
                        type="radio"
                        class="me-2"
                        id="Categories-1"
                        name="Categories-1"
                        value="Beverages"
                      />
                      <label for="Categories-1"> Organic</label>
                    </div>
                    <div class="mb-2">
                      <input
                        type="radio"
                        class="me-2"
                        id="Categories-2"
                        name="Categories-1"
                        value="Beverages"
                      />
                      <label for="Categories-2"> Fresh</label>
                    </div>
                    <div class="mb-2">
                      <input
                        type="radio"
                        class="me-2"
                        id="Categories-3"
                        name="Categories-1"
                        value="Beverages"
                      />
                      <label for="Categories-3"> Sales</label>
                    </div>
                    <div class="mb-2">
                      <input
                        type="radio"
                        class="me-2"
                        id="Categories-4"
                        name="Categories-1"
                        value="Beverages"
                      />
                      <label for="Categories-4"> Discount</label>
                    </div>
                    <div class="mb-2">
                      <input
                        type="radio"
                        class="me-2"
                        id="Categories-5"
                        name="Categories-1"
                        value="Beverages"
                      />
                      <label for="Categories-5"> Expired</label>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <h4 class="mb-3">Featured products</h4>
                  <div class="d-flex align-items-center justify-content-start">
                    <div
                      class="rounded me-4"
                      style="width: 100px; height: 100px"
                    >
                      <img
                        src="img/featur-1.jpg"
                        class="img-fluid rounded"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 class="mb-2">Big Banana</h6>
                      <div class="d-flex mb-2">
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <div class="d-flex mb-2">
                        <h5 class="fw-bold me-2">2.99 $</h5>
                        <h5 class="text-danger text-decoration-line-through">
                          4.11 $
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-start">
                    <div
                      class="rounded me-4"
                      style="width: 100px; height: 100px"
                    >
                      <img
                        src="img/featur-2.jpg"
                        class="img-fluid rounded"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 class="mb-2">Big Banana</h6>
                      <div class="d-flex mb-2">
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <div class="d-flex mb-2">
                        <h5 class="fw-bold me-2">2.99 $</h5>
                        <h5 class="text-danger text-decoration-line-through">
                          4.11 $
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-start">
                    <div
                      class="rounded me-4"
                      style="width: 100px; height: 100px"
                    >
                      <img
                        src="img/featur-3.jpg"
                        class="img-fluid rounded"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 class="mb-2">Big Banana</h6>
                      <div class="d-flex mb-2">
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <div class="d-flex mb-2">
                        <h5 class="fw-bold me-2">2.99 $</h5>
                        <h5 class="text-danger text-decoration-line-through">
                          4.11 $
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center my-4">
                    <a
                      href="#"
                      class="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
                      >Vew More</a
                    >
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="position-relative">
                    <img
                      src="img/banner-fruits.jpg"
                      class="img-fluid w-100 rounded"
                      alt=""
                    />
                    <div
                      class="position-absolute"
                      style="top: 50%; right: 10px; transform: translateY(-50%)"
                    >
                      <h3 class="text-secondary fw-bold">
                        Fresh <br />
                        Fruits <br />
                        Banner
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="row g-4 justify-content-center">
                <div
                  class="col-md-6 col-lg-6 col-xl-4 min-height"
                  v-for="item in products"
                  :key="item._id"
                >
                  <div class="rounded position-relative fruite-item">
                    <router-link
                      :to="{ name: 'UserDetail', params: { id: item._id } }"
                      ><div class="fruite-img">
                        <img
                          :src="item.LIST_FILE_ATTACHMENT_DEFAULT[0].FILE_URL"
                          class="img-fluid rounded-top"
                          alt=""
                        /></div
                    ></router-link>
                    <!-- <div
                      class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                      style="top: 10px; left: 10px"
                    >
                      New
                    </div> -->
                    <div
                      class="p-4 border border-secondary border-top-0 rounded-bottom size-text"
                    >
                      <h4>{{ item.NAME_PRODUCT }}</h4>
                      <p>
                        {{ item.SHORT_DESC }}
                      </p>
                      <div class="d-flex justify-content-between flex-lg-wrap">
                        <p class="text-dark fs-5 fw-bold mb-0">
                          {{
                            getPrice(item._id).toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })
                          }}
                        </p>
                        <a
                          @click="addCartNonKV(item._id)"
                          href="#"
                          class="btn border border-secondary rounded-pill px-3 text-primary"
                          ><i class="fa fa-shopping-bag me-2 text-primary"></i>
                          Thêm Vào Giỏ Hàng</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <PaginationLayout />
  <AppFooter />
</template>

<script>
import NavBar from "@/components/User/layout/NavBar.vue";
import AppFooter from "@/components/User/layout/AppFooter.vue";
import PaginationLayout from "@/components/User/layout/PaginationLayout.vue";

import productService from "@/services/product.service";
import PriceService from "@/services/price.service";
import cartService from "@/services/cart.service";

export default {
  name: "ShopView",
  components: {
    NavBar,
    AppFooter,
    PaginationLayout,
  },
  data() {
    return {
      products: [],
      prices: [],
      cart: [],
    };
  },

  async created() {
    try {
      await this.getProduct();
      console.log("Mảng products:", this.products);
      await this.getPriceProduct();
      console.log("Mãng prices:", this.prices);
      await this.addCartNonKV();
      console.log("trả về Cart", this.cart);
    } catch (error) {
      console.error("Error during component initialization:", error);
    }
  },
  methods: {
    async getProduct() {
      try {
        const response = await productService.getAll();
        if (response && response.data) {
          this.products = response.data; // Lưu mảng sản phẩm vào this.products
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error; // Re-throw error to be caught by the caller
      }
    },
    async getPriceProduct() {
      try {
        // Kiểm tra nếu this.products là một mảng
        if (Array.isArray(this.products)) {
          const prices = {};
          for (const product of this.products) {
            const response = await PriceService.getDefaultPrice(product._id);
            if (response && response.data && response.data[0]) {
              prices[product._id] = response.data[0].PRICE_NUMBER;
            } else {
              console.error("Unexpected response structure:", response);
            }
          }
          this.prices = prices; // Cập nhật trạng thái `prices`
        } else {
          console.error("products is not an array:", this.products);
        }
      } catch (error) {
        console.error("lỗi khi lấy giá:", error);
        throw error; // Re-throw error to be caught by the caller
      }
    },
    getPrice(productId) {
      const price = this.prices[productId];
      if (price) {
        return price;
      } else {
        return "Đang cập nhật giá";
      }
    },
    addCartNonKV(productId) {
      try {
        const response = cartService.addCart(productId);
        if (response && response.data) {
          console.log("Thêm sản phẩm vào giỏ thành công");
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (error) {
        console.error("lỗi khi thêm sp vào giỏ :", error);
      }
    },
  },
};
</script>

<style>
  .fruite-img {
    overflow: hidden; 
    width: 305px; 
    height: 350px; 
    border-radius: 10px; 
  }

  .fruite-img img {
    width: 100%; /* Đảm bảo rằng hình ảnh luôn đầy đủ chiều rộng của khung */
    height: 100%; /* Đảm bảo rằng hình ảnh luôn đầy đủ chiều cao của khung */
    object-fit: cover; /* Hiển thị hình ảnh mà không biến dạng tỷ lệ */
  }
  .min-height{
    min-height: 595px;
    font-size: 1.4rem;
  }
  .size-text > h4 {
    font-size: 1.4rem;
  }
  .size-text p{
    font-size: 1.2rem;
  }
</style>
