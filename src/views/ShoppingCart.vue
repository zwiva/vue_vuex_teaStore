<template>
  <div class="shopping-car">
    <h1>Carrito de compra<img v-if="$store.state.shopcart.inCartProducts.length" src="../assets/img/icon_cup_logo.svg" height="30px" alt="" /></h1>
    <div v-if="$store.state.shopcart.inCartProducts.length">
      <ProductCard
        v-for="(product, index) in $store.state.shopcart.inCartProducts"
        :key="index"
        :product="product"
        class="my-3 pb-3"
      />

      <div class="row buy-cart__section-button">
        <div class="">
          <h3>
            Total a pagar: $
            {{
              $store.getters["shopcart/shopCartTotalAmount"].toLocaleString(
                "de-DE"
              )
            }}
          </h3>
        </div>
        <div class="">
          <button class="buy-cart__button-color" @click="buyCart">
            Comprar carrito
          </button>
        </div>
      </div>
    </div>
    <div v-else><p class="empty-cart">Tu carrito esta vacío.<img src="../assets/img/icon_cup_logo.svg" height="" alt="" /></p>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/cart/ProductCart.vue";
export default {
  // en este componente se registra la venta
  components: {
    ProductCard,
  },
  methods: {
    async buyCart() {
      await this.$store.dispatch("shopcart/buyCart");
      alert("Su compra se ha realizado con exito");
      this.$router.push("/home")
    },
  },
};
</script>

<style>
.buy-cart__section-button {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.buy-cart__button-color {
  background-color: rgb(206, 111, 127);
  color: white;
}
.buy-cart__button-color:hover {
  color: rgb(206, 111, 127);
  background-color: white;
}
.empty-cart {
  text-align: center;
}
@media (min-width: 576px) {
  .buy-cart__section-button {
    justify-content: space-evenly;
    flex-direction: row;
  }
}
</style>
