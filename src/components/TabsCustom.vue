<template>
    <div class="tabs tabs-lift m-2">
        <input type="radio" name="my_tabs_3" class="tab" :aria-label="t('message.website')" :checked="true" />
        <div class="tab-content bg-base-100 border-base-300 p-6">
            <slot name="website"></slot>
        </div>

        <input type="radio" name="my_tabs_3" class="tab" :aria-label="t('message.rpa')" />
        <div class="tab-content bg-base-100 border-base-300 p-6">
            <slot name="auto"></slot>
        </div>

    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>