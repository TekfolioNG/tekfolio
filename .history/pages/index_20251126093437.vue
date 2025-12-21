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
        'From business clarity to book publishing, Litera-Forge helps you transform ideas into lasting impact through expert consulting, coaching, and creative services.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://litera-forge.com' },
    { property: 'og:image', content: '/litera-forge-banner.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    {
      property: 'og:image:alt',
      content: 'Litera-Forge – Business Solutions, Publishing & Ghostwriting Services',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Litera-Forge | Business Solutions, Publishing & Ghostwriting Services',
    },
    {
      name: 'twitter:description',
      content:
        'Litera-Forge partners with founders, professionals, and authors to deliver clarity, strategy, and storytelling that drives growth and visibility.',
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
  <HomeClients />
  <HomeCta2></HomeCta2>
</template>