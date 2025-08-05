<template>
  <app-section>
    <div
      class="md:mb[60px] mb-[40px] mt-[40px] flex flex-col flex-nowrap items-start gap-[12px] md:mt-[80px] md:w-[751px]"
    >
      <h2 class="text-mobile-headline-1 md:text-headline-2 text-left font-['Onest'] font-semibold text-[#323232]">
        {{ t("title") }}
      </h2>
      <span class="text-left font-['Onest'] text-mobile-body-16 font-normal text-[#585958] md:text-body-18">
        {{ t("description") }}
      </span>
    </div>
  </app-section>
</template>

<script lang="ts" setup>
import AppSection from "~/widgets/layout/app-section.vue"

const { t } = useI18n({ useScope: "local" })
</script>

<i18n>
{
  "ru": {
    "title": "Выберите своего специалиста",
    "description": "Здесь собраны квалифицированные психотерапевты, психологи и психиатры нашей платформы. Используйте фильтры,    чтобы найти специалиста под ваш запрос"
  },
  "uz": {
    "title": "Sharhlar va muvaffaqiyat hikoyalari",
    "description": "Bu yerda bizning platformamizning malakali psixoterapevtlari, psixologlari va psixiatrlarining ro'yxati mavjud. Sizning so'rovingizga mos mutaxassisni topish uchun filtrlarni ishlating"
  }
}
</i18n>
