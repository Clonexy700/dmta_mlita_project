import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import stateMachine from '../views/StateMachine.vue'
import About from '../views/About.vue'
import Turing from '../views/TuringMachine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/StateMachine',
    name: 'stateMachine',
    component: stateMachine
  },
  {
    path: '/TuringMachine',
    name: 'Turing',
    component: Turing
  },
  {
    path: '/*',
    name: '404',
    component: stateMachine
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
