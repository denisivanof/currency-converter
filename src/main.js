import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('localeSum', function(value) {
  return value && typeof value === 'number' ? value.toLocaleString('ru') : value;
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
