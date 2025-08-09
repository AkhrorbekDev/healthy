<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import HomeReviewCard from "~/features/home/ui/home-review-card.vue"
import type { CarouselConfig, CarouselMethods } from "vue3-carousel"
import { Carousel, Slide } from "vue3-carousel"
import ReviewCard from "~/features/review/ui/review-card.vue"

interface IProps {
  items: any[]
}

defineProps<IProps>()

const { t } = useI18n({
  useScope: "local"
})
const carouselRef = ref<CarouselMethods>()
const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  snapAlign: "start",
  wrapAround: true,
  breakpoints: {
    1024: {
      itemsToShow: 4,
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
  <app-section class="pb-[80px] md:pb-[120px]">
    <span class="section-title">
      {{ t("title") }}
    </span>
    <div class="mt-[40px]">
      <carousel v-bind="carouselConfig" ref="carouselRef">
        <slide v-for="item in items" class="h-full w-full" :key="item.id">
          <review-card :review="item" />
        </slide>
      </carousel>
    </div>
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
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "title": "Reviews and Success Stories"
  },
  "ru": {
    "title": "Отзывы и истории успеха"
  },
  "uz": {
    "title": "Sharhlar va muvaffaqiyat hikoyalari"
  }
}
</i18n>
