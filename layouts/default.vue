<template>
  <div class="h-full flex flex-col">
    <Navbar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Default',
});
</script>
