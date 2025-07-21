<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import HomeCourseCard from "~/features/home/ui/home-course-card.vue"
import type { CarouselConfig } from "vue3-carousel"
import { Carousel, Slide, Navigation } from "vue3-carousel"

const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  gap: 24,
  snapAlign: "start",
  wrapAround: true,
  breakpoints: {
    1024: {
      itemsToShow: 4
    },
    768: {
      itemsToShow: 2
    },
    640: {
      itemsToShow: 1
    }
  }
}))
</script>

<template>
  <app-section class="pb-[80px] md:py-[120px]">
    <p class="headline-1 whitespace-nowrap text-left font-['Onest'] font-semibold text-[#323232]">Курсы и тренинги</p>
    <div class="relative mb-0 mr-0 mt-[40px] flex flex-nowrap items-center gap-[20px]">
      <home-course-card @click="$router.push('/courses/123')" />
      <home-course-card @click="$router.push('/courses/123')" />
      <home-course-card @click="$router.push('/courses/123')" />
    </div>
    <div class="relative ml-auto mt-[40px] flex w-[130px] flex-nowrap items-center gap-[10px]">
      <div
        class="relative z-[290] flex h-[60px] w-[60px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[30px] bg-[#fff] pb-[12px] pl-[12px] pr-[12px] pt-[12px]"
      >
        <div
          class="relative z-[291] shrink-0 grow basis-0 self-stretch overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/7ogzDznKQF.png)] bg-cover bg-no-repeat"
        ></div>
      </div>
      <div
        class="relative z-[292] flex h-[60px] w-[60px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[30px] bg-[#fff] pb-[12px] pl-[12px] pr-[12px] pt-[12px]"
      >
        <div
          class="relative z-[293] shrink-0 grow basis-0 self-stretch overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/hznXha741O.png)] bg-cover bg-no-repeat"
        ></div>
      </div>
    </div>
  </app-section>
</template>

<style scoped></style>
