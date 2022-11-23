import Vue from 'vue'
import VueRouter from 'vue-router'
import CurrencyConverter from "@/views/CurrencyConverter";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: CurrencyConverter
  },
  {
    path: '/exchange-rates',
    name: 'exchange-rates',
    component: () => import('../views/ExchangeRates')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
