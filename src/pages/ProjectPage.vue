<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const projects = ref([
  {
    title: 'Belle Fête',
    description: 'message.belleFete',
    imageUrl: '/belle-fete.webp',

    category: 'message.freelance',
    tecnologies: [
      {
        name: 'Vue JS',
        type: 'badge-success',
        img: '/icons/vue.png',
      },
      {
        name: 'DaisyUI',
        type: 'badge-warning',
        img: '/icons/daisyUI.png',
      },
      {
        name: 'Supabase',
        type: 'badge-success',
        img: '/icons/supabase.png',
      },
    ],
  },
  {
    title: 'Gkids Aba',
    description: 'message.Gkids',
    imageUrl: '/gkids.png',
    projectUrl: 'https://gkidsaba.com.br/admin/login',
    category: 'message.freelance',
    tecnologies: [
      {
        name: 'Laravel',
        type: 'badge-error',
        img: '/icons/laravel.png',
      },
    ],
  },
  {
    title: 'Academia Space Fit Ourilândia',
    description: 'message.SpaceFit',
    imageUrl: '/logo-spacefit.jpg',
    projectUrl: 'https://www.academiaspacefit.com.br/',
    category: 'message.freelance',
    tecnologies: [
      {
        name: 'Vue JS',
        type: 'badge-success',
        img: '/icons/vue.png',
      },
      {
        name: 'DaisyUI',
        type: 'badge-warning',
        img: '/icons/daisyUI.png',
      },
    ],
  },
  {
    title: 'MVP Rick and Morty',
    description: 'message.rickAndMorty',
    imageUrl: '/rick-and-morty.png',
    projectUrl: 'https://devalexsander-rickandmorty.netlify.app/',
    category: 'message.course',
    tecnologies: [
      {
        name: 'Vue JS',
        type: 'badge-success',
        img: '/icons/vue.png',
      },
      {
        name: 'DaisyUI',
        type: 'badge-warning',
        img: '/icons/daisyUI.png',
      },
    ],
  },
  {
    title: 'Promobile',
    description: 'message.promobile',
    imageUrl: '/promobile.png',
    projectUrl: 'https://play.google.com/store/apps/details?id=net.proxsis.promobile&hl=pt_BR',
    category: 'message.jobExperience',
    tecnologies: [
      {
        name: 'Ionic 3',
        type: 'badge-success',
        img: '/icons/ionic.png',
      },
      {
        name: 'Angular 5',
        type: 'badge-warning',
        img: '/icons/angular.png',
      },
    ],
  },
])
</script>

<template>
  <div class="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="w-full h-full card bg-base-300 shadow-sm py-2"
    >
      <figure>
        <img class="w-[300px] h-[150px]" :src="project.imageUrl" :alt="project.title" />
      </figure>
      <div class="card-body indicator w-[320px]">
        <span class="indicator-end badge badge-primary">{{ t(project.category) }}</span>
        <h2 class="card-title">{{ project.title }}</h2>
        <p class="whitespace-normal wrap-break-words">{{ t(project.description) }}</p>
        <div class="flex flex-wrap gap-1">
          <div v-for="(tech, index) in project.tecnologies" :key="index" class="badge badge-ghost">
            <div class="flex flex-wrap items-center justify-center gap-2">
              <img class="max-w-6" :src="tech.img" :alt="tech.name" />
              <span>{{ tech.name }}</span>
            </div>
          </div>
        </div>
        <div class="card-actions">
          <a :href="project.projectUrl" target="_blank" class="btn btn-primary">{{
            t('message.seeProject')
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
