2019.6.6
    1.定义组件detail.vue
    2.在movie中同时使用router-view的方法为在路由中命名视图：理由跟命名相同时 只显示命名
    view，而不去router-view整体中显示

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
        渲染：
        
        <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <router-view name="detail"></router-view>

    3.命名视图的路由配置中设置props就可以在对应组件中使用props取得url中的
       
    

    4.对应组件获取props中的movieId后就可以使用axios来获取值，然后进行渲染