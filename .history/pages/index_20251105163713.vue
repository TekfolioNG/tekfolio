<script setup lang="ts">
definePageMeta({
  layout: "home"
});

useHead({
  title: 'Elevation Consulting | Business Advisory, Training & Enterprise Development',
  meta: [
    { name: 'description', content: 'Elevation Consulting is a boutique business and enterprise support firm helping African entrepreneurs and organizations strengthen systems, build capacity, and drive sustainable growth.' },
    { name: 'keywords', content: 'business consulting, enterprise development, capacity building, management training, SME growth, business advisory, strategic planning, organizational development, performance improvement' },
    { property: 'og:title', content: 'Elevation Consulting | Business Advisory, Training & Enterprise Development' },
    { property: 'og:description', content: 'We help businesses and entrepreneurs across Africa grow sustainably through strategy, advisory, and hands-on capacity development programs.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://elevationconsulting.com.ng' },
    { property: 'og:image', content: '/elevation-advisory.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Elevation Consulting – Business Advisory, Training & Enterprise Development' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Elevation Consulting | Business Advisory, Training & Enterprise Development' },
    { name: 'twitter:description', content: 'Partnering with African enterprises to build stronger systems, scale operations, and create lasting impact through strategic business solutions.' },
    { name: 'twitter:image', content: '/elevation-advisory.jpg' }
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