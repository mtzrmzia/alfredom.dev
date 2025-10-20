<template>
  <div
    class="bg-white px-24 py-20 font-sans text-black flex flex-col justify-between"
  >
    <img
      src="https://ik.imagekit.io/alfredom/avatar/me-dark.png"
      alt="avatar"
      class="w-24 h-24 rounded-full object-cover"
    />
    <div class="flex flex-col gap-2">
      <h1 class="text-[64px] font-extrabold leading-tight">
        {{ title }}
      </h1>
      <p class="text-[32px] leading-snug">
        {{ description }}
      </p>
    </div>
    <p class="text-[28px] font-mono text-black">{{ formattedUrl }}</p>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'CustomOgImage',
});

const props = defineProps<{
  title: string;
  description: string;
  url?: string;
}>();

const formattedUrl = computed(() =>
  props.url ? `alfredom.dev/${props.url}` : 'alfredom.dev',
);
</script>
