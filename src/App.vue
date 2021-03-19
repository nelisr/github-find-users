<template>
  <main id="app">
    <Header />
    <section class="app-container">
      <router-view />
    </section>
    <BtnBackToTop />
    <SnackBar />
  </main>
</template>
<script>
import Header from "@/components/layout/Header";
import BtnBackToTop from "@/components/layout/BtnBackToTop";
import SnackBar from "@/components/layout/Snackbar";

export default {
  components: {
    Header,
    BtnBackToTop,
    SnackBar
  }
};
</script>
<style lang="scss">
@import "@/assets/styles/theme.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
