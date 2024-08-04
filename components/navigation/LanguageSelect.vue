<template>
  <ClientOnly>
    <UDropdown
      :items="languages"
      :popper="{
        placement: 'bottom-start',
        arrow: true,
      }"
      :ui="{ width: 'w-auto', padding: 'p-2', rounded: 'rounded-xl' }"
    >
      <UButton
        class="rounded-full"
        variant="ghost"
        color="gray"
        size="md"
        trailing-icon="hugeicons:language-skill"
      />
      <template #item="{ item }">
        <div class="py-0.5 pl-10 relative pr-2">
          <div class="absolute flex inset-y-0 items-center left-0 pl-2">
            <UIcon
              v-if="isSelected(item.class)"
              name="heroicons:check-16-solid"
              class="w-5 h-5"
            />
          </div>
          <span
            :class="[isSelected(item.class) ? 'font-semibold' : 'font-normal']"
            class="truncate"
          >
            {{ item.label }}
          </span>
        </div>
      </template>
    </UDropdown>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n';

defineOptions({
  name: 'LanguageSelect',
});

const { locale, locales, setLocale } = useI18n();

const languages = [
  locales.value.map((locale: LocaleObject) => ({
    label: locale.name,
    class: locale.code,
    click: () => setLanguage(locale),
  })),
];

function setLanguage(locale: LocaleObject) {
  setLocale(locale.code);
}

function isSelected(value: string) {
  return locale.value === value;
}
</script>
