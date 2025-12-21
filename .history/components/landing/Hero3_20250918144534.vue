<template>
    <div class="relative w-full min-h-screen flex flex-col">
        <!-- Top red section -->
        <div class="w-full h-20 bg-[#fe4135] flex items-center justify-between px-6 md:px-12">
            <!-- Logo -->
            <div class="flex items-center">
                <img src="/assets/img/syntanium-logo-temp.png" alt="Syntanium" class="h-10 md:h-12 invert">
            </div>

            <!-- Navigation items -->
            <div class="hidden md:flex items-center space-x-8 text-white font-medium">
                <NuxtLink to="/who-we-are" class="hover:underline">Who We Are</NuxtLink>
                <NuxtLink to="/expertise" class="hover:underline">Our Expertise</NuxtLink>
                <NuxtLink to="/solutions" class="hover:underline">Our Solutions</NuxtLink>
                <NuxtLink to="/commitment" class="hover:underline">Our Commitment</NuxtLink>
                <NuxtLink to="/careers" class="font-bold border-b-2 border-white">Careers</NuxtLink>
            </div>

            <!-- Apply Now button -->
            <button class="bg-white text-[#fe4135] px-4 py-2 rounded font-semibold hover:bg-gray-100 transition">
                Apply Now
            </button>
        </div>

        <!-- Main banner content -->
        <div class="flex-1 flex flex-col md:flex-row">
            <!-- Text content -->
            <div class="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-8 md:p-12 lg:p-16">
                <div class="max-w-md">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-barlow font-bold text-gray-900 mb-4 leading-tight">
                        Together we fuel progress
                    </h1>
                    <p class="text-lg md:text-xl text-gray-700 mb-8">
                        Join a team where your skills shape the future of energy.
                    </p>
                </div>
            </div>

            <!-- Image content -->
            <div class="w-full md:w-1/2">
                <img :src="careersImage" alt="Careers at Syntanium" class="w-full h-full object-cover">
            </div>
        </div>
    </div>
</template>

<script setup>
// Import image
import careersImage from '~/assets/img/careers-syntanium.png';
</script>

<style>
/* Import Barlow font */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&display=swap');

.font-barlow {
    font-family: 'Barlow', sans-serif;
}
</style>