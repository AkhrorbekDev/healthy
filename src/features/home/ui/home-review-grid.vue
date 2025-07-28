<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import HomeReviewCard from "~/features/home/ui/home-review-card.vue"
import type { CarouselConfig, CarouselMethods } from "vue3-carousel"
import { Carousel, Slide } from "vue3-carousel"

const { t } = useI18n({ useScope: "local" })
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
      itemsToShow: 1.5
    }
  }
}))
</script>

<template>
  <app-section class="pb-[80px] md:pb-[120px]">
    <span class="headline-1 text-left font-['Onest'] text-[50px] font-semibold text-[#323232]">
      {{ t("title") }}
    </span>
    <div class="mt-[40px]">
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
    <div class="ml-auto mt-[40px] flex w-[130px] flex-nowrap items-center gap-[10px]">
      <div
        class="z-[168] flex h-[60px] w-[60px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[30px] bg-[#fff] pb-[12px] pl-[12px] pr-[12px] pt-[12px]"
        @click="carouselRef?.prev()"
      >
        <div
          class="z-[169] shrink-0 grow basis-0 self-stretch overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/9W0ajBVJMU.png)] bg-cover bg-no-repeat"
        ></div>
      </div>
      <div
        class="z-[170] flex h-[60px] w-[60px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[30px] bg-[#fff] pb-[12px] pl-[12px] pr-[12px] pt-[12px]"
        @click="carouselRef?.next()"
      >
        <div
          class="z-[171] shrink-0 grow basis-0 self-stretch overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/yr7hnDzKnk.png)] bg-cover bg-no-repeat"
        ></div>
      </div>
    </div>
  </app-section>
</template>

<style scoped></style>

<i18n>
{
  "ru": {
    "title": "Отзывы и истории успеха"
  },
  "uz": {
    "title": "Sharhlar va muvaffaqiyat hikoyalari"
  }
}
</i18n>
