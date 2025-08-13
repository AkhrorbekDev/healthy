<template>
  <div class="main-container mx-auto w-full overflow-hidden bg-[#f0f4f1]">
    <news-hero />
    <app-section class="mb-[20px] md:mb-[30px] md:mt-[60px]">
      <div class="flex items-center justify-between gap-[10px] md:gap-[20px]">
        <ui-input
          v-model="query.search"
          class="!h-12 w-full !rounded-[100px] !border-0 !bg-[#fff] !px-[15px] py-[12px] font-['Onest'] !text-mobile-body-15 !font-medium text-[#585958] md:!h-full md:!px-[25px] md:py-[18px] md:!text-body-18"
          placeholder="Найти статью"
          @update:model-value="filter"
        ></ui-input>
        <div
          class="hidden w-[223px] shrink-0 flex-nowrap items-center justify-between rounded-[100px] bg-[#fff] pb-[18px] pl-[20px] pr-[20px] pt-[18px] md:flex"
          @click="toggleAuthorsMenu"
        >
          <span
            class="relative z-[156] h-[23px] shrink-0 basis-auto whitespace-nowrap text-left font-['Onest'] text-[18px] font-medium text-[#323232]"
          >
            Авторы
          </span>
          <div
            class="relative z-[157] h-[22px] w-[22px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/cSO8qQnqma.png)] bg-cover bg-no-repeat"
          ></div>
        </div>
        <div
          class="flex min-h-12 min-w-12 items-center justify-center rounded-full bg-white md:hidden"
          @click="toggleAuthorsMenu"
        >
          <icon class="h-6 w-6" name="h-icon:filter"></icon>
        </div>
      </div>
      <transition name="authors-transition">
        <div v-if="showAuthorsMenu" class="mt-[20px] max-h-[288px] rounded-[10px] bg-white px-[20px] pb-[25px]">
          <div class="sticky top-0 z-10 bg-white pb-[20px] pt-[25px]">
            <ui-input
              class="!h-[46px] !w-full font-['Onest'] !text-mobile-body-15 !font-medium text-[#585958] md:!text-body-17"
              placeholder="Найти автора"
            ></ui-input>
          </div>
          <div class="flex max-h-[182px] flex-wrap gap-[10px] overflow-auto">
            <h-tag v-for="n in 100" class="!px-[15px] !py-2 !font-medium" :key="n">
              <span class="flex items-center gap-2">
                <span>Ахмедов С. А.</span>
                <icon class="min-h-[18px] min-w-[18px]" name="h-icon:close"></icon>
              </span>
            </h-tag>
          </div>
        </div>
      </transition>
    </app-section>
    <app-section class="mb-[80px] md:mb-[120px]">
      <div class="mb-[40px] grid grid-cols-1 gap-[15px] md:mb-[60px] md:mt-[30px] md:grid-cols-3 md:gap-[19px]">
        <news-card />
        <news-card />
        <news-card />
        <news-card />
        <news-card />
        <news-card />
        <news-card />
      </div>
      <ui-pagination v-model="query.page" :total="100" @update:model-value="filter" />
    </app-section>
  </div>
</template>

<script lang="ts" setup>
import AppSection from "~/widgets/layout/app-section.vue"
import NewsCard from "~/features/news/ui/news-card.vue"
import NewsHero from "~/features/news/ui/news-hero.vue"
import HTag from "~/features/base/h-tag.vue"
import { breakpointsTailwind } from "@vueuse/core/index"
import { useBlogApi } from "~/entities/blog/blog.api"
import { useSpecialistsApi } from "~/entities/specialists/specialists.api"
import { debounce } from "lodash-es"

const showAuthorsMenu = ref(false)
const _showAuthorBottonSheet = ref(false)

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smallerOrEqual("sm")
const toggleAuthorsMenu = () => {
  if (isMobile.value) {
    _showAuthorBottonSheet.value = !_showAuthorBottonSheet.value
  } else {
    showAuthorsMenu.value = !showAuthorsMenu.value
  }
}
const blogs = ref([])
const blogApi = useBlogApi()
const specialistsApi = useSpecialistsApi()
const pagination = ref({
  page: 1,
  total: 0,
  limit: 10
})
const route = useRoute()
const router = useRouter()
const query = ref({ ...route.query } || {})
const { data, error, refresh } = await useAsyncData("posts", () => blogApi.getBlogList(route.query), { server: false })

blogs.value = data.value?.data || []
const authorsList = ref([])
const i = 0
const filter = () => {
  router
    .push({
      query: {
        page: query.value.page
      }
    })
    .then(() => refresh())
}
const search = debounce(refresh, 400)
// console.log(error.value)

onMounted(() => {})
</script>

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
