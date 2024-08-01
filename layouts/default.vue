<template>
  <div class="h-full flex flex-col">
    <Navbar />
    <main>
      <div class="m-[0_auto] max-w-4xl px-6 sm:px-4">
        <slot />
      </div>
    </main>
    <FooterBottom />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Default',
});
</script>
