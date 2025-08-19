<script setup lang="ts">
import { ProfileMenu } from "~/features/profile"
import { AppLanguage, AppThemeSwitcher } from "~/features/layout"
import Logo from "~/shared/assets/Logo.svg"
import AppMenu from "~/widgets/layout/app-menu.vue"

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}
const localePath = useLocalePath()

const showMenu = ref(false)

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
  <header :class="['app-header', { 'app-header--scrolled': isScrolled }]">
    <div class="app-header-container">
      <nuxt-link-locale to="/">
        <logo
          class="h-[65px] w-[65px] md:h-[80px] md:w-[80px]"
          alt="Logo"
          :class="{
            'text-white': !isScrolled,
            'text-green-500': isScrolled
          }"
        />
      </nuxt-link-locale>

      <div class="hidden items-center gap-[60px] md:flex">
        <nuxt-link-locale
          class="text-body-18"
          to="/specialisty"
          :class="{
            'text-white': !isScrolled,
            'text-[#585958]': isScrolled
          }"
        >
          Специалисты
        </nuxt-link-locale>
        <nuxt-link-locale
          class="text-body-18"
          to="/courses"
          :class="{
            'text-white': !isScrolled,
            'text-[#585958]': isScrolled
          }"
        >
          Курсы
        </nuxt-link-locale>
        <nuxt-link-locale
          class="text-body-18"
          to="/about"
          :class="{
            'text-white': !isScrolled,
            'text-[#585958]': isScrolled
          }"
        >
          О проекте
        </nuxt-link-locale>
        <nuxt-link-locale
          class="text-body-18"
          to="/contacts"
          :class="{
            'text-white': !isScrolled,
            'text-[#585958]': isScrolled
          }"
        >
          Контакты
        </nuxt-link-locale>
        <nuxt-link-locale
          class="text-body-18"
          to="/blog"
          :class="{
            'text-white': !isScrolled,
            'text-[#585958]': isScrolled
          }"
        >
          Блог
        </nuxt-link-locale>
      </div>

      <div class="app-header-right">
        <a
          class="flex items-center justify-center rounded-[15px] !border-0 md:h-[50px] md:w-[50px] md:!border"
          href="+999999999999"
          :class="{
            '!border-white text-white': !isScrolled,
            '!border-[#E8E8E8] text-green-500': isScrolled
          }"
        >
          <icon
            class="text-[25px]"
            name="h-icon:phone"
            :class="{
              'text-white': !isScrolled,
              'text-green-500': isScrolled
            }"
          ></icon>
        </a>
        <app-language :is-scrolled="isScrolled" />
        <!--        <ui-button-->
        <!--          class="rounded-[15px] !border-0 !p-0 md:h-[50px] md:w-[50px] md:!border"-->
        <!--          variant="outline"-->
        <!--          :class="{-->
        <!--            '!border-white': !isScrolled,-->
        <!--            '!border-[#E8E8E8] text-green-500': isScrolled-->
        <!--          }"-->
        <!--        >-->
        <!--          <icon-->
        <!--            class="text-[25px]"-->
        <!--            name="h-icon:language"-->
        <!--            :class="{-->
        <!--              'text-white': !isScrolled,-->
        <!--              'text-green-500': isScrolled-->
        <!--            }"-->
        <!--          ></icon>-->
        <!--        </ui-button>-->
        <ui-button
          class="!flex rounded-[15px] !border-0 !border-white !p-0 md:!hidden md:h-[50px] md:w-[50px] md:!border"
          variant="outline"
          @click="showMenu = !showMenu"
        >
          <icon
            class="text-[25px]"
            name="h-icon:menu"
            :class="{
              'text-white': !isScrolled,
              'text-[#585958]': isScrolled
            }"
          ></icon>
        </ui-button>
        <ui-button
          :to="localePath('/for-psychologists')"
          class="!hidden md:!block"
          :class="{
            '!bg-white/20 !text-white': !isScrolled,
            '!bg-[#63845C33] !text-green-500': isScrolled
          }"
        >
          {{ $t("labels.for_specialist") }}
        </ui-button>
        <ui-button
          class="!hidden md:!block"
          :class="{
            '!bg-white !text-green-500': !isScrolled,
            '!bg-green-500 !text-white': isScrolled
          }"
        >
          {{ $t("actions.sign") }}
        </ui-button>
      </div>
    </div>
    <app-menu :is-menu-open="showMenu"></app-menu>
  </header>
</template>
