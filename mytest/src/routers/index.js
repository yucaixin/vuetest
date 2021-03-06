import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  base:'miaomiao',
  mode:'history',
  routes: [
    {
      path: '/movie',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Movie/index.vue'),
      children:[
        {
          path:'/movie',
          redirect:'/movie/nowplaying'
        },
        {
          path:'city',
          component: () => import(/* webpackChunkName: "about" */ '@/components/City')
        },
        {
          path:'nowplaying',
          component: () => import(/* webpackChunkName: "about" */ '@/components/NowPlaying')
        },
        {
          path:'search',
          component: () => import(/* webpackChunkName: "about" */ '@/components/Search')
        },
        {
          path:'comingsoon',
          component: () => import(/* webpackChunkName: "about" */ '@/components/ComingSoon')
        }
      ]
    },
    {
      path: '/mine',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/Mine')
    },
    {
      path: '/cinema',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/Cinema')
    },
    {
      path: '/*',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Movie/index.vue'),
      children:[
        {
          path:'/movie',
          redirect:'/movie/nowplaying'
        },
        {
          path:'city',
          component: () => import(/* webpackChunkName: "about" */ '@/components/City')
        },
        {
          path:'nowplaying',
          component: () => import(/* webpackChunkName: "about" */ '@/components/NowPlaying')
        },
        {
          path:"detail/1/:movieId",
          components:{
            default:()=>import('@/components/NowPlaying'),
            detail:()=>import('@/views/Movie/detail')
          },
          props:{
            detail:true
          }
        },
        {
          path:"detail/2/:movieId",
          components:{
            default:()=>import('@/components/ComingSoon'),
            detail:()=>import('@/views/Movie/detail')
          },
          props:{
            detail:true
          }
        },
        {
          path:'search',
          component: () => import(/* webpackChunkName: "about" */ '@/components/Search')
        },
        {
          path:'comingsoon',
          component: () => import(/* webpackChunkName: "about" */ '@/components/ComingSoon')
        }
      ]
    },
  ]
})