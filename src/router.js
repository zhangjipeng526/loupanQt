import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NewBuilding from './views/NewBuilding.vue'
import Eslp from './views/Eslp.vue'
import Qxsp from './views/Qxsp.vue'
import Lsdt from './views/Lsdt.vue'
import Lxwm from './views/Lxwm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/NewBuilding',
      name: 'newbuilding',
      component: NewBuilding
    },
    {
      path: '/Eslp',
      name: 'eslp',
      component: NewBuilding
    },
    {
      path: '/Qxsp',
      name: 'qxsp',
      component: NewBuilding
    },
    {
      path: '/Lsdt',
      name: 'lsdt',
      component: Lsdt
    },
    {
      path: '/Lxwm',
      name: 'lxwm',
      component: Lxwm
    }
  ]
})
