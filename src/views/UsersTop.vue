<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <a href="#">
          <img :src="user.image" width="140px" height="140px" />
        </a>
        <h2 class="mt-3">{{ user.name }}</h2>
        <span class="badge bg-secondary"
          >追蹤人數：{{ user.FollowerCount }}</span
        >
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click.prevent.stop="deleteFollowed(user.id)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.prevent.stop="addFollowed(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  name: "UsersTop",
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        const response = await usersAPI.getTopUsers();
        if (response.statusText !== "OK") {
          throw new Error();
        }
        this.users = response.data.users;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });
        console.log(error);
      }
    },
    async addFollowed(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isFollowed: true,
              FollowerCount: user.FollowerCount + 1,
            };
          } else {
            return user;
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
        console.log(error);
      }
    },
    async deleteFollowed(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isFollowed: false,
              FollowerCount: user.FollowerCount - 1,
            };
          } else {
            return user;
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
        console.log(error);
      }
    },
  },
};
</script>