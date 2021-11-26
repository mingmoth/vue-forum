import { apiHelper } from "../utils/helpers";

export default {
  getRestaurants({page, categoryId}) {
    // 攜帶categoryId, page參數
    // JavaScript 裡有提供一個原生的 URLSearchParams() 方法，幫你把一組物件參數直接組成網址上的 queryString
    const searchParams = new URLSearchParams({page, categoryId})
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getRestaurant({restaurantId}) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
  getRestaurantsFeeds() {
    return apiHelper.get('/restaurants/feeds')
  },
  getRestaurantsTop() {
    return apiHelper.get('/restaurants/top')
  },
}