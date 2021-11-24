<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      class="card mb-3"
      style="max-width: 540px; margin: auto"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge bg-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
              class="btn btn-primary mr-2"
              >Show</router-link
            >

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.prevent.stop="deleteFavorited(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click.prevent.stop="addFavorited(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import NavTabs from "../components/NavTabs.vue";

import restaurantsAPI from "../apis/restaurants";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  name: "RestaurantsTops",
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurant();
  },
  methods: {
    async fetchRestaurant() {
      try {
        const response = await restaurantsAPI.getRestaurantsTop();
        if (response.statusText !== "OK") {
          throw new Error();
        }
        this.restaurants = response.data.restaurants;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得人氣餐廳，請稍後再試",
        });
        console.log(error);
      }
    },
    async addFavorited(restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite({ restaurantId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurant.id === restaurantId) {
            return {
              ...restaurant,
              isFavorited: true,
              FavoriteCount: restaurant.FavoriteCount + 1,
            };
          } else {
            return restaurant;
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法將餐廳加入最愛，請稍後再試",
        });
        console.log(error);
      }
    },
    async deleteFavorited(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurant.id === restaurantId) {
            return {
              ...restaurant,
              isFavorited: false,
              FavoriteCount: restaurant.FavoriteCount - 1,
            };
          } else {
            return restaurant;
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法將餐廳從最愛刪除，請稍後再試",
        });
        console.log(error);
      }
    },
  },
};
</script>