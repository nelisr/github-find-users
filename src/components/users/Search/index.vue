<template>
  <div>
    <h3>Buscar Usuários GitHub</h3>
    <form @submit.prevent="onSubmit" class="app-form">
      <input
        type="search"
        placeholder="Digite o nome do usuário"
        class="form-control"
        v-model="form.search"
        :disabled="users.isLoading"
      />
      <button type="submit" class="btn btn-success" :disabled="users.isLoading">
        <i class="bi bi-search"></i> Buscar
      </button>
    </form>
    <hr class="mb-4" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "UsersSearch",
  data: () => ({
    form: {
      search: ""
    }
  }),
  methods: {
    onSubmit() {
      const { search } = this.form;
      const pagination = { ...this.users.pagination, q: search || "a", page: 1 };
      this.changePage(pagination);
      this.clearUsers();
      this.searchUsers();
    },
    ...mapActions("user", { clearUsers: "CLEAR_USERS" }),
    ...mapActions("user", { searchUsers: "SEARCH_USERS" }),
    ...mapActions("user", { changePage: "SET_PAGINATION" })
  },
  computed: {
    ...mapState("user", ["users"])
  }
};
</script>
