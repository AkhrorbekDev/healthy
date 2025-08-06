<script setup lang="ts">
import { useBlogApi } from "~/entities/blog/blog.api"

const { t } = useI18n()
const blogApi = useBlogApi()
const route = useRoute()
const { data, error, refresh } = await useAsyncData("posts", () => blogApi.getBlogList(route.query), { server: true })

showError(new Error("Internal error"), { statusCode: 500, fatal: true })

useHead({ titleTemplate: (title) => (title ? `${title} | ${t("labels.app_name")}` : t("labels.app_name")) })
</script>

<template>
  <app-root />
</template>
