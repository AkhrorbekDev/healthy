<script setup lang="ts">
import HTag from "~/features/base/h-tag.vue"

interface IProps {
  specialist: any
}

const { t } = useI18n({
  useScope: "local"
})

defineProps<IProps>()
</script>

<template>
  <nuxt-link-locale
    class="flex w-full flex-col flex-nowrap items-start gap-[20px]"
    :to="`/specialisty/${specialist.slug}`"
  >
    <div class="relative h-[335px] overflow-hidden rounded-[10px] md:h-[400px]">
      <img class="h-full object-cover" alt="" :src="specialist.photo" />
      <div
        v-if="specialist.is_owner"
        class="absolute bottom-[10px] left-[10px] rounded-[5px] bg-green-500 px-[10px] py-[5px] text-center md:min-w-[65px]"
      >
        <span class="text-mobile-body-14 font-bold text-white md:text-[15px] md:font-medium">
          {{ t("owner") }}
        </span>
      </div>
      <div
        class="absolute bottom-[10px] right-[10px] flex min-h-[28px] min-w-[61px] items-center justify-evenly rounded-[10px] bg-[#000] bg-opacity-50 px-2 py-[5px] md:min-h-[32px] md:min-w-[65px] md:gap-2 md:px-2 md:py-[8.5px]"
      >
        <icon class="text-white md:h-[15px] md:w-[15px]" name="h-icon:star"></icon>
        <span class="text-mobile-body-14 font-bold leading-none text-white md:text-[17px] md:font-medium">
          {{ specialist.review_rating }}
        </span>
      </div>
    </div>
    <div class="flex shrink-0 flex-col flex-nowrap items-start gap-[12px] self-stretch">
      <div class="flex shrink-0 flex-nowrap items-start gap-[5px]">
        <h-tag
          v-for="item in specialist.specializations"
          class="lowercase md:!px-2 md:!py-1 md:!text-body-16"
          :key="item.id"
        >
          {{ item.name }}
        </h-tag>
        <h-tag v-if="specialist.specializations?.length - 1 > 0" class="md:!px-2 md:!py-1 md:!text-body-16">
          +{{ specialist.specializations?.length - 1 }}
        </h-tag>
      </div>
      <div class="flex shrink-0 flex-col flex-nowrap items-start gap-[5px] self-stretch">
        <span class="font-['Onest'] text-mobile-subtitle-22 font-semibold text-[#323232] md:text-subtitle-24">
          {{ specialist.full_name }}
        </span>
        <span
          class="whitespace-nowrap text-left font-['Onest'] text-mobile-body-14 font-medium text-[#585958] md:text-body-17"
        >
          {{ t("experience") }}: {{ specialist.experience }} {{ t("year") }}
        </span>
      </div>
    </div>
  </nuxt-link-locale>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "experience": "Experience",
    "year": "year",
    "owner": "Owner"
  },
  "ru": {
    "experience": "Опыт",
    "year": "лет",
    "owner": "Основатель"
  },
  "uz": {
    "experience": "Tajribasi",
    "year": "yil",
    "owner": "Asoschi"
  }
}
</i18n>
