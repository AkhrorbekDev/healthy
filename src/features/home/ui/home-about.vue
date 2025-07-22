<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
</script>

<template>
  <app-section class="py-[40px] md:py-[120px]">
    <div class="mb-[120px] flex flex-col md:flex-row md:items-center md:justify-between">
      <div
        class="relative z-[234] h-[275px] w-full shrink-0 overflow-hidden rounded-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/rUsWz6jVNz.png)] bg-cover bg-no-repeat md:h-[559px] md:w-[670px]"
      ></div>
      <div
        class="relative z-[225] mt-[20px] flex shrink-0 flex-col flex-nowrap items-start gap-[60px] md:mt-0 md:w-[710px]"
      >
        <div class="relative z-[226] flex shrink-0 flex-col flex-nowrap items-start gap-[30px] self-stretch">
          <div>
            <span class="headline-1 text-left font-['Onest'] font-semibold text-[#323232]">О проекте</span>
            <br />
            <span class="headline-1 text-left font-['Onest'] font-semibold text-[#63845c]">Душевное Здоровье</span>
          </div>
          <span class="body-18 text-left font-['Onest'] text-[20px] font-normal leading-[25.5px] text-[#323232]">
            Проект «Душевное Здоровье» создан Ахмедовым Санджаром Акбаровичем — врачом-психотерапевтом, к.м.н.,
            доцентом.
            <br />
            <br />
            Наша большая миссия — сделать качественную психотерапию доступной и помогать людям укреплять своё ментальное
            здоровье без избыточной фармакологии
            <br />
            <br />

            Мы объединяем команду опытных специалистов, развиваем авторские образовательные курсы и всегда подбираем
            индивидуальный подход. Для нас важно, чтобы каждый смог получить поддержку, восстановить внутреннее
            равновесие и почувствовать гармонию с собой
          </span>
        </div>
        <div class="relative z-[229] flex w-full flex-col flex-nowrap gap-[15px] md:flex-row md:items-center">
          <ui-button class="w-full md:w-fit" variant="filled" label="Подобрать специалиста" />
          <ui-button
            class="w-full md:w-fit"
            variant="outline"
            label="Посмотреть курсы
          "
          />
        </div>
      </div>
    </div>
    <div>
      <span class="headline-1 font-semibold text-[#323232]">Наш подход</span>
      <div class="mt-[30px] flex flex-col gap-[20px] md:flex-row md:items-center">
        <div
          class="relative z-[267] flex w-full shrink-0 flex-col flex-nowrap items-start gap-[209px] gap-[60px] rounded-[20px] bg-[#fff] pb-[20px] pl-[20px] pr-[20px] pt-[20px] md:gap-[209px]"
        >
          <div
            class="relative z-[268] h-[45px] w-[45px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/XwD957mDTH.png)] bg-cover bg-no-repeat"
          ></div>
          <div class="relative z-[269] flex w-[305px] shrink-0 flex-col flex-nowrap items-start gap-[8px]">
            <span
              class="subtitle-22 relative z-[270] text-left font-['Onest'] text-[24px] font-semibold leading-[29px] text-[#323232]"
            >
              Опытные специалисты
            </span>
            <span
              class="body-16 relative z-[271] text-left font-['Onest'] text-[17px] font-medium leading-[21.675px] text-[#585958]"
            >
              Многолетний стаж и профессионализм
            </span>
          </div>
        </div>
        <div
          class="relative z-[272] flex w-full shrink-0 flex-col flex-nowrap items-start gap-[209px] gap-[60px] rounded-[20px] bg-[#fff] pb-[20px] pl-[20px] pr-[20px] pt-[20px] md:gap-[209px]"
        >
          <div
            class="relative z-[273] h-[45px] w-[45px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/zeb5VHTRnJ.png)] bg-cover bg-no-repeat"
          ></div>
          <div class="relative z-[274] flex w-[305px] shrink-0 flex-col flex-nowrap items-start gap-[8px]">
            <span
              class="subtitle-22 relative z-[275] text-left font-['Onest'] text-[24px] font-semibold leading-[29px] text-[#323232]"
            >
              Авторские курсы
            </span>
            <span
              class="body-16 relative z-[276] text-left font-['Onest'] text-[17px] font-medium leading-[21.675px] text-[#585958]"
            >
              Уникальные офлайн-программы для вашего развития
            </span>
          </div>
        </div>
        <div
          class="relative z-[277] flex w-full shrink-0 flex-col flex-nowrap items-start gap-[209px] gap-[60px] rounded-[20px] bg-[#fff] pb-[20px] pl-[20px] pr-[20px] pt-[20px] md:gap-[209px]"
        >
          <div
            class="relative z-[278] h-[45px] w-[45px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/aaEDsgw5gs.png)] bg-cover bg-no-repeat"
          ></div>
          <div class="relative z-[279] flex w-[305px] shrink-0 flex-col flex-nowrap items-start gap-[8px]">
            <span
              class="subtitle-22 relative z-[280] text-left font-['Onest'] text-[24px] font-semibold leading-[29px] text-[#323232]"
            >
              Индивидуальный подход
            </span>
            <span
              class="body-16 relative z-[281] text-left font-['Onest'] text-[17px] font-medium leading-[21.675px] text-[#585958]"
            >
              Персональные планы терапии и полная конфиденциальность
            </span>
          </div>
        </div>
        <div
          class="relative z-[282] flex w-full shrink-0 flex-col flex-nowrap items-start gap-[209px] gap-[60px] rounded-[20px] bg-[#fff] pb-[20px] pl-[20px] pr-[20px] pt-[20px] md:gap-[209px]"
        >
          <div
            class="relative z-[283] h-[45px] w-[45px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/JC5sVgcQVe.png)] bg-cover bg-no-repeat"
          ></div>
          <div class="relative z-[284] flex w-[305px] shrink-0 flex-col flex-nowrap items-start gap-[8px]">
            <span
              class="subtitle-22 relative z-[285] text-left font-['Onest'] text-[24px] font-semibold leading-[29px] text-[#323232]"
            >
              Поддержка на пути
            </span>
            <span
              class="body-16 relative z-[286] text-left font-['Onest'] text-[17px] font-medium leading-[21.675px] text-[#585958]"
            >
              Блог и материалы для самостоятельной помощи
            </span>
          </div>
        </div>
      </div>
    </div>
  </app-section>
</template>

<style scoped></style>
