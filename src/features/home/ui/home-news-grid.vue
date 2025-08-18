<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import AppSectionFluid from "~/widgets/layout/app-section-fluid.vue"
import HomeNewsCard from "~/features/home/ui/home-news-card.vue"

interface IProps {
  items: any[]
}

defineProps<IProps>()

const { t } = useI18n({
  useScope: "local"
})
</script>

<template>
  <app-section-fluid class="py-[40px] md:py-[120px]">
    <div class="relative bg-[#fff] text-[0px]">
      <span class="section-title">
        {{ t("title") }}
      </span>
      <div class="mt-[20px] grid grid-cols-1 gap-[19px] md:mt-[40px] md:grid-cols-3">
        <home-news-card v-for="item in items" :key="item.id" :item />
      </div>
      <nuxt-link-locale
        class="mx-auto mt-[30px] flex w-[224px] flex-nowrap items-center justify-center gap-[10px] rounded-[15px] bg-[#63845c] px-[20px] py-[14px] md:mt-[40px] md:py-[16px]"
        to="/blog"
      >
        <span class="font-['Manrope'] text-[15px] font-bold leading-[23px] text-[#fff] md:text-[17px]">
          {{ t("read_more") }}
        </span>
      </nuxt-link-locale>
    </div>
  </app-section-fluid>
</template>

<style scoped></style>

<i18n>
{
  "ru": {
    "title": "Блог – последние статьи",
    "read_more": "Все статьи"
  },
  "uz": {
    "title": "Blog – so'nggi maqolalar",
    "read_more": "Barcha maqolalar"
  }
}
</i18n>
