<template>
  <div>
    <h1>INVENTARIO</h1>
    <section class="product__section">
      <h2>Ingresa nuevo producto</h2>
      <form @submit.prevent="addNewProduct">
        <div>
          <label for="code">Codigo (5 digitos) </label>
          <input
            placeholder="00009"
            id="code"
            name="code"
            type="text"
            maxlength="5"
            v-model="product.code"
            required
          />
        </div>
        <div>
          <label for="category">Categoria </label>
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
        <div>
          <label for="color">Color </label>
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
        <div>
          <label for="stock">Cantidad </label>
          <input
            type="number"
            name="stock"
            id="stock"
            v-model.number="product.stock"
            required
          />
        </div>
        <div>
          <label for="image">Imagen </label>
          <input
            type="text"
            name="image"
            id="image"
            v-model="product.imgurl"
            required
          />

          <!-- <img
      src="https://http2.mlstatic.com/D_NQ_NP_2X_915636-MLC45731957304_042021-F.webp"
      alt=""
    /> -->
          <div>
            <label for="price">Precio </label>
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

          <div>
            <label for="havediscount">Descuento </label>
            <input
              type="checkbox"
              value=""
              id="havediscount"
              name="havediscount"
              v-model="product.havediscount"
            />
          </div>

          <div v-if="this.product.havediscount">
            <label for="discount">Porcentaje descuento </label>
            <input
              type="number"
              name="discount"
              id="discount"
              v-model.number="product.discount"
              required
            />
          </div>
        </div>
        <button type="submit">Agregar nuevo producto</button>
      </form>
    </section>

    <section>
      <h2>Inventario vigente para vender</h2>
      <List :products="products" />
    </section>

  </div>
</template>

<script>
import List from "../components/products/List.vue";
export default {
  // con esta data se debe armar un objeto y pushear al arreglo de inventarioproductos
  data: () => ({
    product: {
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
    },
  },
  components: {
    List,
  },
  props: {
    // se le inyecta desde afuera el arreglo con la data nueva
    products: { type: Array, require: true },
  },
};
</script>

<style>
.product__section {
  text-align: start;
}
</style>