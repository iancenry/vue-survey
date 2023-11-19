import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSurveyStore = defineStore('survey', () => {
  let user = ref({
    data: {
      name: 'Tom Cook',
      email: 'tom@example.com',
      imageUrl: '/src/assets/profilef.jpg'
    },
    token: 123
  })

  const logout = () => {
    user.value.data = {}
    user.value.token = null
  }

  return { user, logout }
})
