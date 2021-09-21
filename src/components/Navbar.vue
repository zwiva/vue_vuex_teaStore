<template>
 <div>
   <p>navbar</p>
      <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/shoppingcar">Carrito</router-link> |
      <router-link to="/newproduct">Nuevo producto</router-link>
    </div>
 </div>
</template>

<script>
export default {
  name:"Navbar",
};
</script>

<style>
</style>