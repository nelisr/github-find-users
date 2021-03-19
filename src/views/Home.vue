<template>
  <section class="container">
    <UsersSearch />
    <Message />
    <UsersList />
  </section>
</template>

<script>
import Vue from "vue";

import UsersSearch from "@/components/users/Search";
import UsersList from "@/components/users/List";
import Message from "@/components/layout/Message";

export default Vue.extend({
  name: "Home",
  components: {
    UsersSearch,
    UsersList,
    Message
  }
});
</script>
