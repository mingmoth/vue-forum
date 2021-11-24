<template>
  <div class="container py-5">
    <AdminRestaurantForm
      @after-submit="handleAfterSubmit"
      :initial-restaurant="restaurant"
      :is-processing="isProcessing"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";

import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminRestaurantEdit",
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: "-1",
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
      isProcessing: false
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  beforeUpdateRoute(to, from , next) {
    const { id } = to.params
    this.fetchRestaurant(id);
    next()
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const response = await adminAPI.restaurants.getDetail({ restaurantId });
        if (response.statusText !== "OK") {
          throw new Error();
        }
        const {
          id,
          name,
          tel,
          address,
          opening_hours,
          description,
          image,
          CategoryId,
        } = response.data.restaurant;
        this.restaurant = {
          id,
          name,
          address,
          tel,
          description,
          image,
          openingHours: opening_hours,
          categoryId: CategoryId,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資訊，請稍後再試",
        });
        console.log(error);
      }
    },
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        const {data} = await adminAPI.restaurants.update({restaurantId: this.restaurant.id, formData})
        console.log(data)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        console.log(data)
        this.$router.push({ name: 'admin-restaurants' })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法更新餐廳資訊，請稍後再試'
        })
        console.log(error)
      }
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>