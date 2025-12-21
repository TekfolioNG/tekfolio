<template>
    <section class="py-20 px-6 bg-white dark:bg-gray-900 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header - Desktop Left, Mobile Center -->
            <div class="mb-12 lg:mb-8" ref="headerRef">
                <div class="lg:text-left text-center">
                    <!-- Small accent line above heading -->
                    <div class="w-16 h-0.5 bg-red-500 lg:mx-0 mx-auto mb-4 transform transition-all duration-700"
                        :class="{ 'w-24': isVisible }"></div>

                    <!-- Main heading with Barlow font -->
                    <h2
                        class="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-barlow font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                        OUR COMPANY
                    </h2>

                    <!-- Decorative elements -->
                    <div class="flex items-center lg:justify-start justify-center mb-6">
                        <div class="w-20 h-px bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></div>
                        <div class="w-3 h-3 bg-red-500 rounded-full mx-4 transform transition-all duration-500"
                            :class="{ 'scale-125': isVisible }"></div>
                        <div class="w-20 h-px bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></div>
                    </div>
                </div>
            </div>

            <!-- Content Container -->
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <!-- Left Column - Main Content -->
                <div class="space-y-8" ref="contentRef">
                    <!-- Main content card -->
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-10 relative overflow-hidden group">
                        <!-- Subtle background pattern -->
                        <div
                            class="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -translate-y-8 translate-x-8 transition-transform duration-1000 group-hover:scale-110">
                        </div>
                        <div
                            class="absolute bottom-0 left-0 w-24 h-24 bg-gray-900/5 dark:bg-white/5 rounded-full translate-y-4 -translate-x-4 transition-transform duration-1000 group-hover:scale-110">
                        </div>

                        <!-- Content -->
                        <div class="relative z-10">
                            <p
                                class="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-light mb-6">
                                Syntanium Energy is an engineering and energy solutions company serving the oil and gas
                                industry across
                                <span class="text-red-500 font-medium">upstream, midstream, and downstream</span>
                                operations.
                            </p>

                            <p class="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                                We focus on <span class="text-gray-900 dark:text-white font-semibold">safety, quality,
                                    and sustainability</span>,
                                delivering practical services that fuel reliable performance and long-term value for our
                                partners.
                            </p>
                        </div>
                    </div>

                    <!-- Additional content or CTA -->
                    <div class="flex items-center space-x-4 mt-6">
                        <div class="w-12 h-px bg-gradient-to-r from-red-500 to-transparent"></div>
                        <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">
                            Engineering Excellence at Your Service
                        </p>
                    </div>
                </div>

                <!-- Right Column - Story Section -->
                <div class="relative lg:-mt-24 mt-8" ref="visualRef">
                    <!-- Story Content -->
                    <div class="relative">
                        <!-- Large accent shape -->
                        <div class="absolute inset-0 bg-gradient-to-br from-red-500/10 to-gray-900/10 dark:from-red-500/20 dark:to-white/10 rounded-3xl transform transition-all duration-1000"
                            :class="{ 'rotate-2': !isVisible, 'rotate-3': isVisible }"></div>

                        <div class="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-10 transform transition-all duration-1000 hover:rotate-0 hover:shadow-3xl"
                            :class="{ '-rotate-1': !isVisible, '-rotate-2': isVisible }">

                            <!-- Story Header -->
                            <div class="mb-6">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-0.5 bg-red-500 mr-3"></div>
                                    <h3
                                        class="text-lg md:text-xl font-barlow font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                                        Our Story
                                    </h3>
                                </div>
                            </div>

                            <!-- Content Text -->
                            <div class="space-y-5 relative z-10">
                                <p
                                    class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                                    Syntanium Energy was founded on the belief that <span
                                        class="text-red-500 font-semibold">complex energy challenges demand simple,
                                        effective, and dependable solutions</span>. From <span
                                        class="font-semibold text-gray-900 dark:text-white">engineering design to
                                        construction and facility maintenance</span>, we bring together technical skill
                                    and field experience to support projects that power industries and communities.
                                </p>

                                <p
                                    class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                                    Over the years, our team has grown into a <span
                                        class="text-red-500 font-semibold">trusted partner</span> for operators seeking
                                    <span class="font-semibold text-gray-900 dark:text-white">efficiency without
                                        compromise</span>. Whether developing new infrastructure, upgrading existing
                                    assets, or ensuring facilities remain <span
                                        class="font-semibold text-gray-900 dark:text-white">safe and productive,
                                    </span>we work
                                    with a commitment
                                    to <span class="text-red-500 font-semibold">results that last</span>.
                                </p>
                            </div>

                            <!-- Floating elements for visual interest -->
                            <div class="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <div class="absolute bottom-4 left-4 w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse"
                                style="animation-delay: 1s;"></div>
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

/* Enhanced shadow for more depth */
.shadow-3xl {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
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

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Apply animations when component mounts */
.space-y-8>* {
    animation: fadeInUp 0.8s ease-out forwards;
}

.space-y-8>*:nth-child(2) {
    animation-delay: 0.2s;
}

.space-y-8>*:nth-child(3) {
    animation-delay: 0.4s;
}

/* Custom pulse animation for floating dots */
@keyframes customPulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.5;
        transform: scale(0.8);
    }
}

.animate-pulse {
    animation: customPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>