<template>
  <section class="mt-[80px]">
    <h2
      class="flex w-[202px] h-[82px] justify-start items-start font-['Onest'] text-[32px] font-semibold leading-[40.8px] text-[#323232] relative text-left z-[106] mr-0 mb-0 ml-[16px]"
    >
      Кого мы приглашаем
    </h2>
    <div
      class="flex w-[328px] flex-col gap-[10px] items-start flex-nowrap relative z-[107] mt-[20px] mr-0 mb-0 ml-[16px]"
    >
      <SpecialistCard
        v-for="specialist in specialists"
        :key="specialist.id"
        :title="specialist.title"
        :icon-url="specialist.iconUrl"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import SpecialistCard from './SpecialistCard.vue';

const specialists = [
  {
    id: 1,
    title: 'Психотерапевты',
    iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/raF04xW0pp.png'
  },
  {
    id: 2,
    title: 'Клинические психологи',
    iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/wHFG60Zu4G.png'
  },
  {
    id: 3,
    title: 'Психиатры',
    iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/3kNz2AQc3A.png'
  },
  {
    id: 4,
    title: 'Детские психологи',
    iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/USGMLDyQuG.png'
  },
  {
    id: 5,
    title: 'Наркологи',
    iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/1FrEoDGk7p.png'
  },
  {
    id: 6,
    title: 'Психологи-консультанты',
    iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/M1U2RY6wzz.png'
  }
];
</script>
