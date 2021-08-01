<template>
  <div>
    <p v-bind:style="styOnbj">第二个页面的开始</p>
    <router-view></router-view>
    <p>第二个页面结束</p>
  </div>
</template>

<script>

export default {
  name: "SecondPage",
  data: function () {
    return {
      styOnbj: {
        color: 'red',
      }
    }
  },
  created() {
    console.log(this.routername)
  },
  computed: {
    routername : function () {
      return this.$route.params.rouname
    },

  },
  watch: {
    $route(to,from){
      console.log("in second===    to = " + to + "   from = " + from)
    }
  }
}

</script>

<style scoped>

</style>