<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant"/>
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @delete-comment="deleteComment"/>
    <!-- 新增評論 CreateComment -->
    <CreateComment 
      @create-comment="createComment"
      :restaurant-id="restaurant.id"/>
  </div>
</template>

<script>
import RestaurantDetail from '../components/RestaurantDetail.vue'
import RestaurantComments from '../components/RestaurantComments.vue'
import CreateComment from '../components/CreateComment.vue'

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
        "updatedAt": "2021-11-13T13:34:33.576Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z"
        },
        "FavoritedUsers": [],
        "LikedUsers": [],
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
    },
    "isFavorited": false,
    "isLiked": false
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  name: 'Restaurant',
  components: {
    RestaurantDetail, RestaurantComments, CreateComment
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser
    }
  },
  created() {
    const{ id: restaurantId } = this.$route.params
    this.fethRestaurant(restaurantId)
  },
  methods: {
    fethRestaurant(restaurantId) {
      console.log(restaurantId)
      const {isFavorited, isLiked} = dummyData
      const { id, name, Category, image, opening_hours, tel, address, description, Comments } = dummyData.restaurant
      this.restaurant = {id, name, categoryName: Category? Category.name : '未分類', image, openingHours: opening_hours, tel, address, description, isFavorited, isLiked}
      this.restaurantComments = Comments
    },
    deleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId)
    },
    createComment(payload) {
      const {commentId, restaurantId, comment} = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        text: comment,
        createdAt: new Date(),
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        }
      })
    }
  }
}
</script>