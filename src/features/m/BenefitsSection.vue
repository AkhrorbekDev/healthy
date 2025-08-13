<template>
  <section class="mt-[80px]">
    <div
      class="flex w-[328px] flex-col gap-[10px] items-start flex-nowrap relative z-[102] mr-0 mb-0 ml-[16px]"
    >
      <h2
        class="h-[41px] self-stretch shrink-0 basis-auto font-['Onest'] text-[32px] font-semibold leading-[40.8px] text-[#323232] relative text-left whitespace-nowrap z-[103]"
      >
        Вы получите
      </h2>
      <p
        class="flex w-[328px] h-[76px] justify-start items-start self-stretch shrink-0 font-['Onest'] text-[15px] font-normal leading-[19.125px] text-[#585958] relative text-left z-[104]"
      >
        Мы создаём профессиональную и поддерживающую среду, где вы можете
        расти, развиваться и помогать другим с уверенностью
      </p>
    </div>
    <div
      class="flex w-[328px] flex-col gap-[10px] justify-center items-start flex-nowrap relative z-[72] mt-[30px] mr-0 mb-0 ml-[16px]"
    >
      <BenefitCard
        icon-url="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/h4JqYXCqpM.png"
        title="Гибкий график"
        description="Консультируйте в удобное для себя время, онлайн или офлайн"
      />
      <BenefitCard
        icon-url="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/QCGSaq8Lhw.png"
        title="Админ-поддержка"
        description="Мы берём на себя запись, коммуникации и организацию"
      />
      <BenefitCard
        icon-url="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/uByrDNKFu5.png"
        title="Продвижение"
        description="Мы инвестируем в рекламу и усиливаем вашу экспертизу"
      />
      <BenefitCard
        icon-url="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/o4VjdwFoxd.png"
        title="Обучение"
        description="Доступ к авторским курсам и возможностям роста"
      />
      <BenefitCard
        icon-url="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/fCsjBiPgug.png"
        title="Этичная среда"
        description="Профессиональное сообщество под кураторством Санджара Акбаровича"
      />
      <div
        class="h-[209px] self-stretch shrink-0 text-[0px] bg-[#6f8f6e] rounded-[15px] relative z-[99]"
      >
        <h3
          class="flex w-[178px] h-[78px] justify-start items-start font-['Onest'] text-[20px] font-semibold leading-[25.5px] text-[#fff] relative text-left z-[100] mt-[15px] mr-0 mb-0 ml-[15px]"
        >
          Всё, чтобы вы чувствовали себя уверенно
        </h3>
        <div
          class="w-[328px] h-[209px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/V4vzSFZxdB.png)] bg-cover bg-no-repeat absolute bottom-0 right-0 z-[101]"
        ></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import BenefitCard from './BenefitCard.vue';
</script>
