import axios from 'axios';

export default {
  namespaced: true,
  state: {
    carts: {},
  },
  actions: {
    getCart(context, payload) {
      // 取得購物車
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      axios.get(api).then((response) => {
        context.commit('CARTS', response.data.data);
      });
    },
    addtoCart(context, { id, qty = 1 }) {
      // 加入購物車
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      context.commit('LOADING', true, { root: true });
      context.commit('LOADING_ICON', id, { root: true });
      axios.post(api, { data: cart }).then((response) => {
        if (response.data.success) {
          context.commit('LOADING', false, { root: true });
          context.commit('LOADING_ICON', '', { root: true });
          context.dispatch('getCart');
        }
      });
    },
    removeCart(context, id) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${
        process.env.VUE_APP_CUSTOM_PATH
      }/cart/${id}`;
      context.commit('LOADING', true, { root: true });
      axios.delete(api).then((response) => {
        context.commit('LOADING', false, { root: true });
        if (response.data.success) {
          context.dispatch('getCart');
        }
      });
    },
  },
  mutations: {
    CARTS(state, payload) {
      state.carts = payload;
    },
  },
  getters: {
    carts(state) {
      return state.carts;
    },
  },
};
