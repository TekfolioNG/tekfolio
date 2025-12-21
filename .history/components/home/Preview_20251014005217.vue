<template>
    <section class="py-20 px-6 bg-gray-50 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header - Centered -->
            <div class="mb-10 text-center" ref="headerRef">
                <!-- Small accent line above heading -->
                <div class="w-16 h-0.5 bg-[#0099CC] mx-auto mb-4 transform transition-all duration-700"
                    :class="{ 'w-24': isVisible }"></div>

                <!-- Main heading with Barlow font -->
                <h2
                    class="text-2xl md:text-3xl lg:text-4xl font-barlow font-extrabold text-gray-900 mb-3 tracking-tight">
                    TRANSFORMING POTENTIAL INTO PERFORMANCE
                </h2>

                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    We help small and growing businesses scale, strengthen systems, and achieve measurable results.
                </p>

                <!-- Decorative elements -->
                <div class="flex items-center justify-center mt-6">
                    <div class="w-20 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
                    <div class="w-3 h-3 bg-[#0099CC] rounded-full mx-4 transform transition-all duration-500"
                        :class="{ 'scale-125': isVisible }"></div>
                    <div class="w-20 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
                </div>
            </div>

            <!-- Content Container -->
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <!-- Left Column - Main Description (No Heading) -->
                <div class="max-w-xl" ref="contentRef">
                    <!-- Content without card -->
                    <div class="space-y-6">
                        <p class="text-lg md:text-xl leading-relaxed text-gray-700">
                            Elevation Consulting is a <span class="text-[#0099CC] font-semibold">boutique enterprise
                                support firm</span> dedicated to helping Small and Growing Businesses (SGBs) and
                            organizations achieve measurable, sustainable growth. We design strategies that strengthen
                            systems, build capacity, and position enterprises for <span
                                class="font-semibold text-gray-900">investment and long-term success</span>.
                        </p>
                    </div>
                </div>

                <!-- Right Column - Mission Sticky Note -->
                <div class="relative" ref="visualRef">
                    <!-- Mission Sticky Note Card -->
                    <div class="relative animate-float">
                        <!-- Sticky note with shadow and rotation -->
                        <div class="relative bg-[#FFFACD] rounded-sm p-8 md:p-10 transform transition-all duration-500 hover:rotate-0 hover:scale-105 sticky-note"
                            :class="{ 'rotate-2': !isVisible, 'rotate-1': isVisible }"
                            style="box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15), 0 3px 8px rgba(0, 0, 0, 0.1);">

                            <!-- Subtle top shadow for sticky note effect -->
                            <div
                                class="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-black/5 to-transparent rounded-t-sm">
                            </div>

                            <!-- Mission Header with handwritten-style accent -->
                            <div class="mb-6 relative">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-0.5 bg-[#0099CC] mr-3"></div>
                                    <h3
                                        class="text-xl md:text-2xl font-barlow font-bold text-gray-900 uppercase tracking-wide">
                                        Our Mission
                                    </h3>
                                </div>
                            </div>

                            <!-- Content Text -->
                            <div class="space-y-5 relative z-10">
                                <p class="text-base md:text-lg leading-relaxed text-gray-800 font-normal">
                                    Our mission is to <span class="text-[#0099CC] font-bold">discover, empower, and
                                        scale viable ventures</span>—guiding them through each stage of development to
                                    create an ecosystem of resilient, impact-driven businesses contributing to <span
                                        class="font-semibold text-gray-900">Africa's economic growth</span>.
                                </p>
                            </div>

                            <!-- CTA Button -->
                            <div class="mt-8">
                                <NuxtLink to="/about"
                                    class="inline-flex items-center gap-2 px-6 py-3 bg-[#0099CC] text-white font-semibold rounded-sm transition-all duration-300 hover:bg-gray-900 transform hover:scale-105 group shadow-md">
                                    LEARN MORE ABOUT US
                                    <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </NuxtLink>
                            </div>

                            <!-- Decorative corner fold effect -->
                            <div class="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                                <div
                                    class="absolute bottom-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-b-[60px] border-b-gray-200/40 transform origin-bottom-right">
                                </div>
                            </div>

                            <!-- Subtle pin/tack effect at top -->
                            <div
                                class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#0099CC] rounded-full shadow-md">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// Reactive references for animations
const contentRef = ref(null)
const visualRef = ref(null)
const headerRef = ref(null)
const isVisible = ref(false)

// Intersection Observer for scroll animations
onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isVisible.value = true
                }
            })
        },
        { threshold: 0.3 }
    )

    if (contentRef.value) observer.observe(contentRef.value)
    if (visualRef.value) observer.observe(visualRef.value)
    if (headerRef.value) observer.observe(headerRef.value)
})
</script>

<style scoped>
/* Import Barlow font */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;600;700;800;900&display=swap');

/* Apply Barlow font family */
.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Custom letter spacing for large headings */
.tracking-tight {
    letter-spacing: -0.02em;
}

/* Sticky note subtle float animation */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-8px);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

/* Enhanced sticky note effect */
.sticky-note {
    position: relative;
    background: linear-gradient(135deg, #FFFACD 0%, #FFF8DC 100%);
}

.sticky-note::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
        repeating-linear-gradient(0deg,
            transparent,
            transparent 31px,
            rgba(0, 153, 204, 0.03) 31px,
            rgba(0, 153, 204, 0.03) 32px);
    pointer-events: none;
    border-radius: inherit;
}

/* Smooth entrance animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Apply animations when component mounts */
.space-y-6 {
    animation: fadeInUp 0.8s ease-out forwards;
}
</style>