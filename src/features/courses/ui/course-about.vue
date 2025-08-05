<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import HTag from "~/features/base/h-tag.vue"
</script>

<template>
  <app-section class="py-[40px] md:py-[60px]">
    <div
      class="relative z-[69] mb-0 mr-0 mt-[60px] overflow-hidden rounded-[20px] bg-[#fff] px-[20px] pb-[48px] pt-[25px] md:h-[430px] md:px-[40px] md:py-[50px]"
    >
      <!--      <div class="absolute bottom-0 left-0 right-0 top-0 z-[70]">
              <div
                class="z-[72] mb-0 ml-[347px] mr-0 mt-[-62px] h-[229.905px] w-[229.905px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/jeqWpkk5eV.png)] bg-cover bg-no-repeat"
              ></div>
              <div class="absolute bottom-0 right-0 z-[73] h-[170px] w-[170px] overflow-hidden">
                <img src="" alt="">
                <div
                  class="h-[116.954px] w-[107.92px] overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/WNhPx5HBJW.png)] bg-[length:100%_100%] bg-no-repeat"
                ></div>
              </div>
              <div
                class="absolute left-0 top-[23px] z-[71] h-[147px] w-[147px] overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/15YtQLnXST.png)] bg-cover bg-no-repeat"
              ></div>
            </div>-->
      <div class="flex flex-col justify-between gap-[20px] md:flex-row">
        <div class="md:w-[427px]">
          <span class="font-['Onest'] text-mobile-headline-1 font-semibold text-[#323232] md:text-headline-2">
            Для кого предназначен данный курс
          </span>
        </div>
        <div
          class="flex flex-col-reverse flex-nowrap items-start gap-[15px] md:w-[660px] md:flex-col md:gap-[20px] md:pr-[10px]"
        >
          <h-tag>Для всех</h-tag>
          <span class="z-[80] font-['Onest'] text-mobile-body-15 font-normal text-[#323232] md:text-body-20">
            Курс предназначен для тех, кто испытывает постоянный стресс на работе или дома, чувствует эмоциональное
            выгорание и хочет научиться восстанавливаться. Подойдет как новичкам, ранее не посещавшим психологические
            группы, так и тем, кто уже имеет опыт работы над собой
          </span>
        </div>
      </div>
    </div>
  </app-section>
  <app-section class="py-[40px] md:py-[60px]">
    <span
      class="whitespace-nowrap font-['Onest'] text-mobile-headline-1 font-semibold text-[#323232] md:text-headline-2"
    >
      Чему вы научитесь
    </span>
    <div class="mb-[20px] mt-[40px] grid grid-cols-1 gap-[10px] md:mb-[30px] md:grid-cols-3 md:gap-[20px]">
      <div
        class="z-[84] flex h-full flex-nowrap items-start gap-[15px] rounded-[10px] bg-[#fff] pb-[20px] pl-[20px] pr-[20px] pt-[20px]"
      >
        <div
          class="flex min-h-[25px] min-w-[25px] items-center justify-center gap-[10px] rounded-[20px] bg-[#f0f4f1] md:min-h-[35px] md:min-w-[35px]"
        >
          <icon class="text-green-500" name="h-icon:checkmark"></icon>
        </div>
        <span class="font-['Onest'] text-mobile-body-15 font-normal text-[#323232] md:text-body-20">
          Понимать причины своего стресса и тревоги
        </span>
      </div>
      <div
        class="z-[84] flex h-full flex-nowrap items-start gap-[15px] rounded-[10px] bg-[#fff] pb-[20px] pl-[20px] pr-[20px] pt-[20px]"
      >
        <div
          class="flex min-h-[25px] min-w-[25px] items-center justify-center gap-[10px] rounded-[20px] bg-[#f0f4f1] md:min-h-[35px] md:min-w-[35px]"
        >
          <icon class="text-green-500" name="h-icon:checkmark"></icon>
        </div>
        <span class="font-['Onest'] text-mobile-body-15 font-normal text-[#323232] md:text-body-20">
          Применять навыки эмоциональной саморегуляции в повседневной жизни
        </span>
      </div>
      <div
        class="z-[84] flex h-full flex-nowrap items-start gap-[15px] rounded-[10px] bg-[#fff] pb-[20px] pl-[20px] pr-[20px] pt-[20px]"
      >
        <div
          class="flex min-h-[25px] min-w-[25px] items-center justify-center gap-[10px] rounded-[20px] bg-[#f0f4f1] md:min-h-[35px] md:min-w-[35px]"
        >
          <icon class="text-green-500" name="h-icon:checkmark"></icon>
        </div>
        <span class="font-['Onest'] text-mobile-body-15 font-normal text-[#323232] md:text-body-20">
          Практиковать дыхательные и медитативные техники для расслабления
        </span>
      </div>
      <div
        class="z-[84] flex h-full flex-nowrap items-start gap-[15px] rounded-[10px] bg-[#fff] pb-[20px] pl-[20px] pr-[20px] pt-[20px]"
      >
        <div
          class="flex min-h-[25px] min-w-[25px] items-center justify-center gap-[10px] rounded-[20px] bg-[#f0f4f1] md:min-h-[35px] md:min-w-[35px]"
        >
          <icon class="text-green-500" name="h-icon:checkmark"></icon>
        </div>
        <span class="font-['Onest'] text-mobile-body-15 font-normal text-[#323232] md:text-body-20">
          Распознавать и осознанно проживать свои эмоции, не подавляя их
        </span>
      </div>
      <div
        class="z-[84] flex h-full flex-nowrap items-start gap-[15px] rounded-[10px] bg-[#fff] pb-[20px] pl-[20px] pr-[20px] pt-[20px]"
      >
        <div
          class="flex min-h-[25px] min-w-[25px] items-center justify-center gap-[10px] rounded-[20px] bg-[#f0f4f1] md:min-h-[35px] md:min-w-[35px]"
        >
          <icon class="text-green-500" name="h-icon:checkmark"></icon>
        </div>
        <span class="font-['Onest'] text-mobile-body-15 font-normal text-[#323232] md:text-body-20">
          Укреплять устойчивость к стрессовым факторам
        </span>
      </div>
      <div
        class="z-[84] flex h-full flex-nowrap items-start gap-[15px] rounded-[10px] bg-[#fff] pb-[20px] pl-[20px] pr-[20px] pt-[20px]"
      >
        <div
          class="flex min-h-[25px] min-w-[25px] items-center justify-center gap-[10px] rounded-[20px] bg-[#f0f4f1] md:min-h-[35px] md:min-w-[35px]"
        >
          <icon class="text-green-500" name="h-icon:checkmark"></icon>
        </div>
        <span class="font-['Onest'] text-mobile-body-15 font-normal text-[#323232] md:text-body-20">
          Понимать, как стресс влияет на тело и поведение
        </span>
      </div>
    </div>
    <ui-button class="w-full md:w-auto md:min-w-[223px]">Записаться на курс</ui-button>
  </app-section>
</template>

<style scoped></style>
