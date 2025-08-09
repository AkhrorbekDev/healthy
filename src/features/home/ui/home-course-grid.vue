<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import HomeCourseCard from "~/features/courses/ui/home-course-card.vue"
import type { CarouselConfig, CarouselMethods } from "vue3-carousel"
import { Carousel, Slide } from "vue3-carousel"

interface IProps {
  items: any[]
}

defineProps<IProps>()

const { t } = useI18n({
  useScope: "local"
})
const carouselRef = ref<CarouselMethods>()
const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  gap: 24,
  snapAlign: "start",
  wrapAround: true,
  breakpoints: {
    1024: {
      itemsToShow: 2.5
    },
    640: {
      itemsToShow: 1.5
    }
  }
}))
</script>

<template>
  <app-section class="pb-[80px] md:pb-[120px]">
    <p
      class="md:mb[40px] mb-[20px] whitespace-nowrap text-left font-['Onest'] text-mobile-headline-1 font-semibold text-[#323232] md:text-headline-2"
    >
      {{ t("title") }}
    </p>
    <carousel v-bind="carouselConfig" ref="carouselRef">
      <slide v-for="item in items" class="h-full" :key="item.id">
        <home-course-card :course="item" />
      </slide>
    </carousel>
    <div class="relative ml-auto mt-[21px] flex w-[130px] flex-nowrap items-center gap-[10px] md:mt-[40px]">
      <div
        class="flex h-[50px] w-[50px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[30px] bg-[#fff] pb-[12px] pl-[12px] pr-[12px] pt-[12px] md:h-[60px] md:w-[60px]"
        @click="carouselRef?.prev()"
      >
        <div
          class="shrink-0 grow basis-0 self-stretch overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/7ogzDznKQF.png)] bg-cover bg-no-repeat"
        ></div>
      </div>
      <div
        class="flex h-[50px] w-[50px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[30px] bg-[#fff] pb-[12px] pl-[12px] pr-[12px] pt-[12px] md:h-[60px] md:w-[60px]"
        @click="carouselRef?.next()"
      >
        <div
          class="shrink-0 grow basis-0 self-stretch overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/hznXha741O.png)] bg-cover bg-no-repeat"
        ></div>
      </div>
    </div>
  </app-section>
</template>

<style scoped></style>

<i18n>
{
  "ru": {
    "title": "Курсы и тренинги"
  },
  "en": {
    "title": "Courses and Trainings"
  },
  "uz": {
    "title": "Kurslar va treninglar"
  }
}
</i18n>
