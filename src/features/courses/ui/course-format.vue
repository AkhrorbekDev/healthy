<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import HTag from "~/features/base/h-tag.vue"
</script>

<template>
  <app-section class="py-[40px] md:py-[60px]">
    <div class="z-[111] flex flex-col items-start gap-[10px] md:gap-[15px]">
      <span class="font-['Onest'] text-mobile-headline-1 font-semibold text-[#323232] md:text-headline-2">
        Формат проведения и требования
      </span>
      <span class="font-['Onest'] text-mobile-body-15 font-normal text-[#585958] md:text-body-20">
        Специальной подготовки не требуется. Достаточно желание работать над собой и готовность выполнять практические
        упражнения. При себе иметь удобную одежду и блокнот.
      </span>
    </div>
    <div class="z-[114] mt-[30px] grid grid-cols-1 gap-[10px] md:mt-[40px] md:grid-cols-4 md:gap-[20px]">
      <div
        class="flex h-[209px] flex-col items-start justify-between rounded-[20px] bg-[#fff] p-[15px] md:h-[260px] md:p-[20px]"
      >
        <div class="overflow-hidden">
          <icon class="h-[40px] w-[40px] text-xl !text-green-500 md:h-[45px] md:w-[45px]" name="h-icon:offline" />
        </div>
        <div class="flex flex-col items-start gap-[8px]">
          <span class="z-[119] font-['Onest'] text-mobile-subtitle-20 font-semibold text-[#323232] md:text-subtitle-24">
            Оффлайн
          </span>
          <span
            class="z-[120] font-['Onest'] text-[17px] text-mobile-body-15 font-normal text-[#848484] md:text-body-17"
          >
            Курс проходит в формате живых групповых занятий
          </span>
        </div>
      </div>
      <div
        class="z-[121] flex h-[209px] flex-col items-start justify-between rounded-[20px] bg-[#fff] p-[15px] md:h-[260px] md:p-[20px]"
      >
        <div class="overflow-hidden">
          <icon class="h-[40px] w-[40px] text-xl !text-green-500 md:h-[45px] md:w-[45px]" name="h-icon:group" />
        </div>
        <div class="z-[123] flex flex-col items-start gap-[8px]">
          <span class="z-[124] font-['Onest'] text-mobile-subtitle-20 font-semibold text-[#323232] md:text-subtitle-24">
            10 человек
          </span>
          <span
            class="z-[125] font-['Onest'] text-[17px] text-mobile-body-15 font-normal text-[#848484] md:text-body-17"
          >
            Группа до 10 человек, что обеспечивает комфортную атмосферу и внимание каждому
          </span>
        </div>
      </div>
      <div
        class="z-[126] flex h-[209px] flex-col items-start justify-between rounded-[20px] bg-[#fff] p-[15px] md:h-[260px] md:p-[20px]"
      >
        <div class="overflow-hidden">
          <icon class="h-[40px] w-[40px] text-xl !text-green-500 md:h-[45px] md:w-[45px]" name="h-icon:practice" />
        </div>
        <div class="z-[128] flex flex-col items-start gap-[8px]">
          <span
            class="z-[129] h-[29px] basis-auto whitespace-nowrap text-left font-['Onest'] font-semibold text-[#323232]"
          >
            70% практика
          </span>
          <span
            class="z-[130] font-['Onest'] text-[17px] text-mobile-body-15 font-normal text-[#848484] md:text-body-17"
          >
            Ролевые упражнения, обсуждения, домашние задания
          </span>
        </div>
      </div>
      <div
        class="z-[131] flex h-[209px] flex-col items-start justify-between rounded-[20px] bg-[#fff] p-[15px] md:h-[260px] md:p-[20px]"
      >
        <div class="overflow-hidden">
          <icon class="h-[40px] w-[40px] text-xl !text-green-500 md:h-[45px] md:w-[45px]" name="h-icon:book" />
        </div>
        <div class="z-[133] flex flex-col items-start gap-[8px]">
          <span class="z-[134] font-['Onest'] text-mobile-subtitle-20 font-semibold text-[#323232] md:text-subtitle-24">
            30% теория
          </span>
          <span
            class="z-[135] font-['Onest'] text-[17px] text-mobile-body-15 font-normal text-[#848484] md:text-body-17"
          >
            Чёткие концепции и база для практики
          </span>
        </div>
      </div>
    </div>
  </app-section>
</template>

<style scoped></style>
