export default {
  state: {
    shopList: [
      {
        id: 1,
        title: "Adidas Green",
        descr:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: require("../assets/img/1.jpg"),
        gallery: [
          { name: "Adidas boots First", img: require("../assets/img/1.jpg") },
          { name: "Adidas boots Second", img: require("../assets/img/12.jpg") },
          { name: "Adidas boots Third", img: require("../assets/img/13.jpg") },
        ],
      },
      {
        id: 2,
        title: "Adidas Red",
        descr:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: require("../assets/img/2.jpg"),
        gallery: [
          { name: "Adidas boots First", img: require("../assets/img/2.jpg") },
          { name: "Adidas boots Second", img: require("../assets/img/22.jpg") },
          { name: "Adidas boots Third", img: require("../assets/img/23.jpg") },
        ],
      },
      {
        id: 3,
        title: "Adidas Default",
        descr:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: require("../assets/img/3.jpg"),
        gallery: [
          { name: "Adidas boots First", img: require("../assets/img/3.jpg") },
          { name: "Adidas boots Second", img: require("../assets/img/32.jpg") },
          { name: "Adidas boots Third", img: require("../assets/img/33.jpg") },
        ],
      },
      {
        id: 4,
        title: "Adidas Street",
        descr:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: require("../assets/img/4.jpg"),
        gallery: [
          { name: "Adidas boots First", img: require("../assets/img/4.jpg") },
          { name: "Adidas boots Second", img: require("../assets/img/42.jpg") },
          { name: "Adidas boots Third", img: require("../assets/img/43.jpg") },
        ],
      },
    ],
  },
  mutations: {},
  // async!!!
  actions: {},
  getters: {
    getShopList(state) {
      return state.shopList;
    },
    getProduct: (state) => (id) => {
      return state.shopList.find((product) => product.id == id);
    },
  },
};
