<template>
    <section class="py-20 px-6 bg-white dark:bg-gray-900 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header - Moved to top left for desktop -->
            <div class="lg:text-left text-center mb-16">
                <!-- Small accent line above heading -->
                <div class="w-16 h-0.5 bg-red-500 lg:mx-0 mx-auto mb-6" data-aos="fade-right" data-aos-duration="800">
                </div>

                <!-- Main heading with Barlow font -->
                <h2 class="text-5xl md:text-6xl lg:text-5xl font-barlow font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight"
                    data-aos="fade-up" data-aos-duration="800">
                    OUR COMPANY
                </h2>

                <!-- Decorative elements -->
                <div class="flex items-center lg:justify-start justify-center mb-12" data-aos="fade-left"
                    data-aos-duration="800">
                    <div class="w-20 h-px bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></div>
                    <div class="w-3 h-3 bg-red-500 rounded-full mx-4"></div>
                    <div class="w-20 h-px bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></div>
                </div>
            </div>

            <!-- Content Container -->
            <div class="grid lg:grid-cols-2 gap-16 items-start">
                <!-- Left Column - Main Content -->
                <div class="space-y-8 lg:mt-12" ref="contentRef">
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
                                Syntanium is an engineering and energy solutions company serving the oil and gas
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

                    <!-- Additional content or CTA could go here -->
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-px bg-gradient-to-r from-red-500 to-transparent"></div>
                        <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">
                            Engineering Excellence at Your Service
                        </p>
                    </div>
                </div>

                <!-- Right Column - Header & Visual Element -->
                <div class="relative" ref="visualRef">
                    <!-- Visual Element -->
                    <div class="relative">
                        <!-- Large accent shape -->
                        <div class="absolute inset-0 bg-gradient-to-br from-red-500/10 to-gray-900/10 dark:from-red-500/20 dark:to-white/10 rounded-3xl transform transition-all duration-1000"
                            :class="{ 'rotate-2': !isVisible, 'rotate-3': isVisible }"></div>

                        <div class="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 transform transition-all duration-1000 hover:rotate-0 hover:shadow-3xl"
                            :class="{ '-rotate-1': !isVisible, '-rotate-2': isVisible }">

                            <!-- Our Story subheading -->
                            <h3
                                class="text-2xl font-barlow font-bold text-red-500 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                                OUR STORY
                            </h3>

                            <!-- Text content for the visual element -->
                            <div class="space-y-6 text-gray-700 dark:text-gray-300">
                                <p class="text-lg leading-relaxed font-light">
                                    Syntanium was founded on the belief that <span
                                        class="text-red-500 font-medium">complex energy challenges</span> demand simple,
                                    effective, and dependable solutions. From engineering design to construction and
                                    facility maintenance, we bring together <span
                                        class="text-gray-900 dark:text-white font-semibold">technical skill and field
                                        experience</span> to support projects that power industries and communities.
                                </p>

                                <p class="text-lg leading-relaxed font-light">
                                    Over the years, our team has grown into a <span
                                        class="text-red-500 font-medium">trusted partner</span> for operators seeking
                                    efficiency without compromise. Whether developing new infrastructure, upgrading
                                    existing assets, or ensuring facilities remain <span
                                        class="text-gray-900 dark:text-white font-semibold">safe and productive</span>,
                                    we work with a commitment to results that last.
                                </p>
                            </div>

                            <!-- Floating elements for visual interest -->
                            <div class="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <div class="absolute bottom-4 left-4 w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse"
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
const isVisible = ref(false)

// Intersection Observer for scroll animations
onMounted(() => {
    // Only initialize IntersectionObserver if running on client side
    if (typeof window !== 'undefined') {
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
    }

    // Initialize AOS if running on client side
    if (typeof window !== 'undefined') {
        import('aos/dist/aos.css').then(() => {
            import('aos').then((AOS) => {
                AOS.init({
                    duration: 800,
                    once: true,
                    easing: 'ease-out-cubic'
                })
            })
        })
    }
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