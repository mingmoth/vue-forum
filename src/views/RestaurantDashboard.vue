<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge bg-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import restaurantsAPI from "../apis/restaurants";
import { Toast } from "../utils/helpers";

export default {
  name: "RestaurantDashboard",
  data() {
    return {
      restaurant: {
        id: 1,
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0,
      },
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = to.params;
    this.fetchRestaurant(restaurantId);
    next()
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const response = await restaurantsAPI.getRestaurant({ restaurantId });
        console.log(response);

        const { id, name, Category, viewCounts, Comments } =
          response.data.restaurant;
        this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name : "未分類",
          viewCounts,
          commentsLength: Comments ? Comments.length : 0,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: `無法存取餐廳資訊--${error.message}`,
        });
      }
    },
  },
};
</script>