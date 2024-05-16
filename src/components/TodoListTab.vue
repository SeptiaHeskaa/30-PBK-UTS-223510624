<script setup lang="ts">
  import { reactive } from 'vue'

  interface Props {
    active: string
  }

  const { active } = defineProps<Props>()

  const emit = defineEmits(['toggle-active'])

<<<<<<< HEAD
  const tabOptions: string[] = ['All', 'To Do', 'Done']
=======
  const tabOptions: string[] = ['all', 'todo', 'done']
>>>>>>> 11054b7bd8c7598d222c8ffda395ef3b18a97d5b
</script>

<template>
  <div class="flex mt-4">
    <div
      v-for="item in tabOptions"
      :key="item"
<<<<<<< HEAD
      class="grow py-1 text-center text-red-700 uppercase rounded-t-lg border-solid border-b-2 border-rgba-700 cursor-pointer transition duration-300"
=======
      class="grow py-1 text-center text-red-700 uppercase rounded-t-lg border-solid border-b-2 border-red-700 cursor-pointer transition duration-300"
>>>>>>> 11054b7bd8c7598d222c8ffda395ef3b18a97d5b
      :class="{ '!text-teal-100 bg-red-700': item === active }"
      @click.prevent="emit('toggle-active', item)"
    >
      {{ item }}
    </div>
  </div>
</template>
