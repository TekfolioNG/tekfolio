<script setup lang="ts">


definePageMeta({
  layout: "landing"
});

useSeoMeta({
  title: 'Tekfolio - Enterprise Web Apps, Mobile Development & Cloud Migration',
  ogTitle: 'Tekfolio - Enterprise Web Apps, Mobile Development & Cloud Migration',
  description: 'Build modern, cloud-native applications that drive revenue. Enterprise web apps, cross-platform mobile development, cloud migration & SEO services. Transform your business with scalable solutions.',
  ogDescription: 'Build modern, cloud-native applications that drive revenue. Enterprise web apps, cross-platform mobile development, cloud migration & SEO services. Transform your business with scalable solutions.',

  // Required OG properties
  ogUrl: 'https://tekfol.io',
  ogType: 'website',
  ogSiteName: 'Tekfolio',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Tekfolio - Enterprise Web Apps, Mobile Development & Cloud Migration',
  twitterDescription: 'Build modern, cloud-native applications that drive revenue. Enterprise web apps, cross-platform mobile development, cloud migration & SEO services.',

  ogImage: {
    url: 'https://tekfol.io/tekfolio-home.png',
    width: 1200,
    height: 630,
    alt: 'Tekfolio - Modern Web Development & Cloud Solutions'
  },
  twitterImage: 'https://tekfol.io/tekfolio-home.png'
})



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
