<template>
  <div id="app">
    <Navbar />
    <main role="main" class="mt-5 bg-white"></main>
    <router-view />
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
main {
  margin-top: 65px !important;
}
</style>


