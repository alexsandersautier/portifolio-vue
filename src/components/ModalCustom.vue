<script setup>
const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    currentProject: {
        type: Object,
        default: {},
    },
})

const emits = defineEmits(['update:show'])

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
    <dialog id="my_modal_1" class="modal" :class="{ 'modal-open': show }">
        <div class="modal-box">
            <h3 class="text-lg font-bold">{{ props.currentProject.title }}</h3>
            <p class="py-4">Press ESC key or click the button below to close</p>
            <div class="modal-action">
                <form method="dialog">
                    <button class="btn" @click="emits('update:show')">{{ t('message.close') }}</button>
                </form>
            </div>
        </div>
    </dialog>
</template>