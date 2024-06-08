<template>
  <NavBar />
  <SinglePageHeaderVue />
  <PageFound />
  <AppFooter />
</template>

<script>
import NavBar from "../components/User/layout/NavBar.vue";
import Page404 from "../components/User/404/Page404.vue";
import PageFound from "../components/User/404/Page404.vue";
import SinglePageHeaderVue from "@/components/User/404/SinglePageHeader.vue";

export default {
  name: "404View",
  components: { NavBar, PageFound, SinglePageHeaderVue, Page404 },
};
</script>

<style></style>
