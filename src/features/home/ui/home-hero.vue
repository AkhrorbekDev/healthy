<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })

interface IProps {
  description: string
  title: string
  background: string
  specialistsLink: string
  coursesLink: string
}

defineProps<IProps>()
</script>

<template>
  <div class="post-hero">
    <!--  Background  -->
    <div class="post-hero__background">
      <img alt="Background" :src="background" />
    </div>

    <!--  Content  -->
    <div class="post-hero__content max-w-screen-2xl">
      <div class="max-w-[832px]">
        <h1 class="post-hero__title mb-[10px] text-mobile-headline-1 md:mb-[15px] md:text-headline-1">{{ title }}</h1>
        <p class="post-hero__description body-20">{{ description }}</p>
      </div>
      <div class="mt-[25px] flex flex-col gap-[15px] sm:flex-row md:mt-[50px]">
        <ui-button class="!bg-white !text-green-500" :to="specialistsLink">
          {{ t("select_specialist") }}
        </ui-button>
        <ui-button class="!border-white !bg-transparent !text-white" variant="outline" :to="coursesLink">
          {{ t("select_course") }}
        </ui-button>
      </div>
    </div>
  </div>
</template>

<style>
.post-hero {
  @apply relative flex min-h-[730px] flex-col overflow-hidden py-[30px] transition-all duration-500 ease-in-out md:min-h-[820px] md:py-0;

  &__background {
    @apply absolute inset-0 bg-green-500;

    img {
      @apply h-full w-full object-cover object-center;
    }
  }

  &__title {
    @apply font-semibold text-white;
  }

  &__description {
    @apply max-w-[588px] font-normal text-white;
  }

  &__content {
    @apply z-10 mx-auto grid w-full grow content-start items-center px-4 md:content-center;

    &-heading {
      @apply mb-6 text-4xl font-bold text-white;
    }

    &-text {
      @apply text-white lg:text-lg;
    }
  }
}
</style>

<i18n lang="json">
{
  "en": {
    "select_specialist": "Подобрать специалиста",
    "select_course": "Посмотреть курсы"
  },
  "ru": {
    "select_specialist": "Подобрать специалиста",
    "select_course": "Посмотреть курсы"
  },
  "uz": {
    "select_specialist": "Подобрать специалиста",
    "select_course": "Посмотреть курсы"
  }
}
</i18n>
