<script setup lang="ts">
import AppSectionFluid from "~/widgets/layout/app-section-fluid.vue"
import AppSection from "~/widgets/layout/app-section.vue"
import { Carousel, CarouselConfig, CarouselMethods, Slide } from "vue3-carousel"
import HomeReviewCard from "../../home/ui/home-review-card.vue"

const { t } = useI18n({ useScope: "local" })
const carouselRef = ref<CarouselMethods>()
const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  snapAlign: "start",
  wrapAround: false,
  breakpoints: {
    1024: {
      itemsToShow: 4.5,
      gap: 20
    },
    360: {
      itemsToShow: 1.15,
      gap: 16
    }
  }
}))
</script>

<template>
  <div class="w-full !bg-[#F0F4F1] px-4 py-[80px] md:px-0 md:py-[120px]">
    <app-section class="!px-0">
      <div class="flex w-full items-center justify-between">
        <p class="section-title">Отзывы</p>
        <ui-button class="!hidden md:!flex md:min-w-[224px]">Оставить отзыв</ui-button>
      </div>
    </app-section>
    <div class="mt-[20px] md:mt-[40px]">
      <carousel v-bind="carouselConfig" ref="carouselRef">
        <slide class="h-full w-full">
          <home-review-card />
        </slide>
        <slide class="h-full w-full">
          <home-review-card />
        </slide>
        <slide class="h-full w-full">
          <home-review-card />
        </slide>
        <slide class="h-full w-full">
          <home-review-card />
        </slide>
      </carousel>
    </div>
    <app-section class="!px-0">
      <ui-button class="mt-[20px] !flex w-full md:!hidden">Оставить отзыв</ui-button>
      <div class="ml-auto mt-[21px] hidden w-[130px] flex-nowrap items-center gap-[10px] md:mt-[40px] md:flex">
        <div
          class="z-[168] flex h-[50px] w-[50px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[30px] bg-[#fff] pb-[12px] pl-[12px] pr-[12px] pt-[12px] md:h-[60px] md:w-[60px]"
          @click="carouselRef?.prev()"
        >
          <div
            class="z-[169] shrink-0 grow basis-0 self-stretch overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/9W0ajBVJMU.png)] bg-cover bg-no-repeat"
          ></div>
        </div>
        <div
          class="z-[170] flex h-[50px] w-[50px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[30px] bg-[#fff] pb-[12px] pl-[12px] pr-[12px] pt-[12px] md:h-[60px] md:w-[60px]"
          @click="carouselRef?.next()"
        >
          <div
            class="z-[171] shrink-0 grow basis-0 self-stretch overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/yr7hnDzKnk.png)] bg-cover bg-no-repeat"
          ></div>
        </div>
      </div>
    </app-section>
  </div>
</template>

<style scoped></style>
