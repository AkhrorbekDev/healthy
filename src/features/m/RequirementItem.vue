<template>
  <article
    class="flex w-[328px] pt-[15px] pr-0 pb-[15px] pl-0 gap-[20px] items-start shrink-0 flex-nowrap relative z-[136]"
    :class="{ 'border-solid border-t border-t-[#e0e5e3]': hasBorder }"
  >
    <div
      class="w-[35px] h-[35px] shrink-0 relative overflow-hidden z-[137]"
      :class="{ 'bg-cover bg-no-repeat': !isCustomIcon }"
      :style="!isCustomIcon ? { backgroundImage: `url(${iconUrl})` } : {}"
    >
      <div
        v-if="isCustomIcon"
        class="w-[26.25px] h-[29.167px] bg-[length:100%_100%] bg-no-repeat relative z-[143] mt-[2.917px] mr-0 mb-0 ml-[2.918px]"
        :style="{ backgroundImage: `url(${iconUrl})` }"
      ></div>
    </div>
    <div
      class="flex flex-col gap-[5px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[138]"
    >
      <h3
        class="flex w-[273px] h-[46px] justify-start items-start self-stretch shrink-0 font-['Onest'] text-[18px] font-semibold leading-[22.95px] text-[#323232] relative text-left z-[139]"
      >
        {{ title }}
      </h3>
      <p
        class="flex w-[273px] h-[72px] justify-start items-start self-stretch shrink-0 font-['Onest'] text-[14px] font-normal leading-[17.85px] text-[#585958] relative text-left z-[140]"
      >
        {{ description }}
      </p>
    </div>
  </article>
</template>

<script lang="ts" setup>
interface Props {
  iconUrl: string;
  title: string;
  description: string;
  hasBorder?: boolean;
  isCustomIcon?: boolean;
}

withDefaults(defineProps<Props>(), {
  hasBorder: false,
  isCustomIcon: false
});
</script>
