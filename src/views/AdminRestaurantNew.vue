<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm
      @create-restaurant="createRestaurant"
      :is-processing="isProcessing"/>
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'

import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'

export default {
  name: 'AdminRestaurantNew',
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      isProcessing: false,
    }
  },
  methods: {
    async createRestaurant(formData) {
      try {
        const {data} = await adminAPI.restaurants.create({formData})
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$router.push({name: 'admin-restaurants'})
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法新增餐廳資訊，請稍後再試'
        })
        console.log(error)
      }
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>