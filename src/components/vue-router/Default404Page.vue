<template>
  <p>这是一个404页面</p>
</template>

<script>
export default {
  name: "Default404Page",
  data: function () {
    return {

    }
  },
  computed: {
    matchName: function () {
      return this.$route.params.pathMatch
    }
  },
  created() {
    console.log(this.$route.params.pathMatch)
  }
}
</script>

<style scoped>

</style>