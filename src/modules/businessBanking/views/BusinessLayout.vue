<script setup lang="ts">

import BasicDetailsBusiness from "./BasicDetailsBusiness.vue";
</script>

<template>
  <div class="view-container">
    <div class="stepper-container">
      Stepper container
    </div>
    <div class="body-container">
     <basic-details-business/>
    </div>
  </div>
</template>

<style scoped>
.body-container{
  width: 75%;
}
.stepper-container{
  width: 20%;
  float: left;
}
.view-container{
  width: 1024px;
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
}
</style>