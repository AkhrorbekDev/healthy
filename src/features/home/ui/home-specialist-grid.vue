<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import type { CarouselConfig, CarouselMethods } from "vue3-carousel"
import { Carousel, Slide } from "vue3-carousel"
import HomeCourseCard from "~/features/courses/ui/home-course-card.vue"
import HomeSpecialistCard from "~/features/home/ui/home-specialist-card.vue"

const carouselRef = ref<CarouselMethods>()
const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  gap: 24,
  snapAlign: "start",
  wrapAround: false,
  breakpoints: {
    1024: {
      mouseDrag: false,
      itemsToShow: 4
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
    <div class="relative mt-[20px] md:mt-[40px]">
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
        <slide class="h-full w-full">
          <home-specialist-card />
        </slide>
      </carousel>
    </div>
    <nuxt-link-locale
      class="mx-auto mt-[31px] block w-[200px] rounded-[15px] bg-[#63845c] py-[15px] text-center font-['Manrope'] text-[15px] font-bold text-[#fff] md:mt-[52px] md:w-[224px] md:px-[20px] md:py-[16px]"
      to="/specialisty"
    >
      <span>Все специалисты</span>
    </nuxt-link-locale>
  </app-section>
</template>

<style scoped></style>
