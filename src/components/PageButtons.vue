<template>
  <div>
    <ul>
      <li v-for="index in pages"
          :key="index"
          :class="page === index ? 'bold' : ''"
          @click="movePage"
          :data-no="index"
      >
        {{ index }}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex';
const PaginationRange = 5;

export default {
  name: "PageButtons",
  computed: {
    ...mapState('list', {
      totalCount: state => state.totalCount,
      page: state => state.page,
      EACH_PER_PAGE: state => state.EACH_PER_PAGE,
    }),
    pages: function () {
      const currentPage = this.page;
      const lastPage = this.totalCount / this.EACH_PER_PAGE;
      const firstPagination = Math.max(currentPage - PaginationRange, 1);
      const lastPagination = Math.min(lastPage, Number(currentPage) + PaginationRange);

      const result = [];
      for (let i = firstPagination; i <= lastPagination; i++) {
        result.push(i);
      }
      return result;
    },
  },
  methods: {
    movePage(e) {
      const pageNo = e.currentTarget.dataset.no;
      this.$store.commit('list/updatePage', pageNo);
    }
  },
  watch: {
    page(newValue, oldValue) {
      document.querySelectorAll('li').forEach(each => {
        if (each.dataset.no === newValue) {
          each.classList.add('bold');
        } else if (each.dataset.no === oldValue) {
          each.classList.remove('bold');
        }
      });

      this.$store.commit('list/updatePage', newValue);
    }
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
}

li {
  padding: 20px;
  cursor: pointer;
}

li:hover {
  background: rgba(0, 0, 0, 0.2);
}

li.bold {
  font-weight: bold;
  font-size: 20px;
}
</style>