<script setup lang="ts">
import { breakpointsMasterCss } from "@vueuse/core/index"
import ForPsychologistD from "~/pages/for-psychologist-d.vue"
import ForPsychologistM from "~/pages/for-psychologist-m.vue"

const breakpoints = useBreakpoints(breakpointsMasterCss)
const isMobile = breakpoints.smallerOrEqual("sm")
</script>

<template>
  <for-psychologist-m v-if="isMobile"></for-psychologist-m>
  <for-psychologist-d v-else></for-psychologist-d>
</template>

<style scoped></style>
