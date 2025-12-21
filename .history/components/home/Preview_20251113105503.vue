<template>
    <section class="relative w-full py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">
        <div class="container mx-auto px-4 md:px-8 lg:px-12">

            <!-- Section Header with decorative elements -->
            <div class="text-center max-w-4xl mx-auto mb-16" ref="headerRef">
                <!-- Accent line -->
                <div class="w-16 h-0.5 bg-brand-blue mx-auto mb-4 transform transition-all duration-700"
                    :class="{ 'w-24': isVisible }"></div>

                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    What We Do
                </h2>

                <p class="text-xl md:text-2xl text-brand-blue font-semibold mb-6">
                    Clarity, Structure & Impact that Lasts
                </p>

                <!-- Decorative divider -->
                <div class="flex items-center justify-center mt-6 mb-8">
                    <div class="w-20 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
                    <div class="w-3 h-3 bg-brand-blue rounded-full mx-4 transform transition-all duration-500"
                        :class="{ 'scale-125': isVisible }"></div>
                    <div class="w-20 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
                </div>

                <p class="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    At Litera-Forge, we bridge strategy and creativity, enabling businesses, leaders,
                    and authors bring <span class="text-brand-blue font-semibold">clarity to their ideas</span>,
                    structure to their vision, and the execution support they need to move forward.
                    Our work spans <span class="font-semibold text-gray-900">four core areas</span> that drive growth
                    and transformation:
                </p>
            </div>

            <!-- Service Cards Grid with staggered animation -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">

                <!-- Service 1: Business Advisory -->
                <div class="service-card" ref="card1Ref" :class="{ 'card-visible': card1Visible }">
                    <div class="card-inner">
                        <!-- Number badge -->
                        <div
                            class="absolute -top-4 -left-4 w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                            01
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="icon-wrapper">
                                <TrendingUp class="w-6 h-6 md:w-7 md:h-7 text-white" />
                            </div>
                            <div class="flex-1">
                                <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                    Business Advisory & Restructuring
                                </h3>
                                <p class="text-gray-700 text-sm md:text-base leading-relaxed">
                                    Strategic guidance and organizational alignment to help you operate efficiently,
                                    stay agile, and grow sustainably.
                                </p>
                            </div>
                        </div>

                        <!-- Subtle corner accent -->
                        <div class="absolute bottom-0 right-0 w-20 h-20 opacity-10">
                            <TrendingUp class="w-full h-full text-brand-blue" />
                        </div>
                    </div>
                </div>

                <!-- Service 2: Productivity Training -->
                <div class="service-card" ref="card2Ref" :class="{ 'card-visible': card2Visible }">
                    <div class="card-inner">
                        <div
                            class="absolute -top-4 -left-4 w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                            02
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="icon-wrapper">
                                <Users class="w-6 h-6 md:w-7 md:h-7 text-white" />
                            </div>
                            <div class="flex-1">
                                <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                    Employee Productivity Training
                                </h3>
                                <p class="text-gray-700 text-sm md:text-base leading-relaxed">
                                    Interactive sessions that help teams work smarter, collaborate better,
                                    and perform at their best.
                                </p>
                            </div>
                        </div>

                        <div class="absolute bottom-0 right-0 w-20 h-20 opacity-10">
                            <Users class="w-full h-full text-brand-blue" />
                        </div>
                    </div>
                </div>

                <!-- Service 3: Ghostwriting -->
                <div class="service-card" ref="card3Ref" :class="{ 'card-visible': card3Visible }">
                    <div class="card-inner">
                        <div
                            class="absolute -top-4 -left-4 w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                            03
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="icon-wrapper">
                                <PenTool class="w-6 h-6 md:w-7 md:h-7 text-white" />
                            </div>
                            <div class="flex-1">
                                <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                    Ghostwriting Services
                                </h3>
                                <p class="text-gray-700 text-sm md:text-base leading-relaxed">
                                    Transform your insights, stories, and expertise into powerful written assets—books,
                                    proposals, and profiles.
                                </p>
                            </div>
                        </div>

                        <div class="absolute bottom-0 right-0 w-20 h-20 opacity-10">
                            <PenTool class="w-full h-full text-brand-blue" />
                        </div>
                    </div>
                </div>

                <!-- Service 4: Book Publishing -->
                <div class="service-card" ref="card4Ref" :class="{ 'card-visible': card4Visible }">
                    <div class="card-inner">
                        <div
                            class="absolute -top-4 -left-4 w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                            04
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="icon-wrapper">
                                <BookOpen class="w-6 h-6 md:w-7 md:h-7 text-white" />
                            </div>
                            <div class="flex-1">
                                <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                    Book Publishing
                                </h3>
                                <p class="text-gray-700 text-sm md:text-base leading-relaxed">
                                    End-to-end publishing support that turns your manuscript into a polished,
                                    market-ready book.
                                </p>
                            </div>
                        </div>

                        <div class="absolute bottom-0 right-0 w-20 h-20 opacity-10">
                            <BookOpen class="w-full h-full text-brand-blue" />
                        </div>
                    </div>
                </div>

            </div>

            <!-- CTA Button with arrow -->
            <div class="flex justify-center">
                <NuxtLink to="/services"
                    class="group inline-flex items-center gap-3 px-8 py-4 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
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

