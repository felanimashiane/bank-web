
<template>
  <header class="header">
    <nav class="nav">
      <h1 class="logo">{{ useProductStore().productName +' Step : '+ useProductStore().step}}</h1>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/casa">CASA</a></li>
        <li><a href="/business">Business</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">


import {useProductStore} from "../../stores/productStore.ts";
useProductStore().setProductName('Welcome to your Banking App')
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #f6f5f6, #95052a);
  color: white;
  padding: 1rem 2rem;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #95052a;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>
