<script lang="ts" setup>
import AppSection from "~/widgets/layout/app-section.vue"
import { useSpecialistsApi } from "~/entities/specialists/specialists.api"
import { useRegionApi } from "~/api/region/api"

const { t, locale, locales, tm, rt } = useI18n({ useScope: "local" })
const specialistsApi = useSpecialistsApi()
const regionApi = useRegionApi()
const emits = defineEmits<{
  (e: "on:filter"): void
}>()

const specizalizations = ref({
  data: [],
  query: {
    page: 1,
    total: 0,
    limit: 10
  }
})
const regions = ref({
  data: [],
  query: {
    page: 1,
    total: 0,
    limit: 10
  }
})
const route = useRoute()
const router = useRouter()
const query = reactive({ ...route.query })
if (Array.isArray(query.specialization) === false) {
  query.specialization = query.specialization ? [query.specialization] : []
}
if (Array.isArray(query.region) === false) {
  query.region = query.region ? [query.region] : []
}
if (Array.isArray(query.lang) === false) {
  query.lang = query.lang ? [query.lang] : []
}
if (Array.isArray(query.city) === false) {
  query.city = query.city ? [query.city] : []
}
if (!query.gender) {
  query.gender = "0"
}

onMounted(() => {
  specialistsApi.getSpecizalizationsList(specizalizations.value.query).then((response) => {
    specizalizations.value.data = response.data || []
    specizalizations.value.query = response.pagination || {
      page: 1,
      total: 0,
      limit: 10
    }
  })
  regionApi.getRegionList(regions.value.query).then((response) => {
    regions.value.data = response.data || []
    regions.value.query = response.pagination || {
      page: 1,
      total: 0,
      limit: 10
    }
  })
})

const genders = {
  male: "genders.male",
  female: "genders.female"
}
const sortItems = {
  rating: "sort_items.rating",
  expensive: "sort_items.expensive",
  cheapest: "sort_items.cheapest",
  experience: "sort_items.experience"
}

const changeRoute = () => {
  router
    .replace({
      query: {
        ...query,
        page: 1
      }
    })
    .then(() => {
      emits("on:filter")
    })
}
</script>

