<script setup lang="ts">
import HTag from "~/features/base/h-tag.vue"
import AppSection from "~/widgets/layout/app-section.vue"
import { debounce } from "lodash-es"
import { useSpecialistsApi } from "~/entities/specialists/specialists.api"
import { breakpointsTailwind } from "@vueuse/core/index"

interface PageQuery {
  search?: string
  page?: number
  specialist_id?: number[]

  [key: string]: any
}

const emits = defineEmits<{
  (e: "on:filter"): void
}>()
const router = useRouter()
const route = useRoute()
const specialistsApi = useSpecialistsApi()

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
const query = ref<PageQuery>({ ...route.query } || {})
if (Array.isArray(query.value.specialist_id) === false) {
  query.value.specialist_id = query.value.specialist_id ? [query.value.specialist_id] : []
}
const specialistPagination = ref({
  page: 1,
  total: 0,
  per_page: 12
})
const authorsList = ref([])
const authorSearch = ref("")

// console.log(error.value)
const filter = () => {
  router
    .push({
      query: {
        ...query.value
      }
    })
    .then(() => returnEmit())
}

const setAuthor = (author: any) => {
  if (checkAuthorExist(author.id)) {
    query.value.specialist_id = query.value.specialist_id?.filter((id) => id != author.id)
  } else {
    if (!query.value.specialist_id) {
      query.value.specialist_id = []
    }
    query.value.specialist_id.push(author.id)
  }
  query.value.page = undefined
  filter()
  if (isMobile.value) {
    _showAuthorBottonSheet.value = false
  } else {
    showAuthorsMenu.value = false
  }
}

const checkAuthorExist = (id: number) => {
  return query.value.specialist_id?.find((authorId) => authorId == id) !== undefined
}

const returnEmit = () => {
  emits("on:filter")
  if (isMobile.value) {
    _showAuthorBottonSheet.value = false
  } else {
    showAuthorsMenu.value = false
  }
}
const onSearch = () => {
  query.value.page = undefined
  if (query.value.search) {
    query.value.search = query.value.search.trim()
  } else {
    query.value.search = undefined
  }
  filter()
}
const search = debounce(onSearch, 400)

const filterAuthor = (author: any) => {
  if (!authorSearch.value) return true
  return author.first_name.toLowerCase().includes(authorSearch.value.toLowerCase())
}

onMounted(() => {
  specialistsApi.getSpecialistsList().then((response) => {
    authorsList.value = response.data
    specialistPagination.value = response.meta
  })
})
</script>

<template>
  <app-section class="mb-[20px] md:mb-[30px] md:mt-[60px]">
    <div class="flex items-center justify-between gap-[10px] md:gap-[20px]">
      <ui-input
        v-model="query.search"
        class="!h-12 w-full !rounded-[100px] !border-0 !bg-[#fff] !px-[15px] py-[12px] font-['Onest'] !text-mobile-body-15 !font-medium text-[#585958] md:!h-full md:!px-[25px] md:py-[18px] md:!text-body-18"
        placeholder="Найти статью"
        @update:model-value="search"
      ></ui-input>
      <div
        class="hidden w-[223px] shrink-0 flex-nowrap items-center justify-between rounded-[100px] bg-[#fff] pb-[18px] pl-[20px] pr-[20px] pt-[18px] md:flex"
        @click.stop="toggleAuthorsMenu"
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
        @click.stop="toggleAuthorsMenu"
      >
        <icon class="h-6 w-6" name="h-icon:filter"></icon>
      </div>
    </div>
    <transition name="authors-transition">
      <div v-if="showAuthorsMenu" class="mt-[20px] max-h-[288px] rounded-[10px] bg-white px-[20px] pb-[25px]">
        <div class="sticky top-0 z-10 bg-white pb-[20px] pt-[25px]">
          <ui-input
            v-model="authorSearch"
            class="!h-[46px] !w-full font-['Onest'] !text-mobile-body-15 !font-medium text-[#585958] md:!text-body-17"
            placeholder="Найти автора"
          ></ui-input>
        </div>
        <div class="flex max-h-[182px] flex-wrap gap-[10px] overflow-auto">
          <h-tag
            v-for="author in authorsList"
            v-show="filter(author)"
            class="cursor-pointer !px-[15px] !py-2 !font-medium"
            :class="{
              'bg-green-500 !text-[#fff]': checkAuthorExist(author.id),
              'bg-[#fff] text-[#585958]': !checkAuthorExist(author.id)
            }"
            :key="author.id"
            @click="setAuthor(author)"
          >
            <span class="flex items-center gap-2">
              <span>{{ getUserFullName(author) }}</span>
              <icon
                class="min-h-[18px] min-w-[18px]"
                name="h-icon:close"
                :class="{
                  'rotate-45': !checkAuthorExist(author.id)
                }"
              ></icon>
            </span>
          </h-tag>
        </div>
      </div>
    </transition>
  </app-section>
</template>

<style scoped></style>
