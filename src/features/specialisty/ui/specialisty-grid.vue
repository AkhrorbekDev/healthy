<template>
  <app-section>
    <div class="mt-[20px] grid grid-cols-1 gap-[20px] md:mt-[30px] md:grid-cols-2">
      <specialisty-card v-for="specialist in items" :specialist :key="specialist.id" />
    </div>
  </app-section>
</template>

<script lang="ts" setup>
import AppSection from "~/widgets/layout/app-section.vue"
import SpecialistyCard from "~/features/specialisty/ui/specialisty-card.vue"

interface IProps {
  items: any[]
}

defineProps<IProps>()
</script>
