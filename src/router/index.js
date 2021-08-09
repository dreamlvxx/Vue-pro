import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/HomePage'
import vue_router from '@/components/vue-router/RouterStartPage'
import paramaspage from '@/components/vue-router/ParamsPage'
import firstpage from '@/components/vue-router/FirstRouterPage'
import second from "../components/vue-router/SecondRouterPage";
import default404 from "@/components/vue-router/Default404Page"
import threepage from '@/components/vue-router/ThreePage'
import threedefault from '@/components/vue-router/ThreeDefaultPage'
import propspage from '@/components/vue-router/PropsPage'
import statePage from '@/components/StorePage'
import loginPage from '@/components/vue-router/LoginPage'
import Welcome from '@/components/Welcomepage'
import Shop from '@/components/practice/ShopPage'
import AxiosPage from "@/network/AxiosPage"
import QueryParamsPage from "@/components/vue-router/QueryParamsPage";

import MultiSubPage1 from "@/components/vue-router/MultiSubPage1";
import MultiPage from "@/components/vue-router/MultiPage";
import MultiSubPage2 from "@/components/vue-router/MultiSubPage2";
import AliasNamePage from "@/components/vue-router/AliasNamePage";
import RedirectPage from "@/components/vue-router/RedirectPage";
import GuardPage from "@/components/vue-router/GuardPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Welcome
    },
    {
        path: '/axiospage',
        component: AxiosPage
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/welcome',
        component: Welcome
    },
    {
        path: '/shop',
        component: Shop
    },
    {
        path: '/routerstart',
        component: vue_router
    },
    {
        path: '/params/:name',
        name: 'paramspagename',
        component: paramaspage
    },
    {
        path: '/query',
        component: QueryParamsPage
    },
    //嵌套路由
    {
        path: '/first',
        component: firstpage,
        children: [
            {
                path: 'second',
                component: second
            }
        ]
    },
    {
        path: '/login-*',
        component: loginPage,
        name: 'loginpp'
    },
    //重定向路由
    {
        path: '/redirectPath',
        redirect: {name: 'redirectname'}
    },
    {
        path:'/redirect',
        name: 'redirectname',
        component: RedirectPage,
        beforeEnter: (to,from,next) =>{
            console.log(`beforeEnter : to = ${to.fullPath} from = ${from.fullPath}`)
            next()
        }
    },
    {
        path: '/proppage',
        name: 'proppage',
        component: propspage,
        props: true
    },
    {
        path: '/storepage',
        component: statePage
    },
    {
        path: '/multi',
        name: 'multipage',
        component: MultiPage,
        children: [
            {
                path: 'subview',
                name: 'subviewname',
                components: {
                    default: MultiSubPage1,
                    view1: MultiSubPage2,
                }
            },
        ]
    },
    {
        path: '/alias',
        alias: '/aliasname',
        component: AliasNamePage
    },
    {
        path: '/second/:rouname',
        name: 'second',
        //可以设置别名
        alias: '/second-alias',
        components: {
            default: firstpage,
            routeview1: threepage,
        },
        //匹配到之后，继续进行深层次的匹配，进而渲染在second的router-view里面
        children: [
            {
                path: '/threep',
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
        path: '/guard',
        component: GuardPage,
        beforeEnter: (to,from,next) =>{
            console.log(`beforeEnter : to = ${to} from = ${from}`)
            next()
        }
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
    console.log(`beforeEach : to = ${to.fullPath} from = ${from.fullPath}`)
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
    console.log(`beforeResolve : to ${to.fullPath}  from = ${from.fullPath}`)
    next()
})

//全局后置守卫
router.afterEach((to, from) => {
    console.log(`afterEach : beforeResolve : to = ${to.fullPath} from= ${from.fullPath}`)
})

export default router