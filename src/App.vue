<template>
  <div id="app" class="container">
    <h1>Lists</h1>
    <NavButtons/>
    <hr>
    <ItemPerPage />
    <ItemList />
    <PageButtons />
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
  }
}
</script>