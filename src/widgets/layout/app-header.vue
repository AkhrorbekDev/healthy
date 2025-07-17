<script setup lang="ts">
import { ProfileMenu } from "~/features/profile"
import { AppLanguage, AppThemeSwitcher } from "~/features/layout"
import Logo from "~/shared/assets/Logo.svg"
</script>

<template>
  <header class="app-header">
    <div class="app-header-container">
      <nuxt-link-locale to="/">
        <logo class="h-[80px] w-[80px]" alt="Logo" />
      </nuxt-link-locale>

      <div class="flex items-center gap-[60px]">
        <nuxt-link-locale class="body-2 text-white" to="/specialisty">
          {{ $t("menu.specialisty") }}
        </nuxt-link-locale>
        <nuxt-link-locale class="body-2 text-white" to="/courses">
          {{ $t("menu.courses") }}
        </nuxt-link-locale>
        <nuxt-link-locale class="body-2 text-white" to="/blog">
          {{ $t("menu.blog") }}
        </nuxt-link-locale>
        <nuxt-link-locale class="body-2 text-white" to="/about">
          {{ $t("menu.about") }}
        </nuxt-link-locale>
      </div>

      <div class="app-header-right">
        <ui-icon-button
          class="!border-white !bg-transparent"
          variant="solid"
          mode="svg"
          icon-class="!stroke-white !fill-white"
          icon-name="h-icon:phone"
          href="+999999999999"
        />
        <ui-icon-button
          class="!border !border-white !bg-transparent"
          icon-class="!text-white !stroke-white"
          variant="solid"
          mode="svg"
          icon-name="h-icon:language"
        />
        <ui-button class="!bg-white/20 !text-white">
          {{ $t("menu.for_specialist") }}
        </ui-button>
        <ui-button color="primary">
          {{ $t("menu.for_specialist") }}
        </ui-button>
      </div>
    </div>
  </header>
</template>
