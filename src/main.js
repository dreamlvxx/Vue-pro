import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import second from "@/components/SecondPage";
import default404 from "@/components/Default404Page"
import threepage from '@/components/ThreePage'
import threedefault from '@/components/ThreeDefaultPage'
import forpage from '@/components/FourPage'
import propspage from '@/components/PropsPage'
import loginPage from '@/components/LoginPage'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    {
        path: '/second/:rouname',
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
                path: 'threep',
                component: threepage,
                name: 'threep',
                meta: {
                    requiresAuth: true
                }
            },
            {
                //设置children没有匹配的default页面
                path: '',
                component: threedefault,
                meta: {
                    requiresAuth: false
                }
            }
        ],
    },
    {
        path: '/login-*',
        component: loginPage,
        name: 'loginpp'
    },
    //重定向路由
    {
        path: '/redirectPath',
        redirect: {name: 'second'}
    },
    {
        path: '/proppage/:propsnvalue',
        component: propspage,
        props: true,
    },
    // 会匹配以 `/user-` 开头的任意路径
    // 当使用一个通配符时，$route.params 内会自动添加一个名为 pathMatch 参数。它包含了 URL 通过通配符被匹配的部分：
    {path: '/user-*'},
    // 会匹配所有路径
    {
        path: '*',
        component: default404,
        name: 'allpage'
    }
]

const router = new VueRouter({
    routes, // (缩写) 相当于 routes: routes,
    scrollBehavior(to, from, savePositotion) {
        console.log(to + from + savePositotion)
        return {x: 0, y: 0}
    },
})

//全局前置守卫
//当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。
router.beforeEach((to, from, next) => {
    console.log("beforeEach : to -name = " + to.name + " from-name = " + from.name)
    if (to.matched.some(record => record.meta.requiresAuth)) {
        next({
            name: 'loginpp',
            query: {
                redirect: to.fullPath
            }
        })
    } else {
        next()
    }
})

//全局解析守卫
//在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
router.beforeResolve((to, from, next) => {
    console.log("beforeResolve : to -name = " + to.name + " from-name = " + from.name)
    next()
})

//全局后置守卫
router.afterEach((to, from) => {
    console.log("afterEach : beforeResolve : to -name = " + to.name + " from-name = " + from.name)
})


// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')
