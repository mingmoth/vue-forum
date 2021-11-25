<template>
  <div class="card mb-3">
    <div class="card-header"><strong>{{favoriteRestaurants.length}}</strong> (收藏的餐廳)</div>
    <div class="card-body">
      <router-link
        v-for="restaurant in favoriteRestaurants"
        :key="restaurant.id"
        :to="{name: 'restaurant', params: {id: restaurant.id}}">
        <img :src="restaurant.image | emptyImage" alt="following" width="60" height="60" class="m-1">
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixins'
export default {
  name: 'UserFavoritedRestaurantsCard',
  mixins: [emptyImageFilter],
  props: {
    favoriteRestaurants: {
      type: Array,
      required: true
    }
  },
}
</script>