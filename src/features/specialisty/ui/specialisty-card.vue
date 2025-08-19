<script lang="ts" setup>
import HTag from "~/features/base/h-tag.vue"

const { t } = useI18n({ useScope: "local" })

interface IProps {
  specialist: any
}

defineProps<IProps>()
</script>
<template>
  <div
    class="flex w-full flex-col flex-nowrap items-start gap-[20px] rounded-[20px] bg-[#fff] p-[15px] md:flex-row md:p-[20px]"
    @click="$router.push(`/specialisty/${specialist.slug}`)"
  >
    <div class="flex items-start gap-[15px]">
      <img
        class="h-[137px] w-[119px] rounded-[10px] object-cover md:h-[310px] md:min-w-[269px]"
        alt=""
        :src="specialist.photo"
      />
      <div class="flex h-full flex-col justify-between md:hidden">
        <span class="text-mobile-subtilte-20 overflow-hidden text-left font-['Onest'] font-semibold text-[#323232]">
          {{ specialist.full_name }}
        </span>
        <span class="text-left font-['Onest'] text-mobile-body-14 font-semibold text-[#63845c]">
          {{ $t("labels.price", { price: specialist.price }) }}
        </span>
      </div>
    </div>
    <div class="flex w-full flex-col flex-nowrap items-start gap-[15px] md:gap-[25px]">
      <div
        class="!hidden shrink-0 flex-col flex-nowrap items-start gap-[10px] self-stretch border-b border-solid border-b-[#e7e7e7] pb-[25px] pl-0 pr-0 pt-0 md:!flex"
      >
        <span class="overflow-hidden text-left font-['Onest'] text-subtitle-24 font-semibold text-[#323232]">
          {{ specialist.full_name }}
        </span>
        <div
          v-if="specialist.specializations?.length"
          class="flex w-[227px] shrink-0 flex-nowrap items-start gap-[5px]"
        >
          <h-tag class="md:px-[10px] md:py-[5px]">{{ specialist.specializations[0].name }}</h-tag>
          <h-tag v-if="specialist.specializations?.length > 1" class="md:px-[10px] md:py-[5px]">
            +
            {{ specialist.specializations?.length - 1 }}
          </h-tag>
        </div>
      </div>
      <div
        class="flex flex-col flex-nowrap items-start gap-[8px] self-stretch border-b border-solid border-b-[#e7e7e7] pb-[15px] pl-0 pr-0 pt-0 md:pb-[25px]"
      >
        <div class="flex shrink-0 flex-nowrap items-center gap-[8px]">
          <icon class="text-[18px] text-green-500" name="h-icon:achieve"></icon>
          <span class="text-mobile-body-15 font-medium text-[#323232] md:text-body-17">
            {{ t("experience") }}: {{ specialist.experience }} {{ t("year") }}
          </span>
        </div>
        <div class="flex shrink-0 flex-nowrap items-center gap-[8px]">
          <icon class="text-[18px] text-green-500" name="h-icon:star"></icon>

          <span class="text-mobile-body-15 font-medium text-[#323232] md:text-body-17">
            {{ t("rating") }}: {{ specialist.rating }}
          </span>
        </div>
        <div class="flex shrink-0 flex-nowrap items-center gap-[8px]">
          <icon class="text-[18px] text-green-500" name="h-icon:location"></icon>

          <span class="text-mobile-body-15 font-medium text-[#323232] md:text-body-17">{{ specialist.city }}</span>
        </div>
        <div class="flex flex-nowrap items-center gap-[8px] self-stretch">
          <icon class="text-[18px] text-green-500" name="h-icon:language"></icon>

          <span class="text-left font-['Onest'] text-mobile-body-15 font-medium text-[#323232]">
            {{ specialist.lang?.map((item) => $t(`languages.${item}`)).join(", ") }}
          </span>
        </div>
      </div>
      <div class="flex w-[227px] shrink-0 flex-nowrap items-start gap-[5px] md:hidden">
        <div
          class="flex shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[100px] border border-solid border-[#63845c] pb-[5px] pl-[10px] pr-[10px] pt-[5px]"
        >
          <span class="font-['Onest'] text-mobile-body-14 font-bold text-[#63845c] md:text-subtitle-16">
            {{ specialist.specializations[0].name }}
          </span>
        </div>
        <div
          v-if="specialist.specializations?.length > 1"
          class="flex w-[39px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[100px] border border-solid border-[#63845c] pb-[5px] pl-[10px] pr-[10px] pt-[5px]"
        >
          <span class="font-['Onest'] text-mobile-body-14 font-bold text-[#63845c] md:text-subtitle-16">
            +{{ specialist.specializations?.length - 1 }}
          </span>
        </div>
      </div>
      <span
        class="!hidden shrink-0 basis-auto self-stretch text-left font-['Onest'] text-[24px] font-semibold text-[#63845c] md:!block"
      >
        {{ $t("labels.price", { price: specialist.price }) }}
      </span>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "title": "Specialist Card",
    "experience": "Experience",
    "rating": "Rating",
    "year": "year",
    "owner": "Owner"
  },
  "ru": {
    "title": "Карточка специалиста",
    "experience": "Опыт",
    "rating": "Рейтинг",
    "year": "лет",
    "owner": "Основатель"
  },
  "uz": {
    "title": "Mutaxassis kartasi",
    "experience": "Tajribasi",
    "rating": "Reyting",
    "year": "yil",
    "owner": "Asoschi"
  }
}
</i18n>
