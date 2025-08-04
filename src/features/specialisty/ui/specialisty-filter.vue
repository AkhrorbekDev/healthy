<template>
  <app-section>
    <div
      class="relative z-50 flex flex-nowrap items-center justify-between rounded-[20px] bg-[#fff] p-[12px] md:px-[20px] md:py-[25px]"
    >
      <div class="relative z-[51] hidden w-[953px] shrink-0 flex-nowrap items-center gap-[20px] md:flex">
        <!--        <ui-dropdown class="w-[223px] rounded-[100px] bg-[#f7f7f7] pb-[15px] pl-[20px] pr-[20px] pt-[15px]">-->
        <!--          <ui-dropdown-item>tets</ui-dropdown-item>-->
        <!--          <ui-dropdown-item>tets</ui-dropdown-item>-->
        <!--          <ui-dropdown-item>tets</ui-dropdown-item>-->
        <!--        </ui-dropdown>-->
        <div
          class="relative z-[52] flex w-[223px] shrink-0 flex-nowrap items-center justify-between rounded-[100px] bg-[#f7f7f7] pb-[15px] pl-[20px] pr-[20px] pt-[15px]"
        >
          <span
            class="relative z-[53] h-[23px] shrink-0 basis-auto text-left font-['Onest'] text-[18px] font-normal text-[#323232]"
          >
            {{ t("filters.specialization") }}
          </span>
          <div
            class="relative z-[54] h-[24px] w-[24px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/yim28KBcKT.png)] bg-cover bg-no-repeat"
          ></div>
        </div>
        <div
          class="relative z-[55] flex w-[223px] shrink-0 flex-nowrap items-center justify-between rounded-[100px] bg-[#f7f7f7] pb-[15px] pl-[20px] pr-[20px] pt-[15px]"
        >
          <span
            class="relative z-[56] h-[23px] shrink-0 basis-auto text-left font-['Onest'] text-[18px] font-normal text-[#323232]"
          >
            {{ t("filters.gender") }}
          </span>
          <div
            class="relative z-[57] h-[24px] w-[24px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/LoNvKKhNrc.png)] bg-cover bg-no-repeat"
          ></div>
        </div>
        <div
          class="relative z-[58] flex w-[223px] shrink-0 flex-nowrap items-center justify-between rounded-[100px] bg-[#f7f7f7] pb-[15px] pl-[20px] pr-[20px] pt-[15px]"
        >
          <span
            class="relative z-[59] h-[23px] shrink-0 basis-auto text-left font-['Onest'] text-[18px] font-normal text-[#323232]"
          >
            {{ t("filters.language") }}
          </span>
          <div
            class="relative z-[60] h-[24px] w-[24px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/ivtShw9r3o.png)] bg-cover bg-no-repeat"
          ></div>
        </div>
        <div
          class="relative z-[61] flex w-[223px] shrink-0 flex-nowrap items-center justify-between rounded-[100px] bg-[#f7f7f7] pb-[15px] pl-[20px] pr-[20px] pt-[15px]"
        >
          <span
            class="relative z-[62] h-[23px] shrink-0 basis-auto text-left font-['Onest'] text-[18px] font-normal text-[#323232]"
          >
            {{ t("filters.city") }}
          </span>
          <div
            class="relative z-[63] h-[24px] w-[24px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/sTy2qLn5Qn.png)] bg-cover bg-no-repeat"
          ></div>
        </div>
      </div>
      <div
        class="relative z-[64] flex w-auto shrink-0 flex-nowrap items-center gap-[12px] rounded-[100px] bg-[#f7f7f7] p-[12px] md:hidden md:w-[228px] md:px-[20px] md:py-[15px]"
      >
        <span class="body-18 body-15 font-['Onest'] font-medium text-[#323232]">
          {{ t("filters.labels") }}
        </span>
        <div
          class="relative z-[66] h-[24px] w-[24px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/XOHQgKiA9S.png)] bg-cover bg-no-repeat"
        ></div>
      </div>
      <div
        class="relative z-[64] flex w-auto shrink-0 flex-nowrap items-center gap-[12px] rounded-[100px] bg-[#f7f7f7] p-[12px] md:w-[228px] md:px-[20px] md:py-[15px]"
      >
        <span class="body-18 body-15 font-['Onest'] font-medium text-[#323232]">
          {{ t("filters.rating") }}
        </span>
        <div
          class="relative z-[66] h-[24px] w-[24px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/XOHQgKiA9S.png)] bg-cover bg-no-repeat"
        ></div>
      </div>
    </div>
  </app-section>
</template>

<script lang="ts" setup>
import AppSection from "~/widgets/layout/app-section.vue"

const { t } = useI18n({ useScope: "local" })
</script>

<i18n>
{
  "ru": {
    "filters": {
      "labels": "Фильтр",
      "specialization": "Специализация",
      "gender": "Пол специалиста",
      "language": "Язык",
      "city": "Город",
      "rating": "Высокий рейтинг"
    }
  },
  "uz": {
    "filters": {
      "labels": "Filtr",
      "specialization": "Mutaxassislik",
      "gender": "Mutaxassis jinsi",
      "language": "Til",
      "city": "Shahar",
      "rating": "Yuqori reyting"
    }
  }
}
</i18n>
