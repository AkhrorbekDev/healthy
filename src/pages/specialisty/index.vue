<template>
  <div class="main-container relative mx-auto w-full overflow-hidden bg-[#f0f4f1]">
    <specialisty-hero />
    <specialisty-filter />
    <specialisty-grid />
    <app-section class="mb-[120px] mt-[70px]">
      <ui-pagination :total="100" />
    </app-section>
  </div>
</template>

<script lang="ts" setup>
import SpecialistyGrid from "~/features/specialisty/ui/specialisty-grid.vue"
import AppSection from "~/widgets/layout/app-section.vue"
import SpecialistyFilter from "~/features/specialisty/ui/specialisty-filter.vue"
import SpecialistyHero from "~/features/specialisty/ui/specialisty-hero.vue"
</script>
