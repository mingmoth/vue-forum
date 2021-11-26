<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">首頁 - 餐廳列表</h1>
    <hr />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaruantsNavPills :categories="categories" />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>
    <div v-if="restaurants.length < 1">
      <h1>此類別目前無餐廳資料</h1>
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaruantsNavPills from "../components/RestaruantsNavPills.vue";
import RestaurantPagination from "../components/RestaurantPagination.vue";

import restaurantsAPI from "../apis/restaurants";
import { Toast } from "../utils/helpers";
export default {
  name: "Restaurants",
  components: {
    NavTabs,
    RestaurantCard,
    RestaruantsNavPills,
    RestaurantPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    const { page = "", categoryId = "" } = this.$route.query
    this.fetchRestaurants({
      queryPage: page, queryCategoryId: categoryId
    });
  },
  beforeRouteUpdate(to, from, next) {
    const { page = "", categoryId = "" } = to.query;
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
    next();
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next,
        } = response.data;
        console.log(response);
        // 從伺服器取得的 data 帶入 Vue 內
        this.restaurants = restaurants;
        this.categories = categories;
        this.categoryId = categoryId;
        this.currentPage = page;
        this.totalPage = totalPage;
        this.previousPage = prev;
        this.nextPage = next;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
        console.log(error);
      }
    },
  },
};
</script>