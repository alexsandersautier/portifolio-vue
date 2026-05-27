<script setup>
import ModalCustom from '@/components/ModalCustom.vue'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { allProjects } from '@/data/projects'
import TabsCustom from '@/components/TabsCustom.vue'
const { t } = useI18n()

const projects = ref('')
const selectedProject = ref({})

function openDetails(project) {
  showModal.value = !showModal.value
  selectedProject.value = project
}


const showModal = ref(false)

onMounted(() => projects.value = allProjects)
</script>

<template>
  <TabsCustom>
    <template #website>
      <div class="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div v-for="(project, index) in projects" :key="index" class="w-full h-full card bg-base-300 shadow-sm py-2">
          <figure>
            <img class="w-[300px] h-[150px] object-cover" :src="project?.imageUrl" :alt="project.title" />
          </figure>
          <div class="card-body indicator w-full">
            <div class="flex gap-4">
              <span class="indicator-end badge badge-primary">{{ t(project.category) }}</span>
              <span v-if="project.isDevelopment" class="indicator-end badge badge-error">{{ t('message.development')
                }}</span>
            </div>
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
            <div class="w-full flex justify-between">
              <button class="btn btn-accent" @click="openDetails(project)">{{ t('message.seeDetails') }}</button>
              <ModalCustom :currentProject="selectedProject" :show="showModal" @update:show="showModal = !showModal" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </TabsCustom>
</template>
