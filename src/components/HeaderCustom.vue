<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const language = ref('EN')

function handleClickLang() {
  language.value = language.value === 'EN' ? 'PT' : 'EN'
  locale.value = language.value.toLowerCase()
}
</script>

<template>
  <div class="flex flex-wrap w-full items-center justify-center p-1 min-h-16 bg-base-300 shadow-sm">
    <div class="flex-1">
      <router-link to="/" class="btn btn-ghost text-xl">{{ t('message.home') }}</router-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal items-center">
        <li>
          <router-link to="/projects" class="uppercase font-bold">{{
            t('message.projects')
          }}</router-link>
        </li>
        <li>
          <router-link to="/technologies" class="uppercase font-bold">{{
            t('message.technologies')
          }}</router-link>
        </li>
        <li>
          <router-link to="/contact" class="uppercase font-bold">{{
            t('message.contact')
          }}</router-link>
        </li>
        <li>
          <button class="btn btn-circle" @click="handleClickLang">{{ language }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>
