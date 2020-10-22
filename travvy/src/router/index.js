import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Landing from '../components/Landing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  //{
  //  path: '/Home',
  //  name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
]

const router = new VueRouter({
  routes
})

export default router
