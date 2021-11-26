<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td v-if="user.isAdmin">admin</td>
          <td v-else>user</td>
          <td v-if="user.id === currentUser.id"></td>
          <td v-else-if="user.isAdmin" @click="toggleUserRole({userId: user.id, isAdmin: user.isAdmin})">
            <button type="button" class="btn btn-link">set as user</button>
          </td>
          <td v-else>
            <button
              type="button"
              class="btn btn-link"
              @click="toggleUserRole({userId: user.id, isAdmin: user.isAdmin})"
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";

import { mapState } from "vuex";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        const response = await adminAPI.users.get();
        if (response.statusText !== "OK") {
          throw new Error();
        }
        this.users = response.data.users;
        console.log(response);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法存取使用者資訊，請稍後再試",
        });
        console.log(error);
      }
    },
    async toggleUserRole({userId, isAdmin}) {
      try {
        const { data } = await adminAPI.users.update({
          userId,
          isAdmin: (!isAdmin).toString(),
        });
        console.log(userId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !isAdmin,
            };
          } else {
            return user;
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: `無法切換使用者權限--${error.message}`,
        });
        console.log(error.message);
      }
    },
  },
};
</script>