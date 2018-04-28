import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import popup from '@/components/popup'
import move from '@/components/move'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/savedata',
      name: 'popup',
      component: popup
    },
    {
      path: '/move',
      name: 'move',
      component: move
    }
  ]
})
