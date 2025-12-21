<template>
    <section class="py-20 px-6 bg-gray-50 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header - Centered -->
            <div class="mb-16 text-center" ref="headerRef">
                <!-- Small accent line above heading -->
                <div class="w-16 h-0.5 bg-[#0099CC] mx-auto mb-4 transform transition-all duration-700"
                    :class="{ 'w-24': isVisible }"></div>

                <!-- Main heading with Barlow font -->
                <h2
                    class="text-3xl md:text-4xl lg:text-5xl font-barlow font-extrabold text-gray-900 mb-3 tracking-tight">
                    DRIVING IMPACT ACROSS AFRICA
                </h2>

                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Building stronger businesses, one enterprise at a time
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
                <!-- Left Column - Value Proposition -->
                <div class="space-y-6" ref="contentRef">
                    <!-- Main value card -->
                    <div
                        class="bg-white rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden group border border-gray-100">
                        <!-- Subtle background pattern -->
                        <div
                            class="absolute top-0 right-0 w-40 h-40 bg-[#0099CC]/5 rounded-full -translate-y-16 translate-x-16 transition-transform duration-1000 group-hover:scale-125">
                        </div>
                        <div
                            class="absolute bottom-0 left-0 w-32 h-32 bg-gray-900/3 rounded-full translate-y-12 -translate-x-12 transition-transform duration-1000 group-hover:scale-125">
                        </div>

                        <!-- Content -->
                        <div class="relative z-10">
                            <div class="mb-6">
                                <h3 class="text-2xl md:text-3xl font-barlow font-bold text-gray-900 mb-4">
                                    Elevating Africa's Private Sector
                                </h3>
                            </div>

                            <p class="text-base md:text-lg leading-relaxed text-gray-700 mb-5">
                                Elevation Consulting is a <span class="text-[#0099CC] font-semibold">boutique enterprise
                                    support firm</span> dedicated to strengthening Africa's business ecosystem through
                                strategic guidance and practical solutions.
                            </p>

                            <p class="text-base md:text-lg leading-relaxed text-gray-700">
                                We partner with <span class="font-semibold text-gray-900">entrepreneurs, development
                                    institutions, and corporations</span> to build capacity, improve systems, and unlock
                                sustainable growth opportunities.
                            </p>
                        </div>
                    </div>

                    <!-- Stats or quick facts -->
                    <div class="grid grid-cols-3 gap-4">
                        <div class="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                            <div class="text-2xl font-bold text-[#0099CC] mb-1">SGBs</div>
                            <div class="text-xs text-gray-600 font-medium">Focus Area</div>
                        </div>
                        <div class="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                            <div class="text-2xl font-bold text-[#0099CC] mb-1">Pan-African</div>
                            <div class="text-xs text-gray-600 font-medium">Reach</div>
                        </div>
                        <div class="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                            <div class="text-2xl font-bold text-[#0099CC] mb-1">Impact</div>
                            <div class="text-xs text-gray-600 font-medium">Driven</div>
                        </div>
                    </div>
                </div>

                <!-- Right Column - Approach Section -->
                <div class="relative" ref="visualRef">
                    <!-- Approach Content -->
                    <div class="relative">
                        <!-- Large accent shape -->
                        <div class="absolute inset-0 bg-gradient-to-br from-[#0099CC]/8 to-gray-900/5 rounded-3xl transform transition-all duration-1000"
                            :class="{ 'rotate-1': !isVisible, 'rotate-2': isVisible }"></div>

                        <div class="relative bg-white rounded-3xl shadow-xl p-8 md:p-10 transform transition-all duration-1000 hover:rotate-0 hover:shadow-2xl border border-gray-100"
                            :class="{ '-rotate-1': !isVisible, '-rotate-1.5': isVisible }">

                            <!-- Approach Header -->
                            <div class="mb-6">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-0.5 bg-[#0099CC] mr-3"></div>
                                    <h3
                                        class="text-xl md:text-2xl font-barlow font-bold text-gray-900 uppercase tracking-wide">
                                        Our Approach
                                    </h3>
                                </div>
                            </div>

                            <!-- Content Text -->
                            <div class="space-y-5 relative z-10">
                                <p class="text-base md:text-lg leading-relaxed text-gray-700">
                                    We specialize in working with <span class="text-[#0099CC] font-semibold">Small and
                                        Growing Businesses (SGBs)</span> to overcome critical barriers and unlock their
                                    full potential through tailored, growth-enabling solutions.
                                </p>

                                <p class="text-base md:text-lg leading-relaxed text-gray-700">
                                    Our mission is clear: <span class="font-semibold text-gray-900">discover, empower,
                                        and scale viable ventures</span>. We guide enterprises through strategic
                                    development, building a pipeline of <span
                                        class="text-[#0099CC] font-semibold">investment-ready, impact-driven
                                        businesses</span> that attract meaningful capital and drive inclusive economic
                                    growth across the continent.
                                </p>

                                <!-- Key pillars -->
                                <div class="pt-4 space-y-3">
                                    <div class="flex items-start gap-3">
                                        <div class="w-1.5 h-1.5 bg-[#0099CC] rounded-full mt-2 flex-shrink-0"></div>
                                        <p class="text-sm text-gray-600"><span
                                                class="font-semibold text-gray-900">Strategic Development:</span>
                                            Building investment-ready enterprises</p>
                                    </div>
                                    <div class="flex items-start gap-3">
                                        <div class="w-1.5 h-1.5 bg-[#0099CC] rounded-full mt-2 flex-shrink-0"></div>
                                        <p class="text-sm text-gray-600"><span
                                                class="font-semibold text-gray-900">Capacity Building:</span>
                                            Strengthening systems and capabilities</p>
                                    </div>
                                    <div class="flex items-start gap-3">
                                        <div class="w-1.5 h-1.5 bg-[#0099CC] rounded-full mt-2 flex-shrink-0"></div>
                                        <p class="text-sm text-gray-600"><span
                                                class="font-semibold text-gray-900">Sustainable Impact:</span> Creating
                                            lasting economic value</p>
                                    </div>
                                </div>
                            </div>

                            <!-- CTA Button -->
                            <div class="mt-8">
                                <NuxtLink to="/about"
                                    class="inline-flex items-center gap-2 px-6 py-3 bg-[#0099CC] text-white font-semibold rounded-sm transition-all duration-300 hover:bg-gray-900 transform hover:scale-105 group">
                                    DISCOVER OUR STORY
                                    <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </NuxtLink>
                            </div>

                            <!-- Floating elements for visual interest -->
                            <div class="absolute top-6 right-6 w-2 h-2 bg-[#0099CC] rounded-full animate-pulse"></div>
                            <div class="absolute bottom-6 left-6 w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse"
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

/* Apply animations when component mounts */
.space-y-6>* {
    animation: fadeInUp 0.8s ease-out forwards;
}

.space-y-6>*:nth-child(2) {
    animation-delay: 0.2s;
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