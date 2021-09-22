<template>
  <div>
    <p>componente lista(borrar)</p>
    <ul v-for="(product, index) of products" :key="index">
      <li>{{product.code}} | {{product.category}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    products: { type: Array, require: true },
  },
};
</script>

<style>
</style>