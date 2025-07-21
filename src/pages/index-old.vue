<script setup lang="ts">
import { HomeHero } from "~/features/home/ui"
import HomeHeroBg from "~/shared/assets/home-hero-bg.png"

const { t } = useI18n()
useHead({ title: t("labels.home") })
</script>

<template>
  <section class="w-full">
    <home-hero
      title="Душевное Здоровье – ваш путь к психическому благополучию"
      description="Наша миссия – обеспечить вас профессиональной поддержкой для душевного равновесия"
      :background="HomeHeroBg"
    />
  </section>
</template>
