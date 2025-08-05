<script setup lang="ts">
</script>

<template>
  <div style="display: flex; width: 100%; justify-content: center">
    <div class="app-container">
      <div class="stepper-container">
        Stepper container
      </div>
      <div class="body-container">
        <router-view /> <!-- Renders the matched route component -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container{
  display: flex;
  width: 1024px;
  gap: 2rem;
}
.body-container{
  width: 75%;
}
.stepper-container{
  width: 20%;
  float: left;
}
</style>
