<template>
  <p>这是propspage，，接收的路由参数是{{propsnvalue}}</p>
</template>

<script>
export default {
  name: "PropsPage",
  props: {
    propsnvalue: String,
  }
}
</script>

<style scoped>

</style>