<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          class="btn btn-danger float-right"
          v-if="currentUser.isAdmin"
          @click.prevent.stop="deleteComment(comment.id)"
        >
          Delete
        </button>
        <h3>
          <a href="#">
            {{comment.User ? comment.User.name : '匿名留言'}}
          </a>
        </h3>
        <p>{{comment.description}}}</p>
        <footer class="blockquote-footer">
          {{comment.createdAt | fromNow}}
        </footer>
      </blockquote>
      <hr>
    </div>

  </div>
</template>


<script>
import {fromNowFilter} from '../utils/mixins'
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

// import moment from 'moment'
export default {
  name: '',
  mixins: [
    fromNowFilter
  ],
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentUser: dummyUser.currentUser
    }
  },
  methods: {
    deleteComment(commentId) {
      this.$emit('delete-comment', commentId)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-danger {
  float: right;
}
</style>