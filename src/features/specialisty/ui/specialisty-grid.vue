<template>
  <app-section>
    <div class="relative z-[67] mb-0 mr-0 mt-[30px] grid grid-cols-1 gap-[20px] md:grid-cols-2">
      <specialisty-card />
      <specialisty-card />
      <specialisty-card />
    </div>
  </app-section>
</template>

<script lang="ts" setup>
import AppSection from "~/widgets/layout/app-section.vue"
import SpecialistyCard from "~/features/specialisty/ui/specialisty-card.vue"
</script>
