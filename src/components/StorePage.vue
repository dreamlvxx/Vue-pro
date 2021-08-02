<template>
  <div>
    <p>这是状态管理的状态变化值{{ stateNum }}</p>
    <p>这是状态管理的状态最大变化值{{ stateMax }}</p>
    <div>
      <p v-for="(item,index) in otherMaxMeth" v-bind:key="item">{{ item }} --- {{ index }}</p>
    </div>
    <button v-on:click="increment">增加</button>
    <button v-on:click="decrement">减少</button>
    <button v-on:click="increMax">增加max</button>
    <button v-on:click="decreMax">减少max</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from 'vuex'

export default {
  name: "StorePage",
  computed: {
    ...mapState(
        {
          stateNum: state => state.countNum,
          stateMax: state => state.countMax,
          stateList: state => state.arrlist,
        },
    ),
    ...mapGetters(
        {
            otherMaxMeth : 'otherMax'
        }
    ),
    ...mapMutations(
        {
          addMax : 'incrementMax'
        }
    )
  },
  methods: {
    increment() {
      this.addMax
    },
    decrement() {
      this.$store.commit('decrement')
    },
    increMax() {
      this.addMax()
    },
    decreMax() {
      this.$store.commit('decrementMax')
    }
  }
}
</script>

<style scoped>

</style>