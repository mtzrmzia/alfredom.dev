<template>
  <CustomDropdown
    icon="hugeicons:language-skill"
    :items="items"
    :key-label="keyLabel"
    aria-label="select language"
  />
</template>

<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n';

defineOptions({
  name: 'LanguageSelect',
});

const { locale, locales, setLocale } = useI18n();

const items = computed(() => {
  return locales.value.map((locale: LocaleObject) => ({
    label: locale.name || '',
    labelClass: locale.code,
    click: () => setLanguage(locale),
  }));
});

function setLanguage(locale: LocaleObject) {
  setLocale(locale.code);
}

const keyLabel = computed((): string => {
  return locale.value;
});
</script>
