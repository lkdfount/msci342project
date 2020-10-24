import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Landing from '../components/Landing.vue'
import AttractionsList from '../components/AttractionsList.vue'
import AttractionDetails from '../components/AttractionDetails.vue'


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
  {
    path: '/AttractionsList',
    name: 'AttractionsList',
    component: AttractionsList
  },
  {
    path: '/AttractionDetails',
    name: 'AttractionDetails',
    component: AttractionDetails
  }

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
