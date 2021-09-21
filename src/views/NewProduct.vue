<template>
  <div>
    <h1>INVENTARIO</h1>
    <section class="product__section">
      <h2>Ingresa nuevo producto</h2>

      <!-- si hubiera que agregar, debe tener -->
      <form>
        <div>
          <!-- code: "00002", -->
          <label for="codigo">Codigo</label>
          <input type="text" />
        </div>
        <div>
          <!-- category: "tazon", -->
          <label for="">Categoria</label>
          <select name="" id="">
            <option value="">tazon</option>
            <option value="">tacita</option>
            <option value="">tetera</option>
            <option value="">cafetera</option>
            <option value="">cubierto</option>
            <option value="">mantel</option>
            <option value="">teteron</option>
            <option value="">plato</option>
          </select>
        </div>
        <div>
          <!-- color: "blanco",  -->
          <label for="">Color</label>
          <select name="" id="">
            <option value="">blanco</option>
            <option value="">cafe</option>
            <option value="">otro</option>
          </select>
        </div>
        <div>
          <!-- price: 1111,  -->
          <label for="">Precio</label>
          <input type="number" name="" id="" />
        </div>
        <div>
          <!-- discount: true,  -->
          <label for="">Descuento</label>
          <select name="">
            <option value="">si</option>
            <option value="">no</option>
          </select>
        </div>
        <div>
          <!-- percentagediscount: 0.15,  -->
          <label for="">Porcentaje descuento</label>
          <input type="number" />
        </div>

        <div>
          <!-- aplicar como estilo -->
          <!-- discountcolor: "#134556", -->
          <!-- desplegable colores cerrados -->
        </div>
        <div>
          <!-- stock: 10, -->
          <label for="">Stock</label>
          <input type="number" />
        </div>
        <div>
          <!-- imgurl: "../assets/img/tazon_unipanda.jpg", -->
          <label for="">Imagen</label>
          <input type="text" />

          <!-- <img
      src="https://http2.mlstatic.com/D_NQ_NP_2X_915636-MLC45731957304_042021-F.webp"
      alt=""
    /> -->
        </div>
        <button type="submit">Agregar nuevo producto</button>
      </form>
    </section>
    <section>
      <h2>Inventario vigente</h2>
    </section>
  </div>
</template>

<script>
export default {
  // con esta data se debe armar un objeto y pushear al arreglo de inventarioproductos
};
</script>

<style>
.product__section {
  text-align: start;
}
</style>