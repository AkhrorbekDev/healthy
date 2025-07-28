<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import AppSectionFluid from "~/widgets/layout/app-section-fluid.vue"

const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <app-section-fluid
    class="bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/ornGaxc2yP.png)] bg-[length:100%_100%] bg-no-repeat py-[40px] md:py-[120px]"
  >
    <div class="flex flex-col gap-[40px] overflow-hidden md:flex-row md:items-center md:justify-between">
      <div class="z-[217] flex flex-col flex-nowrap items-start gap-[30px] md:w-[30.63%]">
        <div class="relative z-[218] flex shrink-0 flex-col flex-nowrap items-start gap-[15px] self-stretch">
          <span class="headline-1 text-left font-['Onest'] font-semibold text-[#fff]">
            {{ t("title") }}
          </span>
          <span class="body-18 text-left font-['Onest'] text-[20px] font-normal leading-[25.5px] text-[#fff]">
            {{ t("description") }}
          </span>
        </div>
        <div
          class="relative z-[221] mt-0 flex shrink-0 flex-nowrap items-center gap-[8px] self-stretch border-b border-solid border-t-[#ffffff20] pb-5 md:border-b-0 md:border-t md:pb-0 md:pt-[30px]"
        >
          <div
            class="relative z-[222] h-[22px] w-[22px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/07pV8kaFLW.png)] bg-cover bg-no-repeat"
          ></div>
          <div
            class="relative z-[223] w-[184px] shrink-0 whitespace-nowrap text-left font-['Onest'] text-[22px] font-semibold leading-[28px]"
          >
            <span class="subtitle-20 font-['Onest'] text-[22px] font-semibold leading-[28.05px] text-[#fff]">
              +998 91 137 55 16
            </span>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col flex-nowrap items-start gap-[40px] md:mr-[121px] md:w-[345px]">
        <div class="relative z-[208] flex shrink-0 flex-col flex-nowrap items-start gap-[10px] self-stretch">
          <ui-form-group class="w-full">
            <ui-input
              class="ui-input-outline !h-auto !border-0 !border-b-2 py-[10px] md:py-[15px]"
              :placeholder="t('form-inputs.fio')"
            ></ui-input>
          </ui-form-group>
          <ui-form-group class="w-full">
            <ui-input
              class="ui-input-outline !h-auto !border-0 !border-b-2 py-[10px] md:py-[15px]"
              :placeholder="t('form-inputs.phone')"
            ></ui-input>
          </ui-form-group>
          <ui-form-group class="w-full">
            <ui-input
              class="ui-input-outline !h-auto !border-0 !border-b-2 py-[10px] md:py-[15px]"
              :placeholder="t('form-inputs.reason')"
            ></ui-input>
          </ui-form-group>
        </div>
        <ui-button class="w-full" :label="t('Записаться')" />
      </div>
    </div>
  </app-section-fluid>
</template>

<style scoped></style>

<i18n>
{
  "ru": {
    "title": "Cделайте шаг к душевному здоровью",
    "description": "Запишитесь на консультацию и мы поможем решить ваши проблемы",
    "form-inputs": {
      "fio": "ФИО",
      "phone": "Номер телефона",
      "reason": "Что вы хотите изменить?"
    },
    "Записаться": "Записаться"
  },
  "en": {
    "form-inputs": {
      "fio": "Full Name",
      "phone": "Phone Number",
      "reason": "What do you want to change?"
    },
    "Записаться": "Sign Up"
  },
  "uz": {
    "title": "Ruhiy salomatlikka qadam qo'ying",
    "description": "Konsultatsiyaga yoziling va muammolaringizni hal qilishga yordam beramiz",
    "form-inputs": {
      "fio": "F.I.O",
      "phone": "Telefon raqami",
      "reason": "Nima o'zgartirmoqchisiz?"
    },
    "Записаться": "Ro'yxatdan o'tish"
  }
}
</i18n>
