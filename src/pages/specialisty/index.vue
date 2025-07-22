<template>
  <div class="main-container relative mx-auto w-full overflow-hidden bg-[#f0f4f1]">
    <app-section>
      <div class="mt-[80px] flex w-[751px] flex-col flex-nowrap items-start gap-[12px]">
        <h2
          class="headline-2 z-[48] h-[64px] shrink-0 basis-auto self-stretch text-left font-['Onest'] text-[50px] font-semibold leading-[63.75px] text-[#323232]"
        >
          Выберите своего специалиста
        </h2>
        <span
          class="body-18 w-[751px] text-left font-['Onest'] text-[18px] font-normal leading-[22.95px] text-[#585958]"
        >
          Здесь собраны квалифицированные психотерапевты, психологи и психиатры нашей платформы. Используйте фильтры,
          чтобы найти специалиста под ваш запрос
        </span>
      </div>
    </app-section>
    <app-section>
      <div
        class="relative z-50 mb-0 mr-0 mt-[60px] flex h-[104px] flex-nowrap items-center justify-between rounded-[20px] bg-[#fff] px-[20px] py-[25px]"
      >
        <div class="relative z-[51] hidden w-[953px] shrink-0 flex-nowrap items-center gap-[20px] md:flex">
          <div
            class="relative z-[52] flex w-[223px] shrink-0 flex-nowrap items-center justify-between rounded-[100px] bg-[#f7f7f7] pb-[15px] pl-[20px] pr-[20px] pt-[15px]"
          >
            <span
              class="relative z-[53] h-[23px] shrink-0 basis-auto text-left font-['Onest'] text-[18px] font-normal leading-[22.95px] text-[#323232]"
            >
              Специализация
            </span>
            <div
              class="relative z-[54] h-[24px] w-[24px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/yim28KBcKT.png)] bg-cover bg-no-repeat"
            ></div>
          </div>
          <div
            class="relative z-[55] flex w-[223px] shrink-0 flex-nowrap items-center justify-between rounded-[100px] bg-[#f7f7f7] pb-[15px] pl-[20px] pr-[20px] pt-[15px]"
          >
            <span
              class="relative z-[56] h-[23px] shrink-0 basis-auto text-left font-['Onest'] text-[18px] font-normal leading-[22.95px] text-[#323232]"
            >
              Пол специалиста
            </span>
            <div
              class="relative z-[57] h-[24px] w-[24px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/LoNvKKhNrc.png)] bg-cover bg-no-repeat"
            ></div>
          </div>
          <div
            class="relative z-[58] flex w-[223px] shrink-0 flex-nowrap items-center justify-between rounded-[100px] bg-[#f7f7f7] pb-[15px] pl-[20px] pr-[20px] pt-[15px]"
          >
            <span
              class="relative z-[59] h-[23px] shrink-0 basis-auto text-left font-['Onest'] text-[18px] font-normal leading-[22.95px] text-[#323232]"
            >
              Язык
            </span>
            <div
              class="relative z-[60] h-[24px] w-[24px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/ivtShw9r3o.png)] bg-cover bg-no-repeat"
            ></div>
          </div>
          <div
            class="relative z-[61] flex w-[223px] shrink-0 flex-nowrap items-center justify-between rounded-[100px] bg-[#f7f7f7] pb-[15px] pl-[20px] pr-[20px] pt-[15px]"
          >
            <span
              class="relative z-[62] h-[23px] shrink-0 basis-auto text-left font-['Onest'] text-[18px] font-normal leading-[22.95px] text-[#323232]"
            >
              Город
            </span>
            <div
              class="relative z-[63] h-[24px] w-[24px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/sTy2qLn5Qn.png)] bg-cover bg-no-repeat"
            ></div>
          </div>
        </div>
        <div
          class="relative z-[64] flex w-[228px] shrink-0 flex-nowrap items-center gap-[12px] rounded-[100px] bg-[#f7f7f7] pb-[15px] pl-[20px] pr-[20px] pt-[15px] md:hidden"
        >
          <span
            class="relative z-[65] h-[23px] shrink-0 basis-auto text-left font-['Onest'] text-[18px] font-medium leading-[22.949px] text-[#323232]"
          >
            Фильтр
          </span>
          <div
            class="relative z-[66] h-[24px] w-[24px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/XOHQgKiA9S.png)] bg-cover bg-no-repeat"
          ></div>
        </div>
        <div
          class="relative z-[64] flex w-[228px] shrink-0 flex-nowrap items-center gap-[12px] rounded-[100px] bg-[#f7f7f7] pb-[15px] pl-[20px] pr-[20px] pt-[15px]"
        >
          <span
            class="relative z-[65] h-[23px] shrink-0 basis-auto text-left font-['Onest'] text-[18px] font-medium leading-[22.949px] text-[#323232]"
          >
            Высокий рейтинг
          </span>
          <div
            class="relative z-[66] h-[24px] w-[24px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/XOHQgKiA9S.png)] bg-cover bg-no-repeat"
          ></div>
        </div>
      </div>
    </app-section>
    <specialisty-grid />
    <app-section>
      <div class="relative z-[318] mx-auto mb-[120px] mt-[70px] flex w-[459px] flex-nowrap items-center">
        <div
          class="relative z-[319] flex h-[51px] w-[51px] shrink-0 flex-col flex-nowrap items-center justify-center gap-[10px] rounded-[100px] pb-[10px] pl-[10px] pr-[10px] pt-[10px]"
        >
          <div
            class="relative z-[320] h-[24px] w-[24px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/j0RkNLxvo5.png)] bg-cover bg-no-repeat"
          ></div>
        </div>
        <div
          class="relative z-[321] flex h-[51px] w-[51px] shrink-0 flex-col flex-nowrap items-center justify-center gap-[10px] rounded-[100px] bg-[#63845c] pb-[10px] pl-[10px] pr-[10px] pt-[10px]"
        >
          <span
            class="relative z-[322] h-[23px] shrink-0 basis-auto self-stretch text-center font-['Onest'] text-[18px] font-medium leading-[22.949px] text-[#fff]"
          >
            1
          </span>
        </div>
        <div
          class="relative z-[323] flex h-[51px] w-[51px] shrink-0 flex-col flex-nowrap items-center justify-center gap-[10px] rounded-[100px] pb-[10px] pl-[10px] pr-[10px] pt-[10px]"
        >
          <span
            class="relative z-[324] h-[23px] shrink-0 basis-auto self-stretch text-center font-['Onest'] text-[18px] font-medium leading-[22.949px] text-[#323232]"
          >
            2
          </span>
        </div>
        <div
          class="relative z-[325] flex h-[51px] w-[51px] shrink-0 flex-col flex-nowrap items-center justify-center gap-[10px] rounded-[100px] pb-[10px] pl-[10px] pr-[10px] pt-[10px]"
        >
          <span
            class="relative z-[326] h-[23px] shrink-0 basis-auto self-stretch text-center font-['Onest'] text-[18px] font-medium leading-[22.949px] text-[#323232]"
          >
            3
          </span>
        </div>
        <div
          class="relative z-[327] flex h-[51px] w-[51px] shrink-0 flex-col flex-nowrap items-center justify-center gap-[10px] rounded-[100px] pb-[10px] pl-[10px] pr-[10px] pt-[10px]"
        >
          <span
            class="relative z-[328] h-[23px] shrink-0 basis-auto self-stretch text-center font-['Onest'] text-[18px] font-medium leading-[22.949px] text-[#323232]"
          >
            4
          </span>
        </div>
        <div
          class="relative z-[329] flex h-[51px] w-[51px] shrink-0 flex-col flex-nowrap items-center justify-center gap-[10px] rounded-[100px] pb-[10px] pl-[10px] pr-[10px] pt-[10px]"
        >
          <span
            class="relative z-[330] h-[23px] shrink-0 basis-auto self-stretch text-center font-['Onest'] text-[18px] font-medium leading-[22.949px] text-[#323232]"
          >
            5
          </span>
        </div>
        <div
          class="relative z-[331] flex h-[51px] w-[51px] shrink-0 flex-col flex-nowrap items-center justify-center gap-[10px] rounded-[100px] pb-[10px] pl-[10px] pr-[10px] pt-[10px]"
        >
          <span
            class="relative z-[332] h-[23px] shrink-0 basis-auto self-stretch text-center font-['Onest'] text-[18px] font-medium leading-[22.949px] text-[#323232]"
          >
            ...
          </span>
        </div>
        <div
          class="relative z-[333] flex h-[51px] w-[51px] shrink-0 flex-col flex-nowrap items-center justify-center gap-[10px] rounded-[100px] pb-[10px] pl-[10px] pr-[10px] pt-[10px]"
        >
          <span
            class="relative z-[334] h-[23px] shrink-0 basis-auto self-stretch text-center font-['Onest'] text-[18px] font-medium leading-[22.949px] text-[#323232]"
          >
            100
          </span>
        </div>
        <div
          class="relative z-[335] flex h-[51px] w-[51px] shrink-0 flex-col flex-nowrap items-center justify-center gap-[10px] rounded-[100px] pb-[10px] pl-[10px] pr-[10px] pt-[10px]"
        >
          <div
            class="relative z-[336] h-[24px] w-[24px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/XVCEqEk0Ky.png)] bg-cover bg-no-repeat"
          ></div>
        </div>
      </div>
    </app-section>
  </div>
</template>

<script lang="ts" setup>
import SpecialistyGrid from "~/features/specialisty/ui/specialisty-grid.vue"
import AppSection from "~/widgets/layout/app-section.vue"
</script>
