<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import HomeAboutCard from "~/features/home/ui/home-about-card.vue"

const { t, tm, rt } = useI18n({ useScope: "local" })
</script>

<template>
  <app-section class="py-[80px] md:py-[120px]">
    <div
      class="mb-[80px] flex flex-col gap-[30px] md:mb-[120px] md:flex-row md:items-center md:justify-between md:gap-[60px]"
    >
      <div class="h-[275px] w-full overflow-hidden rounded-[20px] md:h-[559px] md:w-[670px]">
        <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/rUsWz6jVNz.png" alt="" />
      </div>
      <div
        class="flex shrink-0 flex-col flex-nowrap items-start justify-between gap-[30px] md:mt-0 md:w-[710px] md:gap-[60px]"
      >
        <div class="flex shrink-0 flex-col flex-nowrap items-start self-stretch">
          <div class="mb-[15px] md:mb-[30px]">
            <span
              class="text-left font-['Onest'] text-mobile-headline-1 font-semibold text-[#323232] md:text-headline-2"
            >
              {{ t("about_title") }}
            </span>
            <br />
            <span
              class="text-left font-['Onest'] text-mobile-headline-1 font-semibold text-[#63845c] md:text-headline-2"
            >
              {{ t("about_title3") }}
            </span>
          </div>
          <span class="text-left font-['Onest'] text-mobile-body-16 font-normal text-[#323232] md:text-body-20">
            {{ t("about_description") }}
            <br />
            <br />
            {{ t("about_description2") }}
            <br />
            <br />
            {{ t("about_description3") }}
          </span>
        </div>
        <div class="flex w-full flex-col flex-nowrap gap-[15px] md:flex-row md:items-center">
          <ui-button class="w-full md:w-fit" variant="filled" label="Подобрать специалиста" />
          <ui-button
            class="w-full md:w-fit"
            variant="outline"
            label="Посмотреть курсы
          "
          />
        </div>
      </div>
    </div>
    <div>
      <span class="headline-1 font-semibold text-[#323232]">
        {{ t("about_title2") }}
      </span>
      <div class="mt-[20px] grid grid-cols-1 gap-[10px] md:mt-[30px] md:grid-cols-4 md:gap-[20px]">
        <home-about-card
          v-for="(content, index) in tm('about_card')"
          :key="index"
          :title="rt(content.title)"
          :description="rt(content.description)"
          :icon-name="rt(content.icon)"
        />
      </div>
    </div>
  </app-section>
</template>

<style scoped></style>

<i18n>
{
  "ru": {
    "about_title": "О проекте",
    "about_title2": "Наш подход",
    "about_title3": "Душевное здоровье",
    "about_description": " Проект «Душевное Здоровье» создан Ахмедовым Санджаром Акбаровичем — врачом-психотерапевтом, к.м.н., доцентом. ",
    "about_description2": " Наша большая миссия — сделать качественную психотерапию доступной и помогать людям укреплять своё ментальное здоровье без избыточной фармакологии",
    "about_description3": "  Мы объединяем команду опытных специалистов, развиваем авторские образовательные курсы и всегда подбираем индивидуальный подход. Для нас важно, чтобы каждый смог получить поддержку, восстановить внутреннее равновесие и почувствовать гармонию с собой",
    "about_card": [
      {
        "title": "Опытные специалисты",
        "description": "Многолетний стаж и профессионализм",
        "icon": "h-icon:achieve"
      },
      {
        "title": "Авторские курсы",
        "description": "Уникальные офлайн-программы для вашего развития",
        "icon": "h-icon:star"
      },
      {
        "title": "Индивидуальный подход",
        "description": "Персональные планы терапии и полная конфиденциальность",
        "icon": "h-icon:person"
      },
      {
        "title": "Поддержка на пути",
        "description": "Блог и материалы для самостоятельной помощи",
        "icon": "h-icon:heart"
      }
    ]
  },
  "uz": {
    "about_title": "Loyiha haqida",
    "about_title2": "Bizning yondashuvimiz",
    "about_title3": "Ruhiy salomatlik",
    "about_description": "«Ruhiy Salomatlik» loyihasi Axmedov Sanjar Akbarovich — psixoterapevt, tibbiyot fanlari nomzodi, dotsent tomonidan yaratilgan. / n /n Bizning katta vazifamiz sifatli psixoterapiyani qulay qilish va odamlarga ortiqcha farmakologiyasiz ruhiy salomatligini mustahkamlashga yordam berishdir /n /n Biz tajribali mutaxassislar guruhini birlashtiramiz, mualliflik ta'limi kurslarini rivojlantiramiz va har doim individual yondashuvni tanlaymiz. Har bir inson qo'llab-quvvatlashi, ichki muvozanatni tiklashi va o'zi bilan uyg'unlikni his qilishi biz uchun juda muhimdir",
    "about_card": [
      {
        "title": "Tajribali mutaxassislar",
        "description": "Ko'p yillik tajriba va professionalizm",
        "icon": "h-icon:achieve"
      },
      {
        "title": "Mualliflik kurslari",
        "description": "Sizning rivojlanishingiz uchun noyob oflayn dasturlar",
        "icon": "h-icon:star"
      },
      {
        "title": "Individual yondashuv",
        "description": "Shaxsiy terapiya rejasi va to'liq maxfiylik",
        "icon": "h-icon:person"
      },
      {
        "title": "Yo'lda yordam",
        "description": "Blog va mustaqil yordam uchun materiallar",
        "icon": "h-icon:heart"
      }
    ]
  }
}
</i18n>
