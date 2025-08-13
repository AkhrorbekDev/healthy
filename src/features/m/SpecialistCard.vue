<template>
  <article
    class="flex pt-[15px] pr-[15px] pb-[15px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[10px] relative z-[108]"
  >
    <div
      class="flex w-[25px] h-[25px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#6f8f6e] rounded-[20px] relative z-[109]"
    >
      <div
        class="w-[12.143px] h-[12.143px] shrink-0 bg-cover bg-no-repeat relative overflow-hidden z-[110]"
        :style="{ backgroundImage: `url(${iconUrl})` }"
      ></div>
    </div>
    <h3
      class="h-[20px] grow shrink-0 basis-auto font-['Onest'] text-[16px] font-normal leading-[20px] text-[#323232] relative text-left whitespace-nowrap z-[111]"
    >
      {{ title }}
    </h3>
  </article>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  iconUrl: string;
}

defineProps<Props>();
</script>
