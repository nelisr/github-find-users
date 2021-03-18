<template>
  <nav class="users-pagination">
    <ul class="pagination">
      <!-- <li class="page-item">
        <a class="page-link" href="#" @click.prevent="changePage(firstPage)"
          ><i class="bi bi-chevron-bar-left"></i
        ></a>
      </li> -->
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="changePage(prevPage)">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li :class="`page-item ${current === 1 ? 'active' : ''}`" v-if="hasFirst()">
        <a class="page-link" href="#" @click.prevent="changePage(1)">1</a>
      </li>
      <li class="page-item disabled" v-if="hasFirst()">
        <a class="page-link" href="#" tabindex="-1">...</a>
      </li>
      <template v-for="page in pages">
        <li :class="`page-item ${current === page ? 'active' : ''}`" :key="page">
          <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
        </li>
      </template>
      <li class="page-item disabled" v-if="hasLast()">
        <a class="page-link" href="#" tabindex="-1">...</a>
      </li>
      <!-- <li class="page-item" v-if="hasLast()">
        <a class="page-link" href="#" @click.prevent="changePage(totalPages)"> {{ totalPages }}</a>
      </li> -->
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="changePage(nextPage)">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>

      <!-- <li class="page-item">
        <a class="page-link" href="#" @click.prevent="changePage(lastPage)"
          ><i class="bi bi-chevron-bar-right"></i
        ></a>
      </li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination2",
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 20
    },
    pageRange: {
      type: Number,
      default: 4
    }
  },
  methods: {
    hasFirst: function() {
      return this.rangeStart !== 1;
    },
    hasLast: function() {
      return this.rangeEnd < this.totalPages;
    },
    hasPrev: function() {
      return this.current > 1;
    },
    hasNext: function() {
      return this.current < this.totalPages;
    },
    changePage: function(page) {
      if (page > 0 && page <= this.totalPages) {
        this.$emit("changePage", page);
      }
    }
  },
  computed: {
    pages: function() {
      var pages = [];
      for (var i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i);
      }
      return pages;
    },
    rangeStart: function() {
      var start = this.current - this.pageRange;
      return start > 0 ? start : 1;
    },
    rangeEnd: function() {
      var end = this.current + this.pageRange;
      return end < this.totalPages ? end : this.totalPages;
    },
    totalPages: function() {
      return Math.ceil(this.total / this.perPage);
    },
    nextPage: function() {
      return this.current + 1;
    },
    prevPage: function() {
      return this.current - 1;
    },
    firstPage: function() {
      return this.pages[0];
    },
    lastPage: function() {
      return this.pages[this.pages.length - 1];
    }
  }
};
</script>
