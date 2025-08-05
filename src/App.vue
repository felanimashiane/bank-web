<script setup lang="ts">
import HeaderComponent from "./components/layout/HeaderComponent.vue";
import FooterComponent from "./components/layout/FooterComponent.vue";
</script>

<template>
  <div style="display: flex; width: 100%; justify-content: center; flex-direction: column">
    <header> <header-component/></header>
    <div class="app-container">
        <router-view/>
    </div>
    <footer>
      <footer-component/>
    </footer>

  </div>
</template>

<style scoped>
.app-container{
  display: flex;
  width: 100%;
  gap: 2rem;
  justify-content: center;
  padding-bottom: 60px; /* same as footer height */
  background-color: #ffffff;
}
</style>

