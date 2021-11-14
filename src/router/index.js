import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkExactActiveClass: 'active',
  routes : [
    {
      path: '/signin',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: () => import("../views/SignUp.vue")
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: Restaurants
    },
    {
      path: '/restaurants/feeds',
      name: 'restaurants-feeds',
      component: () => import ("../views/RestaurantsFeeds.vue")
    },
    {
      path: '/restaurants/top',
      name: 'restaurants-top',
      component: () => import("../views/RestaruantsTop.vue")
    },
    {
      path: '/restaurants/:id',
      name: 'restaurant',
      component: () => import("../views/Restaurant.vue")
    },
    {
      path: '/restaurants/:id/dashboard',
      name: 'restaurant-dashboard',
      component: () => import("../views/RestaurantDashboard.vue")
    },
    {
      path: '/users/:id',
      name: 'user',
      component: () => import("../views/User.vue")
    },
    {
      path: '/users/top',
      name: 'users-top',
      component: () => import("../views/UsersTop.vue")
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    },
  ]
})
