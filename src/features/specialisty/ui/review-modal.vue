<script setup lang="ts">
const onHide = () => {
  // Handle the modal hide event
  console.log("Investment type modal hidden")
}
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <ui-modal id="review-modal" @hide="onHide">
    <icon class="text-green-500" name="h-icon:start"></icon>
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
  </ui-modal>
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
