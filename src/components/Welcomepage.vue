<template>
  <div>
    <p>欢迎您进入vue教程</p>
    <button v-on:click="startHomePage">点击开始疯狂学习</button>
  </div>
</template>

<script>
export default {
  name: "Welcomepage",
  methods: {
    startHomePage: function () {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>

</style>