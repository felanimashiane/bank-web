<template>
  <button :class="['base-button', type]" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'primary' | 'secondary';
  disabled?: boolean;
}>();
</script>

<style scoped>
.base-button {
  height: 40px;
  width: 237px;
  border-radius: 6px;
  border-style: none;
}

.base-button.primary {
  background-color: #003366;
  color: white;
}

.base-button.secondary {
  background-color: white;
  color: #95052a;
  border: 1px solid #b54d67;
}

.base-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: #5e5d5d;
  color: white;
}
</style>
