<template>
  <div>
      <span>
  <slot v-bind:user="user" name="slotname" v-bind:teacher="teacher">
    {{ user.lastName }}
  </slot>
</span>

    <button v-on:click="getparentMethod">点击获取parent的fontsize</button>
    <button v-on:click="callProviderMethod">点击响应parent提供的方法</button>

    <p>{{providerMessage }}</p>

  </div>

</template>

<script>
export default {
  mixins:{

  },
  inject:["providerMessage","providerMethod"],
  name: "SlotPro",
  props: {
    url: String,
    sex: String
  },
  data() {
    return {
      user: {
        firstName: "slotuser张",
        lastName: "slot三"
      },
      teacher: {
        name: "slot-teacher",
        sex: "slot-boy",
      }
    };
  },
  methods: {
    getparentMethod: function () {
      let a = this.$parent.$data.postFontSize
      console.log("parent fontsize is " + a)
      alert("parent fontsize is " + a)
    },
    childrenMethodInSLot(){
      alert("excu childrenMethodInSLot")
    },
    callProviderMethod(){
      this.providerMethod()
    }
  }
}
</script>

<style scoped>

</style>