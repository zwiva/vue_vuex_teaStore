<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-dark navbar__color-pink fixed-top"
    >
      <router-link
        class="navbar-brand"
        style="font-family: 'Stick No Bills'"
        to="/"
        >LATETE <img src="../assets/img/icon_cup.svg" height="30px" alt="" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="ml-auto navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'AllProducts' }"
              >Productos</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'NewProduct' }"
              >Nuevo producto</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'ShoppingCart' }"
              >Ver carrito</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.navbar__color-pink {
  background-color: rgb(206, 111, 127);
}
</style>