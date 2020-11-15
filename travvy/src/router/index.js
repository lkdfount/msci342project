import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Landing from '../components/Landing.vue'
import AttractionsList from '../components/AttractionsList.vue'
import AttractionDetails from '../components/AttractionDetails.vue'
import SignUp from '../components/SignUp.vue'
import LogIn from '../components/LogIn.vue'
import Onboarding from '../components/Onboarding.vue'
import Profile from '../components/Profile.vue'

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
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Onboarding',
    name: 'Onboarding',
    component: Onboarding
  }

]

const router = new VueRouter({
  routes
})

export default router
