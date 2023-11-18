import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Dashboard from '../views/DashboardView.vue'

const DefaultLayout = () => import('../components/DefaultLayout.vue')
const Register = () => import('../views/RegisterView.vue')
const Surveys = () => import('../views/SurveyView.vue')

import { useSurveyStore } from '../stores/surveyStore'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '/dashboard', name: 'Dashboard', component: Dashboard },
      { path: '/surveys', name: 'Surveys', component: Surveys }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useSurveyStore()

  // If route we're navigating to requires authorization and token doesn't exist
  if (to.meta.requiresAuth && !store.user.token) {
    //redirect user
    next({ name: 'Login' })
  } else if (store.user.token && (to.name === 'Login' || to.name === 'Register')) {
    // if user authorized and tries to access Login/Register redirect to dashboard
    next({ name: 'Dashboard' })
  } else {
    // let user go to page they were trying to access
    next()
  }
})

export default router
