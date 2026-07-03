<script setup lang="ts">
import { useClipboard } from '@vueuse/core';

defineOptions({
  name: 'CopyEmailButton',
});

const toast = useToast();
const { t } = useI18n();
const source = ref('hello@alfredom.dev');

const { copy, copied } = useClipboard({
  source,
  legacy: true,
  copiedDuring: 500,
});

watch(copied, (value) => {
  if (value) {
    toast.add({
      description: t('about.online.copyEmailToast'),
      icon: 'i-heroicons-check-circle',
      color: 'primary',
      duration: 1500,
      close: false,
    });
  }
});
</script>

<template>
  <UButton
    color="neutral"
    variant="outline"
    icon="i-ri-mail-line"
    class="w-full flex items-center justify-center"
    @click="copy(source)"
  >
    Email
  </UButton>
</template>
