import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSurveyStore = defineStore('survey', () => {
  let user = ref({
    name: 'Ian',
    token: null
  })

  return { user }
})
