<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const technologies = ref([
  {
    name: 'Vue Js',
    experience: '1',
    iconPath: '/icons/vuejs-100.png',
    documentation: 'https://vuejs.org/',
    wordExperience: true,
  },
  {
    name: 'Angular',
    experience: '2',
    iconPath: '/icons/angular-100.png',
    documentation: 'https://angular.dev/',
    wordExperience: true,
  },
  {
    name: 'Ionic',
    experience: '2',
    iconPath: '/icons/ionic-100.png',
    documentation: 'https://ionicframework.com/',
    wordExperience: true,
  },
  {
    name: 'Tailwind CSS',
    experience: '0,8',
    iconPath: '/icons/tailwind-css-100.png',
    documentation: 'https://tailwindcss.com/docs/installation/using-vite',
    wordExperience: true,
  },
  {
    name: 'Django',
    experience: '2',
    iconPath: '/icons/django-100.png',
    documentation: 'https://www.djangoproject.com/',
    wordExperience: true,
  },
  {
    name: 'Laravel',
    experience: '1',
    iconPath: '/icons/laravel-100.png',
    documentation: 'https://laravel.com/',
    wordExperience: true,
  },
])
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
    <div v-for="(tech, index) in technologies" :key="index" class="">
      <div class="card card-side bg-base-300 shadow-sm">
        <figure class="w-28 object-contain">
          <img :src="tech.iconPath" alt="Movie" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ tech.name }}</h2>
          <p>{{ t('message.experience') }}: {{ tech.experience }} {{ t('message.year') }}</p>
          <p>
            {{ t('message.wordExperience') }}:
            <input type="checkbox" :class="{ 'toggle-success': tech.wordExperience }" :checked="tech.wordExperience"
              class="toggle" />
          </p>
          <div class="card-actions justify-end">
            <a :href="tech.documentation" target="_blank" class="btn btn-primary">{{
              t('message.documentation')
              }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
