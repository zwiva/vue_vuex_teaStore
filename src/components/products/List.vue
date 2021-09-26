<template>
  <div>
    <ul>
      <li
        v-for="product of allproducts"
        :key="product.code"
        class="item__list p-2 mx-auto"
      >
        <span>
          <span class="item__list-stock--title">Categoria:</span>{{ product.category }}
        </span>

        <span>
          <span class="item__list-stock--title"> | Stock:</span> {{ product.stock }}
        </span>

        <span v-if="!listmodehome">
          <span class="item__list-stock--title"> | Color:</span> {{ product.color }}
        </span>

        <button>
          <span v-if="listmodehome" @click="goToCart">Comprar</span>
          <span v-else @click="toSell">Vender</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  methods:{
    goToCart() {
      this.$router.push("/allproducts")
    },
    toSell() {
      console.log('vender y modificar inventario')
    }

  },
  props: {
    allproducts: { type: Array, require: true },
    listmodehome: { type: Boolean, default: true },
  },
};
</script>

<style>
.item__list {
  list-style: none;
  background-color: rgb(237, 161, 173);
  color: white;
  margin: 0.25em;
  /* border: 0.5px solid pink; */
  width: 90%;
  justify-content: center;
}
.item__list-home--title {
  color: rgb(206, 111, 127);
}
.item__list-home--content {
  color: rgb(206, 111, 127);
}
.item__list-stock--title {
  color: rgb(206, 111, 127);
}
.item__list-stock--content {
  color: rgb(206, 111, 127);
}
@media (min-width: 576px) {
  .item__list {
    width: 50%;
  }
}
</style>