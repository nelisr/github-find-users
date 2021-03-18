<template>
  <div>
    <h3>Buscar Usuários GitHub</h3>
    <form @submit.prevent="onSubmit" class="app-form">
      <input
        type="search"
        placeholder="Digite o nome do usuário"
        class="form-control"
        v-model="form.search"
        :disabled="isLoading ? true : false"
      />
      <button type="submit" class="btn btn-success" :disabled="isLoading ? true : false">
        <i class="bi bi-search"></i> Buscar
      </button>
    </form>
    <hr class="mb-4" />
  </div>
</template>

<script>
export default {
  name: "FormSearch",
  data: () => ({
    form: {
      search: ""
    }
  }),
  methods: {
    onSubmit() {
      this.snackBar = true;
      // const { search } = this.form;
      // this.pagination = {
      //   ...this.pagination,
      //   q: search || "a",
      //   page: 1
      // };
      // this.$store.dispatch("CLEAR_USERS");
      // this.$store.dispatch("SEARCH_USERS");
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
    },
    isLoading: {
      get() {
        return this.$store.state.userStore.users.isLoading;
      }
    },
    snackBar: {
      get() {
        return this.$store.state.messageStore.snackbar.show;
      },
      set(value) {
        return this.$store.dispatch("SHOW_SNACKBAR", value);
      }
    }
  }
};
</script>
