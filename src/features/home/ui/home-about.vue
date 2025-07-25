<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import HomeAboutCard from "~/features/home/ui/home-about-card.vue"

const { t, tm, rt } = useI18n({useScope: "local" })
</script>

<template>
  <app-section class="py-[40px] md:py-[120px]">
    <div class="mb-[120px] flex flex-col md:flex-row md:items-center md:justify-between">
      <div
        class="relative z-[234] h-[275px] w-full shrink-0 overflow-hidden rounded-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/rUsWz6jVNz.png)] bg-cover bg-no-repeat md:h-[559px] md:w-[670px]"
      ></div>
      <div
        class="relative z-[225] mt-[20px] flex shrink-0 flex-col flex-nowrap items-start gap-[60px] md:mt-0 md:w-[710px]"
      >
        <div class="relative z-[226] flex shrink-0 flex-col flex-nowrap items-start gap-[30px] self-stretch">
          <div>
            <span class="headline-1 text-left font-['Onest'] font-semibold text-[#323232]">О проекте</span>
            <br />
            <span class="headline-1 text-left font-['Onest'] font-semibold text-[#63845c]">Душевное Здоровье</span>
          </div>
          <span class="body-18 text-left font-['Onest'] text-[20px] font-normal leading-[25.5px] text-[#323232]">
            Проект «Душевное Здоровье» создан Ахмедовым Санджаром Акбаровичем — врачом-психотерапевтом, к.м.н.,
            доцентом.
            <br />
            <br />
            Наша большая миссия — сделать качественную психотерапию доступной и помогать людям укреплять своё ментальное
            здоровье без избыточной фармакологии
            <br />
            <br />

            Мы объединяем команду опытных специалистов, развиваем авторские образовательные курсы и всегда подбираем
            индивидуальный подход. Для нас важно, чтобы каждый смог получить поддержку, восстановить внутреннее
            равновесие и почувствовать гармонию с собой
          </span>
        </div>
        <div class="relative z-[229] flex w-full flex-col flex-nowrap gap-[15px] md:flex-row md:items-center">
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
      <span class="headline-1 font-semibold text-[#323232]">Наш подход</span>
      <div class="mt-[30px] grid grid-cols-1 gap-[20px] md:grid-cols-4">
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
  }
}
</i18n>
