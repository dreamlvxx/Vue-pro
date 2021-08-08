<template>
  <div id="startp">
    <button @click='goto1_2'>点击跳转嵌套路由</button>
    <button>给组件传参数</button>
    <button>使用Props给组件传值</button>
  </div>
</template>

<script>
export default {
  name: "RouterStartPage",
  methods: {
    goto1_2() {
      this.$router.push('/first/second')
    },
  }
}
</script>

<style scoped>
#startp{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>