<template>
  <p>这是守卫的页面</p>
</template>

<script>
export default {
  name: "GuardPage",
  /**
   * // 在渲染该组件的对应路由被 confirm 前调用
   // 不！能！获取组件实例 `this`
   // 因为当守卫执行前，组件实例还没被创建
   * @param to
   * @param from
   * @param next
   */
  beforeRouteEnter(to,from,next){
    //不过，你可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。
    //beforeRouteEnter 是支持给 next 传递回调的唯一守卫
    next(vm => {
      // 通过 `vm` 访问组件实例
      console.log(vm)
    })
  },
  /**
   // 在当前路由改变，但是该组件被复用时调用
   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
   // 可以访问组件实例 `this`
   * @param to
   * @param from
   * @param next
   */
  beforeRouteUpdate(to,from,next){
    console.log(`beforeRouteUpdate : to = ${to}  from = ${from}  next = ${next.toString()}`)
    next()
  },
  /**
   * // 导航离开该组件的对应路由时调用
   // 可以访问组件实例 `this`
   * @param to
   * @param from
   * @param next
   */
  beforeRouteLeave(to,from,next){
    console.log(`beforeRouteLeave to = ${to}  from = ${from}  next = ${next.toString()}`)
    next()
  }
}
</script>

<style scoped>

</style>