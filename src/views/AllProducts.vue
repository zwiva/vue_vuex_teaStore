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
  </div>
</template>

<script>
import ProductCard from "../components/products/ProductCard.vue";

export default {
  name: "AllProducts",
  components: {
    ProductCard,
  },
};
</script>

<style>
</style>