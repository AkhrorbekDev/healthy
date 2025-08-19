<script setup lang="ts">
import { ref } from "vue"

const expanded = ref(false)

const toggle = () => {
  expanded.value = !expanded.value
}
</script>

<template>
  <div class="specialization-list">
    <div class="items-wrapper" :class="{ expanded }">
      <slot></slot>
    </div>

    <ui-button class="w-fit " variant="link" icon-name="h-icon:arrow" @click="toggle">
      {{ expanded ? "Свернуть" : "Развернуть" }}
    </ui-button>
  </div>
</template>

<style scoped>
.specialization-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.items-wrapper {
  overflow: hidden;
  max-height: 158px; /* ~2 items */
  transition: max-height 0.3s ease;
}

.items-wrapper.expanded {
  max-height: 500px; /* big enough to fit all */
}

.toggle-btn {
  background: none;
  border: none;
  color: #35654d;
  cursor: pointer;
  font-size: 14px;
  text-align: left;
  padding: 0;
}
</style>
