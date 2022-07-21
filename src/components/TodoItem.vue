<template>
  <div>
    <input type="checkbox" @change="toggleCheckbox" :checked="todo.checked">
    <span
        class="m-2"
        :class="todo.checked ? 'text-muted' : ''"
        :style="todo.checked ? 'text-decoration: line-through;' : ''"
    >{{ todo.text }}</span>
    <button class="btn btn-sm"
            @click="$emit('deleteTodo', todo.id)"
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
      this.$emit('toggle-checkbox', {
        id: this.todo.id,
        checked: e.target.checked
      })
    },
  },
}
</script>

<style scoped>

</style>