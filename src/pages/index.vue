<template>
  <div class="main-container relative mx-auto my-0 w-full overflow-hidden bg-[#f0f4f1]">
    <home-hero
      :buttons="banner.buttons"
      :description="banner.description"
      :title="banner.title"
      :background="HomeHeroBg"
    />
    <home-specialist-grid :items="specialists" />
    <home-course-grid :items="courses" />
    <home-review-grid :items="reviews" />
    <home-news-grid :items="blog" />
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
import { useCoursesApi } from "~/api/courses/api"
import { useReviewApi } from "~/api/reviews/api"

const bannerApi = useBannerApi()
const blogApi = useBlogApi()
const courseApi = useCoursesApi()
const reviewApi = useReviewApi()
const specialistsApi = useSpecialistsApi()
const siteSettingsApi = useSiteSettingsApi()
const siteSettingsStore = useSiteSettingsStore()

const banner = ref({})
const specialists = ref([])
const blog = ref([])
const courses = ref([])
const reviews = ref([])

const { t } = useI18n({
  useScope: "local"
})

const { data, error } = await useAsyncData("home", async () => {
  const request = [
    siteSettingsApi.getSiteSettings(),
    bannerApi.getBanner(),
    specialistsApi.getSpecialistsList(),
    blogApi.getBlogList(),
    courseApi.getCoursesList(),
    reviewApi.getReviewList({
      is_home_page: true,
    })
  ]

  return await Promise.all(request)
})
const [siteSettings, _banner, _specialists, _blog, _courses, _review] = data.value || []

// if (error.value) {
//   showError(error.value)
// }

useHead({
  title: t("title"),
  meta: [
    {
      name: "description",
      content: t("description")
    }
  ]
})

banner.value = _banner?.data || {}
specialists.value = _specialists?.data || []
blog.value = _blog?.data || []
courses.value = _courses?.data || []
reviews.value = _review?.data || []

onMounted(() => {
  siteSettingsStore.siteSettings.value = siteSettings?.data
})
</script>

<i18n>
{
  "ru": {
    "title": "Душевное Здоровье – платформа психологической поддержки",
    "description": "Консультации психотерапевтов, авторские курсы и полезные статьи. Найдите своего специалиста в Узбекистане"
  },
  "uz": {
    "title": "Душевное Здоровье – платформа психологической поддержки",
    "description": "Консультации психотерапевтов, авторские курсы и полезные статьи. Найдите своего специалиста в Узбекистане"
  },
  "en": {
    "title": "Душевное Здоровье – платформа психологической поддержки",
    "description": "Консультации психотерапевтов, авторские курсы и полезные статьи. Найдите своего специалиста в Узбекистане"
  }
}
</i18n>
