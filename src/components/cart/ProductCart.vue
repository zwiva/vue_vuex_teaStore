<template>
  <div>
    <div class="row mx-auto cart__section">
      <div class="img__cart mx-1">
        <img :src="product.imgurl" alt="" />
      </div>
      <div class="mx-1 p-3">
        <div class="row items__cart text-center">
          <div class="row item__cart-row">
            <div class="item__cart">
              <div><span class="item__cart-title">Categoría</span></div>
              <!-- <div>xxxxxxxxx</div> -->
              <div>
                <span class="item__cart-content">{{ product.category }}</span>
              </div>
            </div>
            <div class="item__cart">
              <div><span class="item__cart-title">Nombre</span></div>
              <!-- <div>xxxxxxxx</div> -->
              <div>
                <span class="item__cart-content">{{ product.name }}</span>
              </div>
            </div>
          </div>

          <div class="row item__cart-row">
            <div class="item__cart">
              <div><span class="item__cart-title">Color</span></div>
              <!-- <div>xxxxxxx</div> -->
              <div>
                <span class="item__cart-content">{{ product.color }}</span>
              </div>
            </div>
            <div class="item__cart">
              <div><span class="item__cart-title">Precio</span></div>
              <!-- <div>$xxxx</div> -->
              <div>
                <span class="item__cart-content">$ {{ product.price.toLocaleString('de-DE') }}</span>
              </div>
            </div>
          </div>

          <div class="row item__cart-row">
            <div class="item__cart">
              <div><span class="item__cart-title">Descuento</span></div>
              <!-- <div>x%</div> -->
              <div v-if="product.discount > 0">
                <span class="item__cart-content item__cart-content--discount"
                  >{{ product.discount }}%</span
                >
              </div>
              <div v-else>
                <span class="item__cart-content">Sin descuento</span>
              </div>
            </div>

            <div class="item__cart">
              <div><span class="item__cart-title">Precio final</span></div>
              <!-- <div>x%</div> -->
              <div>
                <span class="item__cart-content"
                  >$ {{ (product.price * (1 - product.discount / 100)).toLocaleString('de-DE') }}</span
                >
              </div>
            </div>
          </div>

          <div class="row item__cart-row">
            <div class="item__cart">
              <div><span class="item__cart-title">Cantidad</span></div>
              <!-- <div>x</div> -->
              <div>
                <button
                  class="button-cart px-2"
                  @click="$store.dispatch('shopcart/addProductToCart', product)"
                >
                  +
                </button>
                <span class="item__cart-content"> {{ product.quantity }} </span>
                <button
                  class="button-cart px-2"
                  @click="$store.dispatch('shopcart/subProductInCart', product)"
                >
                  -
                </button>
              </div>
            </div>
          </div>

          <div class="row item__cart row">
            <div class="item__cart">
              <div><span class="item__cart-title">Pagar</span></div>
              <!-- <div>$xxxx</div> -->
              <div>
                <span
                  >$
                  {{
                    (product.price *
                    (1 - product.discount / 100) *
                    product.quantity).toLocaleString('de-DE')
                  }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <span class="item__cart-title">Quitar</span>
        <button
          class="button-cart px-2"
          @click="$store.dispatch('shopcart/eraseProductOfCart', product)"
        >
          x
        </button>
      </div>
    </div>
    <hr class="cart__separation"/>
  </div>
</template>

<script>
export default {
  name: "productcart",
  props: {
    product: { type: Object, require: true },
  },
};
</script>

<style>
.img__cart {
  align-self: center;
}
.img__cart > img {
  height: 70px;
}
.cart__section {
  justify-content: center;
  /* border-radius: 5px; */
}
.cart__separation {
  background-color:  pink;

}
.items__cart {
  flex-direction: column;
  margin: 0 auto;
}
.item__cart {
  display: flex;
  margin-right: 0.5em;
}

.item__cart-title {
  margin-right: 0.25em;
  font-size: 0.75em;
  color: rgb(157, 157, 157);
}
.item__cart-content {
  font-size: 0.8em;
  justify-content: center;
}
.item__cart-content--discount {
  color: rgb(206, 111, 127);
}
.button-cart {
  /* border-color: rgb(206, 111, 127); */
  border-color: pink;

  /* background-color: rgb(206, 111, 127); */
  background-color: pink;
  /* border-radius: 5px; */
}
</style>