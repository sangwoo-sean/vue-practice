<template>
  <div class="card-wrapper">
    Card {{ idx }}
    <CardTitle :title="getIdxTitle(idx)"/>
    <CardDescription :description="getIdxDesc(idx)"/>
    <CardInput v-model="content"/>
    input says {{ content }}
  </div>
</template>

<script>
import CardTitle from "@/components/CardTitle";
import CardDescription from "@/components/CardDescription";
import CardInput from "@/components/CardInput";

export default {
  name: 'CardWrapper',
  data() {
    return {
      content: 'nothing'
    }
  },
  props: {
    idx: {
      type: Number,
      required: true
    }
  },
  components: {
    CardInput,
    CardTitle,
    CardDescription
  },
  methods: {
    getIdxTitle(idx) {
      return 'this is title ' + idx;
    },
    getIdxDesc(idx) {
      return 'this is description ' + idx;
    },
  },

  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
}
</script>

<style scoped>
.card-wrapper {
  width: 95%;
  height: 200px;
  margin: 20px;
  border-radius: 15px;
  border: solid 1px black;
}

</style>

<!--
beforeCreate
created

beforeMount
mounted

beforeUpdate
updated

beforeDestroy
destroyed
-->