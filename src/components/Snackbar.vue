<template>
  <div class="alert alert-primary" role="alert" v-if="snackBar">
    <a href="#" @click.prevent="refreshPage"><strong>Clique para atualizar</strong></a>
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  methods: {
    refreshPage() {
      this.snackBar = false;
      window.location.reload();
    }
  },
  computed: {
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
<style lang="scss" scoped>
.alert {
  position: fixed;
  bottom: 0px;
  left: 15px;
  right: 15px;
}
</style>
