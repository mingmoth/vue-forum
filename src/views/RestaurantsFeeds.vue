<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading"/>
    <template v-else>
      <h1 class="mt-5">最新動態</h1>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <!-- 最新餐廳 NewestRestaurants -->
          <LatestRestaurants :restaurants="restaurants" />
        </div>
        <div class="col-md-6">
          <!-- 最新評論 NewestComments-->
          <LatestComments :comments="comments" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import LatestRestaurants from "../components/LatestRestaurants.vue";
import LatestComments from "../components/LatestComments.vue";
import Spinner from "../components/Spinner.vue";

import restaurantsAPI from "../apis/restaurants";
import { Toast } from "../utils/helpers";

export default {
  name: "RestaurantsFeeds",
  components: {
    NavTabs,
    LatestRestaurants,
    LatestComments,
    Spinner,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    async fetchFeeds() {
      try {
        const response = await restaurantsAPI.getRestaurantsFeeds();
        if (response.statusText !== "OK") {
          throw new Error;
        }
        console.log(response);
        const { restaurants, comments } = response.data;
        this.restaurants = restaurants;
        this.comments = comments;
        this.isLoading = false;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳最新動態",
        });
        this.isLoading = false;
        console.log(error);
      }
    },
  },
};
</script>