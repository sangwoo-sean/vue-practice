<template>
  <div id="app" class="container">
    <p>
      <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/list">list</router-link>
    </p>
    <router-view></router-view>
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

a {
  margin-right: 30px;
}
</style>
<script>
export default {
  components: {

  }
}
</script>