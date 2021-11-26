<template>
  <div class="container py-5">
    <UserProfileCard
      :user="user"
      :is-followed="isFollowed"
      :is-current-user="isCurrentUser"
    />
    <div class="row">
      <div class="col-md-4">
        <UserFollowingsCard :followings="user.followings" />
        <UserFollowersCard :followers="user.followers" />
      </div>
      <div class="col-md-8">
        <UserCommentsCard :comments="user.comments" />
        <UserFavoritedRestaurantsCard
          :favoriteRestaurants="user.favoriteRestaurants"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingsCard from "../components/UserFollowingsCard.vue";
import UserFollowersCard from "../components/UserFollowersCard.vue";
import UserCommentsCard from "../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard.vue";

import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

import { mapState } from 'vuex'

export default {
  name: "User",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      user: {
        id: 1,
        name: "",
        email: "",
        isAdmin: false,
        image: "",
        comments: [],
        favoriteRestaurants: [],
        followers: [],
        followings: [],
      },
      isFollowed: false,
      userId: 0,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
    isCurrentUser() {
      if(this.currentUser.id === this.user.id) {
        return true
      } else {return false}
    }
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params;
    this.fetchUser(userId);
    next();
  },
  methods: {
    async fetchUser(userId) {
      try {
        const response = await usersAPI.get({ userId });
        if (response.statusText !== "OK") {
          throw new Error();
        }
        console.log(response)
        const {
          id,
          name,
          email,
          isAdmin,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        } = response.data.profile;
        this.isFollowed = response.data.isFollowed;
        // this.userId = response.data.profile.id;
        this.user = {
          id,
          name,
          email,
          isAdmin,
          image,
          comments: Comments ? Comments : [],
          favoriteRestaurants: FavoritedRestaurants ? FavoritedRestaurants : [],
          followers: Followers ? Followers : [],
          followings: Followings ? Followings : [],
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得個人資訊，請稍後再試",
        });
        console.log(error);
      }
    },
  },
};
</script>