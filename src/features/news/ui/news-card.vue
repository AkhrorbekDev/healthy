<script setup lang="ts">
interface IProps {
  blog: IBlog
}

defineProps<IProps>()
</script>

<template>
  <div
    class="flex w-full shrink-0 flex-col flex-nowrap items-start gap-[20px] rounded-[20px] bg-white p-[10px] pb-[15px] md:gap-[25px] md:p-[15px]"
  >
    <img class="h-[180px] w-full rounded-[10px] object-cover object-center md:h-[240px]" alt="" :src="blog.thumbnail" />

    <div class="flex shrink-0 flex-col flex-nowrap items-start gap-[20px] self-stretch">
      <div
        class="flex shrink-0 flex-col flex-nowrap items-start gap-[5px] self-stretch border-b border-solid border-b-[#e0e5e3] pb-[15px] md:gap-[8px] md:pb-[20px]"
      >
        <span class="font-['Onest'] text-mobile-subtitle-22 font-semibold text-[#323232] md:text-subtitle-24">
          {{ blog.title }}
        </span>
        <span class="font-['Onest'] text-mobile-body-14 font-normal text-[#323232] md:text-body-17">
          {{ blog.short_description }}
        </span>
      </div>
      <div class="flex shrink-0 flex-nowrap items-start justify-between self-stretch">
        <div class="shrink-0 whitespace-nowrap text-left font-['Onest'] font-normal">
          <span class="font-['Onest'] text-mobile-body-15 font-normal text-[#63845c] underline md:text-body-17">
            {{ getUserFullName(blog.author) }}
          </span>
        </div>
        <span class="text-left font-['Onest'] text-mobile-body-15 font-normal text-[#848484] md:text-body-17">
          {{ formatDate(blog.created_at, "DD.MM.YYYY") }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
