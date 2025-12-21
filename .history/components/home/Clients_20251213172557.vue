<template>
    <section class="relative w-full py-20 md:py-28 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

            <!-- Section Header -->
            <div class="text-center mb-16 md:mb-20">
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Trusted by Forward-Thinking Brands & Organizations
                </h2>
            </div>

            <!-- Main Content Grid -->
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20 md:mb-24">
                <!-- Left Column - Testimonial Info (Desktop: 5 cols) -->
                <div class="lg:col-span-5 space-y-8">
                    <!-- Current Testimonial Info -->
                    <div class="space-y-4">
                        <div class="flex items-center space-x-2 mb-2">
                            <div v-for="(testimonial, index) in testimonials" :key="index"
                                @click="goToTestimonial(index)" class="cursor-pointer">
                                <div class="w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300"
                                    :class="currentIndex === index
                                        ? 'border-purple-600 scale-110'
                                        : 'border-gray-200 hover:border-gray-300'">
                                    <img :src="testimonial.avatar" :alt="testimonial.name"
                                        class="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-xl md:text-2xl font-semibold text-gray-900">
                                {{ currentTestimonial.name }}
                            </h3>
                            <p class="text-gray-600 mt-1">
                                {{ currentTestimonial.designation }}
                            </p>
                            <p class="text-gray-500 text-sm mt-1">
                                {{ currentTestimonial.company }}
                            </p>
                        </div>
                    </div>

                    <!-- Navigation Dots -->
                    <div class="flex space-x-2">
                        <button v-for="(testimonial, index) in testimonials" :key="'dot-' + index"
                            @click="goToTestimonial(index)" class="w-8 h-1 rounded-full transition-all duration-300"
                            :class="currentIndex === index
                                ? 'bg-gradient-to-r from-purple-600 to-blue-600'
                                : 'bg-gray-200 hover:bg-gray-300'"
                            :aria-label="`View testimonial from ${testimonial.name}`" />
                    </div>
                </div>

                <!-- Right Column - Testimonial Text (Desktop: 7 cols) -->
                <div class="lg:col-span-7 relative">
                    <transition name="fade" mode="out-in">
                        <div :key="currentIndex" class="relative">
                            <!-- Opening Quote Mark -->
                            <div class="absolute -top-6 -left-2 text-5xl md:text-6xl text-gray-200 font-serif">
                                "
                            </div>

                            <!-- Testimonial Content -->
                            <div class="pl-8">
                                <p class="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                                    {{ currentTestimonial.text }}
                                </p>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>

            <!-- Client Logos Section -->
            <div class="bg-gray-50 rounded-3xl p-8 md:p-10 lg:p-12 overflow-hidden">
                <div class="relative">
                    <!-- Marquee Container -->
                    <div class="flex overflow-hidden">
                        <!-- Logo Set 1 -->
                        <div class="flex items-center space-x-8 md:space-x-12 lg:space-x-16 animate-scroll flex-shrink-0"
                            :style="{ 'animation-duration': logoScrollDuration + 's' }">
                            <div v-for="logo in clientLogos" :key="logo.alt" class="flex-shrink-0">
                                <div
                                    class="w-36 h-20 md:w-44 md:h-24 flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group">
                                    <img :src="logo.src" :alt="logo.alt + ' logo'"
                                        class="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                        loading="lazy" />
                                </div>
                            </div>
                        </div>

                        <!-- Duplicate Set for Seamless Loop -->
                        <div class="flex items-center space-x-8 md:space-x-12 lg:space-x-16 animate-scroll flex-shrink-0"
                            :style="{ 'animation-duration': logoScrollDuration + 's' }" aria-hidden="true">
                            <div v-for="logo in clientLogos" :key="'duplicate-' + logo.alt" class="flex-shrink-0">
                                <div
                                    class="w-36 h-20 md:w-44 md:h-24 flex items-center justify-center p-4 bg-white rounded-xl shadow-sm">
                                    <img :src="logo.src" :alt="logo.alt + ' logo'"
                                        class="max-w-full max-h-full object-contain opacity-70" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Gradient Fades -->
                    <div
                        class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10">
                    </div>
                    <div
                        class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10">
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

// Import logo images
import EcoPlatinumLogo from '~/assets/img/ecoplatinum.png'
import ElevationLogo from '~/assets/img/elevation.png'
import LliteraforgeLogo from '~/assets/img/lliteraforge.png'
import OakTreeLogo from '~/assets/img/oaktree.png'
import PetabizLogo from '~/assets/img/petabiz.png'
import PpilLogo from '~/assets/img/ppil.png'
import SefaLogo from '~/assets/img/sefa.png'
import SyntaniumLogo from '~/assets/img/syntanium.png'
import VeraVerdeLogo from '~/assets/img/veraverde.png'
import WilsonSamsonLogo from '~/assets/img/wilsonsamson.png'
import XStratoLogo from '~/assets/img/xstrato.png'

