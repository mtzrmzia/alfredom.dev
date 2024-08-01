<template>
  <NuxtImg
    :src="avatarName"
    format="webp"
    alt="alfredo-avatar"
    :class="[classes, 'rounded-full']"
    placeholder
  />
</template>
<script setup lang="ts">
const colorMode = useColorMode();

defineProps({
  classes: {
    type: String,
    default: 'h-8 w-8',
  },
});

const avatarName = computed((): string =>
  colorMode.value === 'dark' ? '/avatar/me-dark.png' : '/avatar/me-light.png',
);
</script>
