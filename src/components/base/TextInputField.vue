<template>
  <div class="input-container">
    <label :for="name">
      {{ label }}
      <span v-if="required">*</span>
    </label>
    <input
        :id="name"
        :name="name"
        type="text"
        class="form-control"
        v-model="value"
        @blur="handleBlur"
    />
    <span class="errorMessage" v-if="meta.touched && errorMessage && value">
      {{ errorMessage }}
    </span>
    <span class="errorMessage" v-if="meta.touched && !value && required">
      this is required
    </span>

  </div>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate';

const props = defineProps<{
  label: string;
  name: string;
  required?: boolean;

}>();
const { value, errorMessage, meta, handleBlur } = useField(props.name);

</script>
<style scoped>
.input-container{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.input-container label {
  font-size: 16px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0px;
  color: #524a4a;
}

input {
  max-width: 498px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #cac7c7;

}
</style>