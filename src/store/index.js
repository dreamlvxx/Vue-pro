import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex)


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

export default store1