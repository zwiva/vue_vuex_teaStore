<template>
  <div>
    <div class="row">
      <div class="col col-xs-4 col-sm-2 col-md-2 col-xl-2">
        <img :src="product.imgurl" alt="" height="70px" />
      </div>
      <div class="col col-xs-8 col-sm-10 col-md-19 col-xl-10">
        <div class="row items__cart text-center">
          <div class="item__cart">
            <div><span class="item__cart-title">Nombre</span></div>
            <!-- <div>xxxxxxxx</div> -->
            <div>
              <span class="item__cart-content">{{ product.name }}</span>
            </div>
          </div>
          <div class="item__cart">
            <div><span class="item__cart-title">Categoría</span></div>
            <!-- <div>xxxxxxxxx</div> -->
            <div>
              <span class="item__cart-content">{{ product.category }}</span>
            </div>
          </div>
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
              <span class="item__cart-content">${{ product.price }}</span>
            </div>
          </div>
          <div class="item__cart">
            <div><span class="item__cart-title">Descuento</span></div>
            <!-- <div>x%</div> -->
            <div>
              <span class="item__cart-content">{{ product.discount }}%</span>
            </div>
          </div>
          <div class="item__cart">
            <div><span class="item__cart-title">Cantidad</span></div>
            <!-- <div>x</div> -->
            <div>
              <span class="item__cart-content">{{ product.quantity }}</span>
            </div>
          </div>
          <div class="item__cart">
            <div><span class="item__cart-title">Pagar</span></div>
            <!-- <div>$xxxx</div> -->
            <div><span>$xxxx</span></div>
          </div>
        </div>
      </div>
    </div>
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
.items__cart {
  justify-content: flex-end;
}
.item__cart {
  margin-right: 0.5em;
}

@media (max-width: 560px) {
  .item__cart-title{
    margin-right: 0.5em;
  }
  .items__cart {
    flex-direction: column;
    margin: 0 auto;
  }
  .item__cart {
    display: flex;
    flex-direction: row;
  }
}
</style>