<script setup lang="ts">
import HTag from "~/features/base/h-tag.vue"

interface IProps {
  course: any
}

defineProps<IProps>()

const { t } = useI18n({
  useScope: "local"
})
</script>

<template>
  <nuxt-link-locale class="flex w-full flex-col flex-nowrap items-start gap-[25px]" :to="`/courses/${course.slug}`">
    <div class="self-stretch overflow-hidden rounded-[20px]">
      <img class="object-cover object-center md:h-[400px]" alt="" :src="course.photo" />
    </div>
    <div class="flex flex-col flex-nowrap items-start gap-[15px] self-stretch md:gap-[20px]">
      <div
        class="flex flex-col flex-nowrap items-start gap-[15px] self-stretch border-b border-solid border-b-[#e0e5e3] pb-[15px] md:pb-[20px]"
      >
        <div class="flex flex-col flex-nowrap items-start gap-[15px] self-stretch">
          <div class="flex flex-nowrap items-center gap-[5px] md:gap-[10px]">
            <h-tag>
              <div class="flex flex-nowrap items-center gap-[8px]">
                <icon class="text-[18px] text-green-500" name="h-icon:calendar"></icon>
                <span>{{ formatDate(course.start_date, "LL") }}</span>
              </div>
            </h-tag>
            <h-tag>{{ course.type }}</h-tag>
            <h-tag v-if="course.format">
              {{ course.format }}
            </h-tag>
          </div>
          <div class="flex flex-col flex-nowrap items-start gap-[8px] self-stretch">
            <span class="font-['Onest'] text-mobile-subtitle-22 font-semibold text-[#323232] md:text-headline-4">
              {{ course.title }}
            </span>
            <span class="font-['Onest'] text-mobile-body-14 font-normal text-[#585958] md:text-body-17">
              {{ course.description }}
            </span>
          </div>
        </div>
        <span class="text-[22px] font-semibold text-[#63845c] md:text-subtitle-24">
          {{ course.price }} {{ t("currency") }}
        </span>
      </div>
      <div class="flex flex-nowrap items-center gap-[10px] self-stretch">
        <img
          class="h-[25px] w-[25px] overflow-hidden rounded-[100px] object-cover md:h-[30px] md:w-[30px]"
          alt=""
          :src="course.specialist?.photo"
        />
        <div class="whitespace-nowrap text-left font-['Onest'] text-[17px] font-normal">
          <span
            class="text-left font-['Onest'] text-mobile-body-14 font-normal text-[#323232] md:text-subtitle-24 md:font-semibold"
          >
            {{ course.specialist?.full_name }}
          </span>
        </div>
      </div>
    </div>
  </nuxt-link-locale>
</template>

<style scoped></style>

<i18n>
{
  "ru": {
    "currency": "сум"
  },
  "en": {
    "currency": "sum"
  },
  "uz": {
    "currency": "so'm"
  }
}
</i18n>
