<template>
  <transition name="slide-right">
    <div v-if="isMenuOpen" class="mobile-menu">
      <ul class="mobile-menu__content">
        <nuxt-link class="mobile-menu__item" to="/specialisty">Специалисты</nuxt-link>
        <nuxt-link class="mobile-menu__item" to="/courses">Курсы</nuxt-link>
        <nuxt-link class="mobile-menu__item" to="/blog">О проекте</nuxt-link>
        <nuxt-link class="mobile-menu__item" to="/about">Контакты</nuxt-link>
        <nuxt-link class="mobile-menu__item" to="/blog">Блог</nuxt-link>
      </ul>
      <div class="mt-[100%] flex w-full flex-col gap-[10px]">
        <ui-button>Записаться</ui-button>
        <ui-button class="!bg-[#63845C33] !text-green-500" @click="$router.push('/specialisty')">Специалистам</ui-button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue"

interface IProps {
  isMenuOpen: boolean
}

defineProps<IProps>()

// Toggle isMenuOpen to show/hide menu
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0);
}

.mobile-menu {
  position: absolute;
  top: 100%;
  right: 0;
  width: 100vw;
  height: calc(100vh - 60px);

  background: white;
  z-index: 1000;
  padding: 30px 16px;
  /* Add padding, shadow, etc. as needed */

  @apply flex w-full flex-col items-start justify-between;
}

.mobile-menu__content {
  display: grid;
  width: 100%;
  gap: 20px;
}

.mobile-menu__item {
  @apply pb-4 text-mobile-body-17 font-normal text-[#323232];
  @apply border-b border-solid border-b-[#e0e5e3];
}
</style>
