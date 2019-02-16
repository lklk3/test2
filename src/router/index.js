import Vue from 'vue'
import Router from 'vue-router'
import IndexNav from '@/components/Index'
import CompanyNav from '@/components/company/company.vue'
import EcharsNav from '@/components/echer/echars.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexNav
    },
    {
      path: '/company',
      name: 'company',
      component: CompanyNav
    },
    {
      path: '/echars',
      name: 'echars',
      component: EcharsNav
    }
  ]
})
