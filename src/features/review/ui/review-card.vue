<script setup lang="ts">
interface IProps {
  review: any[]
}

const props = defineProps<IProps>()

const { t } = useI18n({
  useScope: "local"
})
const modal = useModal()
const mockReview = {
  reviewer_name: "John Doe",
  reviewer_age: 30,
  rating: 4.5,
  comment: "This is a sample review comment that is quite long and should be truncated in the card view.",
  specialist: {
    name: "Dr. Smith"
  }
}
const showReviewModal = () => {
  modal.show("review-modal", mockReview)
}
</script>

<template>
  <div
    class="flex h-[447px] w-full flex-col flex-nowrap items-start gap-[20px] rounded-[20px] bg-[#fff] px-[15px] py-[20px] md:p-[20px]"
  >
    <div class="flex w-full flex-col items-start gap-[10px] md:gap-[15px]">
      <div class="flex flex-col flex-nowrap items-start gap-[2px] self-stretch">
        <span class="text-mobile-subtitle-18 font-semibold text-[#323232] md:text-subtitle-22">
          {{ mockReview.reviewer_name }}
        </span>
        <span class="text-left font-['Onest'] text-mobile-body-15 font-normal text-[#848484] md:text-body-16">
          {{ mockReview.reviewer_age }} {{ t("age") }}
        </span>
      </div>
      <div
        class="flex w-full flex-nowrap items-center justify-between border-t border-solid border-t-[#e7e7e7] pt-[10px] md:pt-[15px]"
      >
        <div class="flex w-[45px] flex-nowrap items-center gap-[5px]">
          <icon class="text-green-500" name="h-icon:star"></icon>
          <span class="font-['Manrope'] text-mobile-body-14 font-bold text-[#63845c] md:text-body-16">
            {{ mockReview.rating }}
          </span>
        </div>
        <div class="flex w-[160px] flex-nowrap items-center gap-[10px] text-mobile-body-14 md:text-body-16">
          <span class="font-normal text-[#848484]">{{ t("for") }}:</span>
          <div class="font-normal">
            <span class="font-normal text-[#848484] underline">{{ mockReview.specialist.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <p class="overflow-hidden break-words text-mobile-body-15 font-normal text-[#323232] md:text-body-17">
      {{ mockReview.comment }}
    </p>
    <ui-button
      class="mt-auto"
      color="primary"
      variant="link"
      icon-name="h-icon:arrow"
      icon-class="text-green-500"
      @click="showReviewModal"
    >
      {{ t("read_more") }}
    </ui-button>
  </div>
</template>

<style scoped></style>
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
