<template>
  <div class="relative mx-auto overflow-hidden bg-[#f0f4f1] pb-[80px] md:pb-[120px]">
    <course-hero />
    <course-filter v-model="query.type" @update:model-value="getCourses" />
    <app-section class="mt-[20px] pb-[56px] md:pb-[60px]">
      <div class="grid grid-cols-1 gap-[40px] md:grid-cols-2 md:gap-[20px]">
        <home-course-card v-for="course in courses" :key="course.id" :course />
      </div>
      <ui-pagination v-model="query.page" :total="pagination.total" @update:model-value="getCourses" />
    </app-section>
  </div>
</template>

<script lang="ts" setup>
import AppSection from "~/widgets/layout/app-section.vue"
import CourseHero from "~/features/courses/ui/course-hero.vue"
import CourseFilter from "~/features/courses/ui/course-filter.vue"
import HomeCourseCard from "~/features/courses/ui/home-course-card.vue"
import { useCoursesApi } from "~/api/courses/api"

const { t } = useI18n({
  useScope: "local"
})

const courseApi = useCoursesApi()
const route = useRoute()
const router = useRouter()
const query = ref({ ...route.query } || {})
const courses = ref([])
const pagination = ref({
  page: 1,
  total: 0,
  limit: 10
})

const getCourses = () => {
  router
    .push({
      query: {
        ...query.value
      }
    })
    .then(() => {
      courseApi.getCoursesList(query.value).then((response) => {
        courses.value = response.data?.data || []
        pagination.value = response.data?.pagination || {
          page: 1,
          total: 0,
          limit: 10
        }
      })
    })
}

const { data } = await useAsyncData("courses", () => {
  return courseApi.getCoursesList(query.value)
})

courses.value = data.value?.data || []
pagination.value = data.value?.pagination || {
  page: 1,
  total: 0,
  limit: 10
}
</script>
