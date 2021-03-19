<template>
  <section class="users">
    <div v-if="users.content && users.content.length">
      <h2 class="users-title">Usuários GitHub</h2>
      <ul class="row users-list">
        <li v-for="user in users.content" :key="user.id" class="col-md-6 users-list__item">
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
    <h3 v-if="users.isLoading" class="users-isLoading">
      Carregando ...
    </h3>
    <h3 v-if="!users.isLoading && !users.content.length" class="users-notfound">
      Nenhum usuário encontrado
    </h3>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "UsersList",
  methods: {
    onScroll() {
      window.onscroll = () => {
        this.findUsers();
        this.toggleBtnGoToTop();
      };
    },
    findUsers() {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        const pagination = { ...this.users.pagination, page: this.users.pagination.page + 1 };
        this.changePage(pagination);
        this.searchUsers();
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
    },
    ...mapActions("user", { searchUsers: "SEARCH_USERS" }),
    ...mapActions("user", { changePage: "SET_PAGINATION" })
  },
  computed: {
    ...mapState("user", ["users"])
  },
  mounted() {
    this.onScroll();
    this.searchUsers();
  }
};
</script>
