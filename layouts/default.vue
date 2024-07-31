<template>
  <div class="h-full flex flex-col bg-primary-500">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Default',
});
</script>
