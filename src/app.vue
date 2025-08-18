<script setup lang="ts">
import { useSiteSettingsApi } from "~/api/site-settings/api"
import { useSiteSettingsStore } from "~/entities/site-settings/site-settings.store"

const { t } = useI18n()
const siteSettingsApi = useSiteSettingsApi()
const siteSettingsStore = useSiteSettingsStore()

const { data, error } = await useAsyncData("app", async () => {
  const request = [siteSettingsApi.getSiteSettings()]

  return await Promise.all(request)
})
const [siteSettings] = data.value || []

onMounted(() => {
  console.log("App mounted, site settings:", siteSettings?.data)
  siteSettingsStore.siteSettings.value = siteSettings?.data
})

useHead({ titleTemplate: (title) => (title ? `${title} | ${t("labels.app_name")}` : t("labels.app_name")) })
</script>

<template>
  <app-root />
</template>
