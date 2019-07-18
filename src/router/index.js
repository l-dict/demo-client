import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//import Login from '@/components/Login'
import Cindex from '@/views/client_page/Cindex-page.vue'
import Bindex from '@/views/back_page/Bindex-page.vue'
import Mindex from '@/views/back_page/Mindex-page.vue'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component:HelloWorld 
    // },
    //   {
    //     path: '/Login',
    //     name: 'Login',
    //     component:Login 
    //   }
        {
         path: '/',
         name:'Cindex',
         component:Cindex 
       },
       {
        path: '/Bindex',
        name:'Bindex',
        component:Bindex 
      },
      {
        path: '/Mindex',
        name:'Mindex',
        component:Mindex 
      }
     
  ]
})
