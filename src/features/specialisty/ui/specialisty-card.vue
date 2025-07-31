<template>
  <div
    class="flex w-full flex-col flex-nowrap items-start gap-[20px] rounded-[20px] bg-[#fff] p-[15px] md:flex-row md:p-[20px]"
  >
    <div class="flex items-start gap-[15px]">
      <img
        class="h-[137px] w-[119px] rounded-[10px] md:h-[137px] md:w-[269px]"
        src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/KFg7SVLtA0.png"
        alt=""
      />
      <div class="flex h-full flex-col justify-between md:hidden">
        <span class="text-mobile-subtilte-20 overflow-hidden text-left font-['Onest'] font-semibold text-[#323232]">
          Ахмедов Санджар Акбарович
        </span>
        <span class="text-left font-['Onest'] text-mobile-body-14 font-semibold text-[#63845c]">от 200 000 сум</span>
      </div>
    </div>
    <div class="flex w-full flex-col flex-nowrap items-start gap-[15px] md:gap-[25px]">
      <div
        class="!hidden shrink-0 flex-col flex-nowrap items-start gap-[10px] self-stretch border-b border-solid border-b-[#e7e7e7] pb-[25px] pl-0 pr-0 pt-0 md:flex"
      >
        <span class="overflow-hidden text-left font-['Onest'] text-subtitle-24 font-semibold text-[#323232]">
          Ахмедов Санджар Акбарович
        </span>
        <div class="flex w-[227px] shrink-0 flex-nowrap items-start gap-[5px]">
          <div
            class="flex w-[183px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[100px] border border-solid border-[#63845c] pb-[5px] pl-[10px] pr-[10px] pt-[5px]"
          >
            <span class="font-['Onest'] text-[16px] text-subtitle-16 font-bold text-[#63845c]">врач-психотерапевт</span>
          </div>
          <div
            class="flex w-[39px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[100px] border border-solid border-[#63845c] pb-[5px] pl-[10px] pr-[10px] pt-[5px]"
          >
            <span class="font-['Onest'] text-[16px] text-subtitle-16 font-bold text-[#63845c]">+2</span>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col flex-nowrap items-start gap-[8px] self-stretch border-b border-solid border-b-[#e7e7e7] pb-[15px] pl-0 pr-0 pt-0 md:pb-[25px]"
      >
        <div class="flex shrink-0 flex-nowrap items-center gap-[8px]">
          <icon class="text-[18px] text-green-500" name="h-icon:achieve"></icon>
          <span class="text-mobile-body-15 font-medium text-[#323232] md:text-body-17">Опыт: 37 лет</span>
        </div>
        <div class="flex shrink-0 flex-nowrap items-center gap-[8px]">
          <icon class="text-[18px] text-green-500" name="h-icon:location"></icon>

          <span class="text-mobile-body-15 font-medium text-[#323232] md:text-body-17">Рейтинг: 5.0</span>
        </div>
        <div class="flex shrink-0 flex-nowrap items-center gap-[8px]">
          <icon class="text-[18px] text-green-500" name="h-icon:language"></icon>

          <span class="text-mobile-body-15 font-medium text-[#323232] md:text-body-17">Ташкент</span>
        </div>
        <div class="flex flex-nowrap items-center gap-[8px] self-stretch">
          <icon class="text-[18px] text-green-500" name="h-icon:achieve"></icon>

          <span class="text-left font-['Onest'] text-mobile-body-15 font-medium text-[#323232]">
            Русский, Узбекский
          </span>
        </div>
      </div>
      <div class="flex w-[227px] shrink-0 flex-nowrap items-start gap-[5px] md:hidden">
        <div
          class="flex shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[100px] border border-solid border-[#63845c] pb-[5px] pl-[10px] pr-[10px] pt-[5px]"
        >
          <span class="font-['Onest'] text-mobile-body-14 font-bold text-[#63845c] md:text-subtitle-16">
            врач-психотерапевт
          </span>
        </div>
        <div
          class="flex w-[39px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[100px] border border-solid border-[#63845c] pb-[5px] pl-[10px] pr-[10px] pt-[5px]"
        >
          <span class="font-['Onest'] text-mobile-body-14 font-bold text-[#63845c] md:text-subtitle-16">+2</span>
        </div>
      </div>
      <span
        class="!hidden shrink-0 basis-auto self-stretch text-left font-['Onest'] text-[24px] font-semibold text-[#63845c] md:block"
      >
        от 200 000 сум
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n({ useScope: "local" })
</script>

<i18n>
{
  "en": {
    "title": "Specialist Card"
  },
  "ru": {
    "title": "Карточка специалиста"
  },
  "uz": {
    "title": "Mutaxassis kartasi"
  }
}
</i18n>
