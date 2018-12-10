'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'login',
      props: true,
      component: Login
    }
  ]
})
