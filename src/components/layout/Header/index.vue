<template>
  <header class="app-header">
    <div class="container app-header__container">
      <div class="app-header__cols text-left"></div>
      <div class="app-header__cols">
        <router-link :to="{ name: 'Home' }" title="GitHub Usuários" class="app-header__link">
          <img src="../../../assets/images/github.svg" alt="GitHub" class="app-header__img" />
        </router-link>
      </div>
      <div class="app-header__cols"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
