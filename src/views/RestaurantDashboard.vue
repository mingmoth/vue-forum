<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge bg-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
    "restaurant": {
        "id": 1,
        "name": "Macey Durgan Jr.",
        "tel": "(048) 327-7674",
        "address": "018 Kulas Extension",
        "opening_hours": "08:00",
        "description": "Totam distinctio quos quas mollitia et. Dolor et aut animi tempora et similique. Explicabo aut qui voluptas harum. Aliquid atque ratione. Temporibus sunt voluptas vel ea similique rem. Non molestias incidunt cupiditate exercitationem.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.355713784927278",
        "viewCounts": 1,
        "createdAt": "2021-10-10T07:19:42.000Z",
        "updatedAt": "2021-11-13T13:34:33.000Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z"
        },
        "Comments": [
            {
                "id": 51,
                "text": "Voluptatem sed adipisci beatae ex aut.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2021-10-10T07:19:42.000Z",
                "updatedAt": "2021-10-10T07:19:42.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$AvHu1laIippZL3G.UJ08jOEMQZw/bRyFBonVfNCqABVvcO5ZHOqzS",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2021-10-10T07:19:42.000Z",
                    "updatedAt": "2021-10-10T07:19:42.000Z"
                }
            },
            {
                "id": 1,
                "text": "Enim deleniti officia asperiores ut quis.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2021-10-10T07:19:42.000Z",
                "updatedAt": "2021-10-10T07:19:42.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$8BEcpQVgpsmUeysWWIYKTOzCA9lW.yrqBNSC7NBq/9g.kYcu.K2a2",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-10-10T07:19:42.000Z",
                    "updatedAt": "2021-10-10T07:19:42.000Z"
                }
            },
            {
                "id": 101,
                "text": "Est autem ipsam error dolorem nesciunt ducimus.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2021-10-10T07:19:42.000Z",
                "updatedAt": "2021-10-10T07:19:42.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$8BEcpQVgpsmUeysWWIYKTOzCA9lW.yrqBNSC7NBq/9g.kYcu.K2a2",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-10-10T07:19:42.000Z",
                    "updatedAt": "2021-10-10T07:19:42.000Z"
                }
            }
        ]
    }
}

export default {
  name: 'RestaurantDashboard',
  data() {
    return {
      restaurant: {
        id: 1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        viewCounts: 0
      },
    }
  },
  created() {
    const {id: restaurantId} = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log(restaurantId)
      const {id, name, Category, viewCounts, Comments} = dummyData.restaurant
      this.restaurant = {id, name, categoryName: Category? Category.name: '未分類', viewCounts, commentsLength: Comments ? Comments.length : 0}
    }
  }
}
</script>