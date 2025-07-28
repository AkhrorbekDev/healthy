<script setup lang="ts"></script>

<template>
  <div
    class="flex h-[447px] w-full flex-col flex-nowrap items-start gap-[20px] rounded-[20px] bg-[#fff] px-[15px] py-[20px] md:p-[20px]"
  >
    <div class="flex flex-col flex-nowrap items-start gap-[10px] self-stretch md:gap-[15px]">
      <div class="flex flex-col flex-nowrap items-start gap-[2px] self-stretch">
        <span class="text-subtitle-18 font-semibold text-[#323232] md:text-subtitle-22">Мария</span>
        <span class="text-body-15 text-left font-['Onest'] font-normal text-[#848484] md:text-mobile-body-16">
          30 лет
        </span>
      </div>
      <div
        class="flex flex-nowrap items-center justify-between self-stretch border-t border-solid border-t-[#e7e7e7] pt-[10px] md:pt-[15px]"
      >
        <div class="flex w-[45px] flex-nowrap items-center gap-[5px]">
          <icon class="text-green-500" name="h-icon:star"></icon>
          <span class="font-['Manrope'] text-mobile-body-14 font-bold text-[#63845c] md:text-body-16">5.0</span>
        </div>
        <div class="flex w-[160px] flex-nowrap items-center gap-[10px] text-mobile-body-14 md:text-body-16">
          <span class="font-normal text-[#848484]">Кому:</span>
          <div class="font-normal">
            <span class="font-normal text-[#848484] underline">Ахмедов С. А.</span>
          </div>
        </div>
      </div>
    </div>
    <span class="overflow-hidden text-mobile-body-15 font-normal text-[#323232] md:text-body-17">
      Я пришла в терапию с ощущением, что постоянно живу «на автомате». Работа, бытовые заботы, ожидания окружающих —
      всё это будто вытеснило меня саму. Я не понимала, чего хочу, чувствовала вину, даже когда просто отдыхала.
      <br />
      На первых сессиях было сложно — я не умела говорить о себе. Но шаг за шагом, с уважением и теплотой, мы начали
      раскручивать клубок. Я узнала, что мои реакции — это не «проблема», а способ справляться. Научилась не подавлять
      чувства, а замечать их, проживать
    </span>
    <ui-button class="mt-auto" color="primary" variant="link" icon-name="h-icon:arrow" icon-class="text-green-500">
      Читать полностью
    </ui-button>
  </div>
</template>

<style scoped></style>
