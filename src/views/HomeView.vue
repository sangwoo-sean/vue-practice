<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      <ul>
        <li v-for="index in 10" :key="index">
          <CardContainer :idx="index"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CardContainer from "@/components/CardContainer";

export default {
  components: {
    CardContainer
  },
  data() {
    return {
      title: 'Main Page, Welcome'
    }
  },


  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  },
}
</script>

<style scoped>
  h1 {
    font-size: 40px;
  }

  ul {
    padding: 0;
    list-style: none;
  }
</style>