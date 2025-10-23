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

async function sendEmail() {
    loading.value = true
    success.value = false
    error.value = false

    try {
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
    } catch (err) {
        console.error('Erro ao enviar:', err)
        error.value = true
    } finally {
        loading.value = false
    }
}

</script>
<template>
    <div class="w-full flex flex-col items-center justify-center gap-4 p-4">
        <h1>{{ t('message.myEmail') }} alexsanderesramos@gmail.com</h1>

        <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend class="fieldset-legend">{{ t('message.sendMeMessage') }}</legend>

            <label class="label">{{ t('message.name') }}</label>
            <input type="text" class="input" placeholder="" v-model="form.name" />

            <label class="label">{{ t('message.email') }}</label>
            <input type="text" class="input" placeholder="" v-model="form.email" />

            <label class="label">{{ t('message.message') }}</label>
            <textarea class="textarea" placeholder="" v-model="form.message"></textarea>

            <button @click="sendEmail" class="btn btn-primary mt-4">{{ t('message.send') }}</button>
        </fieldset>
    </div>
</template>
