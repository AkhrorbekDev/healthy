<script setup lang="ts">
import { ProfileMenu } from "~/features/profile"
import { AppLanguage, AppThemeSwitcher } from "~/features/layout"
import Logo from "~/shared/assets/Logo.svg"
</script>

<template>
  <header class="app-header">
    <div class="app-header-container">
      <nuxt-link-locale to="/">
        <logo class="h-[65px] w-[65px] md:h-[80px] md:w-[80px]" alt="Logo" />
      </nuxt-link-locale>

      <div class="hidden items-center gap-[60px] md:flex">
        <nuxt-link-locale class="body-18 text-white" to="/specialisty">Специалисты</nuxt-link-locale>
        <nuxt-link-locale class="body-18 text-white" to="/courses">Курсы</nuxt-link-locale>
        <nuxt-link-locale class="body-18 text-white" to="/blog">О проекте</nuxt-link-locale>
        <nuxt-link-locale class="body-18 text-white" to="/about">Контакты</nuxt-link-locale>
        <nuxt-link-locale class="body-18 text-white" to="/blog">Блог</nuxt-link-locale>
      </div>

      <div class="app-header-right">
        <ui-icon-button
          class="!border-0 !border-white !bg-transparent md:border"
          variant="solid"
          mode="svg"
          icon-class="!stroke-white !fill-white"
          icon-name="h-icon:phone"
          href="+999999999999"
        />
        <ui-icon-button
          class="!border-0 !border-white !bg-transparent md:border"
          icon-class="!text-white !stroke-white"
          variant="solid"
          mode="svg"
          icon-name="h-icon:language"
        />
        <ui-icon-button
          class="block !border-0 !border-white !bg-transparent md:hidden md:border"
          icon-class="!text-white !stroke-white"
          variant="solid"
          mode="svg"
          icon-name="h-icon:menu"
        />
        <ui-button class="!hidden !bg-white/20 !text-white md:block">
          {{ $t("menu.for_specialist") }}
        </ui-button>
        <ui-button class="!hidden md:block" color="primary">
          {{ $t("menu.for_specialist") }}
        </ui-button>
      </div>
    </div>
  </header>
</template>
