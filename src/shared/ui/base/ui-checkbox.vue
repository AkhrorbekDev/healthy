<script setup lang="ts" generic="T">
import type { InputHTMLAttributes, LabelHTMLAttributes } from "vue"

interface IProps {
  label?: string
  labelProps?: LabelHTMLAttributes
  inputProps?: InputHTMLAttributes & { "true-value"?: any; "false-value"?: any }
  labelClass?: string
  inputClass?: string
  value?: T
}

defineProps<IProps>()
const id = useId()
const model = defineModel<T>()
</script>

<template>
  <div class="flex w-full select-none items-center justify-start gap-2">
    <input
      v-bind="inputProps"
      v-model="model"
      class="ui-checkbox form-checkbox shrink-0"
      type="checkbox"
      :id="id"
      :value="value"
      :class="inputClass"
    />

    <label
      v-bind="labelProps"
      class="w-full cursor-pointer text-start font-['Onest'] text-mobile-subtitle-16 font-normal text-[#323232] md:text-body-17"
      :for="id"
      :class="labelClass"
    >
      {{ label }}
    </label>
  </div>
</template>
