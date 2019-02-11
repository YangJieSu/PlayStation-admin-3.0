import axios from 'axios';
export default {
  namespaced: true,
  state: {
    orders: []
  },
  actions: {
    getOrders(context, page) {
      // 取得訂單列表
      let api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/orders?page=${page}`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        context.commit('LOADING', false, { root: true });
        if (response.data.success) {
          context.commit('ORDERS', response.data.orders);
          context.commit('PAGINATION', response.data.pagination, { root: true });
        };
      });
    }
  },
  mutations: {
    ORDERS(state, payload) {
      state.orders = payload;
    }
  },
  getters: {
    orders(state) {
      return state.orders;
    }
  }
}