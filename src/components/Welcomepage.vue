<template>
  <div id="firdiv">
    <p>欢迎您进入vue教程</p>
    <button id="btn1" v-on:click="startHomePage">点击开始疯狂学习</button>
    <div id="secdiv">
      <p>有问题请咨询18734825542</p>
    </div>
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
div button {
  background-color: black;
}
div#firdiv {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 80px;
  position: absolute;
  width: 99%;
  height: 90%;
  border-radius: 20px 40px;
  background-image: url("../assets/images/bac_img2.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-shadow: 10px 10px 5px #888888;
}

p {
  text-decoration-color: #2c3e50;
  color: #000000;

}

div#secdiv {
  align-self: flex-end;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 200px;
  height: 50px;
  background-image: linear-gradient(to bottom right, red, yellow);
}

#btn1 {
  border-radius: 20px;
  box-shadow: 10px 10px 5px black;
  width: 200px;
  height: 100px;
  background-color: #42b983;
}

.font2 {
  display: inline-block;
  font-family: '微软雅黑';
  font-size: 10em;
  position: relative;
}

</style>
