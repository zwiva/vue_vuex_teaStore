<template>
  <footer>
    <div class="row footer__spacer">
      <h5 class="p-4">
        <img src="../assets/img/icon_cup_logo.svg" height="20px" alt="" />
        <img src="../assets/img/icon_cup_logo.svg" height="20px" alt="" />
        <img src="../assets/img/icon_cup_logo.svg" height="20px" alt="" />
        Tienda T E T E T A Z A - 2021
        <img src="../assets/img/icon_cup_logo.svg" height="20px" alt="" />
        <img src="../assets/img/icon_cup_logo.svg" height="20px" alt="" />
        <img src="../assets/img/icon_cup_logo.svg" height="20px" alt="" />
      </h5>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
footer {
  height: 5em;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: pink;
  color: rgb(137, 137, 137); 
  vertical-align: center;
}
.footer__spacer {
  align-self: center;
}
</style>