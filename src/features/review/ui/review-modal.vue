<script setup lang="ts">
const { t } = useI18n({
  useScope: "local"
})
const review = ref({})

const onBeforeShow = (e: any) => {
  review.value = e
}
</script>

<template>
  <ui-modal
    id="review-modal"
    class="review-modal"
    :label="review.reviewer_name"
    :description="`${review.reviewer_age} ${t('age')}`"
    @before-show="onBeforeShow"
  >
    <div class="px-[15px] pb-[20px] md:px-[20px]">
      <div class="flex w-full flex-col items-start gap-[10px] md:gap-[15px]">
        <!--        <div class="flex flex-col flex-nowrap items-start gap-[2px] self-stretch">-->
        <!--          <span class="text-mobile-subtitle-18 font-semibold text-[#323232] md:text-subtitle-22">-->
        <!--            {{ review.reviewer_name }}-->
        <!--          </span>-->
        <!--          <span class="text-left font-['Onest'] text-mobile-body-15 font-normal text-[#848484] md:text-body-16">-->
        <!--            {{ review.reviewer_age }} {{ t("age") }}-->
        <!--          </span>-->
        <!--        </div>-->
        <div class="flex w-full flex-nowrap items-center justify-between pt-[10px] md:pt-[15px]">
          <div class="flex w-[45px] flex-nowrap items-center gap-[5px]">
            <icon class="text-green-500" name="h-icon:star"></icon>
            <span class="font-['Manrope'] text-mobile-body-14 font-bold text-[#63845c] md:text-body-16">
              {{ review.rating }}
            </span>
          </div>
          <div
            class="flex w-[160px] flex-nowrap items-center justify-end gap-[10px] text-mobile-body-14 md:text-body-16"
          >
            <span class="font-normal text-[#848484]">{{ t("for") }}:</span>
            <div class="font-normal">
              <span class="font-normal text-[#848484] underline">{{ review.specialist?.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <p class="mt-[20px] overflow-hidden break-words text-mobile-body-15 font-normal text-[#323232] md:text-body-17">
        {{ review.comment }}
      </p>
    </div>
  </ui-modal>
</template>

<style>
.review-modal {
  .ui-modal-header-title {
    @apply text-mobile-subtitle-18 font-semibold text-[#323232] md:text-subtitle-22;
  }

  .ui-modal-header-description {
    @apply font-['Onest'] text-mobile-body-15 font-normal text-[#848484] md:text-body-16;
  }
}
</style>
<i18n>
{
  "en": {
    "age": "years",
    "for": "To",
    "read_more": "Read more"
  },
  "ru": {
    "age": "лет",
    "for": "Кому",
    "read_more": "Читать полностью"
  },
  "uz": {
    "age": "yosh",
    "for": "Kimga",
    "read_more": "Batafsil o'qish"
  }
}
</i18n>
