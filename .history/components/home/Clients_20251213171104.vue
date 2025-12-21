<template>
    <section class="relative w-full py-16 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

            <!-- Section Heading -->
            <div class="text-center mb-12 md:mb-16">
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Trusted by Forward-Thinking<br class="hidden sm:block" /> Brands & Organizations
                </h2>
            </div>

            <!-- Testimonial Section -->
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-16 md:mb-20">

                <!-- Left Side - Client Info (Desktop: 2/5, Mobile: Full Width) -->
                <div
                    class="lg:col-span-2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-4">
                    <Transition name="fade-slide" mode="out-in">
                        <div :key="currentTestimonial" class="space-y-3">
                            <div
                                class="w-16 h-16 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-purple-700 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                                {{ testimonials[currentTestimonial].initials }}
                            </div>
                            <div>
                                <h3 class="text-xl md:text-2xl font-bold text-gray-900">
                                    {{ testimonials[currentTestimonial].name }}
                                </h3>
                                <p class="text-base md:text-lg text-gray-600 font-medium">
                                    {{ testimonials[currentTestimonial].designation }}
                                </p>
                                <p class="text-sm md:text-base text-gray-500 mt-1">
                                    {{ testimonials[currentTestimonial].company }}
                                </p>
                            </div>
                        </div>
                    </Transition>
                </div>

                <!-- Right Side - Testimonial Quote (Desktop: 3/5, Mobile: Full Width) -->
                <div class="lg:col-span-3 flex items-center">
                    <Transition name="fade" mode="out-in">
                        <div :key="currentTestimonial" class="relative">
                            <svg class="absolute -top-4 -left-2 w-12 h-12 text-purple-200 opacity-50"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p class="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed pl-8 pr-4">
                                {{ testimonials[currentTestimonial].quote }}
                            </p>
                        </div>
                    </Transition>
                </div>

            </div>

        </div>

        <!-- Client Logos Scrolling Section -->
        <div class="w-full bg-gray-900 py-12">
            <div class="max-w-7xl mx-auto">
                <div class="logo-scroll-container">
                    <div class="logo-scroll-track">
                        <!-- First set of logos -->
                        <div v-for="logo in clientLogos" :key="logo.name" class="logo-item">
                            <img :src="logo.src" :alt="logo.name" class="client-logo" />
                        </div>
                        <!-- Duplicate set for seamless loop -->
                        <div v-for="logo in clientLogos" :key="`${logo.name}-duplicate`" class="logo-item">
                            <img :src="logo.src" :alt="logo.name" class="client-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const currentTestimonial = ref(0);
let testimonialInterval = null;

const testimonials = [
    {
        name: "Adebayo Ogunlade",
        designation: "CTO",
        company: "Syntanium Digital",
        initials: "AO",
        quote: "Tekfolio brought clarity to a complex project. The team was structured, responsive, and focused on delivering something that worked well from day one."
    },
    {
        name: "Sarah Mitchell",
        designation: "Head of Product",
        company: "EcoPlatinum",
        initials: "SM",
        quote: "What stood out was their attention to detail and how well they understood our business goals. The final product was fast, stable, and easy to scale."
    },
    {
        name: "Chidi Okeke",
        designation: "Founder & CEO",
        company: "LiteraForge",
        initials: "CO",
        quote: "Tekfolio felt more like a partner than a vendor. Communication was clear, timelines were realistic, and delivery met expectations."
    },
    {
        name: "James Wilson",
        designation: "Operations Director",
        company: "Wilson & Samson",
        initials: "JW",
        quote: "What sets Tekfolio apart is their ability to move fast without cutting corners. Clean code, clear communication, and they actually hit their deadlines."
    },
    {
        name: "Ngozi Adekunle",
        designation: "Managing Partner",
        company: "Elevation Partners",
        initials: "NA",
        quote: "Working with Tekfolio was refreshingly straightforward. They understood our vision quickly and delivered a solution that exceeded our expectations."
    }
];

const clientLogos = [
    { name: "EcoPlatinum", src: "/assets/img/ecoplatinum.png" },
    { name: "Elevation", src: "/assets/img/elevation.png" },
    { name: "LiteraForge", src: "/assets/img/lliteraforge.png" },
    { name: "Oaktree", src: "/assets/img/oaktree.png" },
    { name: "PetaBiz", src: "/assets/img/petabiz.png" },
    { name: "PPIL", src: "/assets/img/ppil.png" },
    { name: "SEFA", src: "/assets/img/sefa.png" },
    { name: "Syntanium", src: "/assets/img/syntanium.png" },
    { name: "VeraVerde", src: "/assets/img/veraverde.png" },
    { name: "Wilson & Samson", src: "/assets/img/wilsonsamson.png" },
    { name: "Xstrato", src: "/assets/img/xstrato.png" }
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
    transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.6s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateX(-20px);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateX(20px);
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
    padding: 0 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.client-logo {
    height: 40px;
    width: auto;
    max-width: 140px;
    object-fit: contain;
    filter: grayscale(100%) brightness(0) invert(1) opacity(0.6);
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
        padding: 0 2rem;
    }

    .client-logo {
        height: 35px;
        max-width: 120px;
    }
}

@media (max-width: 640px) {
    .logo-item {
        padding: 0 1.5rem;
    }

    .client-logo {
        height: 30px;
        max-width: 100px;
    }
}
</style>