<template>
  <CustomDropdown
    :icon="iconMode"
    :items="items"
    :key-label="keyLabel"
    aria-label="select color mode"
  />
</template>

<script setup lang="ts">
import { useFavicon } from '@vueuse/core';

defineOptions({
  name: 'ColorModeSelect',
});
const colorMode = useColorMode();
const { t } = useI18n();

const iconMode = computed((): string => {
  return colorMode.value === 'light' ? 'hugeicons:sun-03' : 'hugeicons:moon-02';
});

const favicon = computed((): string =>
  colorMode.value === 'dark' ? '/favicon-dark.png' : '/favicon-light.png',
);

const keyLabel = computed((): string => {
  return colorMode.preference;
});
const items = computed(() => {
  return [
    {
      label: t('navigation.colorMode.system'),
      labelClass: 'system',
      click: () => {
        colorMode.preference = 'system';
      },
    },
    {
      label: t('navigation.colorMode.light'),
      labelClass: 'light',
      click: () => {
        colorMode.preference = 'light';
      },
    },
    {
      label: t('navigation.colorMode.dark'),
      labelClass: 'dark',
      click: () => {
        colorMode.preference = 'dark';
      },
    },
  ];
});

useSeoMeta({
  icon: favicon,
});

useFavicon(favicon);
</script>
