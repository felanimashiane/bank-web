<script setup lang="ts">
import i18next from '../../../i18nextService';
import TextInputField from "../../../components/base/TextInputField.vue";
import {toTypedSchema} from '@vee-validate/zod';
import {z} from "zod";
import {useForm} from "vee-validate";

const t = (key: string) => i18next.t(key, { ns: 'business' });

const validationSchema = toTypedSchema(z.object({
      idNumber: z.string().min(Number(t('basicDetails.idNumber.validation.min')), t('basicDetails.idNumber.validation.minError')),
      email: z.string().email(t('basicDetails.email.validation.email')),
    })
);

useForm({ validationSchema });

</script>

<template>
  <form class="basic-container">

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

  </form>
</template>

<style scoped>
.basic-container {
  width: 100%;
  margin-top: 100px;
}
</style>