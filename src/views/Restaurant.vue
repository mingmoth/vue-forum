<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @delete-comment="deleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      @create-comment="createComment"
      :restaurant-id="restaurant.id"
    />
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail.vue";
import RestaurantComments from "../components/RestaurantComments.vue";
import CreateComment from "../components/CreateComment.vue";

import restaurantsAPI from "../apis/restaurants";
import { Toast } from "../utils/helpers";

import { mapState } from "vuex";

export default {
  name: "Restaurant",
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fethRestaurant({ restaurantId });
  },
  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = to.params;
    this.fethRestaurant({ restaurantId });
    next();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async fethRestaurant({ restaurantId }) {
      try {
        const response = await restaurantsAPI.getRestaurant({ restaurantId });
        console.log(response);
        const { isFavorited, isLiked } = response.data;
        const {
          id,
          name,
          Category,
          image,
          opening_hours,
          tel,
          address,
          description,
          Comments,
        } = response.data.restaurant;
        this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name : "未分類",
          image,
          openingHours: opening_hours,
          tel,
          address,
          description,
          isFavorited,
          isLiked,
        };
        this.restaurantComments = Comments;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資訊，請稍後再試",
        });
        console.log(error);
      }
    },
    deleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    createComment(payload) {
      const { commentId, restaurantId, comment } = payload;
      this.restaurantComments.push({
          id: commentId,
          RestaurantId: restaurantId,
          text: comment,
          createdAt: new Date(),
          User: {
            id: this.currentUser.id,
            name: this.currentUser.name,
          },
        });
    },
  },
};
</script>