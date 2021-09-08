<template>
  <div>
    <p>学习vue-router</p>

    <router-view></router-view>
    <!-- 具名router—view-->
    <router-view name="view1"></router-view>
  </div>
</template>

<script>
export default {
  name: "RouterPage",
  data() {

  },
  methods: {},

}
</script>

<style scoped>

</style>
