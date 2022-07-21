<template>
  <div>
    <input
        type="text"
        class="w-100 p-3"
        placeholder="Enter Todo"
        @keyup.enter="addTodo"
    >
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  methods: {
    addTodo(e) {
      // this.$store.commit('ADD_TODO', e);'
      this.$store.dispatch('addTodo', e.currentTarget.value);
      e.currentTarget.value = '';
    }
  },
}
</script>

<style scoped>

</style>