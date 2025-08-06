export const useSiteSettingsStore = defineStore("site-settings", () => {
  const siteSettings = ref<Record<string, any>>({})

  return {
    siteSettings
  }
})