// Refs for animations
const headerRef = ref(null);
const card1Ref = ref(null);
const card2Ref = ref(null);
const card3Ref = ref(null);
const card4Ref = ref(null);

const isVisible = ref(false);
const card1Visible = ref(false);
const card2Visible = ref(false);
const card3Visible = ref(false);
const card4Visible = ref(false);

// Intersection Observer for scroll animations
onMounted(() => {
    const observerOptions = { threshold: 0.2 };

    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                isVisible.value = true;
            }
        });
    }, observerOptions);

    const card1Observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => { card1Visible.value = true; }, 100);
            }
        });
    }, observerOptions);

    const card2Observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => { card2Visible.value = true; }, 250);
            }
        });
    }, observerOptions);

    const card3Observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => { card3Visible.value = true; }, 400);
            }
        });
    }, observerOptions);

    const card4Observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => { card4Visible.value = true; }, 550);
            }
        });
    }, observerOptions);

    if (headerRef.value) headerObserver.observe(headerRef.value);
    if (card1Ref.value) card1Observer.observe(card1Ref.value);
    if (card2Ref.value) card2Observer.observe(card2Ref.value);
    if (card3Ref.value) card3Observer.observe(card3Ref.value);
    if (card4Ref.value) card4Observer.observe(card4Ref.value);
});
</script>

<style scoped>
/* Brand colors */
.bg-brand-blue {
    background-color: #4D7EFF;
}

.bg-brand-blue-dark {
    background-color: #3D6EEF;
}

.text-brand-blue {
    color: #4D7EFF;
}

/* Service Card Base Styling */
.service-card {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
}

.service-card.card-visible {
    opacity: 1;
    transform: translateY(0);
}

.card-inner {
    position: relative;
    padding: 2rem;
    background: white;
    border-radius: 1rem;
    border: 2px solid #f1f5f9;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    overflow: hidden;
}

.service-card:hover .card-inner {
    border-color: #4D7EFF;
    box-shadow: 0 12px 24px rgba(77, 126, 255, 0.15);
    transform: translateY(-4px);
}

/* Icon Wrapper */
.icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    background: linear-gradient(135deg, #4D7EFF 0%, #3D6EEF 100%);
    border-radius: 0.75rem;
    flex-shrink: 0;
    transition: all 0.3s ease;
}

.service-card:hover .icon-wrapper {
    transform: scale(1.1) rotate(-5deg);
    box-shadow: 0 8px 16px rgba(77, 126, 255, 0.3);
}

/* Number badge pulse on hover */
.card-inner .w-12 {
    transition: all 0.3s ease;
}

.service-card:hover .card-inner .w-12 {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(77, 126, 255, 0.4);
}

/* Responsive adjustments */
@media (max-width: 767px) {
    .card-inner {
        padding: 1.5rem;
    }

    .icon-wrapper {
        width: 3rem;
        height: 3rem;
    }

    .card-inner .w-12 {
        width: 2.5rem;
        height: 2.5rem;
        font-size: 0.875rem;
    }
}

@media (min-width: 1024px) {
    .card-inner {
        padding: 2.5rem;
    }
}
</style>