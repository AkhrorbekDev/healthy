<script setup lang="ts">
import AppSectionFluid from "~/widgets/layout/app-section-fluid.vue"
</script>

<template>
  <app-section-fluid class="!bg-[#6f8f6e] pb-[40px] pt-[10px] md:py-[80px]">
    <div class="flex flex-col items-start gap-[18px] md:flex-row md:gap-x-[40px]">
      <div class="grid grid-cols-1 md:min-w-[832px] md:grid-cols-2">
        <div
          class="flex flex-row flex-nowrap items-start gap-[20px] border-b border-solid border-b-[rgba(255,255,255,0.2)] border-r-[rgba(255,255,255,0.2)] pb-[20px] pt-[20px] md:flex-col md:border-r md:pb-[30px] md:pt-0"
        >
          <icon class="min-h-[30px] min-w-[30px] text-white md:h-[45px] md:w-[45px]" name="h-icon:calendar"></icon>
          <div class="flex flex-col flex-nowrap items-start gap-[5px] self-stretch md:gap-[8px]">
            <span class="font-['Onest'] text-mobile-body-15 font-medium text-[rgba(255,255,255,0.7)] md:text-body-17">
              Даты проведения
            </span>
            <span
              class="font-['Onest'] text-mobile-subtitle-16 font-bold text-[#fff] md:text-subtitle-24 md:font-semibold"
            >
              10 июля – 10 октября 2025 (каждую среду и пятницу)
            </span>
          </div>
        </div>
        <div
          class="flex flex-row flex-nowrap items-start gap-[20px] border-b border-solid border-b-[rgba(255,255,255,0.2)] pb-[20px] pt-[20px] md:flex-col md:pb-[30px] md:pl-[30px] md:pt-0"
        >
          <icon class="min-h-[30px] min-w-[30px] text-white md:h-[45px] md:w-[45px]" name="h-icon:location"></icon>
          <div class="flex flex-col flex-nowrap items-start gap-[5px] self-stretch md:gap-[8px]">
            <span
              class="font-['Onest'] text-mobile-body-15 font-normal text-[rgba(255,255,255,0.7)] md:text-body-17 md:font-medium"
            >
              Место проведения
            </span>
            <span
              class="font-['Onest'] text-mobile-subtitle-16 font-bold text-[#fff] md:text-subtitle-24 md:font-semibold"
            >
              г. Ташкент, ул. Навнихол, 3-й проезд, д.7, учебный зал №5
            </span>
          </div>
        </div>
        <div
          class="flex flex-row flex-nowrap items-start gap-[20px] border-b border-solid border-b-[rgba(255,255,255,0.2)] border-r-[rgba(255,255,255,0.2)] py-[20px] md:flex-col md:border-r md:py-[30px]"
        >
          <icon class="min-h-[30px] min-w-[30px] text-white md:h-[45px] md:w-[45px]" name="h-icon:group"></icon>
          <div class="flex flex-col flex-nowrap items-start gap-[5px] self-stretch md:gap-[8px]">
            <span
              class="font-['Onest'] text-mobile-body-15 font-normal text-[rgba(255,255,255,0.7)] md:text-body-17 md:font-medium"
            >
              Количество мест
            </span>
            <span
              class="font-['Onest'] text-mobile-subtitle-16 font-bold text-[#fff] md:text-subtitle-24 md:font-semibold"
            >
              10 мест
              <br />
              <span class="text-mobile-body-14 font-normal md:text-body-16">*предварительная запись</span>
            </span>
          </div>
        </div>
        <div
          class="flex flex-row flex-nowrap items-start gap-[20px] border-b border-solid border-b-[rgba(255,255,255,0.2)] py-[20px] md:flex-col md:py-[30px] md:pl-[30px]"
        >
          <icon class="min-h-[30px] min-w-[30px] text-white md:h-[45px] md:w-[45px]" name="h-icon:card"></icon>
          <div class="flex flex-col flex-nowrap items-start gap-[5px] self-stretch md:gap-[8px]">
            <span
              class="font-['Onest'] text-mobile-body-15 font-normal text-[rgba(255,255,255,0.7)] md:text-body-17 md:font-medium"
            >
              Стоимость за весь курс
            </span>
            <span
              class="font-['Onest'] text-mobile-subtitle-16 font-bold text-[#fff] md:text-subtitle-24 md:font-semibold"
            >
              7 000 000 сум
              <br />
              <span class="text-mobile-body-14 font-normal md:text-body-16">*возможна оплата по месяцам</span>
            </span>
          </div>
        </div>
        <div
          class="flex flex-row flex-nowrap items-start gap-[20px] border-b border-solid border-b-[rgba(255,255,255,0.2)] border-r-[rgba(255,255,255,0.2)] py-[20px] md:flex-col md:border-r md:py-[30px]"
        >
          <icon class="min-h-[30px] min-w-[30px] text-white md:h-[45px] md:w-[45px]" name="h-icon:clock"></icon>
          <div class="flex flex-col flex-nowrap items-start gap-[5px] self-stretch md:gap-[8px]">
            <span
              class="font-['Onest'] text-mobile-body-15 font-normal text-[rgba(255,255,255,0.7)] md:text-body-17 md:font-medium"
            >
              Время проведения
            </span>
            <span
              class="font-['Onest'] text-mobile-subtitle-16 font-bold text-[#fff] md:text-subtitle-24 md:font-semibold"
            >
              с 17:00 до 19:00
            </span>
          </div>
        </div>
        <div
          class="flex flex-row flex-nowrap items-start gap-[20px] border-solid border-b-[rgba(255,255,255,0.2)] py-[20px] md:flex-col md:border-b md:py-[30px] md:pl-[30px]"
        >
          <icon class="min-h-[30px] min-w-[30px] text-white md:h-[45px] md:w-[45px]" name="h-icon:phone "></icon>
          <div class="flex flex-col flex-nowrap items-start gap-[5px] self-stretch md:gap-[8px]">
            <span
              class="font-['Onest'] text-mobile-body-15 font-normal text-[rgba(255,255,255,0.7)] md:text-body-17 md:font-medium"
            >
              По вопросам курса
            </span>
            <span
              class="font-['Onest'] text-mobile-subtitle-16 font-bold text-[#fff] md:text-subtitle-24 md:font-semibold"
            >
              +998 90 123 45 67
              <br />
              name@domain.com
            </span>
          </div>
        </div>
        <div class="col-span-full mt-[30px] !hidden md:!block">
          <ui-button class="!bg-white !text-green-500">Записаться на курс</ui-button>
        </div>
      </div>
      <iframe
        class="h-[200px] w-full rounded-[20px] md:h-[687px]"
        src="https://yandex.uz/maps/-/CHdr5MYD"
        width="560"
        height="400"
        frameborder="1"
        allowfullscreen="true"
        style="position: relative"
      ></iframe>
    </div>
  </app-section-fluid>
</template>

<style scoped></style>
