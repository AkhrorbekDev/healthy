<script setup lang="ts">
import { useBlogApi } from "~/entities/blog/blog.api"

const { t } = useI18n()

useHead({ titleTemplate: (title) => (title ? `${title} | ${t("labels.app_name")}` : t("labels.app_name")) })
</script>

<template>
  <app-root />
</template>
