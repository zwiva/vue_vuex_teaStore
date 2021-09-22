<template>
  <div class="home">
    <!-- <h1 style="font-family: 'Stick No Bills', sans-serif;">Tienda TETETAZA</h1>

    <hr />
    <h1 style="font-family: 'Nunito', sans-serif; font-weigth:700 ">Tienda TETETAZA</h1>
    <hr /> -->

    <!-- <h1 style="font-family: 'Poppins', sans-serif; ">Tienda TETETAZA</h1> -->
    <!-- <hr /> -->

    <!-- <h1 style="font-family: 'Righteous', cursive; ">Tienda TETETAZA</h1> -->
    <!-- <hr /> -->
    <!-- <h1 style="font-family: 'Concert One', cursive; color: #4e4e4e">Tienda TETETAZA</h1> -->
    <h1 class="title_home">Tienda TETETAZA <img src="../assets/img/icon_kawaii.jpg" height="80px" alt=""></h1>
    

    <!-- <h1 style="font-family: 'Stick No Bills', sans-serif; color: #aaaaaa">Tienda TETETAZA</h1> -->

    <hr> 
    <h4>Busca producto:</h4>
    <!-- filtro de busqueda -->
    <input type="text">
    <List />
    <!-- lista comienza vacia y se despliega lo disponible -->

<div>

    <img src="../assets/img/tacita_blanco.png" height="200" width="200" alt="" />
    <p>categoria</p>
    <p>precio</p>
    <p>en oferta</p>
</div>
<div>

    <img src="../assets/img/tazon_unipanda.jpg" height="200" width="200" alt="" />
</div>
    <img src="../assets/img/plato_gato.png" height="200" width="200" alt="" />
    <img src="../assets/img/teteron_push.jpg" height="200" width="200" alt="" />
    <img src="../assets/img/teterita_push.jpg" height="200" width="200" alt="" />
    <img src="../assets/img/cafetera_blanco.png" height="200" width="200" alt="" />
    <img src="../assets/img/mantel_fruta.png" height="200" width="200"  alt="" />
    <img src="../assets/img/cubiertos_color.png" height="200" width="200"  alt="" />  
  </div>
</template>

<script>
import List from "../components/products/List.vue";

export default {
  name: "Home",
  components: {
    List,
  },
  // en este componente se visualiza una lista y se acciona boton para comprar
};
</script>
<style >
.home {
  text-align: center;
  color: #aaaaaa
}
.title_home {
      font-size: 3.5rem;
      font-family: 'Concert One', cursive; 
      color: #4e4e4e
}
p{
  font-size: 0.75rem;
  margin: 0;
}

</style>
