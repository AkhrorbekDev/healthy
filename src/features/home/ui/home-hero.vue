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
    <div class="post-hero__background" data-rellax-speed="-5">
      <img alt="Background" :src="background" />
    </div>

    <!--  Content  -->
    <div class="post-hero__content max-w-screen-2xl">
      <div class="max-w-[832px]">
        <h1 class="post-hero__title headline mb-[15px]">{{ title }}</h1>
        <p class="post-hero__description body">{{ description }}</p>
      </div>
      <div class="mt-[50px] flex gap-[15px]">
        <ui-button :to="specialistsLink">
          {{ t("select_specialist") }}
        </ui-button>
        <ui-button class="!border-white !bg-transparent" variant="outline" :to="coursesLink">
          {{ t("select_course") }}
        </ui-button>
      </div>
    </div>
  </div>
</template>

<style>
.post-hero {
  @apply relative flex min-h-[820px] flex-col overflow-hidden transition-all duration-500 ease-in-out;

  &__background {
    @apply absolute inset-0 -z-10 bg-green-500;

    img {
      @apply h-full w-full object-cover object-center opacity-60;
    }
  }

  &__title {
    @apply font-semibold text-white;
  }

  &__description {
    @apply max-w-[588px] font-normal text-white;
  }

  &__content {
    @apply z-10 mx-auto grid w-full grow content-center items-center px-4;

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
