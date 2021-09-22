<template>
  <!-- marco para mostrar los productos -->
  <div class="card" style="width: 18rem">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Categoria: taza</p>
      <a href="#" class="btn btn-primary">Comprar</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    product: { type: Object, required: true },
  },
};
</script>

<style>
</style>