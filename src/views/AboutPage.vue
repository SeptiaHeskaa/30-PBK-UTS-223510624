<script setup lang="ts">
  import TodoListFooter from '@/components/TodoListFooter.vue'

  const description =
<<<<<<< HEAD
    ''
  const tip = "created by: @septiaheskaa"
=======
    'This TodoList is created with Vue3, Vite, TypeScript, and Tailwind CSS.'

  const tip = "The todo list would be stored in browser's local storage."
>>>>>>> 11054b7bd8c7598d222c8ffda395ef3b18a97d5b
</script>

<template>
  <div class="page-container">
    <div class="page-wrapper">
      <div class="mt-8 min-h-[200px]">
<<<<<<< HEAD
        <h2 class="text-3xl text-center font-bold"></h2>
=======
        <h2 class="text-3xl text-center font-bold">About TodoList</h2>
>>>>>>> 11054b7bd8c7598d222c8ffda395ef3b18a97d5b
        <p class="mt-8 text-center">
          {{ description }}
        </p>
        <p class="mt-4 text-center">
          {{ tip }}
        </p>
      </div>

      <TodoListFooter />
    </div>
  </div>
</template>
