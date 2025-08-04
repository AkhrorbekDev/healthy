<script setup lang="ts">
import ReviewCard from "~/features/review/ui/review-card.vue"
import AppSection from "~/widgets/layout/app-section.vue"
import HomeCourseCard from "../../features/courses/ui/home-course-card.vue"
import { Carousel, type CarouselConfig, type CarouselMethods, Slide } from "vue3-carousel"

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
      enabled: false,
      itemsToShow: 3.5
    },
    640: {
      itemsToShow: 1.5
    }
  }
}))

const showModal = () => {
  // useModal().show("review-modal")
}
</script>

<template>
  <app-section class="mb-[80px] mt-[90px] flex flex-col flex-nowrap items-start gap-[20px] md:mt-[124px] md:gap-[40px]">
    <div class="flex items-center justify-between self-stretch">
      <span class="text-mobile-headline-1 font-semibold text-[#323232] md:text-headline-2">
        {{ t("title") }}
      </span>

      <ui-button class="!hidden px-[20px] py-[16px] md:flex">
        {{ $t("actions.add_review") }}
      </ui-button>
    </div>
    <div class="hidden grid-cols-4 gap-[20px] self-stretch md:grid">
      <review-card />
      <review-card />
      <review-card />
      <review-card />
      <review-card />
      <review-card />
    </div>
    <!--    <div class="md:hidden">-->
    <!--      <carousel v-bind="carouselConfig" ref="carouselRef">-->
    <!--        <slide class="h-full">-->
    <!--          <review-card />-->
    <!--        </slide>-->
    <!--        <slide class="h-full">-->
    <!--          <review-card />-->
    <!--        </slide>-->
    <!--        <slide class="h-full">-->
    <!--          <review-card />-->
    <!--        </slide>-->
    <!--        <slide class="h-full">-->
    <!--          <review-card />-->
    <!--        </slide>-->
    <!--      </carousel>-->
    <!--    </div>-->

    <ui-button class="!md:hidden flex w-full px-[20px] py-[16px]" color="primary" @click="showModal">
      {{ $t("actions.add_review") }}
    </ui-button>
    <ui-button class="!hidden w-full px-[20px] py-[16px] md:flex" variant="outline">
      {{ $t("actions.load_more") }}
    </ui-button>
  </app-section>
</template>

<style scoped></style>

<i18n>
{
  "ru": {
    "title": "Отзывы"
  },
  "uz": {
    "title": "Sharhlar"
  }
}
</i18n>
