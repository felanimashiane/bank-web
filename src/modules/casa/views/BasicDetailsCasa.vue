<script setup lang="ts">
import i18next from '../../../i18nextService';
import TextInputField from "../../../components/base/TextInputField.vue";
import {toTypedSchema} from '@vee-validate/zod';
import {z} from "zod";
import {useForm} from "vee-validate";
import BaseButton from "../../../components/base/BaseButton.vue";
import {useProductStore} from "../../../stores/productStore.ts";
import {useApplicationDetailsStore} from "../../../stores/useApplicationDetailsStore.ts";
import {onMounted} from "vue";
import type {BasicDetailsModel} from "../../../models/BasicDetailsModel.ts";


const t = (key: string) => i18next.t(key, { ns: 'casa' });

const validationSchema = toTypedSchema(z.object({
      idNumber: t('basicDetails.idNumber.isRequired') ?
          z.string().min(Number(t('basicDetails.idNumber.validation.min')), t('basicDetails.idNumber.validation.minError')).nonempty() :
          z.string().min(Number(t('basicDetails.idNumber.validation.min')), t('basicDetails.idNumber.validation.minError')).optional(),

      email: t('basicDetails.email.isRequired') ?
          z.string().email(t('basicDetails.email.validation.email')).nonempty() :
          z.string().email(t('basicDetails.email.validation.email')).optional(),
    })

    // HOW TO REMOVE VALIDATIONS FROM validationScheme ??
    // CREATE A METHOD TO ADD THESE VALIDATIONS FROM
    // DATA PERSIST

);



const {meta, values, setValues} = useForm({ validationSchema });

onMounted(() => {                                         // WE USE ON-MOUNTED FROM VUE TO PERSIST DATA
  setValues(useApplicationDetailsStore().basicDetails);         // SET VALUES TO THE FORM
});

function submit(){
  useApplicationDetailsStore().setBasicDetails( setBasicValuesOnSubmit(values));
  useProductStore().continue();
};

function setBasicValuesOnSubmit(values): BasicDetailsModel{
  return {
    idNumber: values.idNumber, email:values.email,
  }
}

</script>

<template>
  <form class="basic-container">
    <div class="form-content">
      <div class="row"  v-if="t('basicDetails.idNumber.isValidForCountry')">
        <div class="col-lg-12">
          <TextInputField
              :name="t('basicDetails.idNumber.fieldName')"
              :label="t('basicDetails.idNumber.label')"
              :required="t('basicDetails.idNumber.isRequired')"
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
        <BaseButton type="secondary" class="mt-40" @click="useProductStore().back()">Back</BaseButton>
        <BaseButton type="primary" :disabled="!meta.valid" class="ml-24" @click="submit()">Continue</BaseButton>
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