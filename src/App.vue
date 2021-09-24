<template>
  <div id="app">
    <Navbar />
    <div class="container py-5">
      <router-view />
    </div>
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
  //font-family: "Poppins", sans-serif;
  // font-family: 'Josefin Sans', sans-serif;
  font-family: "Stick No Bills", sans-serif;
  font-weight: 500;
  padding-top: 5vh;
}
h1 {
  font-family: "Stick No Bills";
  color: black;
}

h3 {
  color: rgb(167, 59, 119);
}
p {
  margin: 0;
  /* font-size: 0.75rem; */
}
.product__section {
  text-align: start;
  max-width: 720px;
  /* background-color: rgb(255, 232, 244); */
}
</style>
