<template>
  <UButton
    color="white"
    variant="solid"
    class="w-full flex items-center justify-center"
    @click="copy(source)"
  >
    Email
  </UButton>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core';

defineOptions({
  name: 'CopyEmailButton',
});

const toast = useToast();
const source = ref('hello@alfredom.dev');

const { copy, copied } = useClipboard({
  source,
  legacy: true,
  copiedDuring: 500,
});

watch(copied, (value) => {
  if (value) {
    toast.add({
      description: 'Email copied to clipboard',
      icon: 'i-heroicons-check-circle',
      color: 'gray',
      timeout: 2500,
    });
  }
});
</script>
