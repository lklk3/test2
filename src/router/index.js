import Vue from 'vue'
import Router from 'vue-router'
import IndexNav from '@/components/Index'
import CompanyNav from '@/components/company/company.vue'
import EcharsNav from '@/components/echer/echars.vue'
import MessageNav from '@/components/message/message.vue'
import JianJie from '@/components/message/child/JianJie'
import WenHua from '@/components/message/child/wenhua'
import JingYin from '@/components/message/child/jingyin'
import LianXi from '@/components/message/child/lianxi'
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
    },
    {
      path: '/message',
      name: 'message',
      component: MessageNav,
      children:[
        {
          path: '',
          component: JianJie
        },
        {
          path: '/jianjie',
          name: 'jianjie',
          component: JianJie
        },
        {
          path: '/wenhua',
          name: 'wenhua',
          component: WenHua
        },
        {
          path: '/jingyin',
          name: 'jingyin',
          component: JingYin
        },
        {
          path: '/lianxi',
          name: 'lianxi',
          component: LianXi
        }
        
      ]
    }
  ]
})
