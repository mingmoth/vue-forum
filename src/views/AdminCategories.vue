<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            type="text"
            v-model="newCategory"
            class="form-control"
            placeholder="新增餐廳類別..."
          />
        </div>
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-primary"
            :disabled="isProcessing"
            @click.stop.prevent="addCategory(newCategory)"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div class="category-name" v-show="!category.isEditing">
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span
              v-show="category.isEditing"
              class="cancel"
              @click="handleCancel(category.id)"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              type="button"
              class="btn btn-link mr-2"
              v-show="!category.isEditing"
              @click.stop.prevent="
                toggleIsEditing(category.id)
              "
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="
                updateCategory({ categoryId: category.id, name: category.name })
              "
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";
import uuid from "uuid/v4";

import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  components: {
    AdminNav,
  },

  data() {
    return {
      categories: [],
      newCategory: "",
      isProcessing: false,
    };
  },

  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await adminAPI.categories.get();
        if (response.statusText !== "OK") {
          throw new Error();
        }
        this.categories = response.data.categories.map((category) => ({
          ...category,
          isEditing: false,
          nameCached: "",
        }));
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳類別資訊，請稍後再試",
        });
        console.log(error);
      }
    },
    async addCategory(newCategory) {
      try {
        if (!this.newCategory) {
          Toast.fire({
            icon: "warning",
            title: "請填寫欲新增之餐廳類別",
          });
          return;
        }
        this.isProcessing = true;
        const {data} = await adminAPI.categories.create({ name: this.newCategory });
        console.log(data)
        if(data.status === 'error') {
          throw new Error(data.message)
        }
        this.categories.push({
          id: uuid(),
          name: this.newCategory,
          createdAt: new Date(),
          updatedAt: new Date(),
        });

        this.isProcessing = false;
        Toast.fire({
          icon: "success",
          title: `成功新增${newCategory}餐廳類別`,
        });
        this.newCategory = "";
      } catch (error) {
        console.log(error);
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: `無法新增餐廳類別--${error.message}`,
        });
      }
    },
    async deleteCategory(categoryId) {
      try {
        const response = await adminAPI.categories.delete({ categoryId });
        console.log(response);
        this.categories = this.categories.filter(
          (category) => category.id !== categoryId
        );
        Toast.fire({
          icon: "success",
          title: "成功刪除此餐廳類別",
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法刪除此餐廳類別，請稍後再試",
        });
      }
    },
    toggleIsEditing(categoryId) {
      console.log('clcik')
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name,
          };
        }
        return category;
      });
    },
    async updateCategory({ categoryId, name }) {
      try {
        const response = await adminAPI.categories.update({categoryId: categoryId, name: name})
        console.log(response)
        this.toggleIsEditing(categoryId);
        Toast.fire({
          icon: "success",
          title: "成功更新此餐廳類別",
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法更新此餐廳類別，請稍後再試",
        });
      }
      
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            name: category.nameCached,
          };
        }
        return category;
      });
    },
  },
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>