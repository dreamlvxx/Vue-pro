<template>
  <div class="hello">
    <p v-if=tttt>if显示出来了{{ post.message }}</p>
    <p v-else>else显示出来了{{ post.message }}</p>
    <button v-on:click="$emit('enlarge-text')">点击变大字体</button>
    <p>
      Ask a yes/no question:
      <input v-model="question">
    </p>
    <p v-bind:title="post.message">
      For a guide and recipes on how to configure customize {{ reverseSelfMessage }} this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'wuyule',
  props: {
    post: Object,
    msg: String,
    message: {
      type: String,
      required: true,
      default: "de"
    },
    tttt: Boolean,
    url: String,
    propF: {
      validator(value) {
        return ["sss", "wwww"].indexOf(value) !== -1
      }
    }
  },
  data: function () {
    return {
      question: ''
    }
  },

  methods: {
    reverseSelfMessage: function () {
      return this.message + "---suffix"
    }
  },

  computed: {
    getsetPar: {
      get: function () {
        return this.message
      },

      set: function (newvalue) {
        console.log(newvalue)
      }
    }
  },

  watch: {
    hhaha: function () {
      console.log("asdadada")
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
