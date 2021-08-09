<template>
  <div>
    <p>这是接收vue-router参数的页面</p>
    <p>接受的url参数是{{this.$route.params.name}}</p>
  </div>
</template>

<script>
export default {
  name: "ParamsPage"
}
</script>

<style scoped>

</style>