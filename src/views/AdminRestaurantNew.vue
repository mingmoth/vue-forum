<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @create-restaurant="createRestaurant"/>
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'
export default {
  name: 'AdminRestaurantNew',
  components: {
    AdminRestaurantForm,
  },
  methods: {
    createRestaurant(formData) {
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>