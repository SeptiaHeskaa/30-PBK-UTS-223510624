<<<<<<< HEAD
<template>
  <div id="app">
    <UserPosts.vue />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">

import UserPosts from '@/components/UserPosts.vue'; // Import komponen UserPosts
</script>

<style>
/* Styling untuk aplikasi utama */
#app {
  text-align: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
=======
<script setup lang="ts"></script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
>>>>>>> 11054b7bd8c7598d222c8ffda395ef3b18a97d5b
