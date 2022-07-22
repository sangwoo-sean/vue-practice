<template>
  <div class="navs">
    <button v-for="(item, index) in items" :key="index"
    @click="fetchList"
    >
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  name: "NavButtons",
  computed: {
    items() {
      return this.$store.state.list.navs;
    }
  },
  methods: {
    fetchList(e) {
      this.$store.dispatch('list/fetchList', {
        type: e.currentTarget.innerText
      });
    }
  }
}
</script>

<style scoped>
.navs {
  display: flex;
  justify-content: space-between;
}
</style>