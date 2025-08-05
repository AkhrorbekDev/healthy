<script setup lang="ts">
import AppSectionFluid from "~/widgets/layout/app-section-fluid.vue"

interface IProps {
  placeCount: number
  reservedCount: number
}

defineProps<IProps>()
</script>

<template>
  <app-section-fluid class="!bg-[#F0F4F1] py-[50px] md:py-[120px]">
    <div class="mx-auto flex flex-col items-center">
      <div class="mx-auto flex w-fit flex-nowrap items-center">
        <template v-for="n in placeCount" :key="n">
          <div
            v-if="n <= reservedCount"
            class="flex h-[45.63px] w-[45.63px] items-center justify-center rounded-[40px] border border-solid border-[#e0e5e3] bg-[#fff] md:h-[80px] md:w-[80px]"
            :class="{
              '-ml-[14.30px] md:-ml-[25px]': n > 1
            }"
          >
            <icon class="h-[17.11] w-[17.11] text-green-500 md:h-[30px] md:w-[30px]" name="h-icon:checkmark"></icon>
          </div>
          <div
            v-else
            class="flex h-[45.63px] w-[45.63px] items-center justify-center rounded-[40px] border border-solid border-[#fff] bg-[#63845c] md:h-[80px] md:w-[80px]"
            :class="{
              '-ml-[14.30px] md:-ml-[25px]': n > 0
            }"
          ></div>
        </template>
      </div>
      <div class="mt-[20px] flex flex-col flex-nowrap items-center gap-[5px] md:mt-[40px] md:gap-[8px]">
        <span class="font-['Onest'] text-mobile-headline-2 font-semibold text-[#323232] md:text-headline-1">
          7 из 10 мест осталось
        </span>
        <span class="font-['Onest'] text-mobile-body-15 font-medium text-[#848484] opacity-80 md:text-body-20">
          Успейте забронировать место на курс
        </span>
      </div>
      <ui-button class="mt-[30px]">Записаться на курс</ui-button>
    </div>
  </app-section-fluid>
</template>

<style scoped></style>
