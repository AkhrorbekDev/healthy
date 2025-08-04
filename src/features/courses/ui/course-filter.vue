<template>
  <app-section>
    <div class="mt-[40px] flex flex-nowrap items-center gap-[10px] overflow-auto">
      <div
        class="flex items-center gap-[8px] rounded-[100px] border border-solid border-[#63845c] bg-[#63845c] px-[15px] py-[10px] md:px-[20px] md:py-[12px]"
      >
        <span class="text-nowrap text-mobile-body-15 font-medium text-[#fff] md:text-body-18">Все курсы</span>
      </div>
      <div
        class="flex items-center gap-[8px] rounded-[100px] border border-solid border-[#e0e5e3] px-[15px] py-[10px] md:px-[20px] md:py-[12px]"
      >
        <span class="text-nowrap text-mobile-body-15 font-medium text-[#323232] md:text-body-18">Для специалистов</span>
      </div>
      <div
        class="flex items-center gap-[8px] rounded-[100px] border border-solid border-[#e0e5e3] px-[15px] py-[10px] md:px-[20px] md:py-[12px]"
      >
        <span class="text-nowrap text-mobile-body-15 font-medium text-[#323232] md:text-body-18">Для всех</span>
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
