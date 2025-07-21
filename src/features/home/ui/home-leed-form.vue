<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import AppSectionFluid from "~/widgets/layout/app-section-fluid.vue"
</script>

<template>
  <app-section-fluid
    class="bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/ornGaxc2yP.png)] bg-[length:100%_100%] bg-no-repeat py-[40px] md:py-[120px]"
  >
    <div class="flex flex-col gap-[40px] overflow-hidden md:flex-row md:items-center md:justify-between">
      <div class="z-[217] flex flex-col flex-nowrap items-start gap-[30px] md:w-[30.63%]">
        <div class="relative z-[218] flex shrink-0 flex-col flex-nowrap items-start gap-[15px] self-stretch">
          <span class="headline-1 text-left font-['Onest'] font-semibold text-[#fff]">
            Cделайте шаг к душевному здоровью
          </span>
          <span class="body-18 text-left font-['Onest'] text-[20px] font-normal leading-[25.5px] text-[#fff]">
            Запишитесь на консультацию и мы поможем решить ваши проблемы
          </span>
        </div>
        <div
          class="relative z-[221] mt-0 flex shrink-0 flex-nowrap items-center gap-[8px] self-stretch border-b border-solid border-t-[#ffffff20] pb-5 md:border-b-0 md:border-t md:pb-0 md:pt-[30px]"
        >
          <div
            class="relative z-[222] h-[22px] w-[22px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/07pV8kaFLW.png)] bg-cover bg-no-repeat"
          ></div>
          <div
            class="relative z-[223] w-[184px] shrink-0 whitespace-nowrap text-left font-['Onest'] text-[22px] font-semibold leading-[28px]"
          >
            <span class="subtitle-20 font-['Onest'] text-[22px] font-semibold leading-[28.05px] text-[#fff]">
              +998 91 137 55 16
            </span>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col flex-nowrap items-start gap-[40px] md:mr-[121px] md:w-[345px]">
        <div class="relative z-[208] flex shrink-0 flex-col flex-nowrap items-start gap-[40px] self-stretch">
          <div
            class="relative z-[209] flex shrink-0 flex-nowrap items-start gap-[10px] self-stretch border-t border-solid border-t-[#fff] pb-[15px] pl-0 pr-0 pt-0"
          >
            <span
              class="relative z-[210] h-[26px] shrink-0 basis-auto whitespace-nowrap text-left font-['Onest'] text-[20px] font-normal leading-[25.5px] text-[#fff]"
            >
              ФИО
            </span>
          </div>
          <div
            class="relative z-[211] flex shrink-0 flex-nowrap items-start gap-[10px] self-stretch border-t border-solid border-t-[#fff] pb-[15px] pl-0 pr-0 pt-0"
          >
            <span
              class="relative z-[212] h-[26px] shrink-0 basis-auto whitespace-nowrap text-left font-['Onest'] text-[20px] font-normal leading-[25.5px] text-[#fff]"
            >
              Номер телефона
            </span>
          </div>
          <div
            class="relative z-[213] flex shrink-0 flex-nowrap items-start gap-[10px] self-stretch border-t border-solid border-t-[#fff] pb-[15px] pl-0 pr-0 pt-0"
          >
            <span
              class="relative z-[214] h-[26px] shrink-0 basis-auto whitespace-nowrap text-left font-['Onest'] text-[20px] font-normal leading-[25.5px] text-[#fff]"
            >
              Что вы хотите изменить?
            </span>
          </div>
        </div>
        <ui-button class="w-full" label="Записаться" />
      </div>
    </div>
  </app-section-fluid>
</template>

<style scoped></style>
