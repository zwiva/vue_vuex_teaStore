<template>
  <div class="home">
    <h1 class="title_home">
      Tienda LATETE<span class="title__color-main">TAZA</span>
    </h1>
    <hr />
    <div>
      <h4>
        Buscar producto <img src="../assets/img/icon_cup_logo.svg" height="30px" alt="" />:
      </h4>
    </div>
    <!-- filtro de busqueda -->
    <input
      type="text"
      class="input__home"
      placeholder="Escribe tu búsqueda, ejemplo taza..."
      :value="$store.state.products.searchproduct"
      @input="$store.dispatch('products/setSearchProduct', $event.target.value)"
    />
    <hr />
   
    <List
      v-if="$store.state.products.searchproduct"
      :allproducts="$store.getters['products/findProduct']" :listmodehome="true"
    />
  </div>
  <!-- typeof $store.state.products.searchproduct === 'string' -->
</template>

<script>
import List from "../components/products/List.vue";

export default {
  name: "Home",
  components: {
    List,
  },
};
</script>
<style >
.home {
  text-align: center;
  color: #aaaaaa;
}
.title_home {
  font-size: 3.5rem;
  font-family: "Stick No Bills", sans-serif;
  color: #4e4e4e;
  /* font-family: 'Dosis', sans-serif;  */
  /* font-family: 'Nunito', sans-serif; */
  /* font-family: 'Poppins', sans-serif; */
  /* font-weight: 800; */
}

.title__color-main {
  color: rgb(206, 111, 127);
}
.input__home {
  min-width: 50%;
}
</style>
