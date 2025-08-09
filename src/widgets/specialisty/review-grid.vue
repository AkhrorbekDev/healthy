<script setup lang="ts">
import ReviewCard from "~/features/review/ui/review-card.vue"
import AppSection from "~/widgets/layout/app-section.vue"
import HomeCourseCard from "../../features/courses/ui/home-course-card.vue"
import { Carousel, type CarouselConfig, type CarouselMethods, Slide } from "vue3-carousel"

interface IProps {
  items: any[]
}

defineProps<IProps>()
defineEmits<{
  (e: "loadMore"): void
}>()
const { t } = useI18n({
  useScope: "local"
})

const modal = useModal()

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
  modal.show("review-modal")
}
const showCreateReviewModal = () => {
  modal.show("review-create-modal")
}
</script>

<template>
  <app-section class="mb-[80px] mt-[90px] flex flex-col flex-nowrap items-start gap-[20px] md:mt-[124px] md:gap-[40px]">
    <div class="flex flex-nowrap items-center justify-between self-stretch">
      <span class="text-mobile-headline-1 font-semibold text-[#323232] md:text-headline-2">
        {{ t("title") }}
      </span>

      <ui-button class="!hidden px-[20px] py-[16px] md:!flex" @click="showCreateReviewModal">
        {{ $t("actions.add_review") }}
      </ui-button>
    </div>
    <div class="hidden grid-cols-4 gap-[20px] self-stretch md:grid">
      <review-card v-for="item in items" :key="item.id" :review="item" />
    </div>

    <ui-button class="flex w-full px-[20px] py-[16px] md:!hidden" color="primary" @click="showCreateReviewModal">
      {{ $t("actions.add_review") }}
    </ui-button>
    <ui-button class="!hidden w-full px-[20px] py-[16px] md:flex" variant="outline" @click="$emit('loadMore')">
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
  },
  "en": {
    "title": "Reviews"
  }
}
</i18n>
