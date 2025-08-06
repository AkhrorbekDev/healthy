<template>
  <div class="main-container relative mx-auto my-0 w-full overflow-hidden bg-[#f0f4f1]">
    <home-hero
      title="Душевное Здоровье – ваш путь к психическому благополучию"
      description="Наша миссия – обеспечить вас профессиональной поддержкой для душевного равновесия"
      :background="HomeHeroBg"
      specialists-link="asddd"
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
import { useBannerApi } from "~/api/banners/api"
import { useSiteSettingsApi } from "~/api/site-settings/api"
import { useSiteSettingsStore } from "~/entities/site-settings/site-settings.store"
import { useSpecialistsApi } from "~/entities/specialists/specialists.api"
import { useBlogApi } from "~/entities/blog/blog.api"

const bannerApi = useBannerApi()
const blogApi = useBlogApi()
const specialistsApi = useSpecialistsApi()
const siteSettingsApi = useSiteSettingsApi()
const siteSettingsStore = useSiteSettingsStore()

const { data, error } = await useAsyncData("home", () => {
  const request = [
    siteSettingsApi.getSiteSettings(),
    // bannerApi.getBanner(),
    // specialistsApi.getSpecialistsList(),
    // blogApi.getBlogList()
  ]

  return Promise.allSettled(request)
})

console.log(data.value)

onMounted(() => {
  siteSettingsStore.siteSettings.value = data.value?.[0] || {}
})
</script>
