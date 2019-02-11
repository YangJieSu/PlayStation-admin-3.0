import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import $ from 'jquery';

import productsModules from './product';
import ordersModules from './orders';
import couponModules from './coupon';
import cartModules from './cart';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true, //嚴謹模式
  state: {
    isLoading: false,
    status: {
      loadingItem: '',
      loadingIcon: false
    },
    pagination: {},
    // orders: [],
    // coupons: [],
    // carts: {},
  },
  actions: {
    // 操作 ajax 行為，不操作資料狀態
    // context 固定， payload 外部傳進來的資料
    // xxxx(context, payload) {}
    updateLoading(context, status) {
      context.commit('LOADING', status)
    },
    loadingIcon(context, status) {
      context.commit('LOADING_ITEM', status);
    },
    // getProducts(context, page) {
    //   // 取得商品列表
    //   let api = `${process.env.API_PATH}/api/${
    //     process.env.CUSTOM_PATH
    //     }/admin/products?page=${page}`;
    //   context.commit('LOADING', true);
    //   axios.get(api).then(response => {
    //     if (response.data.success) {
    //       context.commit('PRODUCTS', response.data.products);
    //       context.commit('PAGINATION', response.data.pagination);
    //     };
    //     context.commit('LOADING', false);
    //   });
    // },
    // getCart(context, payload) {
    //   // 取得購物車
    //   let api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
    //   axios.get(api).then(response => {
    //     context.commit('CARTS', response.data.data);
    //   });
    // },
    // addtoCart(context, { id, qty = 1 }) {
    //   // 加入購物車
    //   let api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
    //   const cart = {
    //     product_id: id,
    //     qty
    //   };
    //   context.commit('LOADING', true);
    //   context.commit('LOADING_ICON', id);
    //   axios.post(api, { data: cart }).then(response => {
    //     if(response.data.success) {
    //       context.commit('LOADING', false);
    //       context.commit('LOADING_ICON', '');
    //       context.dispatch('getCart');
    //     }
    //   });
    // },
    // removeCart(context, id) {
    //   let api = `${process.env.API_PATH}/api/${
    //     process.env.CUSTOM_PATH
    //     }/cart/${id}`;
    //   context.commit('LOADING', true);
    //   axios.delete(api).then(response => {
    //     context.commit('LOADING', false);
    //     if (response.data.success) {
    //       context.dispatch('getCart');
    //     }
    //   });
    // }
    // getOrders(context, page) {
    //   // 取得訂單列表
    //   let api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/admin/orders?page=${page}`;
    //   context.commit('LOADING', true);
    //   axios.get(api).then((response) => {
    //     context.commit('LOADING', false);
    //     if (response.data.success) {
    //       context.commit('ORDERS', response.data.orders);
    //       context.commit('PAGINATION', response.data.pagination);
    //     };
    //   });
    // },
    // getCoupons(context, page) {
    //   // 取得優惠券
    //   let api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/admin/coupons?page=${page}`;
    //   context.commit('LOADING', true);
    //   axios.get(api).then((response) => {
    //     context.commit('LOADING', false);
    //     context.commit('COUPONS', response.data.coupons);
    //   });
    // },
    // delCoupon(context, id) {
    //   // 刪除優惠券
    //   let api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/admin/coupon/${id}`;
    //   axios.delete(api).then((response) => {
    //     if (response.data.success) {
    //       $('#delCouponModal').modal('hide');
    //       context.dispatch('getCoupons');
    //     };
    //   });
    // }
  },
  mutations: {
    // 操作資料狀態
    // state 固定 ，payload 外部傳進的參數
    // xxx(state, payload) {}
    LOADING(state, status) {
      state.isLoading = status;
    },
    // PRODUCTS(state, payload) {
    //   state.products = payload;
    // },
    PAGINATION(state, payload) {
      state.pagination = payload;
    },
    LOADING_ITEM(state, payload) {
      state.status.loadingIcon = payload;
    },
    LOADING_ICON(state, payload) {
      state.status.loadingItem = payload;
    },
    // ORDERS(state, payload) {
    //   state.orders = payload;
    // // },
    // COUPONS(state, payload) {
    //   state.coupons = payload;
    // },
    // CARTS(state, payload) {
    //   state.carts = payload;
    // }
  },
  getters: {
    // xxx(state) {}
    // products(state) {
    //   return state.products;
    // },
    pagination(state) {
      return state.pagination;
    },
    status(state) {
      return state.status;
    }
    // orders(state) {
    //   return state.orders;
    // },
    // coupons(state) {
    //   return state.coupons;
    // },
    // carts(state) {
    //   return state.carts;
    // }
  },
  modules: {
    productsModules,
    ordersModules,
    couponModules,
    cartModules
  }
});