<template>
  <div class="overflow-hidden rounded-[20px] border bg-gray-50">
    <div
      class="ui-accordion-header flex w-full cursor-pointer items-end justify-between border-b border-[#E8E8E8] p-[15px] md:items-center md:p-[25px]"
      @click="toggle"
    >
      <slot name="header"></slot>
      <icon
        class="min-h-[25px] min-w-[25px] rotate-90 md:h-[40px] md:w-[40px] ui-accordion-header__icon"
        name="h-icon:arrow"
        :class="{
          '!-rotate-90': active
        }"
      ></icon>
    </div>
    <transition name="fade">
      <div v-if="active">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue"

const active = ref(true)

const toggle = (index) => {
  active.value = !active.value
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
