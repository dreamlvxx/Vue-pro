<template>
  <input
      type="checkbox"
      v-bind:checked="ccc"
      v-on:change="$emit('check-event', $event.target.checked)"
  >
</template>

<script>
export default {
  name: "base-checkbox",
  model: {
    prop: 'ccc',
    event: 'check-event'
  },
  props: {
    ccc: Boolean
  },
}
</script>

<style scoped>

</style>