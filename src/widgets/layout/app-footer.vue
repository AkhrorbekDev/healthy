<script setup lang="ts">
import Logo from "~/shared/assets/Logo.svg"
import AppSectionFluid from "~/widgets/layout/app-section-fluid.vue"
import { useSiteSettingsStore } from "~/entities/site-settings/site-settings.store"

const siteSettingsStore = useSiteSettingsStore()
const { siteSettings } = storeToRefs(siteSettingsStore)
</script>

<template>
  <app-section-fluid class="!bg-[#6f8f6e] py-[10px]">
    <div class="flex items-center justify-between">
      <nuxt-link-locale to="/">
        <logo class="h-[70px] w-[70px] text-white md:h-[80px] md:w-[80px]" alt="Logo" />
      </nuxt-link-locale>
      <div class="relative flex items-center gap-[20px] md:w-[160px]">
        <a
          class="h-[30px] w-[30px] shrink-0 cursor-pointer overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/yPJLFS0Mrn.png)] bg-cover bg-no-repeat md:h-[40px] md:w-[40px]"
          target="_blank"
          :href="siteSettings.value?.telegram"
        ></a>
        <a
          class="shrink-0 cursor-pointer overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/M0xHPN9iJa.png)] bg-cover bg-no-repeat md:h-[40px] md:w-[40px]"
          target="_blank"
          :href="siteSettings.value?.facebook"
        ></a>
        <a
          class="h-[30px] w-[30px] shrink-0 cursor-pointer bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/ij44xJ0f0Q.png)] bg-cover bg-no-repeat md:h-[40px] md:w-[40px]"
          target="_blank"
          :href="siteSettings.value?.instagram"
        ></a>
      </div>
    </div>
  </app-section-fluid>
  <app-section-fluid class="border-t border-t-[#ffffff20] !bg-[#6f8f6e]">
    <div
      class="mx-auto grid grid-cols-2 items-center justify-between gap-[40px] py-[30px] md:flex md:gap-0 md:py-[60px]"
    >
      <div class="col-span-full flex w-[345px] flex-col flex-nowrap items-start gap-[20px] md:gap-[30px]">
        <div class="relative flex shrink-0 flex-col flex-nowrap items-start justify-center gap-[5px] self-stretch">
          <span class="text-mobile-body-14 font-normal text-[#fff] opacity-80 md:text-body-17">Телефон</span>
          <span class="text-mobile-subtitle-18 font-semibold text-[#fff] md:text-subtitle-22">
            {{ siteSettings.value?.phone }}
          </span>
        </div>
        <div class="relative flex shrink-0 flex-col flex-nowrap items-start justify-center gap-[5px] self-stretch">
          <span class="text-mobile-body-14 font-normal text-[#fff] opacity-80 md:text-body-17">Адрес</span>
          <a
            class="text-mobile-subtitle-18 font-semibold text-[#fff] md:text-subtitle-22"
            target="_blank"
            :href="siteSettings.value?.address_url"
          >
            {{ siteSettings.value?.address }}
          </a>
        </div>
      </div>
      <div class="flex w-[131px] flex-col flex-nowrap items-start gap-[10px] md:gap-[15px]">
        <span class="relative font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-[20px] md:font-medium">
          Специалисты
        </span>
        <span class="relative font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-[20px] md:font-medium">
          Курсы
        </span>
        <span class="relative font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-[20px] md:font-medium">
          О проекте
        </span>
      </div>
      <div class="flex w-[142px] flex-col flex-nowrap items-start gap-[10px] md:gap-[15px]">
        <span class="relative font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-[20px] md:font-medium">
          Блог
        </span>
        <span class="relative font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-[20px] md:font-medium">
          Контакты
        </span>
        <span class="relative font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-[20px] md:font-medium">
          Специалистам
        </span>
      </div>
      <div class="col-span-full flex flex-col flex-nowrap items-start gap-[10px] md:gap-[15px]">
        <span class="relative font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-[20px] md:font-medium">
          Политика конфиденциальности
        </span>
        <span class="relative font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-[20px] md:font-medium">
          Пользовательское соглашение
        </span>
      </div>
    </div>
  </app-section-fluid>
  <app-section-fluid class="border-t border-t-[#ffffff20] !bg-[#6f8f6e] pb-[108px] pt-[20px] md:py-[30px]">
    <span class="text-mobile-body-14 font-medium text-[#fff] md:text-body-18">© 2025 «Душевное Здоровье»</span>
  </app-section-fluid>
</template>
