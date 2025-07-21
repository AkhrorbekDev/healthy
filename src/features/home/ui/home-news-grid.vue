<script setup lang="ts">
import AppSection from "~/widgets/layout/app-section.vue"
import AppSectionFluid from "~/widgets/layout/app-section-fluid.vue"
import HomeNewsCard from "~/features/home/ui/home-news-card.vue"
</script>

<template>
  <app-section-fluid class="py-[40px] md:py-[120px]">
    <div class="relative bg-[#fff] text-[0px]">
      <span class="headline-1 text-left font-['Onest'] text-[50px] font-semibold text-[#323232]">
        Блог – последние статьи
      </span>
      <div class="relative z-[174] mb-0 mr-0 mt-[40px] grid grid-cols-3 gap-[19px]">
        <home-news-card @click="$router.push('/blog/123')" />
        <home-news-card @click="$router.push('/blog/123')" />
        <home-news-card @click="$router.push('/blog/123')" />
      </div>
      <nuxt-link-locale
        class="relative z-[203] mx-auto mb-0 mt-[40px] flex w-[224px] flex-nowrap items-center justify-center gap-[10px] rounded-[15px] bg-[#63845c] px-[20px] py-[16px]"
        to="/blog"
      >
        <span
          class="relative z-[204] h-[23px] shrink-0 basis-auto whitespace-nowrap text-left font-['Manrope'] text-[17px] font-bold leading-[23px] text-[#fff]"
        >
          Все статьи
        </span>
      </nuxt-link-locale>
    </div>
  </app-section-fluid>
</template>

<style scoped></style>
