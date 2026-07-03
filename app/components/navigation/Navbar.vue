<template>
  <header
    class="sticky top-0 z-10 border-b border-default bg-white/75 dark:bg-neutral-900/75 py-2 sm:py-3 backdrop-blur-lg h-15.5"
  >
    <div class="m-[0_auto] max-w-4xl px-6 sm:px-4">
      <nav class="flex items-center justify-between font-semibold">
        <NuxtLink to="/">
          <MainAvatar />
        </NuxtLink>
        <div class="flex flex-row-reverse gap-3 items-center sm:flex-row h-9">
          <ul class="hidden grid-flow-col gap-6 text-sm font-medium sm:grid">
            <li>
              <NuxtLink
                to="/about"
                class="text-neutral-900 dark:text-white hover:opacity-60 transition-opacity"
                exact-active-class="!text-primary"
              >
                {{ t('navigation.about.labelLink') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/photos"
                class="text-neutral-900 dark:text-white hover:opacity-60 transition-opacity"
                exact-active-class="!text-primary"
              >
                {{ t('navigation.photos.labelLink') }}
              </NuxtLink>
            </li>
          </ul>
          <UButton
            class="rounded-full sm:hidden"
            variant="ghost"
            color="neutral"
            size="md"
            trailing-icon="hugeicons:menu-03"
            aria-label="open sidebar"
            @click="sidebarIsOpen = true"
          />
          <ColorModeSelect />
          <LanguageSelect />
        </div>
      </nav>
    </div>
  </header>
  <SidebarMobile v-model="sidebarIsOpen" />
</template>

<script setup lang="ts">
defineOptions({
  name: 'Navbar',
});

const { t } = useI18n();
const sidebarIsOpen = ref(false);
</script>
