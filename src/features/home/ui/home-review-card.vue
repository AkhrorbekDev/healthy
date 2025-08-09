<script setup lang="ts">
interface IProps {
  review: any[]
}

defineProps<IProps>()

const { t } = useI18n({
  useScope: "local"
})
</script>

<template>
  <div
    class="flex h-[452px] w-full shrink-0 flex-col flex-nowrap items-start gap-[20px] rounded-[20px] bg-[#fff] px-[15px] py-[20px] md:p-[20px]"
  >
    <div class="flex shrink-0 flex-col flex-nowrap items-start gap-[10px] self-stretch md:gap-[15px]">
      <div class="flex shrink-0 flex-col flex-nowrap items-start gap-[2px] self-stretch">
        <span class="font-['Onest'] text-mobile-subtitle-18 font-semibold text-[#323232] md:text-mobile-subtitle-20">
          {{ review.reviewer_name }}
        </span>
        <span class="font-['Onest'] text-mobile-body-15 font-normal text-[#848484] md:text-body-16">
          {{ review.reviewer_age }} {{ t("age") }}
        </span>
      </div>
      <div
        class="flex shrink-0 flex-nowrap items-center justify-between self-stretch border-t border-solid border-t-[#e7e7e7] pt-[10px] md:pt-[15px]"
      >
        <div class="flex w-[45px] shrink-0 flex-nowrap items-center gap-[5px]">
          <icon class="text-[18px] text-green-500" name="h-icon:star"></icon>
          <span class="h-[22px] font-['Manrope'] text-[16px] font-bold leading-[21.856px] text-[#63845c]">
            {{ review.rating }}
          </span>
        </div>
        <div class="body-16 flex w-[160px] flex-nowrap items-center justify-end gap-[10px]">
          <span class="font-['Onest'] text-mobile-body-14 font-normal text-[#848484] md:text-body-16">
            {{ t("for") }}:
          </span>
          <span class="font-['Onest'] text-mobile-body-14 font-normal text-[#848484] underline md:text-body-16">
           {{ review.specialist.name }}
          </span>
        </div>
      </div>
    </div>
    <span class="body-17 overflow-hidden text-left font-['Onest'] text-[17px] font-normal text-[#323232]">
      {{ review.comment }}
    </span>
    <div class="flex shrink-0 flex-nowrap items-center">
      <span @clik.prevent class="font-['Manrope'] text-[15px] font-bold leading-[23px] text-[#63845c] md:text-[17px]">
        {{ t("read_more") }}
      </span>
      <div class="h-5 w-5">
        <icon class="h-full w-full text-green-500" name="h-icon:arrow"></icon>
      </div>
    </div>
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
