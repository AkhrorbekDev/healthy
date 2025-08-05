<script lang="ts" setup>
export interface IProps {
  size?: number
  stroke?: number
  offset?: number
  label?: string
  progress: string
}

const props = withDefaults(defineProps<IProps>(), { size: 56, stroke: 6, offset: 10 })

const circumference = ref(props.size * 2 * Math.PI)
const svgSize = computed(() => props.size * 2 + props.offset)
const coordinate = computed(() => props.size + props.offset / 2)
const circleRotate = computed(() => `rotate(-90, ${coordinate.value}, ${coordinate.value})`)
const dashoffset = computed(() => circumference.value - (+props.progress / 100) * circumference.value)
</script>

<template>
  <div class="relative grid select-none place-items-center overflow-hidden rounded-full bg-transparent">
    <svg :height="svgSize" :width="svgSize">
      <circle
        v-if="+progress"
        class="text-[#FFFFFF33] !text-opacity-30"
        fill="transparent"
        stroke="currentColor"
        :cx="coordinate"
        :cy="coordinate"
        :r="size"
        :stroke-width="stroke - 4"
      />
      <circle
        v-if="+progress"
        class="circle text-white"
        fill="transparent"
        stroke="currentColor"
        stroke-linecap="round"
        :cx="coordinate"
        :cy="coordinate"
        :r="size"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashoffset"
        :stroke-width="stroke"
        :transform="circleRotate"
      />
    </svg>

    <div class="absolute grid place-items-center">
      <p v-if="$slots.label" class="text-blue-command whitespace-nowrap text-center text-3xl font-bold leading-none">
        <slot name="label">
          {{ label }}
        </slot>
      </p>

      <p v-else class="text-blue-command text-3xl font-bold">{{ progress }}%</p>
    </div>
  </div>
</template>

<style lang="css">
.circle {
  transition: stroke-dashoffset 1s ease-in-out;
}
</style>
