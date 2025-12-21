<script setup lang="ts">
definePageMeta({
  layout: "home"
});

useHead({
  title: 'Litera-Forge | Business Solutions, Productivity Training, Ghostwriting & Book Publishing',
  meta: [
    {
      name: 'description',
      content:
        'Litera-Forge helps businesses, leaders, authors, and professionals turn ideas into impact through business advisory, restructuring, executive coaching, employee productivity training, ghostwriting, and book publishing.'
    },
    {
      name: 'keywords',
      content:
        'business advisory, business restructuring, executive coaching, employee productivity training, ghostwriting services, book publishing, corporate consulting, business solutions, author support, clarity sessions'
    },

    // Open Graph
    { property: 'og:title', content: 'Litera-Forge | Business Solutions & Publishing Services' },
    {
      property: 'og:description',
      content:
        'A professional firm offering business solutions, employee productivity training, ghostwriting, and book publishing—helping individuals and organizations transform ideas into impactful outcomes.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://litera-forge.com' },
    { property: 'og:image', content: '/litera-forge-cover.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Litera-Forge – Business Solutions, Productivity Training & Publishing' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Litera-Forge | Business Solutions, Coaching, Ghostwriting & Publishing'
    },
    {
      name: 'twitter:description',
      content:
        'We support founders, leaders, authors, and teams with clear, practical solutions in consulting, productivity training, coaching, ghostwriting, and book publishing.'
    },
    { name: 'twitter:image', content: '/litera-forge-cover.jpg' }
  ]
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