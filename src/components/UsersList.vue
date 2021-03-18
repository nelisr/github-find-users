<template>
  <section class="users">
    <h3 v-if="isLoading" class="users-isLoading">
      Carregando ...
    </h3>
    <div v-if="users && users.length">
      <h2 class="users-title">Usuários GitHub</h2>
      <ul class="row users-list">
        <li v-for="user in users" :key="user.id" class="col-md-6 users-list__item">
          <article class="users-list__card">
            <figure>
              <img :src="user.avatar" :alt="user.login" />
            </figure>
            <div class="text-content">
              <h2>{{ user.login }}</h2>
              <a
                :href="user.url"
                :title="`Acessar GitHub: ${user.login}`"
                class="btn btn-secondary btn-sm users-list__link"
                target="_blank"
              >
                <i class="bi bi-github"></i> GitHub
              </a>
            </div>
          </article>
        </li>
      </ul>
      <Pagination
        :current="pagination.page"
        :total="total"
        :per-page="pagination.per_page"
        @changePage="changePage($event)"
      />
    </div>
    <h3 v-if="!isLoading && !users.length" class="users-notfound">
      Nenhum usuário encontrado
    </h3>
  </section>
</template>

<script>
import Pagination from "./Pagination";

export default {
  name: "UsersList",
  components: {
    Pagination
  },
  methods: {
    changePage(page) {
      this.pagination = { ...this.pagination, page };
      this.$store.dispatch("SEARCH_USERS");
    }
  },
  computed: {
    users: {
      get() {
        return this.$store.state.userStore.users.content;
      }
    },
    isLoading: {
      get() {
        return this.$store.state.userStore.users.isLoading;
      }
    },
    total: {
      get() {
        return this.$store.state.userStore.users.total;
      }
    },
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
    this.$store.dispatch("SEARCH_USERS");
  }
};
</script>
