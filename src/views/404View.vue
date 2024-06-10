<template>
  <div>
    <NavBar />
    <SinglePageHeaderVue />
    <PageFound />
    <AppFooter />
    <Login />
  </div>
</template>

<script>
import NavBar from "../components/User/layout/NavBar.vue";
import AppFooter from "@/components/User/layout/AppFooter.vue";
import PageFound from "../components/User/404/Page404.vue";
import SinglePageHeaderVue from "@/components/User/404/SinglePageHeader.vue";
export default {
  name: "404View",
  components: { NavBar, PageFound, SinglePageHeaderVue, AppFooter, }, // Đảm bảo chỉ sử dụng component Login ở đây
};
</script>

<style></style>
