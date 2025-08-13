<template>
  <section
    class="w-[360px] h-[753px] text-[0px] bg-[#fff] relative z-[133] mt-[80px] mr-0 mb-0 ml-0"
  >
    <h2
      class="flex w-[328px] h-[82px] justify-start items-start font-['Onest'] text-[32px] font-semibold leading-[40.8px] text-[#323232] relative text-left z-[134] mt-[40px] mr-0 mb-0 ml-[16px]"
    >
      Требования к кандидатам
    </h2>
    <div
      class="flex w-[328px] flex-col items-start flex-nowrap relative z-[135] mt-[20px] mr-0 mb-0 ml-[16px]"
    >
      <RequirementItem
        v-for="requirement in requirements"
        :key="requirement.id"
        :icon-url="requirement.iconUrl"
        :title="requirement.title"
        :description="requirement.description"
        :has-border="requirement.hasBorder"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import RequirementItem from './RequirementItem.vue';

const requirements = [
  {
    id: 1,
    iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/ZekaGLBztN.png',
    title: 'Диплом о профильном образовании',
    description: 'Подтверждает вашу квалификацию и профессиональную подготовку в области психологии, психотерапии или медицины',
    hasBorder: true
  },
  {
    id: 2,
    iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/05e6opg2vy.png',
    title: 'Практический стаж от 3 лет',
    description: 'Мы ценим опыт, но открыты и для мотивированных специалистов с меньшим стажем — главное, чтобы была качественная база',
    hasBorder: true,
    isCustomIcon: true
  },
  {
    id: 3,
    iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/aAFRkLcZbU.png',
    title: 'Этика и ответственный подход',
    description: 'Нам важно, чтобы специалист действовал в интересах клиента, соблюдал границы и профессиональные стандарты',
    hasBorder: true
  },
  {
    id: 4,
    iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/oUnMA3ByBN.png',
    title: 'Желание помогать и развиваться',
    description: 'Мы ищем тех, ктоискренне вовлечён в свою работу и готов расти вместе с командой и сообществом.',
    hasBorder: false
  }
];
</script>
