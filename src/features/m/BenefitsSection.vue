<template>
  <section class="mt-[80px]">
    <div class="relative z-[102] mb-0 ml-[16px] mr-0 flex w-[328px] flex-col flex-nowrap items-start gap-[10px]">
      <h2
        class="relative z-[103] h-[41px] shrink-0 basis-auto self-stretch whitespace-nowrap text-left font-['Onest'] text-[32px] font-semibold leading-[40.8px] text-[#323232]"
      >
        Вы получите
      </h2>
      <p
        class="relative z-[104] flex h-[76px] w-[328px] shrink-0 items-start justify-start self-stretch text-left font-['Onest'] text-[15px] font-normal leading-[19.125px] text-[#585958]"
      >
        Мы создаём профессиональную и поддерживающую среду, где вы можете расти, развиваться и помогать другим с
        уверенностью
      </p>
    </div>
    <div
      class="relative z-[72] mb-0 ml-[16px] mr-0 mt-[30px] flex w-[328px] flex-col flex-nowrap items-start justify-center gap-[10px]"
    >
      <benefit-card
        icon-url="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/h4JqYXCqpM.png"
        title="Гибкий график"
        description="Консультируйте в удобное для себя время, онлайн или офлайн"
      />
      <benefit-card
        icon-url="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/QCGSaq8Lhw.png"
        title="Админ-поддержка"
        description="Мы берём на себя запись, коммуникации и организацию"
      />
      <benefit-card
        icon-url="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/uByrDNKFu5.png"
        title="Продвижение"
        description="Мы инвестируем в рекламу и усиливаем вашу экспертизу"
      />
      <benefit-card
        icon-url="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/o4VjdwFoxd.png"
        title="Обучение"
        description="Доступ к авторским курсам и возможностям роста"
      />
      <benefit-card
        icon-url="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/fCsjBiPgug.png"
        title="Этичная среда"
        description="Профессиональное сообщество под кураторством Санджара Акбаровича"
      />
      <div class="relative z-[99] h-[209px] shrink-0 self-stretch rounded-[15px] bg-[#6f8f6e] text-[0px]">
        <h3
          class="relative z-[100] mb-0 ml-[15px] mr-0 mt-[15px] flex h-[78px] w-[178px] items-start justify-start text-left font-['Onest'] text-[20px] font-semibold leading-[25.5px] text-[#fff]"
        >
          Всё, чтобы вы чувствовали себя уверенно
        </h3>
        <div
          class="absolute bottom-0 right-0 z-[101] h-[209px] w-[328px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-09/V4vzSFZxdB.png)] bg-cover bg-no-repeat"
        ></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import BenefitCard from "./BenefitCard.vue"
</script>
