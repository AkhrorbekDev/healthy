<template>
  <div class="main-container relative mx-auto w-full overflow-hidden bg-[#f0f4f1]">
    <specialisty-hero />
    <specialisty-filter @on:filter="changeRoute" />
    <specialisty-grid :items="specialists" />
    <app-section class="mb-[120px] mt-[70px]">
      <ui-pagination v-model="query.page" :total="pagination.total" @update:model-value="changeRoute" />
    </app-section>
  </div>
</template>

<script lang="ts" setup>
import SpecialistyGrid from "~/features/specialisty/ui/specialisty-grid.vue"
import AppSection from "~/widgets/layout/app-section.vue"
import SpecialistyFilter from "~/features/specialisty/ui/specialisty-filter.vue"
import SpecialistyHero from "~/features/specialisty/ui/specialisty-hero.vue"
import { useSpecialistsApi } from "~/entities/specialists/specialists.api"

const route = useRoute()
const router = useRouter()
const query = ref({ ...route.query } || {})
const pagination = ref({
  page: 1,
  total: 0,
  limit: 10
})

const specialists = ref([])

const changeRoute = () => {
  router
    .replace({
      query: {
        ...route.query,
        ...query.value,
        page: 1
      }
    })
    .then(() => {
      getSpecialists()
    })
}

const getSpecialists = () => {
  specialistsApi.getSpecialistsList(route.query).then((response) => {
    specialists.value = response?.data || []
    pagination.value = response?.pagination || {
      page: 1,
      total: 0,
      limit: 10
    }
  })
}

const specialistsApi = useSpecialistsApi()
const { data, refresh } = await useAsyncData("specialists", async () => {
  return specialistsApi.getSpecialistsList(route.query)
})

specialists.value = data.value?.data || []
pagination.value = data.value?.pagination || {
  page: 1,
  total: 0,
  limit: 10
}
</script>
