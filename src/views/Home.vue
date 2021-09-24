<template>
  <div class="home">
    <h1 class="title_home">Tienda LATETETAZA</h1>
    <hr />
    <div>
      <h4>
        Buscar producto
        <img
          src="../assets/img/icon_tetera.png"
          height="50"
          width="50"
          alt=""
        />
        :
      </h4>
    </div>
    <!-- filtro de busqueda -->
    <input type="text" class="input__home" />
    <hr />

  </div>
</template>

<script>

// import List from "../src/components/products/List.vue";

export default {
  name: "Home",
  components: {
    // List,
  },
  // en este componente se visualiza una lista y se acciona boton para comprar
};
</script>
<style >
.home {
  text-align: center;
  color: #aaaaaa;
}
.title_home {
  font-size: 3.5rem;
  font-family: "Stick No Bills", sans-serif;
  color: #4e4e4e;
  /* font-family: 'Dosis', sans-serif;  */
  /* font-family: 'Nunito', sans-serif; */
  /* font-family: 'Poppins', sans-serif; */
  /* font-weight: 800; */
}

.input__home {
  min-width: 50%;
}
</style>
