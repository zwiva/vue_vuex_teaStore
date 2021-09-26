<template>
  <div>
    <ul>
      <li
        v-for="product of allproducts"
        :key="product.code"
        class="item__list p-2 mx-auto"
      >
        <span
          ><span class="item__list-title">Categoria:</span>
          {{ product.category }}</span
        >
        <span>
          <span class="item__list-title"> | Stock:</span> {{ product.stock }}
        </span>
        <button>Comprar</button>
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
.item__list {
  list-style: none;
  background-color: rgb(237, 161, 173);
  color: white;
  margin: 0.25em;
  /* border: 0.5px solid pink; */
  width: 90%;
  justify-content: center;
}
.item__list-title {
  color: rgb(206, 111, 127);
}
@media (min-width: 576px) {
  .item__list {
    width: 50%;
  }
}
</style>