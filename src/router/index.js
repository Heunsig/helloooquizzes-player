import Vue from 'vue'
import VueRouter from 'vue-router'

import GameList from '../components/GameList'
import Main from '../components/Main'
import GameContainer from '../components/GameContainer'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: GameList,
      name: 'game_list',
      alias: '/game_list'
    },
    {
      path: '/game/:game_id',
      component: Main,
      name: 'main'
    },
    {
      path: '/game/:game_id/play',
      component: GameContainer,
      name: 'game',
      props: true,
      beforeEnter (to, from, next) {
        console.log(from)
        if (to.params.questions) {
          next()
        } else {
          next({
            name: 'main',
            params: {
              game_id: to.params.game_id
            }
          })
        }
      }
    }
  ]
})

export default router