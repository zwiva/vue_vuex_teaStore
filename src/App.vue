<template>
  <div id="app">
    <Navbar />

    <div class="container py-5 main__app">
      <transition name="main__action" mode="out-in">
        <router-view />
      </transition>
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
  color: #4e4e4e;
  text-align: center;
}

h3 {
  color: rgb(206, 111, 127);
}
p {
  margin: 0;
  /* font-size: 0.75rem; */
  color: #4e4e4e;
}
.product__section {
  text-align: start;
  /* background-color: rgb(255, 232, 244); */
}
.main__app {
  max-width: 768px;
}
.main__action-enter-active,
.main__action-leave-active {
  transition: opacity 0.25s;
}
.main__action-enter,
.main__action-leave-to {
  opacity: 0;
}
button {
  color:#6c6c6c;
}

</style>
