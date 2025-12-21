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

        <!-- Main Container with Extended Content Box -->
        <div class="w-full relative py-12 md:py-16">
            <!-- Updated gradient background -->
            <div class="absolute inset-0 bg-gradient-to-r from-purple-900/95 to-blue-900/95"></div>
            
            <!-- Extended dark content container -->
            <div class="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <!-- Content box extended beyond gradient -->
                <div class="bg-gray-900 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl -mt-8 md:-mt-12 lg:-mt-16 mb-8 md:mb-12 lg:mb-16">
                    
                    <!-- Testimonials Section -->
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 md:mb-20">

                        <!-- Left Side - Author Info -->
                        <div class="lg:col-span-4 space-y-6">
                            <Transition name="fade" mode="out-in">
                                <div :key="currentTestimonial">
                                    <!-- Author Info -->
                                    <div class="space-y-3">
                                        <p class="text-xl md:text-2xl font-bold text-gray-100">
                                            {{ testimonials[currentTestimonial].name }}
                                        </p>
                                        <p class="text-base md:text-lg text-gray-300 font-medium">
                                            {{ testimonials[currentTestimonial].designation }}
                                        </p>
                                        <p class="text-sm md:text-base text-gray-400">
                                            {{ testimonials[currentTestimonial].company }}
                                        </p>
                                    </div>
                                    
                                    <!-- Testimonial Indicator -->
                                    <div class="flex space-x-2 pt-6">
                                        <button 
                                            v-for="(testimonial, index) in testimonials" 
                                            :key="index"
                                            @click="currentTestimonial = index"
                                            class="h-1.5 rounded-full transition-all duration-300"
                                            :class="currentTestimonial === index 
                                                ? 'bg-gradient-to-r from-purple-900/95 to-blue-900/95 w-8' 
                                                : 'bg-gray-700 w-3 hover:bg-gray-600'"
                                            :aria-label="`View testimonial from ${testimonial.name}`"
                                        />
                                    </div>
                                </div>
                            </Transition>
                        </div>

                        <!-- Right Side - Testimonial Quote -->
                        <div class="lg:col-span-8">
                            <Transition name="fade" mode="out-in">
                                <div :key="currentTestimonial">
                                    <!-- Quote -->
                                    <div class="relative">
                                        <svg class="absolute -top-2 -left-4 w-10 h-10 text-purple-500/50" 
                                             fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                        <p class="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed pl-8 font-normal">
                                            {{ testimonials[currentTestimonial].quote }}
                                        </p>
                                    </div>
                                </div>
                            </Transition>
                        </div>

                    </div>

                    <!-- Logo Scroll Section - Now inside same content box -->
                    <div class="pt-8 md:pt-12 border-t border-gray-800">
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
/* Updated brand gradient for heading */
.text-gradient {
    background: linear-gradient(135deg, rgba(76, 29, 149, 0.95) 0%, rgba(30, 58, 138, 0.95) 100%);
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
    animation: scroll 35s linear infinite;
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
    filter: invert(1) brightness(1.2) contrast(0.9);
    opacity: 0.8;
    transition: all 0.3s ease;
}

.client-logo:hover {
    filter: invert(1) brightness(1.5) contrast(1);
    opacity: 1;
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
    
    /* Extended box adjustments for tablet */
    .bg-gray-900 {
        margin-top: -6rem;
        margin-bottom: 6rem;
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
    
    .bg-gray-900 {
        padding: 1.5rem;
        margin-top: -4rem;
        margin-bottom: 4rem;
    }
    
    .border-t {
        padding-top: 1.5rem;
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
    
    .bg-gray-900 {
        padding: 1.25rem;
        margin-top: -3rem;
        margin-bottom: 3rem;
    }
    
    .border-t {
        padding-top: 1.25rem;
    }
}

/* Additional styles for extended content box */
.bg-gray-900 {
    box-shadow: 0 20px 60px -15px rgba(0, 0, 0, 0.3);
}
</style>