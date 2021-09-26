<template>
  <div
    class="card"
    style="width: 10rem; height: auto"
    :class="{
      'ten-percent': product.discount === 10,
      'fifthteen-percent': product.discount === 15,
      'twenty-percent': product.discount === 20,
    }"
  >
    <div class="card-body">
      <h6 class="card-title text-center">Categoría: {{ product.category }}</h6>
      <img
        :src="product.imgurl"
        class="card-img-top"
        width="auto"
        height="120px"
        alt="producto"
      />
      <div class="py-3">
        <p class="card-text">Nombre: {{ product.name }}</p>
        <p class="card-text">Codigo: {{ product.code }}</p>
        <p class="card-text">Color: {{ product.color }}</p>
        <p v-if="product.stock > 0" class="card-text">
          Existencias: {{ product.stock }}
        </p>
        <p v-else>No hay stock</p>
        <p class="card-text">
          Precio: $ {{ product.price.toLocaleString('de-DE') }}

          <span v-if="product.havediscount" class="card-text"
            >- {{ product.discount }}%
          </span>
        </p>
      </div>
      <div class="row buy__button px-3">
        <button class="buy__button-text" @click="addProductCart">
          Agregar a carrito 
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: { type: Object, required: true },
  },
  methods: {
    addProductCart() {
      // console.log(this.product);
      this.$store.dispatch("shopcart/addProductToCart", this.product);
    },
  },
};
</script>

<style>
.ten-percent {
  background-color: rgb(255, 224, 230);
}
.fifthteen-percent {
  background-color: rgb(218, 149, 159);
  color: white;
}
.twenty-percent {
  background-color: rgb(206, 111, 127);
  color: white;
}
.card {
  border: none;
  border-radius: 0;
}
.card-text {
  font-size: 0.8rem;
}
.buy__button {
  flex-direction: row-reverse;
  color: #4e4e4e;
  font-size: 0.8em;
}
.buy__button-text:hover {
  border-color: rgb(206, 111, 127);
  color: rgb(206, 111, 127);
}
</style>