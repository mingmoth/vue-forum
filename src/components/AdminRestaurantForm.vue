<template>
  <form v-show="!isLoading" @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        v-model="restaurant.name"
        required
      />
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        id="categoryId"
        v-model="restaurant.categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option value="" selected disabled>--請選擇--</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
        v-model="restaurant.tel"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
        v-model="restaurant.address"
      />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        type="time"
        class="form-control"
        name="opening_hours"
        v-model="restaurant.openingHours"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        class="form-control"
        rows="3"
        name="description"
        v-model="restaurant.description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        width="200"
        height="200"
        class="d-block img-thumbnail mb-3"
      />
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      />
    </div>

    <button type="submit" class="btn btn-primary" :disabled="isProcessing">
      {{ isProcessing ? "處理中" : "送出" }}
    </button>
    <button
      type="button"
      class="btn btn-primary"
      id="button-back"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </form>
</template>

<script>
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminRestaurantForm",
  props: {
    initialRestaurant: {
      type: Object,
      //我們沒有用 required 來設定必填，當資料不是必填時，比較好的習慣是要用 default 設定一組預設值
      //但如果你想要回傳 object literal，因為 object literal 本身也有一個大括號，所以要在外層加一個小括號。
      default: () => ({
        name: "",
        categoryId: "",
        tel: "",
        addEventListener: "",
        description: "",
        image: "",
        openingHours: "",
      }),
    },
    isProcessing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      restaurant: {
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
      categories: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchCategories();
    this.restaurant = {
      // 第一步先展開 data 裡的預設值，也就是空白表單
      ...this.restaurant,
      // 接著展開 props 裡的資料，也就是父層傳進來的資料，如果沒有資料，就調動 default 的回傳值，仍然是空白表單
      ...this.initialRestaurant,
    };
  },
  watch: {
    initialRestaurant(newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await adminAPI.categories.get();
        if (response.statusText !== 'OK') {
          throw new Error;
        }
        this.categories = response.data.categories;
        this.isLoading = false;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳類別，請稍後再試",
        });
        this.isLoading = false;
        console.log(error);
      }
    },
    handleFileChange(e) {
      const files = e.target.files;
      console.log(files);
      if (files.length === 0) {
        this.restaurant.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.restaurant.image = imageURL;
      }
    },
    handleSubmit(e) {
      if (!this.restaurant.name) {
        Toast.fire({
          icon: "warning",
          title: "請填寫餐廳名稱",
        });
        return;
      } else if (!this.restaurant.categoryId) {
        Toast.fire({
          icon: "warning",
          title: "請選擇餐廳類別",
        });
        return;
      }
      const form = e.target;
      const formData = new FormData(form);
      this.$emit("after-submit", formData);
      console.log(formData)
    },
  },
};
</script>

<style lang="scss" scoped>
#button-back {
  float: right;
}
</style>