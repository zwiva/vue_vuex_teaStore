export const shopcartModule = {
  namespaced: true,
  state: {
    inCartProducts: [],
  },
  getters: {

  },

  mutations: {
    ADD_PRODUCT(state, newProductCart) {
      state.inCartProducts.push(newProductCart);
      console.log("en el carrito", state.inCartProducts);
      console.log("state", state);
    },
  },

  actions: {
    addProductToCart(context, product) {
      // console.log(context, product)
      // eslint-disable-next-line no-unused-vars
      const { stock, ...inCartProduct } = product;
      context.commit("ADD_PRODUCT", { ...inCartProduct, quantity: 1 });
  
    },
  },
};
