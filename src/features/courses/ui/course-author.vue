<script setup lang="ts">
import AppSectionFluid from "~/widgets/layout/app-section-fluid.vue"
import HTag from "~/features/base/h-tag.vue"
import AppSection from "~/widgets/layout/app-section.vue"
</script>

<template>
  <app-section-fluid class="mt-[23px] bg-[#ffffff] py-[40px] md:py-[100px]">
    <app-section class="!p-0 md:px-4">
      <div class="mb-[20px] md:mb-[40px]">
        <span class="section-title font-['Onest'] font-semibold text-[#323232]">Ведущие курса</span>
      </div>

      <div
        class="z-[186] flex flex-col flex-nowrap items-center gap-[20px] md:flex-row md:gap-[60px]"
      >
        <img
          class="h-[345px] w-full overflow-hidden rounded-[10px] object-cover md:h-[575px] md:w-[548px]"
          src="/42cc1aa73c85ed366b29b4433baa2534c9513268.png"
          alt=""
        />
        <div class="flex flex-col flex-nowrap items-start gap-[32px] md:w-[832px] md:gap-[129px]">
          <div class="flex flex-col flex-nowrap items-start gap-[20px] self-stretch md:gap-[30px]">
            <div
              class="flex flex-col items-start gap-[10px] self-stretch border-b border-solid border-b-[#e7e7e7] pb-[20px] md:gap-[20px] md:pb-[30px]"
            >
              <h-tag>Ментор</h-tag>
              <div class="flex flex-col flex-nowrap items-start gap-[5px] self-stretch">
                <span class="font-['Onest'] text-mobile-subtitle-22 font-semibold text-[#323232] md:text-headline-3">
                  Ахмедов Санджар Акбарович
                </span>
                <span class="font-['Onest'] text-mobile-subtitle-16 font-semibold text-[#63845c] md:text-subtitle-20">
                  врач-психотерапевт, к.м.н., доцент с 37-летним стажем
                </span>
              </div>
            </div>
            <div class="flex flex-col flex-nowrap items-start gap-[15px] self-stretch">
              <span class="font-['Onest'] text-mobile-subtitle-22 font-semibold text-[#323232] md:text-headline-4">
                О менторе
              </span>
              <span class="font-['Onest'] text-mobile-body-15 font-normal text-[#585958] md:text-body-18">
                Автор уникальной методики стресс-менеджмента, обучил уже 200+ человек навыкам эмоциональной
                саморегуляции.
                <br />
                <br />
                Имеет многолетний опыт индивидуальной и групповой работы. Помогает людям восстанавливать внутренний
                ресурс, справляться с тревогой и выгоранием, выстраивать устойчивость в повседневной жизни. На курсе
                делится только тем, что работает на практике
              </span>
            </div>
          </div>
          <div class="flex w-full items-end justify-between">
            <ui-button class="min-w-[158px] md:min-w-[204px]" variant="outline">Подробнее</ui-button>
            <div class="flex items-center justify-end gap-[5px] md:gap-[10px]">
              <div
                class="flex h-[50px] w-[50px] rotate-180 flex-nowrap items-center justify-center rounded-[30px] bg-[#f0f4f1] p-[12px] md:h-[60px] md:w-[60px]"
              >
                <icon class="h-full w-full" name="h-icon:arrow"></icon>
              </div>
              <div
                class="flex h-[50px] w-[50px] flex-nowrap items-center justify-center rounded-[30px] bg-[#f0f4f1] p-[12px] md:h-[60px] md:w-[60px]"
              >
                <icon class="h-full w-full" name="h-icon:arrow"></icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-section>
  </app-section-fluid>
</template>

<style scoped></style>
