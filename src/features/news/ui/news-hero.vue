<template>
  <app-section>
    <div
      class="md:mb[60px] mb-[40px] mt-[40px] flex flex-col flex-nowrap items-start gap-[12px] md:mt-[80px] md:w-[751px]"
    >
      <h2 class="text-left font-['Onest'] text-mobile-headline-1 font-semibold text-[#323232] md:text-headline-2">
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
    "title": "Полезные материалы",
    "description": "Читайте статьи наших специалистов о психологии, получайте советы и узнайте больше о путях к душевному    здоровью"
  },
  "uz": {
    "title": "Foydali materiallar",
    "description": "Mutaxassislarimizning psixologiya bo'yicha maqolalarini o'qing, maslahatlar oling va ruhiy salomatlikka yo'llar haqida ko'proq ma'lumot oling"
  }
}
</i18n>
