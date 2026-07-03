<script setup lang="ts">
defineOptions({
  name: 'FeaturedProjectsSection',
});

const { t } = useI18n();

const projects = [
  {
    name: 'Dondecafe',
    descriptionKey: 'home.projects.dondecafe.description',
    imageLight: '/projects/dondecafe_light.png',
    url: 'https://dondecafe.com',
    tags: [
      { label: 'Nuxt', icon: 'devicon:nuxt' },
      { label: 'Vue', icon: 'devicon:vuejs' },
      { label: 'TailwindCSS', icon: 'devicon:tailwindcss' },
      { label: 'Laravel', icon: 'devicon:laravel' },
      { label: 'Vercel', icon: 'devicon:vercel' },
      { label: 'MySQL', icon: 'devicon:mysql' },
    ],
  },
];
</script>

<template>
  <section class="my-12">
    <h2 class="mb-6 text-2xl font-semibold">
      {{ t('home.projects.title') }}
    </h2>
    <div class="grid gap-6 sm:grid-cols-2">
      <div
        v-for="project in projects"
        :key="project.name"
        class="group overflow-hidden rounded-lg border border-default"
      >
        <div
          class="aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900"
        >
          <NuxtImg
            :src="project.imageLight"
            :alt="project.name"
            width="600"
            height="338"
            format="webp"
            fit="cover"
            class="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>
        <div class="p-4">
          <div class="flex items-start justify-between gap-2">
            <p class="font-medium">{{ project.name }}</p>
            <UTooltip :text="t('home.projects.openWeb')" :delay-duration="100">
              <UButton
                :to="project.url"
                target="_blank"
                rel="noopener noreferrer"
                icon="i-heroicons-globe-alt"
                color="neutral"
                variant="ghost"
                size="lg"
                square
                :aria-label="t('home.projects.openWeb')"
              />
            </UTooltip>
          </div>
          <p class="mt-1 text-sm opacity-70">
            {{ t(project.descriptionKey) }}
          </p>
          <div class="mt-3 flex flex-wrap gap-3">
            <UIcon
              v-for="tag in project.tags"
              :key="tag.label"
              :name="tag.icon"
              :aria-label="tag.label"
              class="size-5"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
