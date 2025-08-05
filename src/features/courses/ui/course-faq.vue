<script lang="ts" setup>
import AppSection from "~/widgets/layout/app-section.vue"
</script>

<template>
  <app-section class="my-[60px] md:my-[120px]">
    <div class="mb-[20px] md:mb-[40px]">
      <span class="section-title">Часто задаваемые вопросы</span>
    </div>

    <ui-accordion class="rounded-b-none border-b-0">
      <template #header>
        <span
          class="font-['Onest'] text-[22px] text-mobile-subtitle-18 font-semibold text-[#323232] md:text-subtitle-22"
        >
          Что делать, если я пропущу одно из занятий?
        </span>
      </template>
      <div class="p-[15px] md:p-[25px]">
        <span class="font-['Onest'] text-mobile-body-15 font-normal text-[#585958] md:text-body-18">
          Вы сможете получить краткий конспект, материалы занятия и при необходимости — индивидуальную консультацию с
          ментором, чтобы восполнить пропущенное. Мы поддерживаем участников на каждом этапе
        </span>
      </div>
    </ui-accordion>
    <ui-accordion class="rounded-none border-b-0">
      <template #header>
        <span
          class="font-['Onest'] text-[22px] text-mobile-subtitle-18 font-semibold text-[#323232] md:text-subtitle-22"
        >
          Нужно ли иметь психологическое образование, чтобы пройти курс?
        </span>
      </template>
      <div class="p-[15px] md:p-[25px]">
        <span class="font-['Onest'] text-mobile-body-15 font-normal text-[#585958] md:text-body-18">
          Вы сможете получить краткий конспект, материалы занятия и при необходимости — индивидуальную консультацию с
          ментором, чтобы восполнить пропущенное. Мы поддерживаем участников на каждом этапе
        </span>
      </div>
    </ui-accordion>
    <ui-accordion class="rounded-none border-b-0">
      <template #header>
        <span
          class="font-['Onest'] text-[22px] text-mobile-subtitle-18 font-semibold text-[#323232] md:text-subtitle-22"
        >
          Сколько человек в группе и какой формат общения с ментором?
        </span>
      </template>
      <div class="p-[15px] md:p-[25px]">
        <span class="font-['Onest'] text-mobile-body-15 font-normal text-[#585958] md:text-body-18">
          Вы сможете получить краткий конспект, материалы занятия и при необходимости — индивидуальную консультацию с
          ментором, чтобы восполнить пропущенное. Мы поддерживаем участников на каждом этапе
        </span>
      </div>
    </ui-accordion>
    <ui-accordion class="rounded-none border-b-0">
      <template #header>
        <span
          class="font-['Onest'] text-[22px] text-mobile-subtitle-18 font-semibold text-[#323232] md:text-subtitle-22"
        >
          Будут ли практические задания между занятиями?
        </span>
      </template>
      <div class="p-[15px] md:p-[25px]">
        <span class="font-['Onest'] text-mobile-body-15 font-normal text-[#585958] md:text-body-18">
          Вы сможете получить краткий конспект, материалы занятия и при необходимости — индивидуальную консультацию с
          ментором, чтобы восполнить пропущенное. Мы поддерживаем участников на каждом этапе
        </span>
      </div>
    </ui-accordion>
    <ui-accordion class="rounded-t-none">
      <template #header>
        <span
          class="font-['Onest'] text-[22px] text-mobile-subtitle-18 font-semibold text-[#323232] md:text-subtitle-22"
        >
          Что я получу по завершении курса — сертификат, рекомендации?
        </span>
      </template>
      <div class="p-[15px] md:p-[25px]">
        <span class="font-['Onest'] text-mobile-body-15 font-normal text-[#585958] md:text-body-18">
          Вы сможете получить краткий конспект, материалы занятия и при необходимости — индивидуальную консультацию с
          ментором, чтобы восполнить пропущенное. Мы поддерживаем участников на каждом этапе
        </span>
      </div>
    </ui-accordion>
  </app-section>
</template>

<style lang="css">
.circle {
  transition: stroke-dashoffset 1s ease-in-out;
}
</style>
