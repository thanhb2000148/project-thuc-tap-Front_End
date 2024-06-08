<template>
  <div class="home">
    <NavBar />
    <Hero />
    <Featurs />

    <Shop />
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/User/layout/NavBar.vue";
import AppFooter from "@/components/User/layout/AppFooter.vue";
import Featurs from "@/components/User/Home/Featurs.vue";
import Hero from "@/components/User/Home/Hero.vue";
import Shop from "@/components/User/Home/Shop.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    AppFooter,
    Featurs,
    Hero,
    Shop,
  },
};
</script>
