export const productsModule = {
  namespaced: true,
  state: {
    searchproduct: "",
    allProducts: [
      {
        name: "taza sonrisa",
        code: "00001",
        category: "tacita", //*requerido
        color: "blanco", //*requerido
        price: 4000, //*necesario
        havediscount: true, //*requerido
        discount: 10, //*requerido
        stock: 20, //*necesario
        imgurl:
          "https://assets-vue-vuex-test.netlify.app/img/tacita_blanco.png",
      },
      {
        name: "tazon unipanda",
        code: "00002",
        category: "tazon",
        color: "blanco",
        price: 5000,
        havediscount: true,
        discount: 15,
        stock: 18,
        imgurl:
          "https://assets-vue-vuex-test.netlify.app/img/tazon_unipanda.jpg",
      },
      {
        name: "gatoplato",
        code: "00003",
        category: "plato",
        color: "blanco",
        price: 4500,
        havediscount: true,
        discount: 20,
        stock: 12,
        imgurl: "https://assets-vue-vuex-test.netlify.app/img/plato_gato.png",
      },
      {
        name: "gran blanco",
        code: "00004",
        category: "teteron",
        color: "blanco",
        price: 5500,
        havediscount: true,
        discount: 15,
        stock: 5,
        imgurl: "https://assets-vue-vuex-test.netlify.app/img/teteron_cat.jpg",
      },
      {
        name: "pequeña blanca",
        code: "00005",
        category: "teterita",
        color: "rojo",
        price: 6000,
        havediscount: true,
        discount: 10,
        stock: 8,
        imgurl: "https://assets-vue-vuex-test.netlify.app/img/teterita_cat.jpg",
      },
      {
        name: "cafe manchado",
        code: "00006",
        category: "cafetera",
        color: "blanco",
        price: 7000,
        havediscount: false,
        discount: 0,
        stock: 7,
        imgurl:
          "https://assets-vue-vuex-test.netlify.app/img/cafetera_blanco.png",
      },
      {
        name: "mantel frutal",
        code: "00007",
        category: "mantel",
        color: "blanco",
        price: 7500,
        havediscount: true,
        discount: 15,
        stock: 16,
        imgurl: "	https://assets-vue-vuex-test.netlify.app/img/mantel_fruta.png",
      },
      {
        name: "set cubiertos",
        code: "00008",
        category: "cubiertos",
        color: "rosa",
        price: 2500,
        havediscount: true,
        discount: 10,
        stock: 0,
        imgurl:
          "https://assets-vue-vuex-test.netlify.app/img/cubiertos_color.png",
      },
    ],
  },
  getters: {
    //FindProduct
    findProduct(state) {
      if (state.searchproduct === "") {
        return [];
      } else {
        return state.allProducts.filter((product) =>
          product.category
            .toLowerCase()
            .includes(state.searchproduct.toLowerCase())
        );
      }
    },
  },
  mutations: {
    //NewProduct
    ADD_PRODUCT(state, newProduct) {
      state.allProducts.push(newProduct);
    },
    //SearchProduct
    SET_SEARCHPRODUCT(state, newSearch) {
      state.searchproduct = newSearch;
      console.log("***", newSearch);
    },

/////////////////

    EDIT_PRODUCT(state, newShopCart) {
      console.log('EDIT_PRODUCT', state, newShopCart);
    },
  },
  actions: {
    //NewProduct
    createNewProduct(context, product) {
      context.commit("ADD_PRODUCT", product);
    },
    //SearchProduct
    setSearchProduct(context, search) {
      if (typeof search === "string") {
        context.commit("SET_SEARCHPRODUCT", search);
      } else {
        console.log("valor ingresado no es un string");
      }
    },

/////////////////
    changeInventory(context, sell) {
      console.log('changeInventory', context, sell)
    },
  },
};
