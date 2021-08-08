<template>
  <div>
    <p>购物demo</p>
    <button v-on:click="callAddClick">添加商品</button>
    <editpage ref="editpa"></editpage>
    <tablepage ref="tablepa"></tablepage>
    <div>
      <p>总价是： {{  }}</p>
    </div>
  </div>
</template>

<script>
import editpage from './ShopEditPage'
import tablepage from './ShopTablePage'

export default {
  components: {
    editpage,
    tablepage
  },
  name: "ShopPage",
  data: function () {
    return {
      totlePrice: 0,
    }
  },
  computed: {

  },
  methods: {
    callAddClick() {
      this.$refs["editpa"].openEditArea()
    },
  }
}
</script>

<style scoped>

</style>