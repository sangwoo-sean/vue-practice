<template>
  <div>
    <select name="count" id="count" @change="updateEachPerPage">
      <option value="5" selected>5</option>
      <option value="10">10</option>
      <option value="30">30</option>
    </select>
    <span>개씩 보기</span>
  </div>
</template>

<script>
export default {
  name: "ItemPerPage",
  methods: {
    updateEachPerPage(e) {
      this.$store.commit('list/updateEachPerPage', e.currentTarget.value);
    }
  },
}
</script>

<style scoped>

</style>