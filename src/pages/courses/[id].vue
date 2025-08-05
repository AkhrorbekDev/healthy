<template>
  <div class="w-full overflow-hidden bg-[#f0f4f1]">
    <course-detail-hero />
    <course-about />
    <course-format />
    <course-due-time />
    <course-modules />
    <course-author />
    <course-places reserved-count="4" :place-count="10" />
    <course-address />
    <course-review-slider />
    <course-gallery />
    <course-leed-form />
    <course-faq />
  </div>
</template>

<script lang="ts" setup>
import AppSection from "~/widgets/layout/app-section.vue"
import AppSectionFluid from "~/widgets/layout/app-section-fluid.vue"
import CourseHero from "~/features/courses/ui/course-hero.vue"
import CourseDetailHero from "~/features/courses/ui/course-detail-hero.vue"
import CourseAbout from "~/features/courses/ui/course-about.vue"
import CourseStatisticsProgress from "~/features/courses/ui/course-statistics-progress.vue"
import CourseDueTime from "~/features/courses/ui/course-due-time.vue"
import CourseFormat from "~/features/courses/ui/course-format.vue"
import HTag from "~/features/base/h-tag.vue"
import CourseModules from "~/features/courses/ui/course-modules.vue"
import CourseAuthor from "~/features/courses/ui/course-author.vue"
import CoursePlaces from "~/features/courses/ui/course-places.vue"
import CourseAddress from "~/features/courses/ui/course-address.vue"
import CourseReviewSlider from "~/features/courses/ui/course-review-slider.vue"
import CourseGallery from "~/features/courses/ui/course-gallery.vue"
import CourseLeedForm from "~/features/courses/ui/course-leed-form.vue"
import CourseFaq from "~/features/courses/ui/course-faq.vue"
</script>

<style>
.body {
  background: #f2f5f3;
  display: flex;
  justify-content: center;
  padding-top: 100px;
}

.circle-row {
  display: flex;
  gap: 5px; /* Space between circles */
}

.circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
}

.circle.check {
  background-color: white;
  border: 2px solid #678960;
  color: #678960;
}

.circle.filled {
  background-color: #678960;
}
</style>
