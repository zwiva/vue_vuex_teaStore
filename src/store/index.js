import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //busqueda
    //data productos
    //ventas
  },
  getters: {
    //obtener data
  },
  mutations: {
    //gestionar acciones
  },
  actions: {
    //acciones
  },
});

//productos

// color para borde si esta en oferta, mas intenso harta oferta, menos intenso para menor
[
  {
    code: "00001",
    category: "tacita",
    color: "blanco",
    price: 4000,
    discount: true,
    percentagediscount: 0.1,
    discountcolor: "#282373",
    stock: 10,
    imgurl: "../assets/img/tacita_blanco.png",
  },
  {
    code: "00002",
    category: "tazon",
    color: "blanco",
    price: 4000,
    discount: true,
    percentagediscount: 0.15,
    discountcolor: "#134556",
    stock: 10,
    imgurl: "../assets/img/tazon_unipanda.jpg",
  },

  {
    code: "00003",
    category: "plato",
    color: "blanco",
    price: 4000,
    discount: true,
    percentagediscount: 0.2,
    discountcolor: "#134556",
    stock: 10,
    imgurl: "../assets/img/plato_gato.png",
  },
  {
    code: "00004",
    category: "teteron",
    color: "cafe",
    price: 4000,
    discount: true,
    percentagediscount: 0.15,
    discountcolor: "#134556",
    stock: 10,
    imgurl: "../assets/img/teteron_push.jpg",
  },
  {
    code: "00005",
    category: "teterita",
    color: "blanco",
    price: 4000,
    discount: true,
    percentagediscount: 0.1,
    discountcolor: "#134556",
    stock: 10,
    imgurl: "../assets/img/teterita_push.jpg",
  },
  {
    code: "00006",
    category: "cafetera",
    color: "blanco",
    price: 4000,
    discount: true,
    percentagediscount: 0.1,
    discountcolor: "#134556",
    stock: 10,
    imgurl: "../assets/img/cafetera_blanco.png",
  },
  {
    code: "00007",
    category: "mantel",
    color: "blanco",
    price: 4000,
    discount: true,
    percentagediscount: 0.15,
    discountcolor: "#134556",
    stock: 10,
    imgurl: "../assets/img/mantel_fruta.png",
  },
  {
    code: "00008",
    category: "cubierto",
    color: "rosa",
    price: 4000,
    discount: true,
    percentagediscount: 0.1,
    discountcolor: "#134556",
    stock: 10,
    imgurl: "../assets/img/cubiertos_color.png",
  },
];
