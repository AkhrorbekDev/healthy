<script setup lang="ts">
import UiInput from "./ui-input.vue"

interface IProps {
  iconName?: string
  iconClass?: string
  placeholder?: string
}

withDefaults(defineProps<IProps>(), {
  iconName: "iconamoon:search-duotone",
  iconClass: "text-lg text-gray-400"
})

const model = defineModel<string>()
const emit = defineEmits(["enter"])
const id = useId()

const canClear = computed(() => !!model.value)

const onClear = () => {
  model.value = ""
  emit("enter")
}
</script>

<template>
  <div class="ui-input-group ui-search-input">
    <ui-input
      v-model="model"
      v-bind="$attrs"
      autocomplete="off"
      :id="id"
      :placeholder="placeholder || $t('placeholders.search')"
      @keydown.enter="$emit('enter')"
    />
    <label v-if="!canClear && iconName" class="w-9" :for="id">
      <icon :class="iconClass" :name="iconName" />
    </label>

    <button v-show="canClear" class="w-9" @click="onClear">
      <icon class="text-lg text-gray-400" name="lucide:x" />
    </button>
  </div>
</template>

<style>
.ui-search-input {
  @apply !h-full w-full !rounded-[100px] !border-0 !bg-[#fff] !px-[15px] py-[12px] font-['Onest'] !text-mobile-body-15 !font-medium text-[#585958] md:!h-auto md:!px-[25px] md:py-[18px] md:!text-body-18;

  .ui-input {
    @apply !h-full !w-full !border-0 !bg-transparent !px-0 !py-0;
    @apply focus:border-transparent focus:ring-0;
  }
}
</style>
