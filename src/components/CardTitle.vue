<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "CardTitle",
  props: {
    title: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped>

</style>