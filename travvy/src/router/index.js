import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Landing from '../components/Landing.vue'
import AttractionsList from '../components/AttractionsList.vue'
import AttractionDetails from '../components/AttractionDetails.vue'
import SignUp from '../components/SignUp.vue'
import LogIn from '../components/LogIn.vue'

// Initializes routes for frontend pages
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
    path: '/AttractionDetails/:id',
    name: 'AttractionDetails',
    component: AttractionDetails,
    props: true,

  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: LogIn
  },

]

const router = new VueRouter({
  routes
})

export default router
