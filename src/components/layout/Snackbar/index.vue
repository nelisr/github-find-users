<template>
  <div class="alert alert-primary" role="alert" v-if="snackbar.show">
    <a href="#" @click.prevent="refreshPage">
      <strong>Nova versão disponível. Clique para atualizar</strong>
    </a>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Snackbar",
  methods: {
    refreshPage() {
      this.showSnackBar(false);
      window.location.reload();
    },
    ...mapActions("notification", { showSnackBar: "SHOW_SNACKBAR" })
  },
  computed: {
    ...mapState("notification", ["snackbar"])
  }
};
</script>
<style lang="scss" scoped>
.alert {
  position: fixed;
  bottom: 0px;
  left: 15px;
  right: 15px;
}
</style>
