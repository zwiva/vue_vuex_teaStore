import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { shopCartModule } from "./modules/shopcart";
import { productsModule } from "./modules/products";

export default new Vuex.Store({
  state: {
    //data productos
    //ventas
  },
  getters: {
    //obtener data
  },
  mutations: {
    //gestionar acciones
    // SET_SEARCH_PRODUCT(state, newSearch) {
    //   state.searchproduct = newSearch;
    //   console.log("ejecuta busqueda", state.searchproduct);
    // },

  },
  actions: {
    // setSearchProduct(context, newSearch) {
    //   if (typeof newSearch === "string") {
    //     context.commit("products/SET_SEARCH_PRODUCT", newSearch);
    //     console.log("ejecuta setBusqueda");
    //   } else {
    //     console.log("valor ingresado no es un string");
    //   }
    // },

  },
  modules: {
    shopCart: shopCartModule,
    products: productsModule
  },
});

//productos

// color para borde si esta en oferta, mas intenso harta oferta, menos intenso para menor

// version con imagenes
// [
//   {
//     code: "00001",
//     category: "tacita", //*requerido
//     color: "blanco", //*requerido
//     price: 4000, //*necesario
//     discount: true, //*requerido
//     percentagediscount: 0.1, //*requerido
//     // discountcolor: "pink",
//     stock: 10, //*necesario
//     // imgurl: "../assets/img/tacita_blanco.png",
//   },
//   {
//     code: "00002",
//     category: "tazon",
//     color: "blanco",
//     price: 4000,
//     discount: true,
//     percentagediscount: 0.15,
//     // discountcolor: "hotpink",
//     stock: 10,
//     // imgurl: "../assets/img/tazon_unipanda.jpg",
//   },
//   {
//     code: "00003",
//     category: "plato",
//     color: "blanco",
//     price: 4000,
//     discount: true,
//     percentagediscount: 0.2,
//     // discountcolor: "indianred",
//     stock: 10,
//     // imgurl: "../assets/img/plato_gato.png",
//   },
//   {
//     code: "00004",
//     category: "teteron",
//     color: "cafe",
//     price: 4000,
//     discount: true,
//     percentagediscount: 0.15,
//     // discountcolor: "hotpink",
//     stock: 10,
//     // imgurl: "../assets/img/teteron_push.jpg",
//   },
//   {
//     code: "00005",
//     category: "teterita",
//     color: "blanco",
//     price: 4000,
//     discount: true,
//     percentagediscount: 0.1,
//     // discountcolor: "pink",
//     stock: 10,
//     // imgurl: "../assets/img/teterita_push.jpg",
//   },
//   {
//     code: "00006",
//     category: "cafetera",
//     color: "blanco",
//     price: 4000,
//     discount: false,
//     percentagediscount: 0,
//     // discountcolor: "transparent",
//     stock: 10,
//     // imgurl: "../assets/img/cafetera_blanco.png",
//   },
//   {
//     code: "00007",
//     category: "mantel",
//     color: "blanco",
//     price: 4000,
//     discount: true,
//     percentagediscount: 0.15,
//     // discountcolor: "hotpink",
//     stock: 10,
//     // imgurl: "../assets/img/mantel_fruta.png",
//   },
//   {
//     code: "00008",
//     category: "cubierto",
//     color: "rosa",
//     price: 4000,
//     discount: true,
//     percentagediscount: 0.1,
//     // discountcolor: "pink",
//     stock: 10,
//     // imgurl: "../assets/img/cubiertos_color.png",
//   },
// ];

// version sencilla
// [
//   {
//     code: "00001", //*necesario
//     category: "tacita", //*requerido
//     color: "blanco", //*requerido
//     price: 4000, //*necesario
//     discount: true, //*requerido
//     percentagediscount: 0.1, //*requerido
//     // discountcolor: "pink",
//     stock: 10, //*necesario
//   },
//   {
//     code: "00002",
//     category: "tazon",
//     color: "blanco",
//     price: 4000,
//     discount: true,
//     percentagediscount: 0.15,
//     // discountcolor: "hotpink",
//     stock: 10,
//   },
//   {
//     code: "00003",
//     category: "plato",
//     color: "blanco",
//     price: 4000,
//     discount: true,
//     percentagediscount: 0.2,
//     // discountcolor: "indianred",
//     stock: 10,
//   },
//   {
//     code: "00004",
//     category: "teteron",
//     color: "cafe",
//     price: 4000,
//     discount: true,
//     percentagediscount: 0.15,
//     // discountcolor: "hotpink",
//     stock: 10,
//   },
//   {
//     code: "00005",
//     category: "teterita",
//     color: "blanco",
//     price: 4000,
//     discount: true,
//     percentagediscount: 0.1,
//     // discountcolor: "pink",
//     stock: 10,
//   },
//   {
//     code: "00006",
//     category: "cafetera",
//     color: "blanco",
//     price: 4000,
//     discount: false,
//     percentagediscount: 0.1,
//     // discountcolor: "white",
//     stock: 10,
//   },
//   {
//     code: "00007",
//     category: "mantel",
//     color: "blanco",
//     price: 4000,
//     discount: true,
//     percentagediscount: 0.15,
//     // discountcolor: "hotpink",
//     stock: 10,
//   },
//   {
//     code: "00008",
//     category: "cubierto",
//     color: "rosa",
//     price: 4000,
//     discount: true,
//     percentagediscount: 0.1,
//     // discountcolor: "pink",
//     stock: 10,
//   },
// ];
