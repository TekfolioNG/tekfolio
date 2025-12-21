<template>
    <section class="relative w-full bg-white">

        <!-- Section Heading -->
        <div class="w-full py-12 md:py-16 text-center">
            <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    Trusted by Forward-Thinking
                    <span class="text-gradient">Brands & Organizations</span>
                </h2>
            </div>
        </div>

        <!-- Main Testimonial Section with Brand Gradient Background -->
        <div class="w-full relative py-16 md:py-20">
            <!-- Brand gradient background -->
            <div class="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-600"></div>

            <!-- White content container with side margins -->
            <div class="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
                <div class="bg-gray-100 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                        <!-- Left Side - Author Info Only (no logos) -->
                        <div class="lg:col-span-4 space-y-6">
                            <Transition name="fade" mode="out-in">
                                <div :key="currentTestimonial">
                                    <!-- Author Info -->
                                    <div class="space-y-3">
                                        <p class="text-xl md:text-2xl font-bold text-gray-900">
                                            {{ testimonials[currentTestimonial].name }}
                                        </p>
                                        <p class="text-base md:text-lg text-gray-700 font-medium">
                                            {{ testimonials[currentTestimonial].designation }}
                                        </p>
                                        <p class="text-sm md:text-base text-gray-600">
                                            {{ testimonials[currentTestimonial].company }}
                                        </p>
                                    </div>

                                    <!-- Testimonial Indicator -->
                                    <div class="flex space-x-2 pt-6">
                                        <button v-for="(testimonial, index) in testimonials" :key="index"
                                            @click="currentTestimonial = index"
                                            class="h-1.5 rounded-full transition-all duration-300" :class="currentTestimonial === index
                                                ? 'bg-gradient-to-r from-purple-700 to-blue-600 w-8'
                                                : 'bg-gray-300 w-3 hover:bg-gray-400'"
                                            :aria-label="`View testimonial from ${testimonial.name}`" />
                                    </div>
                                </div>
                            </Transition>
                        </div>

                        <!-- Right Side - Testimonial Quote Only -->
                        <div class="lg:col-span-8">
                            <Transition name="fade" mode="out-in">
                                <div :key="currentTestimonial">
                                    <!-- Quote -->
                                    <div class="relative">
                                        <svg class="absolute -top-2 -left-4 w-10 h-10 text-purple-300 opacity-60"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                        <p
                                            class="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed pl-8 font-normal">
                                            {{ testimonials[currentTestimonial].quote }}
                                        </p>
                                    </div>
                                </div>
                            </Transition>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Section: Client Logos Scrolling -->
        <div class="w-full bg-gray-100 py-12 md:py-16 overflow-hidden">
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

// Import logos using your specified format
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
        quote: "Tekfolio brought clarity to a complex project. The team was structured, responsive, and focused on delivering something that worked well from day one."
    },
    {
        name: "Sarah Mitchell",
        designation: "Head of Product",
        company: "EcoPlatinum",
        quote: "What stood out was their attention to detail and how well they understood our business goals. The final product was fast, stable, and easy to scale."
    },
    {
        name: "Chidi Okeke",
        designation: "Founder & CEO",
        company: "LiteraForge",
        quote: "Tekfolio felt more like a partner than a vendor. Communication was clear, timelines were realistic, and delivery met expectations."
    },
    {
        name: "James Wilson",
        designation: "Operations Director",
        company: "Wilson & Samson",
        quote: "What sets Tekfolio apart is their ability to move fast without cutting corners. Clean code, clear communication, and they actually hit their deadlines."
    },
    {
        name: "Ngozi Adekunle",
        designation: "Managing Partner",
        company: "Elevation Partners",
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
/* Brand gradient for heading */
.text-gradient {
    background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

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
    animation: scroll 40s linear infinite;
    width: fit-content;
}

.logo-item {
    flex-shrink: 0;
    padding: 0 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 180px;
}

.client-logo {
    height: 50px;
    width: auto;
    max-width: 160px;
    object-fit: contain;
    transition: transform 0.3s ease;
}

.client-logo:hover {
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
        padding: 0 2rem;
        min-width: 150px;
    }

    .client-logo {
        height: 45px;
        max-width: 140px;
    }
}

@media (max-width: 768px) {

    /* Stack columns vertically on tablet/mobile */
    .lg\:col-span-4,
    .lg\:col-span-8 {
        grid-column: span 12;
    }

    .lg\:col-span-4 {
        margin-bottom: 2rem;
    }

    .bg-gray-100 {
        padding: 1.5rem;
    }
}

@media (max-width: 640px) {
    .logo-item {
        padding: 0 1.5rem;
        min-width: 130px;
    }

    .client-logo {
        height: 40px;
        max-width: 120px;
    }

    .bg-gray-100 {
        padding: 1.25rem;
    }
}
</style>