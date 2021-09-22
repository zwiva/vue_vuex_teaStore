<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";
import Footer from "../src/components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>


<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  justify-items: center;
  height: 100vh;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
}
h1 {
  font-family: 'Stick No Bills';
  color: black;
}

</style>
