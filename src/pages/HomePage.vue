<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
const { t } = useI18n()
</script>

<template>
  <div class="md:grid md:grid-cols-2 p-4 items-center" style="height: calc(100dvh - 64px)">
    <div class="flex flex-col justify-center items-center">
      <h1 class="font-bold text-lg">{{ t('message.welcome.title') }}</h1>
      <p class="text-center">
        {{ t('message.welcome.intro') }}{{ t('message.welcome.experience')
        }}{{ t('message.welcome.stack') }}{{ t('message.welcome.transition')
        }}{{ t('message.welcome.projects') }}
      </p>
      <router-link to="/projects" class="btn btn-primary mt-4">{{
        t('message.welcome.cta')
      }}</router-link>
    </div>
    <div class="flex justify-center items-center">
      <div class="rounded-full border-2">
        <img
          src="/me.png"
          alt="me"
          class="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-accent-content"
        />
      </div>
    </div>
  </div>
</template>
