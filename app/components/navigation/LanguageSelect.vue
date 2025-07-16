<script setup lang="ts">
import type { DropdownMenuItem } from '#ui/types';
import type { LocaleObject } from '@nuxtjs/i18n';

defineOptions({
  name: 'LanguageSelect',
});

const { locale, locales, setLocale } = useI18n();

const items = computed<DropdownMenuItem[]>(() => {
  return locales.value.map((locale: LocaleObject) => ({
    label: locale.name || '',
    class: locale.code,
    onSelect: () => setLanguage(locale),
  }));
});

function setLanguage(locale: LocaleObject) {
  setLocale(locale.code);
}

const keyLabel = computed((): string => {
  return locale.value;
});
</script>

<template>
  <CustomDropdown
    icon="hugeicons:language-skill"
    :items="items"
    :key-label="keyLabel"
    aria-label="select language"
  />
</template>
