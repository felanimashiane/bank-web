<script setup lang="ts">

import {useConfigStore} from "../../../stores/configStrore.ts";
import {useProductStore} from "../../../stores/productStore.ts";
import BasicDetailsCasa from "./BasicDetailsCasa.vue";
import PersonalDetailsCasa from "./PersonalDetailsCasa.vue";
useProductStore().setProductName('Open Casa Account')

</script>

<template>
  <div class="view-container">
    <div class="stepper-container">
      <h5>STATE MANAGEMENT VIEW</h5>
      isHomeAffairsEnabled :{{useConfigStore().isHomeAffairsEnabled}}
      isKycEnabled :{{useConfigStore().isKycEnabled}}
      isOTPEnabled :{{useConfigStore().isOTPEnabled}}
    </div>
    <div class="body-container">
      <div v-if="useProductStore().step === 1"><BasicDetailsCasa/></div>
      <div v-if="useProductStore().step === 2"><PersonalDetailsCasa/></div>
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