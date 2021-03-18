<template>
  <section class="container">
    <FormSearch />
    <Message />
    <UsersList />
  </section>
</template>

<script>
import Vue from "vue";

import Message from "@/components/Message";
import UsersList from "@/components/UsersList";
import FormSearch from "@/components/FormSearch";

export default Vue.extend({
  name: "Home",
  components: {
    FormSearch,
    Message,
    UsersList
  },
  methods: {
    onScroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          console.log("Scroll", bottomOfWindow);
          this.pagination = { ...this.pagination, page: this.pagination.page + 1 };
          console.log("Pagination", this.pagination.page);
          this.$store.dispatch("SEARCH_USERS");
        }
      };
    }
  },
  computed: {
    pagination: {
      get() {
        return this.$store.state.userStore.users.pagination;
      },
      set(value) {
        return this.$store.dispatch("SET_PAGINATION", value);
      }
    }
  },
  mounted() {
    //this.onScroll();
  }
});
</script>
