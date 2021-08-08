<template>
  <p>使用axios手册</p>
</template>

<script>
import axios from "axios";

export default {
  created() {
    console.log("111")
    this.getNetMessage()
    console.log("222")
  },

  name: "AxiosPage",
  methods: {
    async getNetMessage() {
      console.log("start")
      let result = await axios.get("https://www.baidu.com").then(function (par) {
        console.log(par)
        console.log("complete")
      })
      return result
    }
  }
}
</script>

<style scoped>

</style>