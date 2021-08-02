<template>
  <div id="app">
    <p v-bind:style="styObj">这是第一个页面routeview开始</p>
    <transition name="slide">
      <router-view></router-view>
    </transition>
    <router-view name="routeview1"></router-view>
    <router-view name="routeview2"></router-view>
    <router-view></router-view>
<!--    <router-view name="routeview1"></router-view>-->
<!--    <router-view name="routeview2"></router-view>-->
    <p v-bind:style="styObj">这是第一个页面routeview结束</p>
    <p v-bind:style="{ fontSize: postFontSize + 'px' }">style属性样式</p>
    <checkboxx v-bind:ccc="lovingVue" v-on:check-event="calboo"></checkboxx>
    <p v-if="lovingVue">会不会显示</p>

    <slotpro ref="slot-component">
      <template #slotname="slotProps">
        {{ slotProps.teacher.name }}
      </template>
    </slotpro>

    <button v-on:click="getChildrenMethod">点击调用子组件的方法</button>

    <inlinetemp inline-template>
      <div>
        <p>These are compiled as the component's own template.inline pros is {{ messageInTemplete }}</p>
        <!--无法使用父类的数据 -->
        <!--        <p>Tssss. app prop is {{this.hello}}</p>-->
      </div>
    </inlinetemp>

    <router-link :to="{name: 'threep',params: {rouname: '11111'}}" target = "_blank">Go to second</router-link>
    <router-link :to="{name: 'second',params: {rouname: '22222'}}">go tyo second again</router-link>
    <button v-on:click="gotoSecdonMsd">编程式跳转第二个component</button>
    <button v-on:click="gobackPage">编程式后退一步</button>
    <button v-on:click="goforwardPage">编程式前进一步</button>
    <button v-on:click="gotoPropsPage">用props设置传参</button>

    <!--    <div>-->
    <!--      <button v-on:click="">导航守卫的例子</button>-->
    <!--    </div>-->

    <div>
      <button v-on:click="gotoStatePage">进入statepage</button>
    </div>

    <ul>
      <li v-for="(item,index) in items" v-bind:key="item.mess">
        {{ item.mess }}--{{ index }}
      </li>
    </ul>
    <ul>
      <li v-for="(valuem,key,index) in iteratorObj" v-bind:key="key">
        value is {{ valuem }} key is {{ key }} index is {{ index }}
      </li>
    </ul>
    <div id="example-1">
      <button v-on:click.once="changeMessage">Add 1</button>
      <input v-on:keyup.enter.exact.once="changeMessage">
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>

    <div id="binding">
      <input id="input1" v-model="sss" placeholder="default caple">
      <p> mess is {{ sss }}</p>
      <textarea v-model="hello" placeholder="meiyou zhi">

      </textarea>
      <p> area mess is {{ hello }}</p>
    </div>

    <img alt="Vue logo" src="./assets/logo.png">
    <!--    <wuyule msg="Welcome pppppssto Your Vue.js App" v-bind:message="reversedMessage" v-bind:tttt="false"-->
    <!--            url="https://www.baidu.com" />-->

    <wuyule v-bind:post="singlepost" v-on:enlarge-text="largeSize" message="ssssss"></wuyule>
  </div>
</template>

<script>
import wuyule from './components/Helllloo.vue'
import checkboxx from './components/BaseCheckBox'
import slotpro from './components/SlotPro'
import inlinetemp from './components/InlineTempletePro'

export default {
  name: 'App',
  props: {
    lovingVue: Boolean
  },
  watch: {
    lovingVue: function (val) {
      console.log("has change " + val)
    },
    $route(to, from) {
      console.log("to = " + to + "   from = " + from)
    }
  },
  data: function () {
    return {
      postFontSize: 20,
      singlepost: {msg: "11", message: "qqqq", tttt: false, url: ""},
      posts: [
        {msg: "11", message: "qqqq", tttt: false, url: ""},
        {msg: "22", message: "wwww", tttt: false, url: ""},
        {msg: "33", message: "eeee", tttt: false, url: ""},
      ],
      sss: "sad",
      counter: 0,
      hello: 'hello world',
      styObj: {
        color: 'blue',
        fontSize: this.postFontSize + 'px'
      },
      classObj: {
        classPar: "asd"
      },
      items: [
        {
          mess: "11111",
          isshow: true
        },
        {
          mess: "22222",
          isshow: false
        }
      ],
      iteratorObj: {
        one: "oneee",
        two: "twooo",
        three: "threeee"
      }
    }
  },
  components: {
    wuyule,
    checkboxx,
    slotpro,
    inlinetemp
  },
  computed: {
    reversedMessage: function () {
      return this.hello.split('').reverse().join('')
    },
    selfboo: {
      get: function () {
        return this.lovingVue
      },
      set: function (newvalue) {
        this.lovingVue = newvalue
      }
    },
    rotername: function () {
      return this.route.params.username
    }
  },
  methods: {
    changeMessage: function () {
      alert("hahahahaha")
    },
    largeSize: function () {
      this.postFontSize += 1
    },
    calboo: function (val) {
      this.lovingVue = val
      console.log(val)
    },
    getChildrenMethod: function () {
      this.$refs["slot-component"].childrenMethodInSLot()
    },
    providerMeth() {
      alert("向子组件提供的方法")
    },
    gotoSecdonMsd: function () {
      this.$router.push({name: 'threep', params: {rouname: '777'}})
    },
    goforwardPage: function () {
      this.$router.go(1)
    },
    gobackPage: function () {
      this.$router.go(-1)
    },
    gotoPropsPage: function () {
      this.$router.push('/proppage/ooooooo')
    },
    gotoStatePage: function () {
      this.$router.push('/storepage')
    }
  },
  provide: {
    providerMessage: "provider by parent",
    providerMethod: function () {
      alert("providerMethod from parent")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
