<template>
  <div id="startp">
    <button @click='goto1_2'>点击跳转嵌套路由</button>
    <button @click="gotoParamsPage">给组件传参数</button>
    <button @click="gotoQueryPage">给组件传递query参数</button>
    <button @click="gotoPropsPage">使用Props给组件传值</button>
    <button @click="gotoMultiPage">跳转命名视图（多组件）</button>
    <button @click="gotoSubView">直接使用路由name跳转子路由</button>
    <div>
      <button @click="gotoAlias">别名</button>
      <button @click="gotoRedirect">重定向</button>
    </div>
    <button @click="gotoGuard">导航守卫</button>
  </div>
</template>

<script>
export default {
  name: "RouterStartPage",
  methods: {
    goto1_2() {
      this.$router.push('/first/second')
    },
    gotoPropsPage: function () {
      this.$router.push(
          {
            name:'proppage',
            params:{
              propsnvalue: 'this is value'
            }
          }
      )
    },
    gotoParamsPage(){
      //如果提供了path，那么param参数就没用了，所以参数只能写在url中
      this.$router.push({
        name: 'paramspagename',
        params: {
          name: 'xingxing'
        }
      })
    },
    gotoQueryPage(){
      this.$router.push(
          {
            path: '/query',
            query: {
              queryName: 'this is query params'
            }
          }
      )
    },
    gotoMultiPage(){
      this.$router.push(
          {
            path: '/multi/subview',
          }
      )
    },
    gotoSubView(){
      this.$router.push({name: 'subviewname'})
    },
    gotoAlias(){
      this.$router.push('/aliasname')
    },
    gotoRedirect(){
      this.$router.push('/redirectPath')
    },
    gotoGuard(){
      this.$router.push('/guard')
    }

  }
}
</script>

<style scoped>
#startp{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button{
  margin: 10px;
  height: 30px;
  width: 200px;
}

</style>