<script setup lang="ts">
interface IProps {
  item: any
}

defineProps<IProps>()

const { t } = useI18n({
  useScope: "local"
})
</script>

<template>
  <div
    class="flex w-full shrink-0 flex-col flex-nowrap items-start gap-[20px] rounded-[20px] bg-[#f7f7f7] p-[10px] pb-[15px] md:gap-[25px] md:p-[15px]"
    @click="$router.push(`/blog/${item.slug}`)"
  >
    <div class="h-[180px] shrink-0 self-stretch overflow-hidden rounded-[10px] bg-[rgba(217,217,217,0.2)] md:h-[240px]">
      <img class="object-cover object-center" alt="" :src="item.thumbnail" />
    </div>
    <div class="flex shrink-0 flex-col flex-nowrap items-start gap-[20px] self-stretch">
      <div
        class="flex shrink-0 flex-col flex-nowrap items-start gap-[5px] self-stretch border-b border-solid border-b-[#e0e5e3] pb-[15px] md:gap-[8px] md:pb-[20px]"
      >
        <span class="font-['Onest'] text-mobile-subtitle-22 font-semibold text-[#323232] md:text-subtitle-24">
          {{ item.title }}
        </span>
        <span class="font-['Onest'] text-[17px] text-mobile-body-14 font-normal text-[#323232] md:text-body-17">
          {{ item.content }}
        </span>
      </div>
      <div class="flex shrink-0 flex-nowrap items-start justify-between self-stretch">
        <div class="w-[112px] shrink-0 whitespace-nowrap text-left font-['Onest'] text-[17px] font-normal">
          <span class="body-17 font-['Onest'] text-[17px] font-normal text-[#63845c] underline">
            {{ item.author.name }}
          </span>
        </div>
        <span class="body-17 text-left font-['Onest'] text-[17px] font-normal text-[#848484]">
          {{ formatDate(item.createdAt, "DD.MM.YYYY") }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
