<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 前一頁 previousPage -->
      <li :class="['page-item', {disabled: currentPage === 1}]" v-show="previousPage">
        <router-link
          class="page-link"
          aria-label="Previous"
          :to="{name: 'restaurants', query: {categoryId, page: previousPage}}"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>

      <li :class="['page-item', {active: currentPage === page}]" v-for="page in totalPage" :key="page">
        <router-link
          class="page-link"
          :to="{name:'restaurants', query: {categoryId, page}}"
        >
          {{page}}
        </router-link>
      </li>

      <!-- 後一頁 nextPage -->
      <li :class="['page-item', {disabled: currentPage === totalPage.length}]" v-show="nextPage">
        <a
          class="page-link"
          aria-label="Next"
          :to="{name: 'restaurants', query: {categoryId, page: nextPage}}"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'RestaurantPagination',
  props: {
    totalPage: {
      type: Array,
      require: true,
    },
    categoryId: {
      type: [String, Number],
      default: ''
    },
    currentPage: {
      type: Number,
      default: 1
    },
    previousPage: {
      type: Number,
      required: true
    },
    nextPage: {
      type: Number,
      required: true
    }
  }
}
</script>