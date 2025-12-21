<template>
    <section class="relative w-full bg-white">

        <!-- Section Heading -->
        <div class="w-full py-12 md:py-16 text-center">
            <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Trusted by Forward-Thinking Brands & Organizations
                </h2>
            </div>
        </div>

        <!-- Main Testimonial Section with Gradient Borders -->
        <div class="w-full relative">
            <!-- Left gradient border -->
            <div
                class="absolute left-0 top-0 bottom-0 w-20 md:w-32 lg:w-40 bg-gradient-to-r from-purple-600 to-transparent">
            </div>
            <!-- Right gradient border -->
            <div
                class="absolute right-0 top-0 bottom-0 w-20 md:w-32 lg:w-40 bg-gradient-to-l from-blue-600 to-transparent">
            </div>

            <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    <!-- Left Side - Company Logo and Description (smaller section) -->
                    <div class="space-y-6">
                        <Transition name="fade" mode="out-in">
                            <div :key="currentTestimonial">
                                <!-- Company Logo -->
                                <div class="mb-6">
                                    <img :src="testimonials[currentTestimonial].logo"
                                        :alt="testimonials[currentTestimonial].company"
                                        class="h-12 w-auto object-contain" />
                                </div>
                            </div>
                        </Transition>
                    </div>

                    <!-- Right Side - Testimonial Quote (larger section) -->
                    <div class="space-y-8">
                        <Transition name="fade" mode="out-in">
                            <div :key="currentTestimonial">
                                <!-- Quote -->
                                <div class="relative mb-8">
                                    <svg class="absolute -top-4 -left-2 w-12 h-12 text-purple-100 opacity-50"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                    <p
                                        class="text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed pl-8 font-normal">
                                        {{ testimonials[currentTestimonial].quote }}
                                    </p>
                                </div>

                                <!-- Author Info -->
                                <div class="pl-8">
                                    <p class="text-lg md:text-xl font-bold text-gray-900">
                                        {{ testimonials[currentTestimonial].name }}
                                    </p>
                                    <p class="text-base md:text-lg text-gray-600 mt-1">
                                        {{ testimonials[currentTestimonial].designation }}, {{
                                            testimonials[currentTestimonial].company }}
                                    </p>
                                </div>
                            </div>
                        </Transition>
                    </div>

                </div>

            </div>
        </div>

        <!-- Bottom Section: Client Logos Scrolling -->
        <div class="w-full bg-gray-900 py-12 md:py-16 overflow-hidden">
            <div class="logo-scroll-container">
                <div class="logo-scroll-track">
                    <!-- First set of logos -->
                    <div v-for="logo in clientLogos" :key="logo.name" class="logo-item">
                        <img :src="logo.src" :alt="logo.name" class="client-logo" />
                    </div>
                    <!-- Duplicate set for seamless loop -->
                    <div v-for="logo in clientLogos" :key="`${logo.name}-dup`" class="logo-item">
                        <img :src="logo.src" :alt="logo.name" class="client-logo" />
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

// Import logos
import ecoplatinum from '../assets/img/ecoplatinum.png';
import elevation from '../assets/img/elevation.png';
import literaforge from '../assets/img/lliteraforge.png';
import oaktree from '../assets/img/oaktree.png';
import petabiz from '../assets/img/petabiz.png';
import ppil from '../assets/img/ppil.png';
import sefa from '../assets/img/sefa.png';
import syntanium from '../assets/img/syntanium.png';
import veraverde from '../assets/img/veraverde.png';
import wilsonsamson from '../assets/img/wilsonsamson.png';
import xstrato from '../assets/img/xstrato.png';

const currentTestimonial = ref(0);
let testimonialInterval = null;

const testimonials = [
    {
        name: "Adebayo Ogunlade",
        designation: "CTO",
        company: "Syntanium Digital",
        logo: syntanium,
        quote: "Tekfolio brought clarity to a complex project. The team was structured, responsive, and focused on delivering something that worked well from day one."
    },
    {
        name: "Sarah Mitchell",
        designation: "Head of Product",
        company: "EcoPlatinum",
        logo: ecoplatinum,
        quote: "What stood out was their attention to detail and how well they understood our business goals. The final product was fast, stable, and easy to scale."
    },
    {
        name: "Chidi Okeke",
        designation: "Founder & CEO",
        company: "LiteraForge",
        logo: literaforge,
        quote: "Tekfolio felt more like a partner than a vendor. Communication was clear, timelines were realistic, and delivery met expectations."
    },
    {
        name: "James Wilson",
        designation: "Operations Director",
        company: "Wilson & Samson",
        logo: wilsonsamson,
        quote: "What sets Tekfolio apart is their ability to move fast without cutting corners. Clean code, clear communication, and they actually hit their deadlines."
    },
    {
        name: "Ngozi Adekunle",
        designation: "Managing Partner",
        company: "Elevation Partners",
        logo: elevation,
        quote: "Working with Tekfolio was refreshingly straightforward. They understood our vision quickly and delivered a solution that exceeded our expectations."
    }
];

const clientLogos = [
    { name: "EcoPlatinum", src: ecoplatinum },
    { name: "Elevation", src: elevation },
    { name: "LiteraForge", src: literaforge },
    { name: "Oaktree", src: oaktree },
    { name: "PetaBiz", src: petabiz },
    { name: "PPIL", src: ppil },
    { name: "SEFA", src: sefa },
    { name: "Syntanium", src: syntanium },
    { name: "VeraVerde", src: veraverde },
    { name: "Wilson & Samson", src: wilsonsamson },
    { name: "Xstrato", src: xstrato }
];

onMounted(() => {
    // Rotate testimonials every 6 seconds
    testimonialInterval = setInterval(() => {
        currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length;
    }, 6000);
});

onBeforeUnmount(() => {
    if (testimonialInterval) {
        clearInterval(testimonialInterval);
    }
});
</script>

<style scoped>
/* Testimonial fade transitions */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Logo scrolling animation */
.logo-scroll-container {
    overflow: hidden;
    position: relative;
    width: 100%;
}

.logo-scroll-track {
    display: flex;
    align-items: center;
    animation: scroll 45s linear infinite;
    width: fit-content;
}

.logo-item {
    flex-shrink: 0;
    padding: 0 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 200px;
}

.client-logo {
    height: 50px;
    width: auto;
    max-width: 160px;
    object-fit: contain;
    filter: grayscale(100%) brightness(0) invert(1) opacity(0.7);
    transition: all 0.3s ease;
}

.client-logo:hover {
    filter: grayscale(0%) brightness(1) invert(1) opacity(1);
    transform: scale(1.1);
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

/* Pause animation on hover */
.logo-scroll-container:hover .logo-scroll-track {
    animation-play-state: paused;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .logo-item {
        padding: 0 2.5rem;
        min-width: 160px;
    }

    .client-logo {
        height: 40px;
        max-width: 130px;
    }
}

@media (max-width: 640px) {
    .logo-item {
        padding: 0 2rem;
        min-width: 140px;
    }

    .client-logo {
        height: 35px;
        max-width: 110px;
    }
}
</style>