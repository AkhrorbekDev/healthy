<script setup lang="ts">
interface IProps {
  title: string
  description: string
  iconName: string
}

defineProps<IProps>()
</script>

<template>
  <div
    class="relative z-[267] flex w-full shrink-0 flex-col flex-nowrap items-start gap-[60px] rounded-[20px] bg-[#fff] p-[20px] md:gap-[209px]"
  >
    <div class="relative z-[268] shrink-0 overflow-hidden">
      <icon class="h-[45px] w-[45px] text-xl !text-green-500" mode="svg" :name="iconName" />
    </div>
    <div class="relative z-[269] flex w-[305px] shrink-0 flex-col flex-nowrap items-start gap-[8px]">
      <span
        class="subtitle-22 relative z-[270] text-left font-['Onest'] text-[24px] font-semibold  text-[#323232]"
      >
        {{ title }}
      </span>
      <span
        class="body-16 relative z-[271] text-left font-['Onest'] text-[17px] font-medium  text-[#585958]"
      >
        {{ description }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>
