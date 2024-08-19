<template>
  <div class="flex text-sm lowercase opacity-70 dark:opacity-60">
    <span class="block w-[62px] whitespace-nowrap">{{ date }}</span>
    <div class="flex gap-1.5">
      <span>·</span>
      <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://maps.apple.com/place?q=Le%C3%B3n&ll=21.1222267%2C-101.6632405&auid=5521045738737275844&lsp=7618&address=Le%C3%B3n%2C%20Gto.%2C%20M%C3%A9xico"
      >
        León, México
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TimeZoneTimer',
});

const date = ref('');

const updateDate = () => {
  date.value = new Date().toLocaleTimeString('es-MX', {
    timeZone: 'America/Mexico_City',
    hour12: false,
  });
};

onMounted(() => {
  updateDate();
  const timer = setInterval(updateDate, 500);
  onUnmounted(() => clearInterval(timer));
});
</script>
