<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import HTag from "~/features/base/h-tag.vue"
</script>

<template>
  <app-section class="py-[40px] md:py-[60px]">
    <span class="section-title mb-[20px] block md:mb-[40px]">Программа курса</span>
    <ui-accordion>
      <template #header>
        <div>
          <div class="mb-2 flex items-center gap-2 md:mb-[10px]">
            <h-tag class="min-w-[30px] md:!px-[10px] md:!py-[5px] md:!text-subtitle-16">Модуль 1</h-tag>
            <h-tag class="min-w-[30px] md:!px-[10px] md:!py-[5px] md:!text-subtitle-16">Месяц 1</h-tag>
          </div>
          <h3
            class="font-['Onest'] text-mobile-subtitle-20 font-semibold text-[#323232] md:mt-[10px] md:text-headline-4"
          >
            От осознания к действию
          </h3>
        </div>
      </template>
      <template #default>
        <div class="course-module__item">
          <div
            class="z-[150] flex flex-col flex-nowrap items-start gap-[8px] border-t border-solid border-t-[#e7e7e7] bg-[#fff] px-[15px] py-[12px] md:px-[30px] md:py-[15px]"
          >
            <h6>Первое занятие</h6>
            <ul>
              <li>знакомство</li>
              <li>вводная часть о природе стресса</li>
              <li>экспресс-диагностика уровня стресса у участников</li>
            </ul>
          </div>
          <div
            class="z-[150] flex flex-col flex-nowrap items-start gap-[8px] border-t border-solid border-t-[#e7e7e7] bg-[#fff] px-[15px] py-[12px] md:px-[30px] md:py-[15px]"
          >
            <h6>Первое занятие</h6>
            <ul>
              <li>знакомство</li>
              <li>знакомство</li>
              <li>знакомство</li>
              <li>знакомство</li>
            </ul>
          </div>
        </div>
      </template>
    </ui-accordion>
    <div class="mt-[15px] flex w-full items-center justify-center md:mt-[46px]">
      <ui-button class="!mx-auto min-w-[223px] !border-green-500 !text-green-500" variant="outline">
        Все модули
      </ui-button>
    </div>
  </app-section>
</template>

<style scoped>
.course-module__item {
  h6 {
    @apply font-['Onest'] text-mobile-subtitle-18 font-semibold text-green-500 md:text-subtitle-22;
  }

  ul {
    @apply list-disc pl-6;
  }

  ul li,
  p {
    @apply font-['Onest'] text-mobile-body-14 font-normal text-[#585958] md:text-body-18;
  }
}
</style>
