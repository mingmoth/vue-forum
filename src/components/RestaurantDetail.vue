<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{restaurant.name}}</h1>
      <p class="badge bg-secondary mt-1 mb-3">
        {{restaurant.categoryName}}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block" 
    :src="restaurant.image"
        style="width: 250px;margin-bottom: 25px;"
      >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{restaurant.openingHours}}
          </li>
          <li>
            <strong>Tel:</strong>
            {{restaurant.tel}}
          </li>
          <li>
            <strong>Address:</strong>
            {{restaurant.address}}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        class="btn btn-primary mr-2"
        :to="{name: 'restaurant-dashboard', params: {id: restaurant.id}}"
      >Dashboard</router-link>

      <button
        type="button"
        class="btn btn-danger btn-border mr-2"
        v-if="restaurant.isFavorited"
        @click.prevent.stop="deleteFavorited(restaurant.id)"
      >
        移除最愛
      </button>
      <button
        type="button"
        class="btn btn-primary btn-border mr-2"
        v-else
        @click.prevent.stop="addFavorited(restaurant.id)"
      >
        加到最愛
      </button>
      <button
        type="button"
        class="btn btn-danger like mr-2"
        v-if="restaurant.isLiked"
        @click.prevent.stop="deleteLiked(restaurant.id)"
      >
        Unlike
      </button>
      <button
        type="button"
        class="btn btn-primary like mr-2"
        v-else
        @click.prevent.stop="addLiked(restaurant.id)"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'
export default {
  name: 'RestaurantDetail',
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant
    }
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
    async addFavorited(restaurantId) {
      try {
        const {data} = await usersAPI.addFavorite({restaurantId})
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant.isFavorited = true
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: `無法將餐廳加入最愛--${error.message}`
        })
        console.log(error)
      }
    },
    async deleteFavorited(restaurantId) {
      try {
        const {data} = await usersAPI.deleteFavorite({restaurantId})
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant.isFavorited = false
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: `無法將餐廳移除最愛--${error.message}`
        })
        console.log(error)
      }
    
    },
    async addLiked(restaurantId) {
      try {
        const {data} = await usersAPI.addLike({restaurantId})
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant.isLiked = true
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: `無法對餐廳按讚--${error.message}`
        })
        console.log(error)
      }
      
    },
    async deleteLiked(restaurantId) {
      try {
        const {data} = await usersAPI.deleteLike({restaurantId})
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant.isLiked = false
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: `無法對餐廳移除讚--${error.message}`
        })
        console.log(error)
      }
    }
  }
}
</script>