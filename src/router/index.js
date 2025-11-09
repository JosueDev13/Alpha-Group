import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePageView.vue'
import ServicesView  from '../views/ServicesView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutView from '@/views/AboutView.vue'
import BlogView from '@/views/BlogView.vue'
import NotFound from '../views/NotFound.vue';
const routes = [
  { path: '/', name: 'home', component: HomePageView }, 
  { path: '/Service', name: 'ServicesView', component: ServicesView },
  { path: '/Contact', name: 'ContactView', component: ContactView }, 
  { path: '/About', name: 'AboutView', component: AboutView }, 
  { path: '/Blog', name: 'BlogView', component: BlogView }, 
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
