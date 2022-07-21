<template>
  <div>
    <label for="input"></label>
    <input
        type="text"
        id="input"
        :value="content"
        @input="$emit('input', $event.currentTarget.value)"
    >
  </div>
</template>

<script>
export default {
  name: "CardInput",
  props: {
    content: {
      type: String,
      default: 'nothing'
    },
  },
  methods: {
  },

}
</script>

<style scoped>

</style>
