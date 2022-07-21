<template>
  <div>
    Completed Todo : {{ countCompletedTodo }}
  </div>
</template>

<script>
export default {
  name: "CompletedTodo",
  computed: {
    todos() {
      return this.$store.state.todo.todos;
    },
    countCompletedTodo() {
      return this.$store.getters.countCompletedTodo;
    }
  },
}
</script>

<style scoped>

</style>