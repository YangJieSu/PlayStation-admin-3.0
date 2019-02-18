import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VeeValidate from 'vee-validate';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';

import App from './App.vue';
import pagination from './components/Pagination.vue';
import currencyFilter from './filters/currency';
import dateFilter from './filters/date';
import router from './router';
import store from './store';
import './bus';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh_TW', zhTWValidate);

Vue.component('Loading', Loading);
Vue.component('Pagination', pagination);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  const api = `${process.env.VUE_APP_API_PATH}/api/user/check`;
  if (to.meta.requiresAuth) {
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/sign_in',
        });
      }
    });
  } else {
    next();
  }
});
