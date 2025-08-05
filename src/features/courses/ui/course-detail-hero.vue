<template>
  <app-section>
    <div
      class="flex flex-col-reverse items-center justify-between overflow-hidden pb-[20px] pt-[30px] md:h-[820px] md:flex-row md:pb-[80px] md:pt-[65px]"
    >
      <div class="flex flex-col flex-nowrap items-start gap-[49px] md:h-[369px] md:w-[710px] md:gap-[40px]">
        <div class="z-[3] flex shrink-0 flex-col flex-nowrap items-start gap-[15px] self-stretch md:gap-[30px]">
          <div class="z-[4] flex shrink-0 flex-nowrap items-center gap-[5px] md:gap-[10px]">
            <h-tag>
              <div class="flex flex-nowrap items-center gap-[8px]">
                <icon class="text-[18px] text-green-500" name="h-icon:calendar"></icon>
                <span>10 июля 2025</span>
              </div>
            </h-tag>
            <h-tag>Для всех</h-tag>
            <h-tag>Оффлайн</h-tag>
          </div>
          <div class="z-[13] flex shrink-0 flex-col flex-nowrap items-start gap-[12px] self-stretch">
            <h1
              class="font-['Onest'] text-[58px] text-mobile-headline-2 font-semibold text-[#323232] md:w-[710px] md:text-headline-1"
            >
              Управление стрессом и эмоциями
            </h1>
            <div class="md:w-[598px]">
              <span class="font-['Onest'] text-mobile-body-15 font-normal text-[#585958] md:text-body-18">
                Научитесь справляться с тревогой и восстановите эмоциональный баланс под руководством опытного
                психотерапевта
              </span>
            </div>
          </div>
        </div>
        <div class="flex w-full flex-col flex-nowrap items-start gap-[10px] md:flex-row md:gap-[20px]">
          <ui-button class="w-full md:w-auto md:min-w-[223px]">Записаться на курс</ui-button>
          <ui-button class="w-full md:w-auto md:min-w-[223px]" variant="outline">Подробнее</ui-button>
        </div>
      </div>
      <div class="mb-[20px] h-[328px] w-[328px] overflow-hidden rounded-[20px] md:mb-0 md:h-[670px] md:w-[670px]">
        <img class="object-cover" src="/e26707610f72445996eccb4a448e255726e3e5ec.png" alt="" />
      </div>
    </div>
  </app-section>
</template>

<script lang="ts" setup>
import AppSection from "~/widgets/layout/app-section.vue"
import HTag from "~/features/base/h-tag.vue"

const { t } = useI18n({ useScope: "local" })
</script>

<i18n>
{
  "ru": {
    "title": "Обучающие курсы и тренинги  ",
    "description": "Мы проводим офлайн-курсы по психологии и психотерапии для разных аудиторий – от тех, кто хочет лучше понять себя, до практикующих специалистов, желающих повысить квалификацию"
  },
  "uz": {
    "title": "Sharhlar va muvaffaqiyat hikoyalari",
    "description": "Bu yerda bizning platformamizning malakali psixoterapevtlari, psixologlari va psixiatrlarining ro'yxati mavjud. Sizning so'rovingizga mos mutaxassisni topish uchun filtrlarni ishlating"
  }
}
</i18n>
