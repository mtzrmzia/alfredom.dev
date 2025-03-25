export const usePageSeoTranslation = (pageKey: string) => {
  const { t, locale } = useI18n();

  const setMeta = () => {
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
    });
  };

  watch(locale, setMeta, { immediate: true });
};
