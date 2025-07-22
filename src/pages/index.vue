<template>
  <div class="main-container relative mx-auto my-0 w-full overflow-hidden bg-[#f0f4f1]">
    <home-hero
      title="Душевное Здоровье – ваш путь к психическому благополучию"
      description="Наша миссия – обеспечить вас профессиональной поддержкой для душевного равновесия"
      :background="HomeHeroBg"
    />
    <home-specialist-grid />
    <home-course-grid />
    <home-review-grid />
    <home-news-grid />
    <home-leed-form />
    <home-about />
  </div>
</template>

<script lang="ts" setup>
import { HomeHero } from "~/features/home/ui"
import HomeHeroBg from "~/shared/assets/home-hero-bg.png"
import HomeSpecialistGrid from "~/features/home/ui/home-specialist-grid.vue"
import HomeCourseGrid from "~/features/home/ui/home-course-grid.vue"
import HomeReviewGrid from "~/features/home/ui/home-review-grid.vue"
import HomeNewsGrid from "~/features/home/ui/home-news-grid.vue"
import HomeAbout from "~/features/home/ui/home-about.vue"
import HomeLeedForm from "~/features/home/ui/home-leed-form.vue"
</script>
