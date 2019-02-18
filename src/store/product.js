import axios from 'axios';

export default {
  namespaced: true,
  state: {
    products: [],
  },
  actions: {
    getProducts(context, page) {
      // 取得商品列表
      const api = `${process.env.VUE_APP_API_PATH}/api/${
        process.env.VUE_APP_CUSTOM_PATH
      }/admin/products?page=${page}`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        if (response.data.success) {
          context.commit('PRODUCTS', response.data.products);
          context.commit('PAGINATION', response.data.pagination, { root: true });
        }
        context.commit('LOADING', false, { root: true });
      });
    },
  },
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
