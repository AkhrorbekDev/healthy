<script setup lang="ts">
import HTag from "~/features/base/h-tag.vue"
</script>

<template>
  <div class="flex w-full flex-col flex-nowrap items-start gap-[25px]" @click="$router.push('/course/12')">
    <div class="self-stretch overflow-hidden rounded-[20px]">
      <img
        class="object-cover object-center md:h-[400px]"
        alt=""
        src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/3NnytMcGK2.png"
      />
    </div>
    <div class="flex flex-col flex-nowrap items-start gap-[15px] self-stretch md:gap-[20px]">
      <div
        class="flex flex-col flex-nowrap items-start gap-[15px] self-stretch border-b border-solid border-b-[#e0e5e3] pb-[15px] md:pb-[20px]"
      >
        <div class="flex flex-col flex-nowrap items-start gap-[15px] self-stretch">
          <div class="flex flex-nowrap items-center gap-[5px] md:gap-[10px]">
            <h-tag>
              <div class="flex flex-nowrap items-center gap-[8px]">
                <icon class="text-[18px] text-green-500" name="h-icon:calendar"></icon>
                <span>10 июля 2025</span>
              </div>
            </h-tag>
            <h-tag>Для всех</h-tag>
            <h-tag>Оффлайн</h-tag>
          </div>
          <div class="flex flex-col flex-nowrap items-start gap-[8px] self-stretch">
            <span class="font-['Onest'] text-mobile-subtitle-22 font-semibold text-[#323232] md:text-headline-4">
              Управление стрессом и эмоциями
            </span>
            <span class="font-['Onest'] text-mobile-body-14 font-normal text-[#585958] md:text-body-17">
              Практический курс для всех, кто хочет научиться справляться со стрессом, тревогой и выгоранием. Включает
              техники релаксации и эмоциональной саморегуляции
            </span>
          </div>
        </div>
        <span class="text-[22px] font-semibold text-[#63845c] md:text-[24px]">7 000 000 сум</span>
      </div>
      <div class="flex flex-nowrap items-center gap-[10px] self-stretch">
        <img
          class="h-[25px] w-[25px] overflow-hidden rounded-[100px] object-cover md:h-[30px] md:w-[30px]"
          src="/42cc1aa73c85ed366b29b4433baa2534c9513268.png"
          alt=""
        />
        <div class="whitespace-nowrap text-left font-['Onest'] text-[17px] font-normal">
          <span class="body-16 text-left font-['Onest'] text-[17px] font-normal text-[#323232]">Ахмедов С. А.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
