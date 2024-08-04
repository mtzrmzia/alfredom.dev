<template>
  <section>
    <h1 class="my-6 text-xl font-bold">
      {{ t('about.main.title') }}
    </h1>
    <div class="flex flex-col space-y-5">
      <Translation keypath="about.main.p1.text" tag="p">
        <em> {{ t('about.main.p1.hey') }}</em>
        {{ t('about.main.p1.been') }}
      </Translation>

      <Translation keypath="about.main.p2.text" tag="p">
        <NuxtLink
          to="https://www.pemex.com/Paginas/default.aspx"
          target="_blank"
          rel="noopener noreferrer"
          class="underline underline-offset-2"
        >
          {{ t('about.main.p2.pemex') }}
        </NuxtLink>
        {{ t('about.main.p2.pemexWork') }}
        {{ t('about.main.p2.before') }}
        <NuxtLink
          to="https://devsalsa.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="underline underline-offset-2"
        >
          {{ t('about.main.p2.devSalsa') }}
        </NuxtLink>
        {{ t('about.main.p2.building') }}
        <NuxtLink
          to="https://joinbrands.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="underline underline-offset-2"
        >
          {{ t('about.main.p2.joinBrands') }}
        </NuxtLink>
        {{ t('about.main.p2.joinBrandsWork') }}
      </Translation>
      <p>
        {{ t('about.main.p3') }}
      </p>
      <p>
        {{ t('about.main.p4') }}
      </p>
      <Translation keypath="about.main.p5.text" tag="p">
        <NuxtLink class="underline underline-offset-2" to="/photos">
          {{ t('about.main.p5.travelling') }}
        </NuxtLink>
      </Translation>
      <PhotosSlider />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Translation } from 'vue-i18n';

defineOptions({
  name: 'AboutMeSection',
});

const { t } = useI18n();
</script>
