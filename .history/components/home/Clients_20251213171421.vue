<template>
    <section class="relative w-full py-16 md:py-24 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

            <!-- Section Heading -->
            <div class="text-center mb-12 md:mb-16">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    Trusted by Forward-Thinking Brands & Organizations
                </h2>
            </div>

            <!-- Testimonial Carousel -->
            <div class="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-16 md:mb-20">
                <!-- Left Column - Speaker Info -->
                <div class="lg:col-span-2 space-y-4 lg:space-y-6 lg:border-r lg:border-gray-100 lg:pr-8">
                    <div class="space-y-2">
                        <h3 class="text-lg md:text-xl font-semibold text-gray-900">
                            {{ currentTestimonial.name }}
                        </h3>
                        <p class="text-sm md:text-base text-gray-600">
                            {{ currentTestimonial.designation }}
                        </p>
                        <p class="text-sm text-gray-500">
                            {{ currentTestimonial.company }}
                        </p>
                    </div>

                    <!-- Testimonial Indicator Dots -->
                    <div class="flex space-x-2 pt-4">
                        <button v-for="(testimonial, index) in testimonials" :key="index"
                            @click="goToTestimonial(index)" class="w-2 h-2 rounded-full transition-all duration-300"
                            :class="currentIndex === index
                                ? 'bg-gradient-to-r from-purple-600 to-blue-600 w-6'
                                : 'bg-gray-300 hover:bg-gray-400'"
                            :aria-label="`Go to testimonial from ${testimonial.name}`" />
                    </div>
                </div>

                <!-- Right Column - Testimonial Text -->
                <div class="lg:col-span-3 relative h-[200px] md:h-[220px] lg:h-[240px]">
                    <transition name="fade" mode="out-in">
                        <div :key="currentIndex" class="absolute inset-0">
                            <div class="flex flex-col justify-center h-full">
                                <div class="text-4xl md:text-5xl text-gray-200 mb-4">"</div>
                                <p class="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed italic">
                                    {{ currentTestimonial.text }}
                                </p>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>

            <!-- Client Logos Marquee -->
            <div class="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 overflow-hidden">
                <div class="relative">
                    <!-- Marquee Container -->
                    <div class="flex overflow-hidden">
                        <!-- First Set -->
                        <div class="flex space-x-8 md:space-x-12 lg:space-x-16 animate-scroll" :style="{
                            'animation-duration': `${logoScrollDuration}s`
                        }">
                            <div v-for="logo in clientLogos" :key="logo.alt" class="flex-shrink-0">
                                <div
                                    class="w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <img :src="logo.src" :alt="logo.alt"
                                        class="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                                </div>
                            </div>
                        </div>

                        <!-- Duplicate Set for Seamless Loop -->
                        <div class="flex space-x-8 md:space-x-12 lg:space-x-16 animate-scroll" :style="{
                            'animation-duration': `${logoScrollDuration}s`
                        }" aria-hidden="true">
                            <div v-for="logo in clientLogos" :key="`duplicate-${logo.alt}`" class="flex-shrink-0">
                                <div
                                    class="w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 flex items-center justify-center p-4 bg-white rounded-xl shadow-sm">
                                    <img :src="logo.src" :alt="logo.alt"
                                        class="max-w-full max-h-full object-contain filter grayscale" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Gradient Fades -->
                    <div
                        class="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none">
                    </div>
                    <div
                        class="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none">
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Testimonial data
const testimonials = [
    {
        name: "Alex Morgan",
        designation: "Head of Product",
        company: "EcoPlatinum Solutions",
        text: "Tekfolio brought clarity to a complex project. The team was structured, responsive, and focused on delivering something that worked well from day one."
    },
    {
        name: "Sarah Chen",
        designation: "CTO",
        company: "XStrato Technologies",
        text: "What stood out was their attention to detail and how well they understood our business goals. The final product was fast, stable, and easy to scale."
    },
    {
        name: "Marcus Johnson",
        designation: "Digital Director",
        company: "Wilson Samson Group",
        text: "Tekfolio felt more like a partner than a vendor. Communication was clear, timelines were realistic, and delivery met expectations every step of the way."
    },
    {
        name: "Priya Patel",
        designation: "VP of Engineering",
        import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
        text: "What sets Tekfolio apart is their ability to move fast without cutting corners. Clean code, clear communication, and they actually hit their deadlines."
    },
    {
        name: "David Okafor",
        designation: "Founder & CEO",
        company: "Petabiz Innovations",
        text: "Working with Tekfolio transformed our digital presence. Their technical expertise combined with strategic insight delivered results beyond our expectations."
    }
]

// Client logos data
const clientLogos = [
    { src: '/assets/img/ecoplatinum.png', alt: 'EcoPlatinum' },
    { src: '/assets/img/elevation.png', alt: 'Elevation' },
    { src: '/assets/img/lliteraforge.png', alt: 'Lliteraforge' },
    { src: '/assets/img/oaktree.png', alt: 'OakTree' },
    { src: '/assets/img/petabiz.png', alt: 'Petabiz' },
    { src: '/assets/img/ppil.png', alt: 'PPIL' },
    { src: '/assets/img/sefa.png', alt: 'Sefa' },
    { src: '/assets/img/syntanium.png', alt: 'Syntanium' },
    { src: '/assets/img/veraverde.png', alt: 'VeraVerde' },
    { src: '/assets/img/wilsonsamson.png', alt: 'WilsonSamson' },
    { src: '/assets/img/xstrato.png', alt: 'XStrato' }
]

// State
const currentIndex = ref(0)
const autoRotateInterval = ref(null)
const logoScrollDuration = 40 // seconds for complete scroll cycle

// Computed
const currentTestimonial = computed(() => testimonials[currentIndex.value])

// Testimonial rotation
const goToTestimonial = (index) => {
    currentIndex.value = index
    resetAutoRotation()
}

const nextTestimonial = () => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const startAutoRotation = () => {
    autoRotateInterval.value = setInterval(nextTestimonial, 5000) // Rotate every 5 seconds
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
}

/* Pause animation on hover */
.animate-scroll:hover {
    animation-play-state: paused;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .lg\:grid-cols-5 {
        grid-template-columns: 1fr;
    }

    .lg\:border-r {
        border-right: none;
        border-bottom: 1px solid #f3f4f6;
        padding-right: 0;
        padding-bottom: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .relative.h-\[240px\] {
        height: 180px;
    }
}

/* Custom gradient for Tekfolio brand */
.bg-gradient-to-r {
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.from-purple-600 {
    --tw-gradient-from: #7c3aed;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(124, 58, 237, 0));
}

.to-blue-600 {
    --tw-gradient-to: #2563eb;
}
</style>