<script lang="ts" setup>
import AppSection from "~/widgets/layout/app-section.vue"
import NewsCard from "~/features/news/ui/news-card.vue"
import NewsHero from "~/features/news/ui/news-hero.vue"
import { useBlogApi } from "~/entities/blog/blog.api"
import NewsFilter from "~/features/news/ui/news-filter.vue"

interface PageQuery {
  search?: string
  page?: number
  specialist_id?: number[]

  [key: string]: any
}

const route = useRoute()
const router = useRouter()

const query = ref<PageQuery>({ ...route.query } || {})

const blogs = ref<IBlog[]>([])
const blogApi = useBlogApi()

const pagination = ref({
  page: 1,
  total: 0,
  per_page: 12
})

const { data, error, refresh } = await useAsyncData("posts", () => blogApi.getBlogList(route.query), { server: true })

blogs.value = data.value?.data || []
pagination.value = data.value?.meta || pagination.value
const filter = () => {
  router
    .push({
      query: {
        ...query.value
      }
    })
    .then(refreshData)
}

const refreshData = () => {
  refresh().then(() => {
    blogs.value = data.value?.data || []
    pagination.value = data.value?.meta || pagination.value
  })
}
</script>

<template>
  <div class="main-container mx-auto w-full overflow-hidden bg-[#f0f4f1]">
    <news-hero />
    <news-filter @on:filter="refreshData" />
    <app-section class="mb-[80px] md:mb-[120px]">
      <div class="mb-[40px] grid grid-cols-1 gap-[15px] md:mb-[60px] md:mt-[30px] md:grid-cols-3 md:gap-[19px]">
        <news-card v-for="blog in blogs" :key="blog.id" :blog />
      </div>
      <ui-pagination v-model="query.page" :total="100" @update:model-value="filter" />
    </app-section>
  </div>
</template>

<style>
.authors-transition-enter-active,
.authors-transition-leave-active {
  transition: all 0.2s ease;
}

.authors-transition-enter-from,
.authors-transition-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
