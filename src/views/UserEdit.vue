<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          v-model="user.name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image | emptyImage"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        Submit
      </button>
      <button type="button" class="btn btn-secondary" @click="$router.back()">
        Back
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { emptyImageFilter } from "../utils/mixins";

import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";
export default {
  name: "UserEdit",
  mixins: [emptyImageFilter],
  data() {
    return {
      user: {
        id: 0,
        name: "",
        email: "",
        image: "",
      },
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    if (this.currentUser.id === -1) return;
    const { id } = this.$route.params;
    this.setUser(id);
  },
  beforeRouteUpdate(to, from, next) {
    if (this.currentUser.id === -1) return;
    const { id } = to.params;
    this.setUser(id);
    next();
  },
  watch: {
    currentUser(user) {
      if (user.id === -1) return;
      const { id } = this.$route.params;
      this.setUser(id);
    },
  },
  methods: {
    setUser(userId) {
      if (this.currentUser.id.toString() !== userId.toString()) {
        this.$router.push("/not-found");
      }
      const { id, name, email, image } = this.currentUser;
      this.user = { id, name, email, image };
    },
    handleFileChange(e) {
      const files = e.target.files;
      console.log(files);
      if (files.length === 0) {
        return this.user.image;
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        console.log(imageURL);
        return (this.user.image = imageURL);
      }
    },
    async handleSubmit(e) {
      try {
        if (!this.user.name) {
          Toast.fire({
            icon: "warning",
            title: "請填入使用者名稱",
          });
          return;
        }

        const form = e.target;
        const formData = new FormData(form);
        console.log(this.user.id);
        this.isProcessing = true;
        console.log(formData);
        const { data } = await usersAPI.update({
          userId: this.user.id,
          formData,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        console.log(data);
        this.isProcessing = false;
        this.$router.push(`/users/${this.user.id}`);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法存取餐廳資訊--",
        });
        this.isProcessing = false;
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-secondary {
  float: right;
}
</style>