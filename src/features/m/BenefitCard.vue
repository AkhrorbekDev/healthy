<template>
  <article
    class="flex pt-[20px] pr-[15px] pb-[20px] pl-[15px] flex-col gap-[60px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[15px] relative z-[73]"
  >
    <div class="w-[40px] h-[40px] shrink-0 relative overflow-hidden z-[74]">
      <div
        :class="iconClass"
        :style="iconStyle"
        class="relative z-[75]"
      ></div>
    </div>
    <div
      class="flex w-[305px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[76]"
    >
      <h3
        class="h-[26px] self-stretch shrink-0 basis-auto font-['Onest'] text-[20px] font-semibold leading-[25.5px] text-[#323232] relative text-left whitespace-nowrap z-[77]"
      >
        {{ title }}
      </h3>
      <p
        class="flex w-[305px] h-[38px] justify-start items-start self-stretch shrink-0 font-['Onest'] text-[15px] font-normal leading-[19.125px] text-[#585958] relative text-left z-[78]"
      >
        {{ description }}
      </p>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  iconUrl: string;
  title: string;
  description: string;
}

const props = defineProps<Props>();

const iconClass = computed(() => {
  if (props.iconUrl.includes('h4JqYXCqpM')) {
    return 'w-[28.333px] h-[28.333px] bg-[length:100%_100%] bg-no-repeat mt-[5.833px] mr-0 mb-0 ml-[5.832px]';
  }
  return 'w-[40px] h-[40px] bg-cover bg-no-repeat';
});

const iconStyle = computed(() => ({
  backgroundImage: `url(${props.iconUrl})`
}));
</script>
