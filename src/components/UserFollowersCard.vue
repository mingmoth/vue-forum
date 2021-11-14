<template>
  <div class="card mb-3">
    <div class="card-header"><strong>{{followers.length}}</strong> followers (追蹤中)</div>
    <div class="card-body">
      <router-link
        v-for="follower in followers"
        :key="follower.id"
        :to="{name: 'user', params: {id: follower.id}}">
        <img :src="follower.image" alt="follower" width="60" height="60" class="m-1">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserFollowerCard',
  props: {
    followers: {
      type: Array,
      required: true
    }
  },
}
</script>