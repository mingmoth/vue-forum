import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes : [
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    },
  ]
})
