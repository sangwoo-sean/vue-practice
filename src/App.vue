<template>
  <div id="app" class="container">
    <h1>To Do</h1>
    <CompletedTodo />
    <AddTodo />
    <hr>
    <TodoList />
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
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import CompletedTodo from "@/components/CompletedTodo";

export default {
  components: {
    CompletedTodo,
    AddTodo,
    TodoList
  }
}
</script>