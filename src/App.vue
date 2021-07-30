<template>
  <div id="app">
    <p v-bind:style="styObj">这是显示地铁</p>
    <p v-bind:style="{ fontSize: postFontSize + 'px' }">style属性样式</p>
    <checkboxx v-bind:ccc="lovingVue" v-on:check-event="calboo"></checkboxx>
    <p v-if="lovingVue">会不会显示</p>

    <slotpro >
      <template #slotname="slotProps">
        {{ slotProps.teacher.name }}
      </template>
    </slotpro>

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

export default {
  name: 'App',
  props: {
    lovingVue: Boolean
  },
  watch:{
    lovingVue : function (val) {
      console.log("has change " +val)
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
    slotpro
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
