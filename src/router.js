import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/admin',
    },
    {
      path: '/sign_in',
      name: 'SignIn',
      component: () => import('./views/SignIn.vue'),
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('./components/Dashboard.vue'),
      children: [
        {
          path: 'products',
          name: 'Products',
          component: () => import('./views/Products.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'Orders',
          component: () => import('./views/Orders.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'coupon',
          name: 'Coupon',
          component: () => import('./views/Coupon.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/',
      component: () => import('./components/Dashboard.vue'),
      children: [
        {
          path: 'order',
          name: 'Order',
          component: () => import('./views/Order.vue'),
        },
        {
          path: 'customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: () => import('./views/CustomerCheckout.vue'),
        },
      ],
    },
  ],
});
