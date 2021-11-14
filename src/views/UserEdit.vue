<template>
  <div class="container py-5">
    <form @submit="handleSubmit">
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
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200">
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
      >
        Submit
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        @click="$router.back()"
      >
        Back
      </button>
    </form>
  </div>
</template>

<script>

const dummyData = {
  'profile': {
    'id': 1,
    'name': 'root',
    'email': 'root@example.com',
    'password': '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
    'isAdmin': true,
    'image': 'https://i.imgur.com/58ImzMM.png',
    'createdAt': '2019-07-30T16:24:54.983Z',
    'updatedAt': '2019-08-01T10:33:51.095Z',
  }
  
}

export default {
  name: 'UserEdit',
  data() {
    return {
      user: {
        id: 0,
        name: '',
        email: '',
        image: '',
      }
    }
  },
  created() {
    const {id} = this.$route.params
    this.fetchUser(id)
  },
  methods: {
    fetchUser() {
      const {id, name, email, image} = dummyData.profile
      this.user = {id, name, email, image}
    },
    handleFileChange(e) {
      const files = e.target.files
      console.log(files)
      if(files.length === 0) {
        return this.user.image
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        return this.user.image = imageURL
      }
    },
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)
      this.$emit("submit-user-update", formData)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-secondary {
  float: right;
}
</style>