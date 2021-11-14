<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{restaurant.name}}
            </h5>
            <span class="badge bg-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            <a
              href="#"
              class="btn btn-primary mr-2"
            >Show</a>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.prevent.stop="deleteFavorited(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click.prevent.stop="addFavorited(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import NavTabs from '../components/NavTabs.vue'

const dummyData ={
    "restaurants": [
        {
            "id": 50,
            "name": "Miss Julien Runolfsdottir",
            "tel": "(162) 327-1176",
            "address": "98814 Rutherford Spurs",
            "opening_hours": "08:00",
            "description": "Voluptatibus tempore necessitatibus quae qui nisi.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.28602108929819",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Beryl Wolf",
            "tel": "(698) 390-0286",
            "address": "7455 Jacobson Brook",
            "opening_hours": "08:00",
            "description": "Ipsum quam autem aut. Similique voluptatibus eum h",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=90.37723792965566",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Carlo Fahey",
            "tel": "611-463-8552 x155",
            "address": "06752 Ethelyn Rue",
            "opening_hours": "08:00",
            "description": "Numquam quia eos corrupti officia quia facilis deb",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=90.98300744245529",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Hassan Langosh",
            "tel": "044.846.5477 x7408",
            "address": "1055 Eliseo Vista",
            "opening_hours": "08:00",
            "description": "Nesciunt quas ut repellendus. Sit aut repudiandae ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.05498585746071",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Demarcus Toy",
            "tel": "1-424-902-0478 x251",
            "address": "9285 Homenick Mountain",
            "opening_hours": "08:00",
            "description": "et sit quam",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=7.280097811523234",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Shanie Welch",
            "tel": "1-808-749-1290",
            "address": "18568 Wanda Prairie",
            "opening_hours": "08:00",
            "description": "Ipsam quibusdam odio nihil cum nemo dicta nihil. I",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.882994421736512",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Geovanny McClure",
            "tel": "713.827.6524 x846",
            "address": "905 Jakubowski Divide",
            "opening_hours": "08:00",
            "description": "Possimus nihil temporibus inventore cumque dolores",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=60.71639646423763",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Ella Christiansen",
            "tel": "1-345-115-0932",
            "address": "847 Beaulah Manors",
            "opening_hours": "08:00",
            "description": "et omnis qui",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.915825730727605",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Trudie Wehner",
            "tel": "715.128.1709 x80275",
            "address": "030 Karley Club",
            "opening_hours": "08:00",
            "description": "Consequatur quibusdam ipsa eaque sunt in accusanti",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=13.985098221712256",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Myrna Jones V",
            "tel": "1-131-904-4583 x14267",
            "address": "27792 Kreiger Shore",
            "opening_hours": "08:00",
            "description": "Rem reprehenderit veniam totam dolorem et. Placeat",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.72354332219356",
            "viewCounts": 0,
            "createdAt": "2021-10-10T07:19:42.000Z",
            "updatedAt": "2021-10-10T07:19:42.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}

export default {
  name: 'RestaurantsTops',
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    }
  },
  created() {
    this.fetchRestaurant()
  },
  methods: {
    fetchRestaurant() {
      this.restaurants = dummyData.restaurants
    },
    addFavorited(restaurantId) {
      this.restaurants = this.restaurants.map((restaurant) => {
        if(restaurant.id === restaurantId) {
          return {
            ...restaurant,
            isFavorited: true,
            FavoriteCount: restaurant.FavoriteCount + 1
          }
        } else {
          return restaurant
        }
      })
    },
    deleteFavorited(restaurantId) {
      this.restaurants = this.restaurants.map((restaurant) => {
        if(restaurant.id === restaurantId) {
          return {
            ...restaurant,
            isFavorited: false,
            FavoriteCount: restaurant.FavoriteCount - 1
          }
        } else {
          return restaurant
        }
      })
    }
  } 
}
</script>