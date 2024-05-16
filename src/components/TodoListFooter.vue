<script setup lang="ts">
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const year: number = new Date().getFullYear()
</script>

<template>
  <div class="flex flex-col items-center mt-4">
    <router-link
      v-if="route.name === 'todoList'"
<<<<<<< HEAD
      class="btn-primary"
=======
      class=""
>>>>>>> 11054b7bd8c7598d222c8ffda395ef3b18a97d5b
      :to="{ name: 'about' }"
    >
      
    </router-link>
    <router-link
<<<<<<< HEAD
      v-if="route.name === ''"
      class="btn-primary"
      :to="{ name: '' }"
=======
      v-if="route.name === 'about'"
      class=""
      :to="{ name: 'todoList' }"
>>>>>>> 11054b7bd8c7598d222c8ffda395ef3b18a97d5b
    >
      TodoList
    </router-link>

    <p class="mt-2 text-sm text-zinc-500">
<<<<<<< HEAD
       
=======
      
>>>>>>> 11054b7bd8c7598d222c8ffda395ef3b18a97d5b
    </p>
  </div>
</template>
