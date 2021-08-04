<template>
  <div>
    <p>这是状态管理的状态变化值{{ stateNum }}</p>
    <p>这是状态管理的状态最大变化值{{ stateMax }}</p>
    <div>
      <p v-for="(item,index) in otherMaxMeth" v-bind:key="item">{{ item }} --- {{ index }}</p>
    </div>
    <button v-on:click="add">增加</button>
    <button v-on:click="minus">减少</button>
    <button v-on:click="addMax">增加max</button>
    <button v-on:click="minusMax">减少max</button>
    <button v-on:click="incrementAsyncmap">异步增加</button>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'

export default {
  name: "StorePage",
  computed: {
    ...mapState('storemodule',
        {
          stateNum: state => state.countNum,
          stateMax: state => state.countMax,
          stateList: state => state.arrlist,
        },
    ),
    ...mapGetters('storemodule',
        {
          otherMaxMeth: 'otherMax'
        }
    ),
  },
  methods: {
    ...mapMutations('storemodule',
        {
          add: 'increment',
          minus: 'decrement',
          addMax: 'incrementMax',
          minusMax: 'decrementMax'
        }
    ),
    ...mapActions('storemodule',
        {
          incrementAsyncmap: 'actionB'
        }
    )
  }
}
</script>

<style scoped>

</style>