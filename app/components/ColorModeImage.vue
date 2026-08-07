<script setup lang="ts">
defineOptions({
  name: 'ColorModeImage',
  inheritAttrs: false,
});

interface Props {
  light: string;
  dark: string;
  imgClass?: string;
}

const props = defineProps<Props>();

const attrs = useAttrs();

const imageAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;

  return rest;
});

const imageClass = computed(() => attrs.class);
</script>

<template>
  <span :class="['block', imageClass]">
    <NuxtImg
      v-bind="imageAttrs"
      :src="light"
      :class="['size-full dark:hidden', props.imgClass]"
      placeholder
    />
    <NuxtImg
      v-bind="imageAttrs"
      :src="dark"
      :class="['size-full hidden dark:block', props.imgClass]"
      placeholder
    />
  </span>
</template>
