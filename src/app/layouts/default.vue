<script lang="ts" setup>
import { AppHeader, AppSidebar, AppContent } from "~/widgets/layout"
import { ProfileModal, ProfilePasswordModal } from "~/features/profile"
import AppFooter from "~/widgets/layout/app-footer.vue"
</script>

<template>
  <div>
    <app-content>
      <template #header>
        <app-header />
      </template>

      <slot />

      <template #footer>
        <app-footer />
      </template>
    </app-content>
  </div>
</template>
