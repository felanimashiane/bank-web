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
    <span class="errorMessage" v-if="meta.touched && errorMessage">
      {{ errorMessage }}
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
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.input-container label {
  font-size: 25px;
}

input {
  width: 100%;
}
</style>