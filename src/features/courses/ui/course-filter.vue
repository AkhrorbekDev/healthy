<template>
  <app-section>
    <div class="mt-[40px] flex flex-nowrap items-center gap-[10px] overflow-auto">
      <div
        class="flex cursor-pointer items-center gap-[8px] rounded-[100px] border border-solid px-[15px] py-[10px] md:px-[20px] md:py-[12px]"
        :class="{
          'border-[#63845c] bg-[#63845c] text-[#fff]': !model,
          'border-[#e0e5e3] text-[#323232]': model
        }"
        @click="change(undefined)"
      >
        <span class="text-nowrap text-mobile-body-15 font-medium md:text-body-18">Все курсы</span>
      </div>
      <div
        class="flex cursor-pointer items-center gap-[8px] rounded-[100px] border border-solid px-[15px] py-[10px] md:px-[20px] md:py-[12px]"
        :class="{
          'border-[#63845c] bg-[#63845c] text-[#fff]': model === 'specialization',
          'border-[#e0e5e3] text-[#323232]': model !== 'specialization'
        }"
        @click="change('specialization')"
      >
        <span class="text-nowrap text-mobile-body-15 font-medium md:text-body-18">Для специалистов</span>
      </div>
      <div
        class="flex cursor-pointer items-center gap-[8px] rounded-[100px] border border-solid px-[15px] py-[10px] md:px-[20px] md:py-[12px]"
        :class="{
          'border-[#63845c] bg-[#63845c] text-[#fff]': model === 'for_all',
          'border-[#e0e5e3] text-[#323232]': model !== 'for_all'
        }"
        @click="change('for_all')"
      >
        <span class="text-nowrap text-mobile-body-15 font-medium md:text-body-18">Для всех</span>
      </div>
    </div>
  </app-section>
</template>

<script lang="ts" setup>
import AppSection from "~/widgets/layout/app-section.vue"

const { t } = useI18n({ useScope: "local" })

const model = defineModel<string | undefined>()

const change = (value?: string) => {
  model.value = value
}
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
