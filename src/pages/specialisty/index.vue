<template>
  <div class="main-container relative mx-auto w-full overflow-hidden bg-[#f0f4f1]">
    <specialisty-hero />
    <specialisty-filter />
    <specialisty-grid :items="specialists" />
    <app-section class="mb-[120px] mt-[70px]">
      <ui-pagination v-model="query.page" :total="pagination.total" @update:model-value="getSpecialists" />
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
const getSpecialists = () => {
  router
    .push({
      query: {
        ...query.value
      }
    })
    .then(() => {
      specialistsApi.getSpecialistsList(query.value).then((response) => {
        specialists.value = response.data?.data || []
        pagination.value = response.data?.pagination || {
          page: 1,
          total: 0,
          limit: 10
        }
      })
    })
}

const specialistsApi = useSpecialistsApi()
const { data, refresh } = await useAsyncData("specialists", async () => {
  return specialistsApi.getSpecialistsList(query.value)
})

specialists.value = data.value?.data || []
pagination.value = data.value?.pagination || {
  page: 1,
  total: 0,
  limit: 10
}
</script>
