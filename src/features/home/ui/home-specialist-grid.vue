<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import type { CarouselConfig, CarouselMethods } from "vue3-carousel"
import { Carousel, Slide } from "vue3-carousel"
import HomeCourseCard from "~/features/home/ui/home-course-card.vue"
import HomeSpecialistCard from "~/features/home/ui/home-specialist-card.vue"

const carouselRef = ref<CarouselMethods>()
const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  gap: 24,
  snapAlign: "start",
  wrapAround: true,
  breakpoints: {
    1024: {
      itemsToShow: 3.5
    },
    360: {
      itemsToShow: 1.2
    }
  }
}))
</script>

<template>
  <app-section class="py-[80px] md:py-[120px]">
    <h2 class="headline-2 relative whitespace-nowrap text-left font-['Onest'] font-semibold text-[#323232]">
      Наши специалисты
    </h2>
    <div class="relative mt-[40px]">
      <carousel v-bind="carouselConfig" ref="carouselRef">
        <slide class="h-full w-full">
          <home-specialist-card />
        </slide>
        <slide class="h-full w-full">
          <home-specialist-card />
        </slide>
        <slide class="h-full w-full">
          <home-specialist-card />
        </slide>
      </carousel>
    </div>
    <nuxt-link-locale
      class="relative z-[91] mx-auto mb-0 mt-[52px] flex w-[224px] flex-nowrap items-center justify-center gap-[10px] rounded-[15px] bg-[#63845c] px-[20px] py-[16px]"
      to="/specialisty"
    >
      <span
        class="relative z-[92] h-[23px] shrink-0 basis-auto whitespace-nowrap text-left font-['Manrope'] text-[17px] font-bold leading-[23px] text-[#fff]"
      >
        Все специалисты
      </span>
    </nuxt-link-locale>
  </app-section>
</template>

<style scoped></style>
