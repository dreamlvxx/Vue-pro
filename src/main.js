import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import second from "@/components/SecondPage";
import default404 from "@/components/Default404Page"
import threepage from '@/components/ThreePage'
import threedefault from '@/components/ThreeDefaultPage'
import forpage from '@/components/FourPage'
import propspage from '@/components/PropsPage'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/second/:rouname',
    components: {
        default: second,
        routeview1: threepage,
        routeview2: forpage
    },
    name: 'second',
    //可以设置别名
    alias: '/second-alias',
    //匹配到之后，继续进行深层次的匹配，进而渲染在second的router-view里面
    children: [
      {
        path:'threep',
        component: threepage,
        name: 'threep'
      },
      {
        //设置children没有匹配的default页面
        path: '',
        component: threedefault,
      }
    ],
  },
    //重定向路由
  {
    path: '/redirectPath',
    redirect: {name: 'second'}
  },
  {
    path: '/proppage/:propsnvalue',
    component: propspage,
    props: true
  },
  // 会匹配以 `/user-` 开头的任意路径
  // 当使用一个通配符时，$route.params 内会自动添加一个名为 pathMatch 参数。它包含了 URL 通过通配符被匹配的部分：
  {path: '/user-*'},
  // 会匹配所有路径
  {path: '*',
    component: default404,
    name: 'allpage'
  }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
