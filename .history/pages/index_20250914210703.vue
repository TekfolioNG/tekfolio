<script setup lang="ts">
definePageMeta({
  layout: "landing"
});

useHead({
  title: 'Syntanium Energy | Industrial Solutions & Engineering Services',
  meta: [
    { name: 'description', content: 'Leading provider of petrochemical processing, corrosion management, oil & gas solutions, and industrial engineering services. Professional maintenance and construction solutions.' },
    { name: 'keywords', content: 'petrochemical processing, corrosion management, oil and gas, industrial engineering, maintenance services, construction solutions, asset integrity, pipeline installation' },
    { property: 'og:title', content: 'Syntanium Energy | Industrial Solutions & Engineering Services' },
    { property: 'og:description', content: 'Leading provider of petrochemical processing, corrosion management, oil & gas solutions, and industrial engineering services.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://syntaniumenergy.com' },
    { property: 'og:image', content: '/syntanium-og.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Syntanium Energy - Industrial Solutions & Engineering Services' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Syntanium Energy | Industrial Solutions & Engineering Services' },
    { name: 'twitter:description', content: 'Leading provider of petrochemical processing, corrosion management, oil & gas solutions, and industrial engineering services.' },
    { name: 'twitter:image', content: '/syntanium-og.jpg' }
  ]
});

</script>

<template>
  <LandingContainer>
    <LandingHero></LandingHero>
  </LandingContainer>
  <LandingSolution></LandingSolution>
  <LandingExpertise></LandingExpertise>
  <LandingBrandEssence></LandingBrandEssence>
  <LandingContainer>
    <LandingCheck></LandingCheck>
    <LandingServices></LandingServices>
  </LandingContainer>
  <LandingCta2></LandingCta2>
</template>