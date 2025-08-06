<script setup lang="ts">
import i18next from '../../../i18nextService';
import TextInputField from "../../../components/base/TextInputField.vue";
import {toTypedSchema} from '@vee-validate/zod';
import {z} from "zod";
import {useForm} from "vee-validate";
import BaseButton from "../../../components/base/BaseButton.vue";
import {useProductStore} from "../../../stores/productStore.ts";

const t = (key: string) => i18next.t(key, { ns: 'casa' });
const validationSchema = toTypedSchema(z.object({
      name: t('personalDetails.name.isRequired') ?
          z.string().nonempty() :
          z.string().optional(),

      surname: t('personalDetails.surname.isRequired') ?
          z.string().nonempty():
          z.string().optional(),

      age: t('personalDetails.age.isRequired') ?
          z.number().min(18,'Must be 18 and older') :
          z.number().min(18,'Must be 18 and older').optional(),
    })

    // HOW TO REMOVE VALIDATIONS FROM validationScheme ??
    // CREATE A METHOD TO ADD THESE VALIDATIONS FROM
    // DATA PERSIST

);

const {meta} = useForm({ validationSchema });

</script>

<template>
  <form class="basic-container">
    <div class="form-content">
      <div class="row"  v-if="t('personalDetails.name.isValidForCountry')">
        <div class="col-lg-12">
          <TextInputField
              :name="t('personalDetails.name.fieldName')"
              :label="t('personalDetails.name.label')"
              :required="t('personalDetails.name.isRequired')"
          />
        </div>
      </div>

      <div class="row" v-if="t('personalDetails.surname.isValidForCountry')">
        <div class="col-lg-12">
          <TextInputField
              :name="t('personalDetails.surname.fieldName')"
              :label="t('personalDetails.surname.label')"
          />
        </div>
      </div>

      <div class="row" v-if="t('personalDetails.age.isValidForCountry')">
        <div class="col-lg-12">
          <TextInputField
              :name="t('personalDetails.age.fieldName')"
              :label="t('personalDetails.age.label')"
              :required="t('personalDetails.age.isRequired')"
          />
        </div>
      </div>

      <div class="button-container">
        <BaseButton type="secondary" class="mt-40" @click="useProductStore().back()">Back</BaseButton>
        <BaseButton type="primary" :disabled="!meta.valid" class="ml-24" @click="useProductStore().continue()">Continue</BaseButton>
      </div>

    </div>
  </form>
</template>

<style scoped>
.basic-container {
  width: 100%;
  margin-top: 100px;
}

.form-content{
  width: 498px;
}
.button-container{
  height: 80px;
  gap: 24px;
}

</style>