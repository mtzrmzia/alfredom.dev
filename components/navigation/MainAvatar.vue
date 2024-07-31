<template>
  <ClientOnly>
    <NuxtImg
      :src="avatarName"
      format="webp"
      alt="alfredo-avatar"
      :class="[classes, 'rounded-full']"
      :placeholder="placeholder"
    />
  </ClientOnly>
</template>
<script setup lang="ts">
const colorMode = useColorMode();

defineProps({
  placeholder: {
    type: Boolean,
    default: false,
  },
  classes: {
    type: String,
    default: 'h-8 w-8',
  },
});

const avatarName = computed((): string =>
  colorMode.value === 'dark' ? '/avatar/me-dark.png' : '/avatar/me-light.png',
);
</script>