// Import placeholder avatars for testimonials
import Avatar1 from '~/assets/img/avatars/avatar1.jpg'
import Avatar2 from '~/assets/img/avatars/avatar2.jpg'
import Avatar3 from '~/assets/img/avatars/avatar3.jpg'
import Avatar4 from '~/assets/img/avatars/avatar4.jpg'
import Avatar5 from '~/assets/img/avatars/avatar5.jpg'

// Testimonial data
const testimonials = [
    {
        name: "Alex Morgan",
        designation: "Head of Product",
        company: "EcoPlatinum Solutions",
        text: "Tekfolio brought clarity to a complex project. The team was structured, responsive, and focused on delivering something that worked well from day one.",
        avatar: Avatar1
    },
    {
        name: "Sarah Chen",
        designation: "CTO",
        company: "XStrato Technologies",
        text: "What stood out was their attention to detail and how well they understood our business goals. The final product was fast, stable, and easy to scale.",
        avatar: Avatar2
    },
    {
        name: "Marcus Johnson",
        designation: "Digital Director",
        company: "Wilson Samson Group",
        text: "Tekfolio felt more like a partner than a vendor. Communication was clear, timelines were realistic, and delivery met expectations every step of the way.",
        avatar: Avatar3
    },
    {
        name: "Priya Patel",
        designation: "VP of Engineering",
        company: "Syntanium Labs",
        text: "What sets Tekfolio apart is their ability to move fast without cutting corners. Clean code, clear communication, and they actually hit their deadlines.",
        avatar: Avatar4
    },
    {
        name: "David Okafor",
        designation: "Founder & CEO",
        company: "Petabiz Innovations",
        text: "Working with Tekfolio transformed our digital presence. Their technical expertise combined with strategic insight delivered results beyond our expectations.",
        avatar: Avatar5
    }
]

// Client logos with imported images
const clientLogos = [
    { src: EcoPlatinumLogo, alt: 'EcoPlatinum' },
    { src: ElevationLogo, alt: 'Elevation' },
    { src: LliteraforgeLogo, alt: 'Lliteraforge' },
    { src: OakTreeLogo, alt: 'OakTree' },
    { src: PetabizLogo, alt: 'Petabiz' },
    { src: PpilLogo, alt: 'PPIL' },
    { src: SefaLogo, alt: 'Sefa' },
    { src: SyntaniumLogo, alt: 'Syntanium' },
    { src: VeraVerdeLogo, alt: 'VeraVerde' },
    { src: WilsonSamsonLogo, alt: 'WilsonSamson' },
    { src: XStratoLogo, alt: 'XStrato' }
]

// State
const currentIndex = ref(0)
const autoRotateInterval = ref(null)
const logoScrollDuration = 40 // seconds for complete scroll cycle

// Computed
const currentTestimonial = computed(() => testimonials[currentIndex.value])

// Testimonial navigation
const goToTestimonial = (index) => {
    currentIndex.value = index
    resetAutoRotation()
}

const nextTestimonial = () => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const startAutoRotation = () => {
    autoRotateInterval.value = setInterval(nextTestimonial, 6000) // Rotate every 6 seconds
}

const resetAutoRotation = () => {
    if (autoRotateInterval.value) {
        clearInterval(autoRotateInterval.value)
    }
    startAutoRotation()
}

// Lifecycle
onMounted(() => {
    startAutoRotation()
})

onBeforeUnmount(() => {
    if (autoRotateInterval.value) {
        clearInterval(autoRotateInterval.value)
    }
})
</script>

<style scoped>
/* Fade transition for testimonials */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Continuous scroll animation for logos */
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}

.animate-scroll {
    animation: scroll linear infinite;
    animation-play-state: running;
}

/* Pause animation on hover */
.animate-scroll:hover {
    animation-play-state: paused;
}

/* Gradient for Tekfolio brand */
.bg-gradient-to-r {
    background-image: linear-gradient(to right, #7c3aed, #2563eb);
}

/* Responsive adjustments */
@media (max-width: 768px) {

    .lg\:col-span-5,
    .lg\:col-span-7 {
        grid-column: span 12;
    }

    .relative .pl-8 {
        padding-left: 2rem;
    }
}

/* Ensure logos are visible */
img {
    display: block;
    max-width: 100%;
    height: auto;
}

/* Improve accessibility */
button:focus {
    outline: 2px solid #7c3aed;
    outline-offset: 2px;
}
</style>