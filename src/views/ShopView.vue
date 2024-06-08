<template>
  <NavBar />
  <Shop />
  <AppFooter />
</template>

<script>
import NavBar from "../components/User/layout/NavBar.vue";
import AppFooter from "@/components/User/layout/AppFooter.vue";
import Shop from "@/components/User/Home/Shop.vue";
export default {
  name: "ShopView",
  components: {
    NavBar,
    AppFooter,
    Shop,
  },
};
</script>

<style></style>
