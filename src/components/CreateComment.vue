<template>
  <form
    @submit.prevent.stop="createComment(comment)">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        class="form-control"
        rows="3"
        name="text"
        v-model="comment"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁</button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid"
export default {
  name: 'CreateComment',
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      comment: ''
    }
  },
  methods: {
    createComment() {
      this.$emit("create-comment", {
        commentId: uuidv4(),
        restaurantId: this.restaurantId,
        comment: this.comment
      })
      this.comment = ''
    }
  }
}
</script>