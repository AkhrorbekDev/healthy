<template>
  <main class="main-container relative mx-auto my-0 h-[4550px] w-[360px] overflow-hidden bg-[#f0f4f1]">
    <hero-section />
    <benefits-section />
    <specialists-section />
    <requirements-section />
    <call-to-action-section />
  </main>
</template>

<script lang="ts" setup>
import HeroSection from "@/features/m/HeroSection.vue"
import BenefitsSection from "@/features/m/BenefitsSection.vue"
import SpecialistsSection from "@/features/m/SpecialistsSection.vue"
import RequirementsSection from "@/features/m/RequirementsSection.vue"
import CallToActionSection from "@/features/m/CallToActionSection.vue"
</script>
