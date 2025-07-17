<script setup lang="ts">
</script>

<template>
  <div class="duration-300 ease-in-out">
    <div class="app-content">
      <slot name="header" />

      <main>
        <slot />
      </main>

      <slot name="footer" />
    </div>
  </div>
</template>
