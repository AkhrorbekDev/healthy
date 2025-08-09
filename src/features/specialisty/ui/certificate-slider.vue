<script setup lang="ts">
import HomeCourseCard from "../../courses/ui/home-course-card.vue"
import { Carousel, type CarouselConfig, type CarouselMethods, Slide } from "vue3-carousel"


interface IProps {
  items: any[]
}

defineProps<IProps>()
const carouselRef = ref<CarouselMethods>()
const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  gap: 24,
  snapAlign: "start",
  wrapAround: true,
  breakpoints: {
    1024: {
      itemsToShow: 4
    },
    640: {
      itemsToShow: 2
    }
  }
}))
</script>

<template>
  <carousel v-bind="carouselConfig" ref="carouselRef">
    <slide v-for="item in items" :key="item" class="h-full">
      <img class="h-[302px]" :src="item" alt="" />
    </slide>
  </carousel>
  <div class="relative ml-auto mt-[21px] flex w-[130px] flex-nowrap items-center gap-[10px] md:mt-[40px]">
    <div
      class="relative z-[290] flex h-[50px] w-[50px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[30px] bg-[#fff] pb-[12px] pl-[12px] pr-[12px] pt-[12px] md:h-[60px] md:w-[60px]"
      @click="carouselRef?.prev()"
    >
      <div
        class="relative z-[291] shrink-0 grow basis-0 self-stretch overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/7ogzDznKQF.png)] bg-cover bg-no-repeat"
      ></div>
    </div>
    <div
      class="relative z-[292] flex h-[50px] w-[50px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[30px] bg-[#fff] pb-[12px] pl-[12px] pr-[12px] pt-[12px] md:h-[60px] md:w-[60px]"
      @click="carouselRef?.next()"
    >
      <div
        class="relative z-[293] shrink-0 grow basis-0 self-stretch overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/hznXha741O.png)] bg-cover bg-no-repeat"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
