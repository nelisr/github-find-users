<template>
  <button id="backToTop" class="backToTop" @click.prevent="backtoTop">
    <i class="bi bi-arrow-up"></i>
  </button>
</template>

<script>
export default {
  name: "BtnBackToTop",
  methods: {
    backtoTop() {
      this.scrollToTop();
    },
    scrollToTop() {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(this.scrollToTop);
        window.scrollTo(0, c - c / 10);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.backToTop {
  background: #252a2d;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  position: fixed;
  right: 10px;
  bottom: 70px;
  outline: none;
  padding: 10px;
  display: none;

  &--show {
    display: block;
  }
  &--hide {
    display: none;
  }
}
</style>
