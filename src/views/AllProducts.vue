<template>
  <div class="product__section mx-auto">
    <h1>Productos</h1>
    <div class="row justify-content-center">
      <div
        class=""
        v-for="(product, index) of $store.state.products.allProducts"
        :key="index"
      >
        <ProductCard :product="product" />
      </div>
    </div>
    <div class="text-center m-4">
      <button class="goToCart__button" @click="goToCart">Ir a carrito</button>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/products/ProductCard.vue";

export default {
  name: "AllProducts",
  components: {
    ProductCard,
  },
  methods:{
    goToCart(){
      this.$router.push("/shoppingcart");
    }
  }
};
</script>

<style>
.goToCart__button{
  background-color: rgb(237, 161, 173);
}
.goToCart__button:hover{
  background-color: white;
  color: rgb(237, 161, 173);
  border: 2px solid rgb(237, 161, 173);
}
</style>