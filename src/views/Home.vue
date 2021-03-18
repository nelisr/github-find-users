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
  }
});
</script>
