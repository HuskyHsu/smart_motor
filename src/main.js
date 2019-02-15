import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/zh-TW'
import 'element-ui/lib/theme-chalk/index.css';

import home from './home.vue'
import user from './user.vue'
import controllers from "./components/controllers.vue";
import record from "./components/record.vue";

Vue.config.productionTip = false

Vue.use(ElementUI, { locale });
Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/user/:user', component: user,
      children: [
        {
          path: '',
          component: controllers,
          name: 'controllers'
        },
        {
          path: ':id',
          component: record,
          name: 'record',
        }
      ]
    }, {
      path: '', component: home, name: 'home',
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
