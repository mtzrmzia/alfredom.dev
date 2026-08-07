<script setup lang="ts">
defineOptions({ name: 'MainAvatar' });

defineProps({
  classes: {
    type: String,
    default: 'h-8 w-8',
  },
});
</script>

<template>
  <ColorModeImage
    alt="alfredo-avatar"
    light="/avatar/me-light.png"
    dark="/avatar/me-dark.png"
    :width="undefined"
    :height="undefined"
    :class="[classes, 'rounded-full']"
  />
</template>
