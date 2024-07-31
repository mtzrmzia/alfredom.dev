<template>
  <header
    class="sticky top-0 z-10 border-b border-solid border-gray-100 bg-white/75 py-2 dark:border-gray-900 dark:bg-black/75 sm:py-3 backdrop-blur-xl h-[61px]"
  >
    <div class="m-[0_auto] max-w-4xl px-6 sm:px-4">
      <nav class="flex items-center justify-between font-semibold">
        <NuxtLink to="/">
          <MainAvatar />
        </NuxtLink>
        <div
          class="flex flex-row-reverse gap-3 items-center sm:flex-row sm:gap-4 h-[36px]"
        >
          <ul class="hidden grid-flow-col gap-6 text-sm font-medium sm:grid">
            <li>
              <NuxtLink
                to="/"
                class="text-gray-900 dark:text-white hover:opacity-60 transition-opacity"
              >
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/"
                class="text-gray-900 dark:text-white hover:opacity-60 transition-opacity"
              >
                Blog
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/"
                class="text-gray-900 dark:text-white hover:opacity-60 transition-opacity"
              >
                Photos
              </NuxtLink>
            </li>
          </ul>
          <UButton
            class="rounded-full sm:hidden"
            variant="ghost"
            color="gray"
            size="md"
            trailing-icon="solar:hamburger-menu-line-duotone"
            @click="sidebarIsOpen = true"
          />
          <ColorModeSelect />
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

const sidebarIsOpen = ref(false);
</script>
