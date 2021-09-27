<template>
  <div>
    <ul>
      <li
        v-for="product of allproducts"
        :key="product.code"
        class="item__list mx-auto p-1 m-2"
        :class="{ 'p-3': listmodehome, 'py-3': !listmodehome }"
      >
        <div class="row item__list mx-auto">
          <div class="col-4 col-item col-item-center">
            <span>
              <img :src="product.imgurl" height="60px" class="img__item" />
            </span>
          </div>

          <div class="col-4 col-item col-item-start">
            <p class="item__list">
              <span class="item__list--title">Nombre:</span><br />{{
                product.name
              }}
            </p>

            <p class="item__list">
              <span class="item__list--title">Categoria:</span><br />{{
                product.category
              }}
            </p>

            <p v-if="!listmodehome" class="item__list">
              <span class="item__list--title">Stock:</span>
              <br />{{ product.stock }}
            </p>

            <p class="item__list">
              <span class="item__list--title">Color:</span>
              <br />{{ product.color }}
            </p>

            <p class="item__list">
              <span class="item__list--title">En oferta:</span>
              <br />{{ product.havediscount ? "Sí" : "No" }}
            </p>
          </div>

          <div v-if="listmodehome" class="col col-item text-center my-2">
            <button
              class="col col-item-btn"
              v-if="listmodehome"
              @click="seeAll"
            >
              Ver opciones
            </button>
          </div>

          <div
            v-if="!listmodehome"
            class="col col-item text-center my-2 inventory-btn__section"
          >
            <div class="row col-item-btn">
              <button
                class="col col-item-btn inventory-btn p-1 mr-2"
                @click="addProductCart(product)"
              >
                Agregar a carrito
              </button>

              <button
                class="col col-item-btn inventory-btn p-1"
                @click="goToCart"
              >
                Ir a carrito
              </button>
            </div>

            <!-- <button class="col col-item-btn">
              <span @click="goToCart">Ver opciones</span>
            </button> -->
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    allproducts: { type: Array, require: true },
    listmodehome: { type: Boolean, default: true },
    clicktype: { type: String, require: true },
  },
  methods: {
    seeAll() {
      this.$router.push("/allproducts");
    },
    goToCart() {
      this.$router.push("/shoppingcart");
    },
    addProductCart(product) {
      // console.log(this.product);
      this.$store.dispatch("shopcart/addProductToCart", product);
    },
  },
};
</script>

<style>
.item__list {
  list-style: none;
  background-color: rgb(237, 161, 173);
  color: white;
  width: 90%;
  justify-content: space-evenly;
}
.item__list--title {
  color: rgb(206, 111, 127);
  font-size: 0.75em;
}
.img__item {
  height: 80px;
}
ul {
  padding: 0;
}
.col-item {
  justify-content: flex-start;
  align-self: center;
}
.col-item-start {
  text-align: start;
  padding: 0;
}
.col-item-center {
  text-align: center;
  padding: 0;
}
p.item__list {
  margin: 0;
  width: max-content;
  font-size: 0.9em;
}
.col-item-btn {
  font-size: 0.9em;
  width: 120px;
}
.col-item-btn:hover {
  border-color: rgb(206, 111, 127);
  color: rgb(206, 111, 127);
}
.inventory-btn {
  font-size: 0.8em;
}
.inventory-btn__section {
  margin-left: 3rem;
  margin-right: 3rem;
}
@media (min-width: 375px) {
  br {
    display: none;
  }
  .img__item {
    height: 100px;
  }
  .inventory-btn__section {
    margin-left: 8rem;
    margin-right: 8rem;
  }
}
@media (min-width: 576px) {
  .col-item-btn {
    width: 120px;
  }
  .inventory-btn__section {
    margin-left: inherit;
    margin-right: inherit;
  }
}
</style>