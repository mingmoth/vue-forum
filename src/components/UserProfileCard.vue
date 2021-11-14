<template>
   <div class="card mb-3">
     <div class="row no-gutters">
       <div class="col-md-4">
         <img :src="profile.image" alt="">
       </div>
       <div class="col-md-8">
         <div class="card-body">
           <h4 class="card-title">{{profile.name}}</h4>
           <p>{{profile.email}}</p>
           <ul class="list-unstyled">
             <li><strong>{{profile.comments.length}}</strong> 已評論餐廳</li>
             <li><strong>{{profile.favoriteRestaurants.length}}</strong> 收藏的餐廳</li>
             <li><strong>{{profile.followings.length}}</strong> followings(追蹤中)</li>
             <li><strong>{{profile.followers.length}}</strong> followers(追蹤者)</li>
           </ul>
           <button v-if="isCurrentUser" class="btn btn-primary">Edit</button>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  name: 'UserProfileCard',
  props: {
    initalUser: {
      type: Object,
      required: true
    },
    isCurrentUser: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      profile: {},
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.profile = this.initalUser
    }
  }
}
</script>