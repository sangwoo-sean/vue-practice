<template>
  <div>
    <input type="checkbox" @change="toggleCheckbox" :checked="todo.checked">
    <span
        class="m-2"
        :class="todo.checked ? 'text-muted' : ''"
        :style="todo.checked ? 'text-decoration: line-through;' : ''"
    >{{ todo.text }}</span>
    <button class="btn btn-sm"
            @click="deleteTodo"
    >❌</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object
    },
  },
  methods: {
    toggleCheckbox(e) {
      this.$store.commit('TOGGLE_TODO', {
        id: this.todo.id,
        checked: e.target.checked
      });
    },
    deleteTodo() {
      this.$store.commit('DELETE_TODO', this.todo.id);
    }
  },
}
</script>

<style scoped>

</style>