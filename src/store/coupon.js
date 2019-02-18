import axios from 'axios';
import $ from 'jquery';

export default {
  namespaced: true,
  state: {
    coupons: [],
  },
  actions: {
    getCoupons(context, page) {
      // 取得優惠券
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/coupons?page=${page}`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        context.commit('LOADING', false, { root: true });
        context.commit('COUPONS', response.data.coupons);
      });
    },
    delCoupon(context, id) {
      // 刪除優惠券
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/coupon/${id}`;
      axios.delete(api).then((response) => {
        if (response.data.success) {
          $('#delCouponModal').modal('hide');
          context.dispatch('getCoupons');
        }
      });
    },
  },
  mutations: {
    COUPONS(state, payload) {
      state.coupons = payload;
    },
  },
  getters: {
    coupons(state) {
      return state.coupons;
    },
  },
};
