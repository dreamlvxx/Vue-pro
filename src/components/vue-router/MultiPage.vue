<template>
  <div>
    <p>这是多个component页面</p>
    <router-view></router-view>
    <router-view name="view1"></router-view>
  </div>
</template>

<script>
export default {
  name: "MultiPage"
}
</script>

<style scoped>

</style>