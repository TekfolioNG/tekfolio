<script setup lang="ts">


definePageMeta({
  layout: "landing"
});

useSeoMeta({
  title: 'Tekfolio | Smart, Simple, Secure Solutions That Work',
  ogTitle: 'Tekfolio | Smart, Simple, Secure Solutions That Work',
  description: 'Build modern, cloud-native applications that drive revenue. Enterprise web apps, cross-platform mobile development, cloud migration & SEO services. Transform your business with scalable solutions.',
  ogDescription: 'Build modern, cloud-native applications that drive revenue. Enterprise web apps, cross-platform mobile development, cloud migration & SEO services. Transform your business with scalable solutions.',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Tekfolio | Smart, Simple, Secure Solutions That Work',
  twitterDescription: 'Build modern, cloud-native applications that drive revenue. Enterprise web apps, cross-platform mobile development, cloud migration & SEO services. Transform your business with scalable solutions.',

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
