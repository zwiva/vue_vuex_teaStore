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
        stock: 10, //*necesario
        imgurl:
          "https://assets-vue-vuex-test.netlify.app/img/tacita_blanco.png",
      },
      {
        name: "tazon unipanda",
        code: "00002",
        category: "tazon",
        color: "blanco",
        price: 4000,
        havediscount: true,
        discount: 15,
        stock: 10,
        imgurl:
          "https://assets-vue-vuex-test.netlify.app/img/tazon_unipanda.jpg",
      },
      {
        name: "gatoplato",
        code: "00003",
        category: "plato",
        color: "blanco",
        price: 4000,
        havediscount: true,
        discount: 20,
        stock: 10,
        imgurl: "https://assets-vue-vuex-test.netlify.app/img/plato_gato.png",
      },
      {
        name: "gran blanco",
        code: "00004",
        category: "teteron",
        color: "blanco",
        price: 4000,
        havediscount: true,
        discount: 15,
        stock: 10,
        imgurl: "https://assets-vue-vuex-test.netlify.app/img/teteron_cat.jpg",
      },
      {
        name: "pequeña blanca",
        code: "00005",
        category: "teterita",
        color: "rojo",
        price: 4000,
        havediscount: true,
        discount: 10,
        stock: 10,
        imgurl: "https://assets-vue-vuex-test.netlify.app/img/teterita_cat.jpg",
      },
      {
        name: "cafe manchado",
        code: "00006",
        category: "cafetera",
        color: "blanco",
        price: 4000,
        havediscount: false,
        discount: 0,
        stock: 10,
        imgurl:
          "https://assets-vue-vuex-test.netlify.app/img/cafetera_blanco.png",
      },
      {
        name: "mantel frutal",
        code: "00007",
        category: "mantel",
        color: "blanco",
        price: 4000,
        havediscount: true,
        discount: 15,
        stock: 10,
        imgurl: "	https://assets-vue-vuex-test.netlify.app/img/mantel_fruta.png",
      },
      {
        name: "set cubiertos fantasia",
        code: "00008",
        category: "cubiertos",
        color: "rosa",
        price: 4000,
        havediscount: true,
        discount: 10,
        stock: 10,
        imgurl:
          "https://assets-vue-vuex-test.netlify.app/img/cubiertos_color.png",
      },
    ],
    // filteredProducts: [],
  },
  getters: {
    //FindProduct
    findProduct(state) {
      console.log('findproduct')
      // filteredProducts = [];
      if (state.searchproduct === "") {
        return [];
      } else {
        return state.allproducts.filter((product) =>
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
      console.log('***', newSearch);
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
  },
};
