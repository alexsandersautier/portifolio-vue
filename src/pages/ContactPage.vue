<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const formData = ref({
    name: '',
    email: '',
    message: ''
})

</script>
<template>
    <div class="w-full flex flex-col items-center justify-center gap-4 p-4">
        <h1>{{ t('message.myEmail') }} alexsanderesramos@gmail.com</h1>
        <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend class="fieldset-legend">{{ t('message.sendMeMessage') }}</legend>

            <label class="label">{{ t('message.name') }}</label>
            <input type="text" class="input" placeholder="" v-model="formData.name" />

            <label class="label">{{ t('message.email') }}</label>
            <input type="text" class="input" placeholder="" v-model="formData.email" />

            <label class="label">{{ t('message.message') }}</label>
            <textarea class="textarea" placeholder="" v-model="formData.message"></textarea>

            <button class="btn btn-primary mt-4">{{ t('message.send') }}</button>
        </fieldset>
    </div>
</template>
