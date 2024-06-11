<template>
  <div class="home">
    <NavBar />
    <Hero />
    <Featurs />
    <div class="container-fluid fruite py-5">
      <div class="container py-5">
        <div class="tab-class text-center">
          <div class="row g-4">
            <div class="col-lg-4 text-start">
              <h1>Các sản phẩm của chúng tôi</h1>
            </div>
            <div class="col-lg-8 text-end">
              <ul class="nav nav-pills d-inline-flex text-center mb-5">
                <li class="nav-item">
                  <a
                    class="d-flex m-2 py-2 bg-light rounded-pill active"
                    data-bs-toggle="pill"
                    href="#tab-1"
                  >
                    <span class="text-dark" style="width: 130px"
                      >Tất cả sản phẩm</span
                    >
                  </a>
                </li>
                <li
                  class="nav-item"
                  v-for="(item, index) in nameCategory"
                  :key="index"
                >
                  <a
                    class="d-flex py-2 m-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    :href="`#tab-${index}`"
                  >
                    <span class="text-dark" style="width: 130px">{{
                      item.CATEGORY_NAME
                    }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="tab-content">
            <div
              id="tab-1"
              class="tab-pane fade show p-0 active"
              v-for="item in productCategory"
              :key="item._id"
            >
              <div class="row g-4">
                <div class="col-lg-12">
                  <div class="row g-4">
                    <div class="col-md-6 col-lg-4 col-xl-3">
                      <div class="rounded position-relative fruite-item">
                        <div class="fruite-img">
                          <img
                            src="img/fruite-item-5.jpg"
                            class="img-fluid w-100 rounded-top"
                            alt=""
                          />
                        </div>
                        <div
                          class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style="top: 10px; left: 10px"
                        >
                          Fruits
                        </div>
                        <div
                          class="p-4 border border-secondary border-top-0 rounded-bottom"
                        >
                          <h4>Grapes</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          <div
                            class="d-flex justify-content-between flex-lg-wrap"
                          >
                            <p class="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                            <a
                              href="#"
                              class="btn border border-secondary rounded-pill px-3 text-primary"
                              ><i
                                class="fa fa-shopping-bag me-2 text-primary"
                              ></i>
                              Add to cart</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 col-lg-4 col-xl-3">
                      <div class="rounded position-relative fruite-item">
                        <div class="fruite-img">
                          <img
                            src="img/fruite-item-5.jpg"
                            class="img-fluid w-100 rounded-top"
                            alt=""
                          />
                        </div>
                        <div
                          class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style="top: 10px; left: 10px"
                        >
                          Fruits
                        </div>
                        <div
                          class="p-4 border border-secondary border-top-0 rounded-bottom"
                        >
                          <h4>Grapes</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          <div
                            class="d-flex justify-content-between flex-lg-wrap"
                          >
                            <p class="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                            <a
                              href="#"
                              class="btn border border-secondary rounded-pill px-3 text-primary"
                              ><i
                                class="fa fa-shopping-bag me-2 text-primary"
                              ></i>
                              Add to cart</a
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
    </div>
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/User/layout/NavBar.vue";
import AppFooter from "@/components/User/layout/AppFooter.vue";
import Featurs from "@/components/User/Home/Featurs.vue";
import Hero from "@/components/User/Home/Hero.vue";
import categoryService from "@/services/category.service";
import productService from "@/services/product.service";
export default {
  name: "HomeView",
  components: {
    NavBar,
    AppFooter,
    Featurs,
    Hero,
  },
  data() {
    return {
      nameCategory: [],
      productCategory: [],
    };
  },
  async created() {
    try {
      await this.getCategory();
      console.log("mãng category", this.nameCategory);
      await this.getProductCategory();
      console.log("mãng product", this.productCategory);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async getCategory() {
      try {
        const response = await categoryService.getAll();
        if (response && response.data) {
          this.nameCategory = response.data;
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async getProductCategory() {
      try {
        if (Array.isArray(this.nameCategory)) {
          for (const category of this.nameCategory) {
            const response = await productService.getProductByIdCategory(
              category._id
            );
            if (response && response.data) {
              this.productCategory.push(response.data);
            }
          }
        } else {
          console.error("category is not an array:", this.products);
        }
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>
