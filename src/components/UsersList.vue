<template>
  <section class="users">
    <div v-if="users && users.length">
      <h2 class="users-title">Usuários GitHub</h2>
      <ul class="row users-list">
        <li v-for="user in users" :key="user.id" class="col-md-6 users-list__item">
          <article class="users-list__card">
            <div class="figure-content">
              <figure>
                <img :src="user.avatar" :alt="user.login" />
              </figure>
            </div>
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
    </div>
    <h3 v-if="isLoading" class="users-isLoading">
      Carregando ...
    </h3>
    <h3 v-if="!isLoading && !users.length" class="users-notfound">
      Nenhum usuário encontrado
    </h3>
  </section>
</template>

<script>
export default {
  name: "UsersList",
  methods: {
    changePage(page) {
      this.pagination = { ...this.pagination, page };
      this.$store.dispatch("SEARCH_USERS");
    },
    onScroll() {
      window.onscroll = () => {
        this.isBottomScroll();
        this.toggleBtnGoToTop();
      };
    },
    isBottomScroll() {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.pagination = { ...this.pagination, page: this.pagination.page + 1 };
        this.$store.dispatch("SEARCH_USERS");
      }
    },
    toggleBtnGoToTop() {
      const scrollToTopButton = document.getElementById("backToTop");
      let windowY = window.scrollY;
      if (windowY > 0) {
        scrollToTopButton.className = "backToTop backToTop--show";
      } else {
        scrollToTopButton.className = "backToTop backToTop--hide";
      }
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
    this.onScroll();
    this.$store.dispatch("SEARCH_USERS");
  }
};
</script>
