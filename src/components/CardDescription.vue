<template>
  <div>
    <span>{{ description }}</span><br>
    <slot name="custom" :desc="desc">
      {{desc}}
    </slot>
  </div>
</template>

<script>
export default {
  name: "CardDescription",
  props: {
    description: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      desc: 'desc123123'
    }
  },
}
</script>

<style scoped>

</style>