<template>
  <app-section>
    <div
      class="flex flex-nowrap items-center justify-between rounded-[20px] bg-[#fff] p-[12px] md:px-[20px] md:py-[25px]"
    >
      <div class="w-[953px] shrink-0 flex-nowrap items-center gap-[20px] md:flex">
        <ui-dropdown body-class="max-h-[200px]" :distance="16">
          <div
            class="flex w-[223px] shrink-0 flex-nowrap items-center justify-between rounded-[100px] bg-[#f7f7f7] pb-[15px] pl-[20px] pr-[20px] pt-[15px]"
          >
            <span class="h-[23px] shrink-0 basis-auto text-left font-['Onest'] text-[18px] font-normal text-[#323232]">
              {{ t("filters.specialization") }}
            </span>
            <icon class="h-[24px] w-[24px] rotate-[90deg]" name="h-icon:arrow"></icon>
          </div>
          <template #body>
            <ui-dropdown-item v-for="specizalization in specizalizations.data" :key="specizalization.id">
              <ui-checkbox
                v-model="query.specialization"
                :value="specizalization.id"
                :label="getValue(specizalization, 'name', locale)"
                @update:model-value="changeRoute"
              />
            </ui-dropdown-item>
          </template>
        </ui-dropdown>
        <ui-dropdown body-class="max-h-[200px]" :distance="16">
          <div
            class="relative z-[55] flex w-[223px] shrink-0 flex-nowrap items-center justify-between rounded-[100px] bg-[#f7f7f7] pb-[15px] pl-[20px] pr-[20px] pt-[15px]"
          >
            <span
              class="relative z-[56] h-[23px] shrink-0 basis-auto text-left font-['Onest'] text-[18px] font-normal text-[#323232]"
            >
              {{ t("filters.gender") }}
            </span>
            <icon class="h-[24px] w-[24px] rotate-[90deg]" name="h-icon:arrow"></icon>
          </div>
          <template #body>
            <ui-dropdown-item v-for="(value, key) in genders" :key="key">
              <ui-radio v-model="query.gender" :value="key" :label="t(value)" @update:model-value="changeRoute" />
            </ui-dropdown-item>
          </template>
        </ui-dropdown>
        <ui-dropdown body-class="max-h-[200px]" :distance="16">
          <div
            class="relative z-[58] flex w-[223px] shrink-0 flex-nowrap items-center justify-between rounded-[100px] bg-[#f7f7f7] pb-[15px] pl-[20px] pr-[20px] pt-[15px]"
          >
            <span
              class="relative z-[59] h-[23px] shrink-0 basis-auto text-left font-['Onest'] text-[18px] font-normal text-[#323232]"
            >
              {{ t("filters.language") }}
            </span>
            <icon class="h-[24px] w-[24px] rotate-[90deg]" name="h-icon:arrow"></icon>
          </div>
          <template #body>
            <ui-dropdown-item v-for="{ code, name } in locales" :key="code">
              <ui-checkbox v-model="query.lang" :value="code" :label="name" @update:model-value="changeRoute" />
            </ui-dropdown-item>
          </template>
        </ui-dropdown>
        <ui-dropdown body-class="max-h-[200px]" :distance="16">
          <div
            class="relative z-[61] flex w-[223px] shrink-0 flex-nowrap items-center justify-between rounded-[100px] bg-[#f7f7f7] pb-[15px] pl-[20px] pr-[20px] pt-[15px]"
          >
            <span
              class="relative z-[62] h-[23px] shrink-0 basis-auto text-left font-['Onest'] text-[18px] font-normal text-[#323232]"
            >
              {{ t("filters.city") }}
            </span>
            <icon class="h-[24px] w-[24px] rotate-[90deg]" name="h-icon:arrow"></icon>
          </div>
          <template #body>
            <ui-dropdown-item v-for="region in regions.data" :key="region.id">
              <ui-checkbox
                v-model="query.city"
                :value="region.id"
                :label="getValue(region, 'name', locale)"
                @update:model-value="changeRoute"
              />
            </ui-dropdown-item>
          </template>
        </ui-dropdown>
      </div>
      <div
        class="relative z-[64] flex w-auto shrink-0 flex-nowrap items-center gap-[12px] rounded-[100px] bg-[#f7f7f7] p-[12px] md:hidden md:w-[228px] md:px-[20px] md:py-[15px]"
      >
        <span class="body-18 body-15 font-['Onest'] font-medium text-[#323232]">
          {{ t("filters.labels") }}
        </span>
        <div
          class="relative z-[66] h-[24px] w-[24px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/XOHQgKiA9S.png)] bg-cover bg-no-repeat"
        ></div>
      </div>

      <ui-dropdown body-class="max-h-[200px]" :distance="16">
        <div
          class="relative z-[64] flex w-auto shrink-0 flex-nowrap items-center gap-[12px] rounded-[100px] bg-[#f7f7f7] p-[12px] md:w-[228px] md:px-[20px] md:py-[15px]"
        >
          <span class="body-18 body-15 font-['Onest'] font-medium text-[#323232]">
            {{ t("filters.rating") }}
          </span>
          <icon class="h-[24px] w-[24px] rotate-[90deg]" name="h-icon:arrow"></icon>
        </div>
        <template #body>
          <ui-dropdown-item v-for="(value, key) in sortItems" :key="key">
            <ui-radio v-model="query.sort_by" :value="key" :label="t(value)" @update:model-value="changeRoute" />
          </ui-dropdown-item>
        </template>
      </ui-dropdown>
    </div>
  </app-section>
</template>

<i18n>
{
  "ru": {
    "filters": {
      "labels": "Фильтр",
      "specialization": "Специализация",
      "gender": "Пол специалиста",
      "language": "Язык",
      "city": "Город",
      "rating": "Высокий рейтинг"
    },
    "genders": {
      "male": "Мужчина",
      "female": "Женщина"
    },
    "sort_items": {
      "rating": "Высокий рейтинг",
      "expensive": "Сначала дороже",
      "cheapest": "Сначала дешевле",
      "experience": "Более опытные"
    }
  },
  "uz": {
    "filters": {
      "labels": "Filtr",
      "specialization": "Mutaxassislik",
      "gender": "Mutaxassis jinsi",
      "language": "Til",
      "city": "Shahar",
      "rating": "Yuqori reyting"
    },
    "genders": {
      "male": "Erkak",
      "female": "Ayol"
    },
    "sort_items": {
      "rating": "Yuqori reyting",
      "expensive": "Birinchi navbatda qimmatroq",
      "cheapest": "Avval arzonroq",
      "experience": "Ko'proq tajribali"
    }
  },
  "en": {
    "filters": {
      "labels": "Filter",
      "specialization": "Specialization",
      "gender": "Gender of the specialist",
      "language": "Language",
      "city": "City",
      "rating": "High rating"
    },
    "genders": {
      "male": "Male",
      "female": "Female"
    },
    "sort_items": {
      "rating": "High rating",
      "expensive": "More expensive first",
      "cheapest": "Cheaper first",
      "experience": "More experienced"
    }
  }
}
</i18n>
