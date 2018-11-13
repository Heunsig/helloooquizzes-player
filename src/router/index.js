import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../components/Main'
// import QuizLayout from '../components/quiz/Layout'
import LoadingRoom from '../components/quiz/LoadingRoom'
import QuizPlayer from '../components/quiz/QuizPlayer'
import ErrorPage from '../components/quiz/ErrorPage'

import TestPage from '../components/TestPage'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      name: 'main',
      alias: 'quiz_list'
    },
    // {
    //   path: '/quiz',
    //   component: QuizLayout,
    //   children: [
    //     {
    //       path: ':game_id',
    //       component: LoadingRoom,
    //       name: 'loading_room'
    //     },
    //     {
    //       path: ':game_id/play',
    //       component: QuizPlayer,
    //       name: 'quiz_player',
    //       props: true,
    //       beforeEnter (to, from, next) {
    //         if (to.params.questions) {
    //           next()
    //         } else {
    //           next({
    //             name: 'main',
    //             params: {
    //               game_id: to.params.game_id
    //             }
    //           })
    //         }
    //       }
    //     }
    //   ]
    // }
    {
      path: '/quiz/:quiz_id',
      component: LoadingRoom,
      name: 'loading_room'
    },
    {
      path: '/quiz/:quiz_id/play',
      component: QuizPlayer,
      name: 'quiz_player',
      props: true,
      beforeEnter (to, from, next) {
        if (to.params.questions) {
          next()
        } else {
          next({
            name: 'loading_room',
            params: {
              quiz_id: to.params.quiz_id
            }
          })
        }
      }
    },
    {
      path:'/error/no_question',
      component: ErrorPage,
      name:'no_question'
    },
    {
      path: '/test',
      component: TestPage
    }
  ]
})

export default router