<template>
  <div
    class="card"
    style="width: 12rem; height: auto"
    :class="{
      'ten-percent': product.discount === 10,
      'fifthteen-percent': product.discount === 15,
      'twenty-percent': product.discount === 20,
    }"
  >
    <div class="card-body">
      <h5 class="card-title text-center">Categoría: {{ product.category }}</h5>
      <img
        :src="product.imgurl"
        class="card-img-top"
        width="auto"
        height="150px"
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
          Precio: $ {{ product.price }}

          <span v-if="product.havediscount" class="card-text"
            >- {{ product.discount }}%
          </span>
        </p>
      </div>
      <div class="row buy__button px-3">
        <button class="" @click="addProductCart">Comprar</button>
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
.buy__button{
  flex-direction: row-reverse;
}
</style>