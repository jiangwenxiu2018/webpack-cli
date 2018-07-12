import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/Index'

Vue.use(Router)

export default new Router({
//  mode:history,
  routes: [//每一个地址都是一个对象
    {
      path: '/',  //路由要匹配的路径（这个路径是除了域名以外的路径）
      name: 'index',
      component: Index
      
    }
  ]
})
