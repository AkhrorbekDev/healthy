<script setup lang="ts">
import { SpecialistCard } from "~/features/specialist/ui"
</script>

<template>
  <section class="p-section">
    <div class="app-container">
      <h2 class="headline mb-[15px]">{{ $t("home.specialist_section.title") }}</h2>
      <div class="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4">
        <specialist-card />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
