<script setup lang="ts">
import SpecialistCard from "~/features/specialisty/ui/specialisty-card.vue"
import AppSection from "~/widgets/layout/app-section.vue"
</script>

<template>
  <app-section class="pb-[80px] md:pb-[120px]">
    <h2 class="headline mb-[15px]">{{ $t("home.specialist_section.title") }}</h2>
    <div class="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4">
      <specialist-card />
    </div>
  </app-section>
</template>

<style scoped></style>
