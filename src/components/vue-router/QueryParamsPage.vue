<template>
  <div>
    <p>这是接收query参数的页面</p>
    <p>这是接收的query参数值{{ this.$route.query.queryName }}</p>
  </div>

</template>

<script>
export default {
  name: "QueryParamsPage"
}
</script>

<style scoped>

</style>