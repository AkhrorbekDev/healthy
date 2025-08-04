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
      <div class="flex flex-col flex-nowrap items-start gap-[30px] md:w-[50.63%]">
        <div class="relative flex shrink-0 flex-col flex-nowrap items-start gap-[10px] self-stretch md:gap-[15px]">
          <span class="text-left font-['Onest'] text-mobile-headline-1 font-semibold text-[#fff] md:text-headline-2">
            {{ t("title") }}
          </span>
          <span class="text-left font-['Onest'] text-mobile-body-16 font-normal text-[#fff] md:text-body-18">
            {{ t("description") }}
          </span>
        </div>
        <div
          class="relative mt-0 flex shrink-0 flex-nowrap items-center gap-[8px] self-stretch border-b border-solid border-t-[#ffffff20] pb-5 md:border-b-0 md:border-t md:pb-0 md:pt-[30px]"
        >
          <icon class="text-[18px] !text-green-500" name="h-icon:phone"></icon>
          <div class="relative w-[184px] shrink-0 whitespace-nowrap text-left font-['Onest'] text-[22px] font-semibold">
            <span class="subtitle-20 font-['Onest'] text-[22px] font-semibold text-[#fff]">+998 91 137 55 16</span>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col flex-nowrap items-start gap-[40px] md:mr-[121px] md:w-[345px]">
        <div class="relative flex shrink-0 flex-col flex-nowrap items-start gap-[10px] self-stretch">
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
        <ui-button class="!w-full !bg-white !text-green-500 md:w-auto" :label="t('Записаться')" />
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
