<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <!-- 最新餐廳 NewestRestaurants -->
        <LatestRestaurants :restaurants="restaurants"/>
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <LatestComments :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import LatestRestaurants from "../components/LatestRestaurants.vue";
import LatestComments from "../components/LatestComments.vue";

import restaurantsAPI from '../apis/restaurants'
import {Toast} from '../utils/helpers'

export default {
  name: "RestaurantsFeeds",
  components: {
    NavTabs,
    LatestRestaurants,
    LatestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    async fetchFeeds() {
      try {
        const response = await restaurantsAPI.getRestaurantsFeeds()
        if(response.statusText !== 'OK') {
          throw new Error
        }
        console.log(response)
        const {restaurants, comments} = response.data
        this.restaurants = restaurants
        this.comments = comments
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳最新動態'
        })
        console.log(error)
      }
    },
  },
};
</script>