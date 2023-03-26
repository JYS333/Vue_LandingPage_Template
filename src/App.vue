<template>
  <div>
    <!-- <Header></Header> -->
    <router-view></router-view>
    <!-- <Footer
      v-show="$route.path == '/home' || $route.path == '/search'"
    ></Footer> -->
    <!-- <Footer v-show="$route.meta.show"></Footer> -->
  </div>
</template>

<script>
// import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    // Footer,
  },
};
</script>

<style></style>
