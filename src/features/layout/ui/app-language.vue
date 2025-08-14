<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

interface IProps {
  isScrolled?: boolean
}

defineProps<IProps>()
</script>

<template>
  <ui-dropdown :distance="16">
    <ui-button
      class="rounded-[15px] !border-0 !p-0 md:h-[50px] md:w-[50px] md:!border"
      variant="outline"
      :class="{
        '!border-white text-white': !isScrolled,
        '!border-[#E8E8E8] text-green-500': isScrolled
      }"
    >
      <icon
        class="text-[25px]"
        name="h-icon:language"
        :class="{
          'text-white': !isScrolled,
          'text-green-500': isScrolled
        }"
      ></icon>
    </ui-button>
    <template #body>
      <nuxt-link v-for="{ code, name } in locales" :key="code" :to="switchLocalePath(code)">
        <ui-dropdown-item :label="name" :color="locale === code ? 'primary' : 'secondary'" />
      </nuxt-link>
    </template>
  </ui-dropdown>
</template>
