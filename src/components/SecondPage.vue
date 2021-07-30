<template>
  <div>
    <p v-bind:style="styOnbj">这是第二个页面的内容</p>
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
}
</script>

<style scoped>

</style>