<script setup lang="ts">
import i18next from '../../../i18nextService';
import TextInputField from "../../../components/base/TextInputField.vue";
import {toTypedSchema} from '@vee-validate/zod';
import {z} from "zod";
import {useForm} from "vee-validate";
import BaseButton from "../../../components/base/BaseButton.vue";

const t = (key: string) => i18next.t(key, { ns: 'business' });

const validationSchema = toTypedSchema(z.object({
      businessNumber: t('basicDetails.businessNumber.isRequired') ?
          z.string().min(Number(t('basicDetails.businessNumber.validation.min')), t('basicDetails.businessNumber.validation.minError')).nonempty() :
          z.string().min(Number(t('basicDetails.businessNumber.validation.min')), t('basicDetails.businessNumber.validation.minError')).optional(),

      name: t('basicDetails.name.isRequired') ?
          z.string().nonempty():
          z.string().optional(),

      email: t('basicDetails.email.isRequired') ?
          z.string().email(t('basicDetails.email.validation.email')).nonempty() :
          z.string().email(t('basicDetails.email.validation.email')).optional(),
    })

    // HOW TO REMOVE VALIDATIONS FROM validationScheme ??
    // CREATE A METHOD TO ADD THESE VALIDATIONS FROM
    // DATA PERSIST

);

validationSchema
const {meta} = useForm({ validationSchema });

</script>

<template>
  <form class="basic-container">
    <div class="form-content">
      <div class="row"  v-if="t('basicDetails.businessNumber.isValidForCountry')">
        <div class="col-lg-12">
          <TextInputField
              :name="t('basicDetails.businessNumber.fieldName')"
              :label="t('basicDetails.businessNumber.label')"
              :required="t('basicDetails.businessNumber.isRequired')"
          />
        </div>
      </div>

      <div class="row" v-if="t('basicDetails.name.isValidForCountry')">
        <div class="col-lg-12">
          <TextInputField
              :name="t('basicDetails.name.fieldName')"
              :label="t('basicDetails.name.label')"
              :required="t('basicDetails.name.isRequired')"
          />
        </div>
      </div>

      <div class="row" v-if="t('basicDetails.email.isValidForCountry')">
        <div class="col-lg-12">
          <TextInputField
              :name="t('basicDetails.email.fieldName')"
              :label="t('basicDetails.email.label')"
          />
        </div>
      </div>

      <div class="button-container">
        <BaseButton type="secondary" class="mt-40">Back</BaseButton>
        <BaseButton type="primary" :disabled="!meta.valid" class="ml-24">Continue</BaseButton>
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