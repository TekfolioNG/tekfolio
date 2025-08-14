<script setup lang="ts">


definePageMeta({
  layout: "landing"
});

useSeoMeta({
  title: 'Tekfolio | Smart, Simple, Secure Solutions That Work',
  ogTitle: 'Tekfolio | Smart, Simple, Secure Solutions That Work',
  description: 'Tekfolio delivers modern, secure, and scalable digital solutions — from enterprise web apps to mobile apps, cloud migration, and SEO — to help your business grow.',
  ogDescription: 'Tekfolio delivers modern, secure, and scalable digital solutions — from enterprise web apps to mobile apps, cloud migration, and SEO — to help your business grow.',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Tekfolio | Smart, Simple, Secure Solutions That Work',
  twitterDescription: 'Tekfolio delivers modern, secure, and scalable digital solutions — from enterprise web apps to mobile apps, cloud migration, and SEO — to help your business grow.',

  ogImage: {
    url: 'https://tekfol.io/tekfolio-home.png',
    width: 1200,
    height: 630,
    alt: 'Tekfolio | Smart, Simple, Secure Solutions That Work'
  },
  twitterImage: 'https://tekfol.io/tekfolio-home.png'
});



</script>

<template>
  <div>
    <LandingContainer>
      <LandingHero></LandingHero>
      <LandingIntro></LandingIntro>
    </LandingContainer>
    <LandingContainer>
      <LandingPunchLine></LandingPunchLine>
    </LandingContainer>
    <LandingServices></LandingServices>
    <LandingClientLogos></LandingClientLogos>
    <LandingContainer>
      <LandingWhyChoose></LandingWhyChoose>
    </LandingContainer>
    <LandingTechStack></LandingTechStack>
    <LandingCta></LandingCta>
  </div>
</template>
