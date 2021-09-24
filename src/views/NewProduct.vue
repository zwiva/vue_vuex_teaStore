<template>
  <div>
    <h1>Iinventario</h1>
    <!-- Add new product -->
    <h3 class="">Ingresar nuevo producto:</h3>
    <section class="product__section mx-auto">
      <form @submit.prevent="addNewProduct">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="col pb-2">
              <label class="pr-2" for="name">Nombre </label>
              <input
                placeholder="Ingrese nombre"
                id="name"
                name="name"
                type="text"
                minlength="6"
                v-model="product.name"
                required
              />
            </div>
            <div class="col pb-2">
              <label class="pr-2" for="code">Codigo (5 digitos) </label>
              <input
                placeholder="ejemplo: 00009"
                id="code"
                name="code"
                type="text"
                maxlength="5"
                v-model="product.code"
                required
              />
            </div>
            <div class="col pb-2">
              <label class="pr-2" for="category">Categoria </label>
              <select
                name="category"
                id="category"
                v-model="product.category"
                required
              >
                <option value="" selected disabled>Escoger opción</option>
                <option value="tazon">tazon</option>
                <option value="tacita">tacita</option>
                <option value="tetera">tetera</option>
                <option value="cafetera">cafetera</option>
                <option value="cubierto">cubierto</option>
                <option value="mantel">mantel</option>
                <option value="teteron">teteron</option>
                <option value="plato">plato</option>
                <option value="vaso">vaso</option>
              </select>
            </div>
            <div class="col pb-2">
              <label class="pr-2" for="color">Color </label>
              <select name="color" id="color" v-model="product.color" required>
                <option value="" selected disabled>Escoger opción</option>
                <option value="white">blanco</option>
                <option value="brown">cafe</option>
                <option value="black">negro</option>
                <option value="pink">rosado</option>
                <option value="purple">lila</option>
                <option value="green">verde</option>
                <option value="turquoise">turquesa</option>
              </select>
            </div>
            <div class="col pb-2">
              <label class="pr-2" for="stock">Cantidad </label>
              <input
                type="number"
                name="stock"
                id="stock"
                min="0"
                v-model.number="product.stock"
                required
              />
            </div>
            <div class="col pb-2">
              <label class="pr-2" for="image">Imagen </label>
              <input
                type="text"
                name="image"
                id="image"
                v-model="product.imgurl"
                required
              />
            </div>
            <div class="col pb-2">
              <label class="pr-2" for="price">Precio </label>
              <input
                type="number"
                name="price"
                id="price"
                min="0"
                max="100000"
                v-model.number="product.price"
                required
              />
            </div>
            <div class="col pb-2">
              <label class="pr-2" for="havediscount">Descuento </label>
              <input
                type="checkbox"
                value=""
                id="havediscount"
                name="havediscount"
                v-model="product.havediscount"
              />
            </div>
            <div class="col pb-2" v-if="this.product.havediscount">
              <label class="pr-2" for="discount">Porcentaje descuento </label>

              <select
                name="discount"
                id="discount"
                v-model.number="product.discount"
                required
              >
                <option value="" selected disabled>Escoger opción</option>
                <option value="10">10%</option>
                <option value="15">15%</option>
                <option value="20">20%</option>
              </select>
              <!-- <input
                type="number"
                name="discount"
                id="discount"
                v-model.number="product.discount"
                min="10"
                max="20"
                step="5"
                required
              /> -->
            </div>
          </div>
          <div class="col-12 col-md-6 text-center">
            <img
              class="img-fluid"
              v-if="product.imgurl"
              :src="product.imgurl"
              alt="imagen_rota"
            />
            <img
              v-else
              src="../assets/img/icon_kawaii.jpg"
              width="250"
              height="250"
              alt=""
              style="opacity: 0.5; filter: grayscale(100%)"
            />
            <p v-if="product.imgurl">Vista previa producto</p>
          </div>
        </div>
        <div class="text-center m-3">
          <button type="submit">Agregar nuevo producto</button>
        </div>
      </form>
    </section>

    <!-- See all products: old and new -->
    <section>
      <h3>Inventario vigente para vender:</h3>
      <!-- <List :products="products" /> -->
    </section>
  </div>
</template>

<script>
// import List from "../components/products/List.vue";
export default {
  // Object data for new product,
  data: () => ({
    product: {
      name: null,
      code: null,
      category: null,
      color: null,
      price: null,
      havediscount: false,
      discount: null,
      stock: null,
      imgurl: null,
    },
  }),
  methods: {
    addNewProduct() {
      console.log("vista nuevo producto", this.product);
      this.$store.dispatch("products/createNewProduct", { ...this.product });
      alert("El producto se ha creado satisfactoriamente, sera redirigido a la vista de productos.");
      this.$router.push("/allproducts");
    },
  },
};
</script>

<style>
label {
  color: #656565;
}
.product__section {
  text-align: start;
  /* background-color: rgb(255, 232, 244); */
  max-width: 720px;
}
section {
  margin-bottom: 1.5em;
}
input[type="text"],
input[type="number"],
select {
  height: 1.8em;
}
input[type="text"],
input[type="number"] {
  width: 7em;
}
</style>