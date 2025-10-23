<script setup>
import { send } from '@emailjs/browser';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const SERVICE_ID = 'service_gb1g58d'
const TEMPLATE_ID = 'template_v0xla4z'
const PUBLIC_KEY = 'rI_tl6ko26-WqldcM'

const form = ref({
    name: '',
    email: '',
    message: ''
})
const loading = ref(false)
const success = ref(false)
const error = ref(false)
const loadingSpinner = ref(false)

const isValidEmail = ref(true);
const isValidName = ref(true);
const isValidMessage = ref(true);

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(form.value.email);
}

function validateName() {
    return form.value.name.trim().length > 3;
}

function validateMessage() {
    return form.value.message.trim().length > 0;
}

async function sendEmail() {
    loadingSpinner.value = true;
    loading.value = true
    success.value = false
    error.value = false

    isValidEmail.value = validateEmail();
    isValidName.value = validateName();
    isValidMessage.value = validateMessage();
    try {
        if (isValidEmail.value && isValidName.value && isValidMessage.value) {
            await send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    user_name: form.value.name,
                    user_email: form.value.email,
                    message: form.value.message,
                    to_email: 'alexsanderesramos@gmail.com'
                },
                PUBLIC_KEY
            )
            success.value = true
            form.value = { name: '', email: '', message: '' }
        }
    } catch (err) {
        console.error('Erro ao enviar:', err)
        error.value = true
    } finally {
        loading.value = false
    }
    loadingSpinner.value = false;
}

</script>
<template>
    <div class="w-full flex flex-col items-center justify-center gap-4 p-4">
        <h1>{{ t('message.myEmail') }} alexsanderesramos@gmail.com</h1>
        <form @submit.prevent="sendEmail">
            <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-xl border p-4">
                <legend class="fieldset-legend">{{ t('message.sendMeMessage') }}</legend>

                <label class="label">{{ t('message.name') }}</label>
                <input type="text" class="input w-full" placeholder="" v-model="form.name" :disabled="loadingSpinner" />
                <div v-if="!isValidName" class="">{{ t('message.validator.name') }}</div>

                <label class="label">{{ t('message.email') }}</label>
                <input type="text" class="input w-full" placeholder="" v-model="form.email"
                    :disabled="loadingSpinner" />
                <div v-if="!isValidEmail" class="">{{ t('message.validator.email') }}</div>

                <label class="label">{{ t('message.message') }}</label>
                <textarea class="textarea w-full" placeholder="" v-model="form.message"
                    :disabled="loadingSpinner"></textarea>
                <div v-if="!isValidEmail" class="">{{ t('message.validator.message') }}</div>

                <input type="submit" class="btn btn-primary mt-4" :value="t('message.send')" />
            </fieldset>
        </form>
        <span v-if="loadingSpinner" class="loading loading-spinner loading-xl"></span>
    </div>
</template>
