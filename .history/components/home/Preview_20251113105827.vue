<template>
    <section class="py-20 px-6 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header - Centered -->
            <div class="mb-16 text-center" ref="headerRef">
                <!-- Small accent line above heading -->
                <div class="w-16 h-0.5 bg-[#4D7EFF] mx-auto mb-4 transform transition-all duration-700"
                    :class="{ 'w-24': isVisible }"></div>

                <!-- Main heading -->
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                    What We Do
                </h2>

                <p class="text-xl text-gray-600 max-w-3xl mx-auto font-semibold">
                    Clarity, Structure & Impact that Lasts
                </p>

                <!-- Decorative elements -->
                <div class="flex items-center justify-center mt-6">
                    <div class="w-20 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
                    <div class="w-3 h-3 bg-[#4D7EFF] rounded-full mx-4 transform transition-all duration-500"
                        :class="{ 'scale-125': isVisible }"></div>
                    <div class="w-20 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
                </div>
            </div>

            <!-- Content Container -->
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <!-- Left Column - Services Grid -->
                <div class="space-y-8" ref="contentRef">
                    <!-- Business Advisory & Restructuring -->
                    <div
                        class="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-[#4D7EFF]/20">
                        <div class="flex items-start gap-6">
                            <div
                                class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <TrendingUp class="w-7 h-7 text-[#4D7EFF]" />
                            </div>
                            <div class="flex-1">
                                <h3
                                    class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#4D7EFF] transition-colors duration-300">
                                    Business Advisory & Restructuring
                                </h3>
                                <p class="text-lg text-gray-600 leading-relaxed">
                                    Strategic guidance and organizational alignment to help you operate efficiently,
                                    stay agile, and grow sustainably.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Employee Productivity Training -->
                    <div
                        class="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-[#4D7EFF]/20">
                        <div class="flex items-start gap-6">
                            <div
                                class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Users class="w-7 h-7 text-[#4D7EFF]" />
                            </div>
                            <div class="flex-1">
                                <h3
                                    class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#4D7EFF] transition-colors duration-300">
                                    Employee Productivity Training
                                </h3>
                                <p class="text-lg text-gray-600 leading-relaxed">
                                    Interactive sessions that help teams work smarter, collaborate better, and perform
                                    at their best.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Ghostwriting Services -->
                    <div
                        class="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-[#4D7EFF]/20">
                        <div class="flex items-start gap-6">
                            <div
                                class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <PenTool class="w-7 h-7 text-[#4D7EFF]" />
                            </div>
                            <div class="flex-1">
                                <h3
                                    class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#4D7EFF] transition-colors duration-300">
                                    Ghostwriting Services
                                </h3>
                                <p class="text-lg text-gray-600 leading-relaxed">
                                    Transform your insights, stories, and expertise into powerful written assets—books,
                                    proposals, and profiles.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Book Publishing -->
                    <div
                        class="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-[#4D7EFF]/20">
                        <div class="flex items-start gap-6">
                            <div
                                class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <BookOpen class="w-7 h-7 text-[#4D7EFF]" />
                            </div>
                            <div class="flex-1">
                                <h3
                                    class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#4D7EFF] transition-colors duration-300">
                                    Book Publishing
                                </h3>
                                <p class="text-lg text-gray-600 leading-relaxed">
                                    End-to-end publishing support that turns your manuscript into a polished,
                                    market-ready book.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column - Sticky Note Card -->
                <div class="relative" ref="visualRef">
                    <!-- Mission Sticky Note Card -->
                    <div class="relative animate-float">
                        <!-- Sticky note with shadow -->
                        <div class="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 transform transition-all duration-500 hover:scale-105 sticky-note border border-blue-100"
                            style="box-shadow: 0 20px 40px rgba(77, 126, 255, 0.15), 0 5px 15px rgba(77, 126, 255, 0.1);">

                            <!-- Subtle top shadow for sticky note effect -->
                            <div
                                class="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#4D7EFF]/10 to-transparent rounded-t-2xl">
                            </div>

                            <!-- Mission Header with accent -->
                            <div class="mb-8 relative">
                                <div class="flex items-center mb-4">
                                    <div class="w-10 h-0.5 bg-[#4D7EFF] mr-4"></div>
                                    <h3 class="text-2xl font-bold text-gray-900 tracking-wide">
                                        Our Approach
                                    </h3>
                                </div>
                            </div>

                            <!-- Content Text -->
                            <div class="space-y-6 relative z-10">
                                <p class="text-lg leading-relaxed text-gray-700 font-medium">
                                    At Litera-Forge, we bridge strategy and creativity, enabling businesses, leaders,
                                    and authors to bring clarity to their ideas, structure to their vision, and the
                                    execution support they need to move forward.
                                </p>
                                <p class="text-lg leading-relaxed text-gray-700">
                                    Our work spans <span class="text-[#4D7EFF] font-bold">four core areas</span> that
                                    drive growth and transformation, helping you turn bold visions into structured
                                    solutions through advisory, training, ghostwriting, and publishing.
                                </p>
                            </div>

                            <!-- CTA Button -->
                            <div class="mt-10">
                                <NuxtLink to="/services"
                                    class="group inline-flex items-center gap-3 px-8 py-4 bg-[#4D7EFF] text-white font-bold rounded-xl transition-all duration-300 hover:bg-gray-900 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    Learn More About Our Services
                                    <ArrowRight
                                        class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </NuxtLink>
                            </div>

                            <!-- Decorative corner fold effect -->
                            <div class="absolute bottom-0 right-0 w-20 h-20 overflow-hidden">
                                <div
                                    class="absolute bottom-0 right-0 w-0 h-0 border-l-[80px] border-l-transparent border-b-[80px] border-b-[#4D7EFF]/10 transform origin-bottom-right">
                                </div>
                            </div>

                            <!-- Subtle pin/tack effect at top -->
                            <div
                                class="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#4D7EFF] rounded-full shadow-lg">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowRight, BookOpen, PenTool, TrendingUp, Users } from 'lucide-vue-next'
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
/* Sticky note subtle float animation */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-float {
    animation: float 8s ease-in-out infinite;
}

/* Enhanced sticky note effect */
.sticky-note {
    position: relative;
    background: linear-gradient(135deg, #f8faff 0%, #f0f4ff 100%);
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
            rgba(77, 126, 255, 0.03) 31px,
            rgba(77, 126, 255, 0.03) 32px);
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
.space-y-8>* {
    animation: fadeInUp 0.8s ease-out forwards;
}

.space-y-8>*:nth-child(1) {
    animation-delay: 0.1s;
}

.space-y-8>*:nth-child(2) {
    animation-delay: 0.2s;
}

.space-y-8>*:nth-child(3) {
    animation-delay: 0.3s;
}

.space-y-8>*:nth-child(4) {
    animation-delay: 0.4s;
}
</style>