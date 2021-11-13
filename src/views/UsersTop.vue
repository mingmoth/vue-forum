<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <a href="#">
          <img
            :src="user.image"
            width="140px"
            height="140px"
          >
        </a>
        <h2 class="mt-3">{{user.name}}</h2>
        <span class="badge bg-secondary">追蹤人數：{{user.FollowerCount}}</span>
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
import NavTabs from '../components/NavTabs.vue'

const dummyUser = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$AvHu1laIippZL3G.UJ08jOEMQZw/bRyFBonVfNCqABVvcO5ZHOqzS",
            "isAdmin": true,
            "image": null,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$gNbxX.GggESFVSk7iooboOzCDVIcHBoKF0fwbZaM0Ai7BhbtbNn8y",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$8BEcpQVgpsmUeysWWIYKTOzCA9lW.yrqBNSC7NBq/9g.kYcu.K2a2",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}

export default {
  name: 'UsersTop',
  components: {
    NavTabs,
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchUser()
  },
  methods: {
    fetchUser() {
      this.users = dummyUser.users
    },
    addFollowed(userId) {
      this.users = this.users.map((user) => {
        if(user.id === userId) {
          return {
            ...user,
            isFollowed: true,
            FollowerCount: user.FollowerCount + 1
          }
        } else {
          return user
        }
      })
    },
    deleteFollowed(userId) {
      this.users = this.users.map((user) => {
        if(user.id !== userId) {
          return user
        } else {
          return {
            ...user,
            isFollowed: false,
            FollowerCount: user.FollowerCount - 1
          }

        }
      })
    },
  }
}
</script>