<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.image | emptyImage" alt="" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h4 class="card-title">{{ user.name }}</h4>
          <p>{{ user.email }}</p>
          <ul class="list-unstyled">
            <li>
              <strong>{{ user.comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.favoriteRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ user.followings.length }}</strong>
              followings(追蹤中)
            </li>
            <li>
              <strong>{{ user.followers.length }}</strong> followers(追蹤者)
            </li>
          </ul>
          <template v-if="isCurrentUser">
            <router-link
              :to="{ name: 'user-edit', params: { id: user.id } }"
              class="btn btn-primary"
            >
              Edit
            </router-link>
          </template>
          <template v-else>
            <button
              v-if="isUserFollowed"
              type="button"
              class="btn btn-danger"
              @click.stop.prevent="deleteFollowing(user.id)"
            >
              取消追蹤
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFollowing(user.id)"
            >
              追蹤
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'
import { emptyImageFilter } from './../utils/mixins'

export default {
  name: "UserProfileCard",
  mixins: [emptyImageFilter],
  props: {
    user: {
      type: Object,
      required: true,
    },
    isCurrentUser: {
      type: Boolean,
      default: false,
    },
    isFollowed: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isFollowed(follow) {
      this.isUserFollowed = follow
    }
  },
  data() {
    return {
      isUserFollowed: false
    };
  },
  
  methods: {
    async deleteFollowing(userId) {
      try {
        const {data} = await usersAPI.deleteFollowing({userId})
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        this.isUserFollowed = false
        console.log(data)
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: `無法移除追蹤使用者--${error.message}`,
        });
        console.log(error);
      }
    },
    async addFollowing(userId) {
      try {
        const {data} = await usersAPI.addFollowing({userId})
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        this.isUserFollowed = true
        console.log(data)
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: `無法追蹤使用者--${error.message}`,
        });
        console.log(error);
      }
    },
  },
};
</script>