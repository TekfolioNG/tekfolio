<script setup lang="ts">
import { LandingScroll } from '#components';

definePageMeta({
    layout: "home"
});

</script>

<template>
    <LandingHero12 />
    <LandingScroll />
    <LandingAdvisory />
    <HomeCta2></HomeCta2>
</template>