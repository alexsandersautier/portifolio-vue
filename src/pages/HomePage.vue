<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
const { t } = useI18n()
</script>

<template>
  <section class="min-h-[calc(100dvh-64px)] grid md:grid-cols-2 items-center gap-8 px-6 md:px-16 lg:px-24 bg-base-100">
    <!-- Texto -->
    <div class="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
      <div>
        <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          {{ t('message.welcome.title') }}
        </h1>
        <p class="text-base md:text-lg text-base-content/80 leading-relaxed max-w-2xl">
          {{ t('message.welcome.intro') }}
          {{ t('message.welcome.experience') }}
          {{ t('message.welcome.stack') }}
          {{ t('message.welcome.transition') }}
          {{ t('message.welcome.projects') }}
        </p>
      </div>

      <RouterLink to="/projects"
        class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
        {{ t('message.welcome.cta') }}
      </RouterLink>
    </div>

    <!-- Foto -->
    <div class="flex justify-center md:justify-end">
      <div class="relative">
        <div
          class="absolute inset-0 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse">
        </div>
        <img src="/me.png" alt="me"
          class="relative w-56 h-56 md:w-80 md:h-80 rounded-full object-cover border-4 border-base-content/10 shadow-2xl" />
      </div>
    </div>
  </section>
</template>
