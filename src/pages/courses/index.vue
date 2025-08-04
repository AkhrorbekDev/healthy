<template>
  <div class="main-container relative mx-auto overflow-hidden bg-[#f0f4f1] pb-[80px] md:pb-[120px]">
    <course-hero />
    <course-filter />
    <app-section class="mt-[20px] pb-[56px] md:pb-[60px]">
      <div class="grid grid-cols-1 gap-[40px] md:grid-cols-2 md:gap-[20px]">
        <home-course-card @click="$router.push('/courses/123')" />
        <home-course-card @click="$router.push('/courses/123')" />
        <home-course-card @click="$router.push('/courses/123')" />
        <home-course-card @click="$router.push('/courses/123')" />
        <home-course-card @click="$router.push('/courses/123')" />
      </div>
      <ui-pagination :total="100" />
    </app-section>
  </div>
</template>

<script lang="ts" setup>
import AppSection from "~/widgets/layout/app-section.vue"
import CourseHero from "~/features/courses/ui/course-hero.vue"
import CourseFilter from "~/features/courses/ui/course-filter.vue"
import HomeCourseCard from "~/features/courses/ui/home-course-card.vue"
</script>
