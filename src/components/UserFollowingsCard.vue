<template>
  <div class="card mb-3">
    <div class="card-header"><strong>{{followings.length}}</strong> followings (追蹤者)</div>
    <div class="card-body">
      <router-link
        v-for="following in followings"
        :key="following.id"
        :to="{name: 'user', params: {id: following.id}}">
        <img :src="following.image | emptyImage" alt="following" width="60" height="60" class="m-1">
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixins'
export default {
  name: 'UserFollowingCard',
  mixins: [emptyImageFilter],
  props: {
    followings: {
      type: Array,
      required: true
    }
  },
}
</script>