<script setup lang="ts">
definePageMeta({
  layout: "home"
});

useHead({
  title: 'Tekfolio | Custom Software & Web Development in Nigeria',
  meta: [
    {
      name: 'description',
      content:
        'Get ahead with fast, modern custom web apps, mobile development, and secure cloud solutions. Tekfolio is Nigeria’s trusted partner for scalable digital experiences built for performance and growth.',
    },
    {
      name: 'keywords',
      content:
        'custom software development nigeria, mobile app development nigeria, custom website development nigeria, creative coding studio nigeria, cloud solutions nigeria, SEO agency nigeria, code camp nigeria, digital training nigeria, organic traffic google nigeria, coding academy nigeria',
    },
    {
      property: 'og:title',
      content: 'Tekfolio | Custom Software & Web Development in Nigeria',
    },
    {
      property: 'og:description',
      content:
        'Cross-platform mobile apps engineered for performance and designed for seamless user experiences. We build mobile products that feel natural, work reliably, and deliver the features your users value most.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://tekfolio.ng' },
    { property: 'og:image', content: '/litera-forge-banner.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    {
      property: 'og:image:alt',
      content: 'Tekfolio | Custom Software & Web Development in Nigeria',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Tekfolio | Custom Software & Web Development in Nigeria',
    },
    {
      name: 'twitter:description',
      content:
        'Get ahead with fast, modern custom web apps, mobile development, and secure cloud solutions. Tekfolio is Nigeria’s trusted partner for scalable digital experiences built for performance and growth.',
    },
    { name: 'twitter:image', content: '/litera-forge-banner.jpg' },
  ],
});





</script>

<template>
  <HomeContainer>
    <HomeHero />
  </HomeContainer>
  <HomePreview />
  <HomeServices />
  <HomeGlobe />
  <HomeTech />
  <HomeClients />
  <HomeCta2></HomeCta2>
</template>