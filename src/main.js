import Vue from 'vue'
import App from './components/LauncherPage'
import router1 from './router'
import store1 from  './store'
Vue.config.productionTip = false
new Vue({
    store: store1,
    router: router1,
    render: h => h(App),
}).$mount('#app')
