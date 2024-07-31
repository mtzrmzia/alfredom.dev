<template>
  <section class="my-12">
    <div class="m-[0_auto] max-w-4xl px-6 sm:px-4">
      <TimeZoneTimer />
      <div class="flex justify-between gap-8">
        <div>
          <h1 class="flex gap-2 pb-4 text-2xl">
            <span class="font-bold"> Hey, I'm Alfredo Martínez </span>
            <span class="inline-block origin-[70%_70%] animate-wave">👋🏾</span>
          </h1>
          <div class="grid gap-4">
            <p class="sm:max-w-md">
              I'm a software engineer and a web developer bases in México. I
              <NuxtLink
                to="https://github.com/mtzrmzia"
                target="_blank"
                class="underline"
              >
                code</NuxtLink
              >,
              <NuxtLink to="/blog" target="_blank" class="underline">
                write</NuxtLink
              >
              and create stunning digital products on the web.
            </p>
            <p class="sm:max-w-md">
              Obsessed with Vue, Nuxt and TailwindCSS ecosystem. Love helping to
              others developers to become FrontEnd experts. Currently at
              <NuxtLink
                to="https://github.com/mtzrmzia"
                target="_blank"
                class="underline"
              >
                Pemex </NuxtLink
              >.
            </p>
          </div>
        </div>
        <MainAvatar classes="sm:block hidden h-44 w-44" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Index',
});
</script>
