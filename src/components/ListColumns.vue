<template>
  <tr>
    <th v-for="(col, idx) in columns" :key="idx">
      <span :data-col="col">{{ getColName(col) }}</span>
      <button @click="toggleSorting">↕</button>
    </th>
  </tr>
</template>

<script>
const COLUMNS = Object.freeze({
  userId: '유저이름',
  title: '제목',
  body: '내용',
  postId: '포스팅 번호',
  albumId: '앨범 번호',
  name: '이름',
  username: '유저이름',
  url: '이미지',
  thumbnailUrl: '썸네일',
});

export default {
  name: "ListColumns",
  data() {
    return {
      sortingAsc: null
    }
  },
  computed: {
    columns() {
      return this.$store.state.list.columns;
    }
  },
  methods: {
    getColName(col) {
      return COLUMNS[col] ?? col;
    },
    toggleSorting(e) {
      const target = e.currentTarget;
      const col = target.previousSibling.dataset.col;

      initButtons();
      this.$store.commit('list/sortItemsByColumnAsc', 'id');

      if (this.sortingAsc === null) {
        this.sortingAsc = true;
        target.innerText = '↑';
        this.$store.commit('list/sortItemsByColumnAsc', col);
      } else if (this.sortingAsc === true) {
        this.sortingAsc = false;
        target.innerText = '↓';
        this.$store.commit('list/sortItemsByColumnDesc', col);
      } else if (this.sortingAsc === false) {
        this.sortingAsc = null;
      }

      function initButtons() {
        target.closest('tr').querySelectorAll('button').forEach(each => {
          each.innerText = '↕';
        });
      }
    }
  },
}
</script>

<style scoped>
tr, th {
  border: 1px solid black;
  padding: 10px;
}
</style>