<template>
  <NuxtImg
    src="/avatar/me-light.png"
    format="webp"
    alt="alfredo-avatar"
    :class="[classes, 'rounded-full']"
    loading="lazy"
  />
</template>
<script setup lang="ts">
defineProps({
  classes: {
    type: String,
    default: 'h-8 w-8',
  },
});
</script>
