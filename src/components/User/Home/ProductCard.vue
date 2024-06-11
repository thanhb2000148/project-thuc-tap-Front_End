<template>
  <div class="rounded position-relative fruite-item">
    <div class="fruite-img">
      <img :src="productImage" class="img-fluid w-100 rounded-top" alt="" />
    </div>
    <!-- <div
      class="text-white bg-secondary px-3 py-1 rounded position-absolute"
      style="top: 10px; left: 10px"
    >
      {{ product.CATEGORY_ID }}
    </div> -->
    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
      <h4>{{ product.NAME_PRODUCT }}</h4>
      <p>{{ product.SHORT_DESC }}</p>
      <div class="d-flex justify-content-between flex-lg-wrap">
        <p class="text-dark fs-5 fw-bold mb-0">{{ productPrice }} / kg</p>
        <a
          href="#"
          class="btn border border-secondary rounded-pill px-3 text-primary"
        >
          <i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
  computed: {
    productImage() {
      return this.product.LIST_FILE_ATTACHMENT_DEFAULT[0].FILE_URL; // Cập nhật tùy thuộc vào cấu trúc thực tế
    },
    productPrice() {
      return this.product.PRICE; // Cập nhật tùy thuộc vào cấu trúc thực tế
    },
  },
};
</script>

<style scoped>
/* Add any specific styles for ProductCard if needed */
</style>
