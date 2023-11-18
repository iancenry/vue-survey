import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Dashboard from '../views/DashboardView.vue'

const DefaultLayout = () => import('../components/DefaultLayout.vue')
const Register = () => import('../views/RegisterView.vue')
const Surveys = () => import('../views/SurveyView.vue')

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
    name: Login,
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

export default router
