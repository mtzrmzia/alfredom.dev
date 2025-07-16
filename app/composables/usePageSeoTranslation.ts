export const usePageSeoTranslation = (pageKey: string) => {
  const { t, locale } = useI18n();

  watchEffect(() => {
    useSeoMeta({
      titleTemplate: 'Alfredo Martínez - %s',
      title: t(`meta.${pageKey}.title`),
      description: t(`meta.${pageKey}.description`),
      ogTitle: t(`meta.${pageKey}.ogTitle`),
      ogDescription: t(`meta.${pageKey}.ogDescription`),
      ogSiteName: 'Alfredo Martínez',
      ogType: 'website',
      ogUrl: 'https://alfredom.dev',
      ogImageAlt: 'Alfredo Martínez',
      ogLocale: locale.value.replace('-', '_'),
      ogImage: `https://alfredom.dev/_og?title=${encodeURIComponent(t(`meta.${pageKey}.title`))}&description=${encodeURIComponent(t(`meta.${pageKey}.ogDescription`))}&url=${pageKey}`,
      twitterTitle: t(`meta.${pageKey}.title`),
      twitterDescription: t(`meta.${pageKey}.ogDescription`),
      twitterImage: `https://alfredom.dev/_og?title=${encodeURIComponent(t(`meta.${pageKey}.title`))}&description=${encodeURIComponent(t(`meta.${pageKey}.ogDescription`))}&url=${pageKey}`,
      twitterCard: 'summary_large_image',
    });
  });
};
