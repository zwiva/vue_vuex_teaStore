<template>
  <div>
    <ul>
      <li v-for="product of $store.state.products.allProducts" :key="product.code">
        {{ product.code }} | {{ product.category }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    allproducts: { type: Array, require: true },
  },
};
</script>

<style>
</style>