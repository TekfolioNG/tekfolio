<template>
    <section class="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <!-- Subtle background decoration -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>

        <div class="container mx-auto px-4 md:px-8 lg:px-12">
            <!-- Section Header -->
            <div class="text-center max-w-4xl mx-auto mb-12 md:mb-16" ref="headerRef">
                <!-- Accent line -->
                <div class="w-16 h-1 bg-brand-blue mx-auto mb-6 rounded-full transform transition-all duration-700"
                    :class="{ 'w-24': isVisible }"></div>

                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    What We Do
                </h2>
                <p class="text-lg md:text-xl lg:text-2xl text-brand-blue font-semibold mb-6">
                    Clarity, Structure & Impact that Lasts
                </p>
                <p class="text-base md:text-lg text-gray-600 leading-relaxed">
                    At Litera-Forge, we bridge strategy and creativity, enabling businesses, leaders, and authors bring
                    clarity to their ideas, structure to their vision, and the execution support they need to move
                    forward. Our work spans four core areas that drive growth and transformation:
                </p>
            </div>

            <!-- Service Highlights -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
                <!-- Business Advisory & Restructuring -->
                <div class="service-card group" ref="card1Ref">
                    <div class="service-card-inner">
                        <div class="flex items-start gap-4 md:gap-5">
                            <div
                                class="icon-wrapper bg-brand-blue/10 group-hover:bg-brand-blue transition-colors duration-300">
                                <TrendingUp
                                    class="w-6 h-6 md:w-7 md:h-7 text-brand-blue group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div class="flex-1">
                                <h3
                                    class="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors duration-300">
                                    Business Advisory & Restructuring
                                </h3>
                                <p class="text-gray-600 leading-relaxed text-sm md:text-base">
                                    Strategic guidance and organizational alignment to help you operate efficiently,
                                    stay
                                    agile, and grow sustainably.
                                </p>
                            </div>
                        </div>
                        <!-- Hover accent line -->
                        <div class="accent-line"></div>
                    </div>
                </div>

                <!-- Employee Productivity Training -->
                <div class="service-card group" ref="card2Ref">
                    <div class="service-card-inner">
                        <div class="flex items-start gap-4 md:gap-5">
                            <div
                                class="icon-wrapper bg-brand-blue/10 group-hover:bg-brand-blue transition-colors duration-300">
                                <Users
                                    class="w-6 h-6 md:w-7 md:h-7 text-brand-blue group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div class="flex-1">
                                <h3
                                    class="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors duration-300">
                                    Employee Productivity Training
                                </h3>
                                <p class="text-gray-600 leading-relaxed text-sm md:text-base">
                                    Interactive sessions that help teams work smarter, collaborate better, and perform
                                    at
                                    their best.
                                </p>
                            </div>
                        </div>
                        <div class="accent-line"></div>
                    </div>
                </div>

                <!-- Ghostwriting Services -->
                <div class="service-card group" ref="card3Ref">
                    <div class="service-card-inner">
                        <div class="flex items-start gap-4 md:gap-5">
                            <div
                                class="icon-wrapper bg-brand-blue/10 group-hover:bg-brand-blue transition-colors duration-300">
                                <PenTool
                                    class="w-6 h-6 md:w-7 md:h-7 text-brand-blue group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div class="flex-1">
                                <h3
                                    class="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors duration-300">
                                    Ghostwriting Services
                                </h3>
                                <p class="text-gray-600 leading-relaxed text-sm md:text-base">
                                    Transform your insights, stories, and expertise into powerful written assets—books,
                                    proposals, and profiles.
                                </p>
                            </div>
                        </div>
                        <div class="accent-line"></div>
                    </div>
                </div>

                <!-- Book Publishing -->
                <div class="service-card group" ref="card4Ref">
                    <div class="service-card-inner">
                        <div class="flex items-start gap-4 md:gap-5">
                            <div
                                class="icon-wrapper bg-brand-blue/10 group-hover:bg-brand-blue transition-colors duration-300">
                                <BookOpen
                                    class="w-6 h-6 md:w-7 md:h-7 text-brand-blue group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div class="flex-1">
                                <h3
                                    class="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors duration-300">
                                    Book Publishing
                                </h3>
                                <p class="text-gray-600 leading-relaxed text-sm md:text-base">
                                    End-to-end publishing support that turns your manuscript into a polished,
                                    market-ready
                                    book.
                                </p>
                            </div>
                        </div>
                        <div class="accent-line"></div>
                    </div>
                </div>
            </div>

            <!-- CTA Button -->
            <div class="text-center" ref="ctaRef">
                <NuxtLink to="/services"
                    class="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Learn More
                    <ArrowRight class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowRight, BookOpen, PenTool, TrendingUp, Users } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';

// Refs for scroll animations
const headerRef = ref(null);
const card1Ref = ref(null);
const card2Ref = ref(null);
const card3Ref = ref(null);
const card4Ref = ref(null);
const ctaRef = ref(null);
const isVisible = ref(false);

// Intersection Observer for scroll animations
onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    if (entry.target === headerRef.value) {
                        isVisible.value = true;
                    }
                }
            });
        },
        { threshold: 0.2 }
    );

    const refs = [headerRef, card1Ref, card2Ref, card3Ref, card4Ref, ctaRef];
    refs.forEach((ref) => {
        if (ref.value) observer.observe(ref.value);
    });
});
</script>

<style scoped>
/* Brand colors */
.bg-brand-blue {
    background-color: #4D7EFF;
}

.text-brand-blue {
    color: #4D7EFF;
}

.bg-brand-blue-dark {
    background-color: #3D6EEF;
}

.bg-brand-blue\/5 {
    background-color: rgba(77, 126, 255, 0.05);
}

.bg-brand-blue\/10 {
    background-color: rgba(77, 126, 255, 0.1);
}

/* Service card styling */
.service-card {
    position: relative;
    opacity: 0;
    transform: translateY(30px);
}

.service-card-inner {
    position: relative;
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    border: 2px solid #f1f5f9;
    transition: all 0.3s ease;
    overflow: hidden;
}

.service-card:hover .service-card-inner {
    border-color: #4D7EFF;
    box-shadow: 0 12px 28px rgba(77, 126, 255, 0.15);
    transform: translateY(-4px);
}

/* Icon wrapper */
.icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 0.75rem;
    flex-shrink: 0;
    transition: all 0.3s ease;
}

.service-card:hover .icon-wrapper {
    transform: scale(1.05);
}

/* Accent line that slides in on hover */
.accent-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 0;
    background: linear-gradient(90deg, #4D7EFF 0%, #3D6EEF 100%);
    transition: width 0.4s ease;
}

.service-card:hover .accent-line {
    width: 100%;
}

/* Fade in up animation */
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

.animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
}

/* Staggered animation delays */
.service-card:nth-child(1) {
    animation-delay: 0.1s;
}

.service-card:nth-child(2) {
    animation-delay: 0.2s;
}

.service-card:nth-child(3) {
    animation-delay: 0.3s;
}

.service-card:nth-child(4) {
    animation-delay: 0.4s;
}

/* Responsive adjustments */
@media (max-width: 767px) {
    .service-card-inner {
        padding: 1.5rem;
    }

    .icon-wrapper {
        width: 3rem;
        height: 3rem;
    }
}

@media (min-width: 1024px) {
    .service-card-inner {
        padding: 2.5rem;
    }
}
</style>