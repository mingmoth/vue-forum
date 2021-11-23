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
          <td v-if="user.id === currentUser.id" >
            
          </td>
          <td v-else-if="user.isAdmin" @click="toggleUserRole(user.id)"><button type="button" class="btn btn-link">set as user</button></td>
          <td v-else>
            <button type="button" class="btn btn-link" @click="toggleUserRole(user.id)">set as admin</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$jlhmTFkoFv7JWa3tCFxQF.QR68dI2xnBV9xTWpQChXKR4H96/Kl5W",
      isAdmin: true,
      image: null,
      createdAt: "2021-11-23T07:25:28.000Z",
      updatedAt: "2021-11-23T07:25:28.000Z",
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$xSAOmUrVGjFXNuA6pENgM.ldkJ/Nu4uf6PSXAYAfPxNnbGocDZ4rO",
      isAdmin: false,
      image: null,
      createdAt: "2021-11-23T07:25:29.000Z",
      updatedAt: "2021-11-23T07:25:29.000Z",
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$E4cdOtef4QKN1tKbEe1MwOVlMOxe/.Fbc2HNqgjJMVdkL8oBYF6le",
      isAdmin: false,
      image: null,
      createdAt: "2021-11-23T07:25:29.000Z",
      updatedAt: "2021-11-23T07:25:29.000Z",
    },
  ],
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$jlhmTFkoFv7JWa3tCFxQF.QR68dI2xnBV9xTWpQChXKR4H96/Kl5W",
    isAdmin: true,
    image: null,
    createdAt: "2021-11-23T07:25:28.000Z",
    updatedAt: "2021-11-23T07:25:28.000Z",
  },
};

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: {},
      currentUser: {}
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.users = dummyData.users;
      this.currentUser = dummyData.currentUser
    },
    toggleUserRole(userId) {
      this.users = this.users.map((user) => {
        if(user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        } else { return user}
      })
    }
  },
};
</script>