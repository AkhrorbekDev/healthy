<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import type { CarouselConfig, CarouselMethods } from "vue3-carousel"
import { Carousel, Slide } from "vue3-carousel"
import HomeSpecialistCard from "~/features/home/ui/home-specialist-card.vue"

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
    <h2 class="section-title whitespace-nowrap font-['Onest'] font-semibold text-[#323232]">
      {{ t("title") }}
    </h2>
    <div class="relative mt-[20px] md:mt-[40px]">
      <carousel v-bind="carouselConfig" ref="carouselRef">
        <slide v-for="item in items" class="h-full w-full" :key="item.id">
          <home-specialist-card :specialist="item" />
        </slide>
      </carousel>
    </div>
    <nuxt-link-locale
      class="mx-auto mt-[31px] block w-[200px] rounded-[15px] bg-[#63845c] py-[14px] text-center font-['Manrope'] text-[15px] font-bold text-[#fff] md:mt-[52px] md:w-[224px] md:px-[20px] md:py-[16px] md:text-[17px]"
      to="/specialisty"
    >
      <span>
        {{ t("all-specialists") }}
      </span>
    </nuxt-link-locale>
  </app-section>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "title": "Our Specialists",
    "all-specialists": "All Specialists"
  },
  "ru": {
    "title": "Наши специалисты",
    "all-specialists": "Все специалисты"
  },
  "uz": {
    "title": "Bizning mutaxassislar",
    "all-specialists": "Barcha mutaxassislar"
  }
}
</i18n>
