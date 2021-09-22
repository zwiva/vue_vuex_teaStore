<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark navbar__color-pink">
      <router-link class="navbar-brand" style="font-family: 'Stick No Bills'" to="/"
        >LATETE <img src="../assets/img/icon_taza.png" height="30px" alt="" />
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
            <router-link class="nav-link" to="/newproduct"
              >Nuevo producto</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/shoppingcart"
              >Carrito</router-link
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
  background-color: rgb(255, 146, 182);
}
</style>