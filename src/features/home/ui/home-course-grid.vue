<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import HomeCourseCard from "~/features/home/ui/home-course-card.vue"
import type { CarouselConfig, CarouselMethods } from "vue3-carousel"
import { Carousel, Slide } from "vue3-carousel"

const carouselRef = ref<CarouselMethods>()
const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  gap: 24,
  snapAlign: "start",
  wrapAround: false,
  breakpoints: {
    1024: {
      itemsToShow: 3.5
    },
    640: {
      itemsToShow: 1
    }
  }
}))
</script>

<template>
  <app-section class="pb-[80px] md:pb-[120px]">
    <p class="headline-1 whitespace-nowrap text-left font-['Onest'] font-semibold text-[#323232]">Курсы и тренинги</p>
    <carousel v-bind="carouselConfig" ref="carouselRef">
      <slide class="h-full">
        <home-course-card @click="$router.push('/courses/123')" />
      </slide>
      <slide class="h-full">
        <home-course-card @click="$router.push('/courses/123')" />
      </slide>
      <slide class="h-full">
        <home-course-card @click="$router.push('/courses/123')" />
      </slide>
    </carousel>
    <div class="relative mt-[40px] grid grid-cols-1 gap-[20px] md:grid-cols-3"></div>
    <div class="relative ml-auto mt-[40px] flex w-[130px] flex-nowrap items-center gap-[10px]">
      <div
        class="relative z-[290] flex h-[60px] w-[60px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[30px] bg-[#fff] pb-[12px] pl-[12px] pr-[12px] pt-[12px]"
        @click="carouselRef?.prev()"
      >
        <div
          class="relative z-[291] shrink-0 grow basis-0 self-stretch overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/7ogzDznKQF.png)] bg-cover bg-no-repeat"
        ></div>
      </div>
      <div
        class="relative z-[292] flex h-[60px] w-[60px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[30px] bg-[#fff] pb-[12px] pl-[12px] pr-[12px] pt-[12px]"
        @click="carouselRef?.next()"
      >
        <div
          class="relative z-[293] shrink-0 grow basis-0 self-stretch overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/hznXha741O.png)] bg-cover bg-no-repeat"
        ></div>
      </div>
    </div>
  </app-section>
</template>

<style scoped></style>
