<script setup lang="ts">
import HTag from "~/features/base/h-tag.vue"
</script>

<template>
  <div class="flex w-full flex-col flex-nowrap items-start gap-[20px]" @click="$router.push('/specialisty/12')">
    <div class="relative h-[335px] overflow-hidden rounded-[10px] md:h-[400px]">
      <img
        class="h-full object-cover"
        src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/jZdZnm4qfM.png"
        alt=""
      />
    </div>
    <div class="flex shrink-0 flex-col flex-nowrap items-start gap-[12px] self-stretch">
      <div class="flex shrink-0 flex-nowrap items-start gap-[5px]">
        <h-tag>врач-психотерапевт</h-tag>
        <h-tag>+2</h-tag>
      </div>
      <div class="flex shrink-0 flex-col flex-nowrap items-start gap-[5px] self-stretch">
        <span class="font-['Onest'] text-mobile-subtitle-22 font-semibold text-[#323232] md:text-subtitle-24">
          Ахмедов Санджар Акбарович
        </span>
        <span
          class="whitespace-nowrap text-left font-['Onest'] text-mobile-body-14 font-medium text-[#585958] md:text-body-17"
        >
          Опыт: 37 лет
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
