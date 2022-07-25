<template>
  <div>
    <h1>Lists</h1>
    <NavButtons/>
    <hr>
    <ItemPerPage />
    <ItemList />
    <PageButtons />
  </div>
</template>

<script>
import NavButtons from "@/components/NavButtons";
import ItemList from "@/components/ItemList";
import PageButtons from "@/components/PageButtons";
import ItemPerPage from "@/components/ItemPerPage";

export default {
  components: {
    ItemPerPage,
    PageButtons,
    ItemList,
    NavButtons
  },
}
</script>

<style scoped>
</style>