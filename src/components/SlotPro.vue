<template>
  <span>
  <slot v-bind:user="user" name="slotname" v-bind:teacher="teacher">
    {{ user.lastName }}
  </slot>
</span>
</template>

<script>
export default {
  name: "SlotPro",
  props: {
    url: String,
    sex: String
  },
  data() {
    return {
      user: {
        firstName: "slotuser张",
        lastName: "slot三"
      },
      teacher: {
        name: "slot-teacher",
        sex: "slot-boy",
      }
    };
  }
}
</script>

<style scoped>

</style>