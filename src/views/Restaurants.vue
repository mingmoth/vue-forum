<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      首頁 - 餐廳列表
    </h1>
    <hr>
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaruantsNavPills :categories="categories"/>
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard 
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"/>
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"/>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import RestaruantsNavPills from '../components/RestaruantsNavPills.vue'
import RestaurantPagination from '../components/RestaurantPagination.vue'

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Macey Durgan Jr.",
            "tel": "(048) 327-7674",
            "address": "018 Kulas Extension",
            "opening_hours": "08:00",
            "description": "Totam distinctio quos quas mollitia et. Dolor et a",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.355713784927278",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-10-10T07:19:42.000Z",
                "updatedAt": "2021-10-10T07:19:42.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Mohamed Lesch",
            "tel": "1-199-335-6043 x42169",
            "address": "46490 Pfeffer Ferry",
            "opening_hours": "08:00",
            "description": "Voluptas ut iure illo asperiores voluptatum qui ma",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=41.0349404092708",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-10-10T07:19:42.000Z",
                "updatedAt": "2021-10-10T07:19:42.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Ezekiel Fay",
            "tel": "695-914-8076",
            "address": "705 Vandervort Lodge",
            "opening_hours": "08:00",
            "description": "Eius autem ex praesentium excepturi minus. Iusto o",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=71.8381483143463",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-10-10T07:19:42.000Z",
                "updatedAt": "2021-10-10T07:19:42.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Pinkie Mayert",
            "tel": "1-440-959-5075 x68614",
            "address": "4989 Lemke Underpass",
            "opening_hours": "08:00",
            "description": "Dolor iste distinctio aut ut qui rerum maiores pos",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.418494944283317",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-10-10T07:19:42.000Z",
                "updatedAt": "2021-10-10T07:19:42.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Mia Crist",
            "tel": "1-721-501-9647 x26377",
            "address": "6507 Streich Underpass",
            "opening_hours": "08:00",
            "description": "Eveniet suscipit ullam laborum ut unde veniam enim",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=93.19752741056182",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-10-10T07:19:42.000Z",
                "updatedAt": "2021-10-10T07:19:42.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Imani Jacobson",
            "tel": "772-850-1554 x4298",
            "address": "00729 Lind Spring",
            "opening_hours": "08:00",
            "description": "Ut facilis voluptatibus. Pariatur et modi facilis.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.5239329320552",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-10-10T07:19:42.000Z",
                "updatedAt": "2021-10-10T07:19:42.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Santiago Mills",
            "tel": "1-960-198-0747",
            "address": "0972 Windler Knoll",
            "opening_hours": "08:00",
            "description": "quae",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.52492845741585",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-10-10T07:19:42.000Z",
                "updatedAt": "2021-10-10T07:19:42.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Nellie Carroll",
            "tel": "580.155.5910",
            "address": "080 Turcotte Plains",
            "opening_hours": "08:00",
            "description": "Aut maiores quidem nesciunt. Eaque error atque vol",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.35075762241698",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-10-10T07:19:42.000Z",
                "updatedAt": "2021-10-10T07:19:42.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Lucius Huel",
            "tel": "1-722-123-6781",
            "address": "134 Deshaun Ranch",
            "opening_hours": "08:00",
            "description": "optio",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.396101864983315",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-10-10T07:19:42.000Z",
                "updatedAt": "2021-10-10T07:19:42.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Yolanda Kuhlman",
            "tel": "(294) 740-2774 x82462",
            "address": "0694 Eudora Brooks",
            "opening_hours": "08:00",
            "description": "ullam voluptatum rerum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=52.1489243837808",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-10-10T07:19:42.000Z",
                "updatedAt": "2021-10-10T07:19:42.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default {
  name: 'Restaurants',
  components: {
    NavTabs, RestaurantCard, RestaruantsNavPills, RestaurantPagination
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      const {restaurants, categories, categoryId, page, totalPage, prev, next} = dummyData
      this.restaurants = restaurants,
      this.categories = categories,
      this.categoryId = categoryId,
      this.currentPage = page,
      this.totalPage = totalPage,
      this.previousPage = prev,
      this.nextPage = next
    }
  }
}
</script>