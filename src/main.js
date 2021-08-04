import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Home from './components/HomePage'

import second from "@/components/SecondPage";
import default404 from "@/components/Default404Page"
import threepage from '@/components/ThreePage'
import threedefault from '@/components/ThreeDefaultPage'
import forpage from '@/components/FourPage'
import propspage from '@/components/PropsPage'
import statePage from '@/components/StorePage'
import loginPage from '@/components/LoginPage'
import Welcome from '@/components/Welcomepage'
import Shop from '@/components/ShopPage'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
    {
        path: '/',
        component: Welcome
    },
    {
        path: '/home',
        component: Home
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
    {
        path: '/storepage',
        component: statePage
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

const moduleStore = {
    namespaced: true,
    state: () => ({
        countNum: 0,
        countMax: 0,
        arrlist: [1, 2, 4, 5, 5, 6, 6, 8, 10]
    }),
    mutations: {
        increment: state => state.countNum++,
        decrement: state => state.countNum--,
        incrementMax: state => state.countMax++,
        decrementMax: state => state.countMax--,
    },
    getters: {
        otherMax: state => {
            return state.arrlist.filter(num => num > 5)
        }
    },
    //可以包含异步操作
    actions: {
        actionA({commit}) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('increment')
                    resolve()
                }, 1000)
            })
        },
        actionB({dispatch, commit}) {
            return dispatch('actionA').then(() => {
                commit('incrementMax')
            })
        }

    }
}

const moduleShop = {
    state: {
        editItemKey: "",
        editMode: false,
        nameInput: "",
        priceInput: "",
        picInput: "",
        numInput: "",
        listdata: [{
            key: 0,
            name: "111",
            pic: "test1",
            price: 111,
            num: "111",
            act: "111",
        },
            {
                key: 1,
                name: "222",
                pic: "test2",
                price: 222,
                num: "222",
                act: "222",
            },
            {
                key: 2,
                name: "333",
                pic: "test3",
                price: 333,
                num: "333",
                act: "333",
            },
            {
                key: 3,
                name: "444",
                pic: "test4",
                price: 444,
                num: "444",
                act: "444",
            },
        ],
    },
    mutations: {
        givezhi(state, payload) {
            state.editMode = true,
                state.nameInput = payload.name,
                state.numInput = payload.num,
                state.priceInput = payload.price,
                state.picInput = payload.pic,
                state.editItemKey = payload.key
        },
        geiname(state, payload) {
            state.nameInput = payload.name
        },
        getpic(state, payload) {
            state.picInput = payload.pic
        },
        getprice(state, payload) {
            state.priceInput = payload.price
        },
        getnum(state, payload) {
            state.numInput = payload.num
        },
        changeMode(state, payload) {
            state.editMode = payload.mode
        },
        changeItemValue(state, payload) {
            let item = state.listdata.find(item => item.key === payload.key)
            item.name = payload.name,
                item.pic = payload.pic,
                item.price = payload.price,
                item.num = payload.num
            // state.listdata.push({name:payload.name, pic:payload.pic, price:payload.price, num:payload.num, act: "",key: 100})
        },
        changeKey(state, payload) {
            state.editItemKey = payload.key
        }
    },
    namespaced: true,

}

const store1 = new Vuex.Store({
    state: () => ({
        rootNum: 0
    }),
    mutations: {
        increment(state) {
            // 这里的 `state` 对象是模块的局部状态
            state.rootNum++
        }
    },

    getters: {
        doubleCount(state) {
            return state.rootNum * 2
        }
    },
    modules: {
        storemodule: moduleStore,
        storeShop: moduleShop,
    }
})

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
    store: store1,
    router: router,
    render: h => h(App),
}).$mount('#app')
