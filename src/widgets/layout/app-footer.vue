<script setup lang="ts">
import { ProfileMenu } from "~/features/profile"
import { AppLanguage, AppThemeSwitcher } from "~/features/layout"
import Logo from "~/shared/assets/Logo.svg"
import AppSectionFluid from "~/widgets/layout/app-section-fluid.vue"
</script>

<template>
  <app-section-fluid class="!bg-[#6f8f6e] py-[10px]">
    <div class="flex items-center justify-between">
      <nuxt-link-locale to="/">
        <logo class="h-[80px] w-[80px]" alt="Logo" />
      </nuxt-link-locale>
      <div class="relative z-[238] flex w-[160px] shrink-0 flex-col flex-nowrap items-start justify-center gap-[10px]">
        <div class="relative z-[239] flex w-[160px] shrink-0 flex-nowrap items-center gap-[20px]">
          <div
            class="relative z-[240] h-[40px] w-[40px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/yPJLFS0Mrn.png)] bg-cover bg-no-repeat"
          ></div>
          <div
            class="relative z-[241] h-[40px] w-[40px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/M0xHPN9iJa.png)] bg-cover bg-no-repeat"
          ></div>
          <div
            class="relative z-[242] h-[40px] w-[40px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/ij44xJ0f0Q.png)] bg-cover bg-no-repeat"
          ></div>
        </div>
      </div>
    </div>
  </app-section-fluid>
  <app-section-fluid class="!bg-[#6f8f6e]">
    <div
      class="mx-auto grid grid-cols-2 items-center justify-between gap-[40px] border-t border-t-[#ffffff20] py-[30px] md:flex md:gap-0 md:py-[60px]"
    >
      <div class="z-[244] col-span-full flex w-[345px] flex-col flex-nowrap items-start gap-[30px]">
        <div
          class="relative z-[245] flex shrink-0 flex-col flex-nowrap items-start justify-center gap-[5px] self-stretch"
        >
          <span
            class="relative z-[246] h-[22px] shrink-0 basis-auto whitespace-nowrap text-left font-['Onest'] text-[17px] font-normal leading-[21.675px] text-[#fff] opacity-80"
          >
            Телефон
          </span>
          <span
            class="relative z-[247] h-[28px] shrink-0 basis-auto whitespace-nowrap text-left font-['Onest'] text-[22px] font-semibold leading-[28px] text-[#fff]"
          >
            +998 91 137 55 16
          </span>
        </div>
        <div
          class="relative z-[248] flex shrink-0 flex-col flex-nowrap items-start justify-center gap-[5px] self-stretch"
        >
          <span
            class="relative z-[249] h-[22px] shrink-0 basis-auto whitespace-nowrap text-left font-['Onest'] text-[17px] font-normal leading-[21.675px] text-[#fff] opacity-80"
          >
            Адрес
          </span>
          <span
            class="subtitle-20 relative z-[250] text-left font-['Onest'] text-[22px] font-semibold leading-[28.05px] text-[#fff]"
          >
            Ташкент, улица Навнихол, проезд 3
          </span>
        </div>
      </div>
      <div class="flex w-[131px] flex-col flex-nowrap items-start gap-[15px]">
        <span class="body-16 relative z-[252] font-['Onest'] text-[20px] font-medium leading-[25.5px] text-[#fff]">
          Специалисты
        </span>
        <span class="body-16 relative z-[253] font-['Onest'] text-[20px] font-medium leading-[25.5px] text-[#fff]">
          Курсы
        </span>
        <span class="body-16 relative z-[254] font-['Onest'] text-[20px] font-medium leading-[25.5px] text-[#fff]">
          О проекте
        </span>
      </div>
      <div class="z-[255] flex w-[142px] flex-col flex-nowrap items-start gap-[15px]">
        <span class="body-16 relative z-[256] font-['Onest'] text-[20px] font-medium leading-[25.5px] text-[#fff]">
          Блог
        </span>
        <span class="body-16 relative z-[257] font-['Onest'] text-[20px] font-medium leading-[25.5px] text-[#fff]">
          Контакты
        </span>
        <span class="body-16 relative z-[258] font-['Onest'] text-[20px] font-medium leading-[25.5px] text-[#fff]">
          Специалистам
        </span>
      </div>
      <div class="z-[259] col-span-full flex w-[224px] flex-col flex-nowrap items-start gap-[15px]">
        <span class="body-16 relative z-[260] font-['Onest'] text-[20px] leading-[25.5px] text-[#fff]">
          Политика конфиденциальности
        </span>
        <span class="body-16 relative z-[261] font-['Onest'] text-[20px] leading-[25.5px] text-[#fff]">
          Пользовательское соглашение
        </span>
      </div>
    </div>
  </app-section-fluid>
  <app-section-fluid class="border-t border-t-[#ffffff20] !bg-[#6f8f6e] py-[30px]">
    <span
      class="block whitespace-nowrap text-left font-['Onest'] text-[18px] font-medium leading-[22.949px] text-[#fff]"
    >
      © 2025 «Душевное Здоровье»
    </span>
  </app-section-fluid>
</template>
