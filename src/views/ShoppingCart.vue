<template>
  <div class="shopping-car">
    <h1>Carrito de compra</h1>
    <!-- 
    <div>
      <p>Nombre | Categoria | Color | Oferta | %oferta | Stock | Cantidad</p>
    </div> -->

    <div v-if="$store.state.shopcart.inCartProducts.length">
      <ProductCard
        v-for="(product, index) in $store.state.shopcart.inCartProducts"
        :key="index"
        :product="product"
      />
      
      <h3>Total a pagar:</h3>

    </div>
    
    <div v-else><p>Tu carrito esta vacío.</p></div>
  </div>
</template>

<script>
import ProductCard from "../components/cart/ProductCart.vue";
export default {
  // en este componente se registra la venta
  components: {
    ProductCard,
  },
};
</script>
