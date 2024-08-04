<template>
  <section>
    <h2 class="my-6 text-lg font-bold">
      {{ t('about.work.title') }}
    </h2>
    <div
      v-for="item in workItems"
      :key="item.position"
      class="flex items-start"
    >
      <NuxtImg
        :src="item.logo"
        fit="contain"
        width="42"
        height="42"
        format="webp"
        :placeholder="42"
        class="rounded-xl sm:block hidden"
        :alt="item.company"
      />
      <div class="flex grow flex-col">
        <NuxtLink
          :to="item.to"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-start pb-2 transition-opacity hover:opacity-50"
        >
          <div class="grow pb-3 sm:px-4">
            <p class="font-medium">{{ item.position }}</p>
            <p class="opacity-50">{{ item.company }}</p>
          </div>
          <span class="opacity-90">{{ item.time }}</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'WorkSection',
});

const { t } = useI18n();

const workItems = [
  {
    position: 'FrontEnd Web Engineer',
    company: 'Pemex',
    time: '2024 - Now',
    logo: '/about/work/pemex.svg',
    to: 'https://www.pemex.com/',
  },
  {
    position: 'FrontEnd Lead Developer',
    company: 'Dev Salsa',
    time: '2022 - 2024',
    logo: '/about/work/dev_salsa.svg',
    to: 'https://devsalsa.com/',
  },
  {
    position: 'Senior Frontend Developer',
    company: 'apithy',
    time: '2020 - 2022',
    logo: '/about/work/apithy.png',
    to: 'https://www.apithy.com/',
  },
  {
    position: 'FrontEnd Developer',
    company: 'Vocces',
    time: '2020 - 2020',
    logo: '/about/work/vocces.jpeg',
    to: 'http://www.vocces.com/',
  },
  {
    position: 'Project Coordinator',
    company: 'Future Lab',
    time: '2019 - 2024',
    logo: '/about/work/future_lab.png',
    to: 'https://futurelab.mx/',
  },
  {
    position: 'Software QA Analyst',
    company: 'Andrea',
    time: '2017 - 2019',
    logo: '/about/work/calzado_andrea.svg',
    to: 'https://mx.andrea.com/',
  },
];
</script>
