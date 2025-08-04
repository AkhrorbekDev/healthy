<script setup lang="ts">
import ReviewCard from "~/features/review/ui/review-card.vue"
import AppSection from "~/widgets/layout/app-section.vue"

const { t } = useI18n({
  useScope: "local"
})
</script>

<template>
  <app-section class="mb-[80px] mt-[90px] flex flex-col flex-nowrap items-start gap-[20px] md:mt-[124px] md:gap-[40px]">
    <div class="relative z-[195] flex shrink-0 flex-nowrap items-center justify-between self-stretch">
      <span class="text-mobile-headline-1 font-semibold text-[#323232] md:text-headline-2">
        {{ t("title") }}
      </span>

      <ui-button class="!hidden px-[20px] py-[16px] md:flex">
        {{ $t("actions.add_review") }}
      </ui-button>
    </div>
    <div class="relative z-[199] grid grid-cols-4 gap-[20px] self-stretch">
      <review-card />
      <review-card />
      <review-card />
      <review-card />
      <review-card />
      <review-card />
    </div>

    <ui-button class="!md:hidden flex w-full px-[20px] py-[16px]" color="primary">
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
