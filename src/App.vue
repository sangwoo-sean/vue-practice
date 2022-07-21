<template>
  <div id="app" class="container">
    <h1>To Do</h1>
    <input type="text" class="w-100 p-3" placeholder="Enter Todo" @keyup.enter="addTodo">
    <hr>
    <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle-checkbox="toggleCheckbox"
        @deleteTodo="deleteTodo"
    >
      {{ todo }}
    </TodoItem>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import TodoItem from "@/components/TodoItem";

export default {
  components: {TodoItem},
  data() {
    return {
      todos: [
        {
          id: 1,
          text: 'buy a car',
          checked: false
        },
        {
          id: 2,
          text: 'buy a house',
          checked: true
        }
      ]
    }
  },
  methods: {
    addTodo(e) {
      const text = e.currentTarget.value;
      const todoItem = {
        id: Math.random(),
        text,
        checked: false
      };
      this.todos.push(todoItem);

      e.currentTarget.value = '';
    },
    toggleCheckbox({id, checked}) {
      const target = this.todos.find(todo => todo.id === id);
      target.checked = checked;
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
  },

}
</script>