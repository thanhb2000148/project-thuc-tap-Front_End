<template>
  <NavBar />
  <SinglePageHeader />
  <CheckOutPage />
  <AppFooter />
</template>

<script>
import NavBar from "@/components/User/layout/NavBar.vue";
import AppFooter from "@/components/User/layout/AppFooter.vue";
import SinglePageHeader from "../components/User/checkout/SinglePageHeader.vue";
import CheckOutPage from "../components/User/checkout/CheckOutPage.vue";
export default {
  name: "CheckOutView",
  components: {
    NavBar,
    AppFooter,
    SinglePageHeader,
    CheckOutPage,
  },
};
</script>

<style></style>
