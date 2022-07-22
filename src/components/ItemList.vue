<template>
  <div>
    <h2 v-if="count !== 0 && !isLoading">{{ type }} : 총 {{ totalCount }}개</h2>
    <h2 v-else-if="isLoading">Loading...</h2>
    <h2 v-else>버튼을 눌러 결과를 불러오세요</h2>
    <table>
      <ListColumns/>
      <ListItem v-for="item in pageItems" :key="item.id" :item="item"/>
    </table>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";
import ListColumns from "@/components/ListColumns";
import { mapState } from 'vuex';

export default {
  name: "ItemList",
  components: {ListColumns, ListItem},
  computed: {
    count() {
      return this.$store.getters["list/resultCount"];
    },
    ...mapState('list', {
      items: state => state.items,
      type: state => state.type,
      isLoading: state => state.isLoading,
      totalCount: state => state.totalCount,
      page: state => state.page,
      EACH_PER_PAGE: state => state.EACH_PER_PAGE,
    }),
    pageItems() {
      return this.items.slice((this.page-1) * this.EACH_PER_PAGE, this.page * this.EACH_PER_PAGE);
    }
  },
}
</script>

<style scoped>
table {
  border: solid 1px black;
}
</style>