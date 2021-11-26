<template>
  <form @submit.prevent.stop="createComment(restaurantId, comment)">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea class="form-control" rows="3" name="text" v-model="comment" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
        :disabled="isProcessing"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import commentsAPI from "../apis/comments";
import { v4 as uuidv4 } from "uuid";
import { Toast } from "../utils/helpers";

export default {
  name: "CreateComment",
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      comment: "",
      isProcessing: false,
    };
  },
  methods: {
    async createComment() {
      try {
        if (!this.comment) {
          Toast.fire({
            icon: "warning",
            title: "請協助填寫評論",
          });
          return;
        }
        this.isProcessing = true;
        const { data } = await commentsAPI.create({
          restaurantId: this.restaurantId,
          text: this.comment,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$emit("create-comment", {
          commentId: uuidv4(),
          restaurantId: this.restaurantId,
          comment: this.comment,
        });
        Toast.fire({
          icon: "success",
          title: `已成功新增評論`,
        });
        this.comment = "";
        this.isProcessing = false
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: `無法新增評論--${error.message}`,
        });
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>