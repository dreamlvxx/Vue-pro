<template>
  <div v-if="showEditArea">
    <div>
      <p>商品名称</p>
      <input id="nameid" placeholder="请输入名称" v-model="nameva">
    </div>
    <div>
      <p>商品图片</p>
      <input id="picid" placeholder="请输入图片" v-model="picva">
    </div>
    <div>
      <p>商品价格</p>
      <input id="priceid" placeholder="请输入价格" v-model="priceva">
    </div>
    <div>
      <p>商品数量</p>
      <input id="numid" placeholder="请输入数量" v-model="numva">
    </div>
    <div>
      <button v-on:click="closeEditArea">取消</button>
      <button v-on:click="addItem(nameva,picva,priceva,numva)">确定</button>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "EditShopPage",
  data: function () {
    return {
      showEditArea: false,
    }
  },
  computed: {
    ...mapState('storeShop', {
      editItemKey: state => state.editItemKey,
      editMode: state => state.editMode,
      nameInput: state => state.nameInput,
      picInput: state => state.picInput,
      priceInput: state => state.priceInput,
      numInput: state => state.numInput,
      list: state => state.listdata
    }),
    nameva: {
      get: function () {
        return this.nameInput
      },
      set: function (value) {
        this.getnamein({name: value})
      }
    },
    picva: {
      get: function () {
        return this.picInput
      },
      set: function (value) {
        this.getpicin({pic: value})
      }
    },
    numva: {
      get: function () {
        return this.numInput
      },
      set: function (value) {
        this.getnumin({num: value})
      }
    },
    priceva: {
      get: function () {
        return this.priceInput
      },
      set: function (value) {
        this.getpricein({price: value})
      }
    },
  },
  methods: {
    closeEditArea: function () {
      this.clearData()
      this.showEditArea = false
    },
    openEditArea: function () {
      this.showEditArea = true
    },
    clearData() {

    },
    addItem(name, pic, price, num) {
      if (this.editMode) {
        console.log("edit mode")
        this.chaneitemvalue({key:this.editItemKey,name:name,pic:pic,price:price,num:num})
      } else {
        this.list.push({name, pic, price, num, act: "",key: this.list.length + 1})
        this.openEditArea()
      }
    },
    ...mapMutations('storeShop', {
      getnamein: 'geiname',
      getpicin: 'getpic',
      getnumin: 'getnum',
      getpricein: 'getprice',
      changemode: 'changeMode',
      chaneitemvalue: 'changeItemValue',
    })
  }
}
</script>

<style scoped>

</style>