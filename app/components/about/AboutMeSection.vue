<script setup lang="ts">
defineOptions({
  name: 'AboutMeSection',
});

const { t } = useI18n();
</script>

<template>
  <section>
    <h1 class="my-6 text-3xl font-semibold">
      {{ t('about.main.title') }}
    </h1>
    <div class="flex flex-col space-y-5">
      <i18n-t keypath="about.main.p1.text" tag="p" scope="global">
        <template #hey>
          <em>{{ t('about.main.p1.hey') }}</em>
        </template>
        <template #been>
          {{ t('about.main.p1.been') }}
        </template>
      </i18n-t>

      <i18n-t keypath="about.main.p2.text" tag="p" scope="global">
        <template #bitlanlab>
          <NuxtLink
            to="https://www.bitlanlab.com"
            target="_blank"
            rel="noopener noreferrer"
            class="underline underline-offset-2"
          >
            {{ t('about.main.p2.bitlanlab') }}
          </NuxtLink>
        </template>
        <template #dondecafe>
          <NuxtLink
            to="https://dondecafe.com"
            target="_blank"
            rel="noopener noreferrer"
            class="underline underline-offset-2"
          >
            {{ t('about.main.p2.dondecafe') }}
          </NuxtLink>
        </template>
        <template #charly>
          <NuxtLink
            to="https://www.charly.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="underline underline-offset-2"
          >
            {{ t('about.main.p2.charly') }}
          </NuxtLink>
        </template>
        <template #pemex>
          <NuxtLink
            to="https://www.pemex.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="underline underline-offset-2"
          >
            {{ t('about.main.p2.pemex') }}
          </NuxtLink>
        </template>
        <template #devSalsa>
          <NuxtLink
            to="https://devsalsa.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="underline underline-offset-2"
          >
            {{ t('about.main.p2.devSalsa') }}
          </NuxtLink>
        </template>
        <template #joinBrands>
          <NuxtLink
            to="https://joinbrands.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="underline underline-offset-2"
          >
            {{ t('about.main.p2.joinBrands') }}
          </NuxtLink>
        </template>
      </i18n-t>
      <p>
        {{ t('about.main.p3') }}
      </p>
      <i18n-t keypath="about.main.p4.text" tag="p" scope="global">
        <template #travelling>
          <NuxtLink class="underline underline-offset-2" to="/photos">
            {{ t('about.main.p4.travelling') }}
          </NuxtLink>
        </template>
      </i18n-t>
      <PhotosSlider />
    </div>
  </section>
</template>
