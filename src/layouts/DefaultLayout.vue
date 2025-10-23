<script setup>
import HeaderCustom from '@/components/HeaderCustom.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="h-screen w-screen overflow-x-hidden">
    <HeaderCustom />
    <RouterView />
  </div>
</template>
