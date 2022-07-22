<template>
  <tr>
    <td v-for="(column, idx) in columns" :key="idx">
      <img v-if="isImage(getContent(column))"
           :src="getContent(column)"
           alt="image"
           style="width: 100px; height: 100px;">
      <span v-else>{{ getContent(column) }}</span>
    </td>
  </tr>
</template>

<script>
function formatAddress({city, street, suite, zipcode}) {
  return `${city} ${street} ${suite} (${zipcode})`;
}

export default {
  name: "ListItem",
  props: {
    item: {
      type: Object,
      required: true
    },
  },
  computed: {
    columns() {
      return this.$store.state.list.columns;
    }
  },
  methods: {
    isImage(content) {
      return content.toString().includes('https://');
    },
    getContent(column) {
      if (column === 'address')
        return formatAddress(this.item[column]);

      if (column === 'company')
        return this.item[column].name;

      return this.item[column];
    }
  },
}
</script>

<style scoped>
tr, td {
  border: 1px solid black;
  padding: 10px;
}
</style>