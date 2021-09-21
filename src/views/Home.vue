<template>
  <div class="home">
    <h1>Tienda TETETAZA</h1>

    <h3>Busca producto:</h3>
    <!-- filtro de busqueda -->
    <List />
    <!-- lista comienza vacia y se despliega lo disponible -->

<!--     
    <img src="../assets/img/tacita_blanco.png" height="200" width="200" alt="" />
    <img src="../assets/img/tazon_unipanda.jpg" height="200" width="200" alt="" />
    <img src="../assets/img/plato_gato.png" height="200" width="200" alt="" />
    <img src="../assets/img/teteron_push.jpg" height="200" width="200" alt="" />
    <img src="../assets/img/teterita_push.jpg" height="200" width="200" alt="" />
    <img src="../assets/img/cafetera_blanco.png" height="200" width="200" alt="" />
    <img src="../assets/img/mantel_fruta.png" height="200" width="200"  alt="" />
    <img src="../assets/img/cubiertos_color.png" height="200" width="200"  alt="" />  -->

  </div>
</template>

<script>
import List from "../components/List.vue";

export default {
  name: "Home",
  components: {
    List,
  },
  // en este componente se visualiza una lista y se acciona boton para comprar
};
</script>
