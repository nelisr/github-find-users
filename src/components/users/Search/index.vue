<template>
  <div>
    <h3>Buscar Usuários GitHub</h3>
    <form @submit.prevent="onSubmit" class="app-form">
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text"><i class="bi bi-person-fill"></i></div>
        </div>
        <input
          type="search"
          placeholder="Digite o nome do usuário"
          class="form-control"
          v-model="form.search"
          :disabled="users.isLoading"
        />
        <button class="btn-clear" type="button" v-if="form.search" @click.prevent="clearFilter">
          <i class="bi bi-x-circle"></i>
        </button>
      </div>
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
    clearFilter() {
      this.form.search = "";
      this.onSubmit();
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
