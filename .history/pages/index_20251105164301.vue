<script setup lang="ts">
definePageMeta({
  layout: "home"
});

useHead({
  title: 'Litera-Forge | Business Solutions, Publishing & Ghostwriting Services',
  meta: [
    {
      name: 'description',
      content:
        'Litera-Forge empowers entrepreneurs, professionals, and organizations with tailored business solutions, productivity training, publishing, and ghostwriting services to turn ideas into impact.',
    },
    {
      name: 'keywords',
      content:
        'business advisory, executive coaching, business restructuring, employee training, ghostwriting, book publishing, proposal writing, strategic consulting, African entrepreneurs, productivity workshops',
    },
    {
      property: 'og:title',
      content: 'Litera-Forge | Business Solutions, Publishing & Ghostwriting Services',
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
  <HomeSolution />
  <HomeValues />
  <HomeClients />
  <HomeCta2></HomeCta2>
</template>