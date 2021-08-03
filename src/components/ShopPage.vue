<template>
  <div>
    <p>购物demo</p>
    <button v-on:click="callAddClick">添加商品</button>
    <div v-if="showInput">
      <div>
        <p>商品名称</p>
        <input id="namein" placeholder="请输入名称" v-model="nameInput">
      </div>
      <div>
        <p>商品图片</p>
        <input placeholder="请输入图片" v-model="picInput">
      </div>
      <div>
        <p>商品价格</p>
        <input id="pricein" placeholder="请输入价格" v-model="priceInput">
      </div>
      <div>
        <p>商品数量</p>
        <input placeholder="请输入数量" v-model="numInput">
      </div>
      <div>
        <button v-on:click="closeInput">取消</button>
        <button v-on:click="addItem(nameInput,picInput,priceInput,numInput)">确定</button>
      </div>
    </div>
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
            <button v-on:click="editData(item.name,item.pic,item.price,item.num)">编辑</button>
            <button v-on:click="delItem(item.name)">删除</button>
          </div>
        </td>
      </tr>
    </table>
    <div>
      <p>总价是： {{ calTotlePrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopPage",
  data: function () {
    return {
      totlePrice: 0,
      showInput: false,
      nameInput: "",
      picInput: "",
      priceInput: 0,
      numInput: "",
      list: [{
        name: "111",
        pic: "",
        price: 111,
        num: "111",
        act: "111",
      },
        {
          name: "222",
          pic: "",
          price: 222,
          num: "222",
          act: "222",
        },
        {
          name: "333",
          pic: "",
          price: 333,
          num: "333",
          act: "333",
        },
      ],
    }
  },
  computed: {
    calTotlePrice() {
      this.list.forEach(item => this.totlePrice += item.price)
      return this.totlePrice
    }
  },
  methods: {
    callAddClick() {
      if (this.showInput) {
        this.closeInput()
      } else {
        this.openInput()
      }
    },
    openInput() {
      this.showInput = true
    },
    closeInput() {
      this.clearData()
      this.showInput = false
    },
    clearData() {
      this.nameInput = "";
      this.priceInput = "";
      this.picInput = "";
      this.numInput = "";
    },
    editData(name, pic, price, num) {
      console.log(name + pic + price + num)
      this.openInput()
      this.nameInput = name;
      this.priceInput = price;
      this.picInput = pic;
      this.numInput = num;
    },
    addItem(name, pic, price, num) {
      this.list.push({name, pic, price, num, act: ""})
      this.closeInput()
    },
    delItem(key) {
      this.list.splice(this.list.findIndex(item => item.name === key), 1)
    }
  }
}
</script>

<style scoped>

</style>