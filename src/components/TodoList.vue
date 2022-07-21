<template>
  <div>
    <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
    >
      {{ todo }}
    </TodoItem>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import { mapState } from 'vuex';

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  computed: {
    ...mapState({
      todos: state => state.todo.todos
    })
    /*todos() {
      return this.$store.state.todos;
    }*/
  },
  methods: {
  },
}
</script>

<style scoped>

</style>