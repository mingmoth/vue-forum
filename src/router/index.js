import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'
import NotFound from '../views/NotFound.vue'
import store from '../store'

Vue.use(VueRouter)

const authorizeAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) {
    next('/not-found')
    return
  }
  next()
}

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes : [
    {
      path: '/',
      name: 'root',
      redirect: '/signin'
    },
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
      path: '/users/top',
      name: 'users-top',
      component: () => import("../views/UsersTop.vue")
    },
    {
      path: '/users/:id',
      name: 'user',
      component: () => import("../views/User.vue")
    },
    {
      path: '/users/:id/edit',
      name: 'user-edit',
      component: () => import("../views/UserEdit.vue")
    },
    {
      path: '/admin',
      exact: true,
      redirect: '/admin/restaurants',
      beforeEnter: authorizeAdmin
    },
    {
      path: '/admin/restaurants',
      name: 'admin-restaurants',
      component: () => import("../views/AdminRestaurants.vue"),
      beforeEnter: authorizeAdmin
    },
    {
      path: '/admin/restaurants/new',
      name: 'admin-restaurants-new',
      component: () => import("../views/AdminRestaurantNew.vue"),
      beforeEnter: authorizeAdmin
    },
    {
      path: '/admin/restaurants/:id',
      name: 'admin-restaurant',
      component: () => import("../views/AdminRestaurant.vue"),
      beforeEnter: authorizeAdmin
    },
    {
      path: '/admin/restaurants/:id/edit',
      name: 'admin-restaurant-edit',
      component: () => import("../views/AdminRestaurantEdit.vue"),
      beforeEnter: authorizeAdmin
    },
    {
      path: '/admin/categories',
      name: 'admin-categories',
      component: () => import("../views/AdminCategories.vue"),
      beforeEnter: authorizeAdmin
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      component: () => import("../views/AdminUsers.vue"),
      beforeEnter: authorizeAdmin
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  // ??? localStorage ?????? token
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let isAuthenticated = store.state.isAuthenticated
  
  // ?????? localStorage ??? store ?????? token ????????????
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    // ????????????????????????
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }
  // ????????????????????? token ?????????
  const pathsWithoutAuthentication = ['sign-up', 'sign-in']
  // ?????? token ?????????????????????????????????????????????????????????
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/signin')
    return
  }
  // ?????? token ???????????????????????????????????????????????????????????????
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/restaurants')
    return
  }
  next()
})

export default router
