<template>
  <div>
    <p>la maldita lista</p>
    <ul>
      <li v-for="product of allproducts" :key="product.code">
        {{ product.code }} | 
        {{ product.category }}
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