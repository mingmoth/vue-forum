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
          :disabled="isProcessing"
          @click.prevent.stop="deleteComment(comment.id)"
        >
          Delete
        </button>
        <h3>
          <a href="#">
            {{comment.User ? comment.User.name : '匿名留言'}}
          </a>
        </h3>
        <p>{{comment.text}}</p>
        <footer class="blockquote-footer">
          {{comment.updatedAt | fromNow}}
        </footer>
      </blockquote>
      <hr>
    </div>

  </div>
</template>


<script>
import commentsAPI from '../apis/comments'
import {fromNowFilter} from '../utils/mixins'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

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
    },
  },
  data() {
    return {
      isProcessing: false,
    }
  },
  computed: {
    ...mapState(["currentUser"])
  },
  watch: {
    restaurantComments(newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }

    }
  },
  methods: {
    async deleteComment(commentId) {
      try {
        this.isProcessing = true
        const { data } = await commentsAPI.delete({commentId})
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$emit('delete-comment', commentId)
        Toast.fire({
          icon: "success",
          title: `已成功刪除評論`,
        });
        this.isProcessing = false
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: `無法刪除評論--${error.message}`
        })
        this.isProcessing = false
        console.log(error)
      }
      // 
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-danger {
  float: right;
}
</style>