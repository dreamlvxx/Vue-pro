<template>
  <table>
    <tr>
      <th>商品名称</th>
      <th>商品图片</th>
      <th>商品价格</th>
      <th>商品数量</th>
      <th>操作</th>
    </tr>
    <tr v-for="(item) in list" v-bind:key="item.name">
      <td>{{ item.name }}</td>
      <td>{{ item.pic }}</td>
      <td>{{ item.price }}</td>
      <td>{{ item.num }}</td>
      <td>
        <div>
          <button v-on:click="giezhi({name:item.name,pic:item.pic,price:item.price,num:item.num,key:item.key})">编辑</button>
          <button v-on:click="delItem(item.key)">删除</button>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "TableShopPage",
  computed: {
    ...mapState('storeShop', {
      nameInput: state => state.nameInput,
      pic: state => state.picInput,
      price: state => state.priceInput,
      num: state => state.numInput,
      list: state => state.listdata
    }),

  },
  methods: {
    delItem(key) {
      this.list.splice(this.list.findIndex(item => item.key === key), 1)
    },
    ...mapMutations('storeShop', {
      giezhi: 'givezhi'
    })
  }
}
</script>

<style scoped>

</style>