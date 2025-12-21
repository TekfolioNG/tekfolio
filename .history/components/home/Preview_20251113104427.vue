<template>
    <section class="relative w-full py-16 md:py-20 lg:py-24 bg-white">
        <div class="container mx-auto px-4 md:px-8 lg:px-12">

            <!-- Section Header -->
            <div class="text-center max-w-4xl mx-auto mb-12 md:mb-16">
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    What We Do
                </h2>
                <p class="text-xl md:text-2xl text-gold font-semibold mb-6">
                    Clarity, Structure & Impact that Lasts
                </p>
                <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                    At Litera-Forge, we bridge strategy and creativity, enabling businesses, leaders,
                    and authors bring clarity to their ideas, structure to their vision, and the execution
                    support they need to move forward. Our work spans four core areas that drive growth and
                    transformation:
                </p>
            </div>

            <!-- Service Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">

                <!-- Service 1: Business Advisory -->
                <div class="service-card group">
                    <div class="flex items-start gap-4">
                        <div class="icon-wrapper">
                            <TrendingUp class="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <div class="flex-1">
                            <h3
                                class="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gold transition-colors duration-300">
                                Business Advisory & Restructuring
                            </h3>
                            <p class="text-gray-700 text-sm md:text-base leading-relaxed">
                                Strategic guidance and organizational alignment to help you operate efficiently,
                                stay agile, and grow sustainably.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Service 2: Productivity Training -->
                <div class="service-card group">
                    <div class="flex items-start gap-4">
                        <div class="icon-wrapper">
                            <Users class="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <div class="flex-1">
                            <h3
                                class="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gold transition-colors duration-300">
                                Employee Productivity Training
                            </h3>
                            <p class="text-gray-700 text-sm md:text-base leading-relaxed">
                                Interactive sessions that help teams work smarter, collaborate better,
                                and perform at their best.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Service 3: Ghostwriting -->
                <div class="service-card group">
                    <div class="flex items-start gap-4">
                        <div class="icon-wrapper">
                            <PenTool class="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <div class="flex-1">
                            <h3
                                class="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gold transition-colors duration-300">
                                Ghostwriting Services
                            </h3>
                            <p class="text-gray-700 text-sm md:text-base leading-relaxed">
                                Transform your insights, stories, and expertise into powerful written assets—books,
                                proposals, and profiles.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Service 4: Book Publishing -->
                <div class="service-card group">
                    <div class="flex items-start gap-4">
                        <div class="icon-wrapper">
                            <BookOpen class="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <div class="flex-1">
                            <h3
                                class="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gold transition-colors duration-300">
                                Book Publishing
                            </h3>
                            <p class="text-gray-700 text-sm md:text-base leading-relaxed">
                                End-to-end publishing support that turns your manuscript into a polished,
                                market-ready book.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <!-- CTA Button -->
            <div class="flex justify-center">
                <NuxtLink to="/services"
                    class="group inline-flex items-center gap-3 px-8 py-4 bg-navy hover:bg-navy-dark text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    Learn More
                    <ArrowRight class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </NuxtLink>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ArrowRight, BookOpen, PenTool, TrendingUp, Users } from 'lucide-vue-next';
</script>

<style scoped>
/* Gold color */
.text-gold {
    color: #D4AF37;
}

.group:hover .group-hover\:text-gold {
    color: #D4AF37;
}

/* Navy colors */
.bg-navy {
    background-color: #1e293b;
}

.bg-navy-dark {
    background-color: #0f172a;
}

/* Service Card Styling */
.service-card {
    padding: 2rem;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    border-radius: 1rem;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.service-card:hover {
    border-color: #D4AF37;
    box-shadow: 0 12px 24px rgba(212, 175, 55, 0.15);
    transform: translateY(-4px);
}

/* Icon Wrapper */
.icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    background: linear-gradient(135deg, #D4AF37 0%, #C9A32B 100%);
    border-radius: 0.75rem;
    flex-shrink: 0;
    transition: all 0.3s ease;
}

.service-card:hover .icon-wrapper {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 8px 16px rgba(212, 175, 55, 0.3);
}

/* Responsive adjustments */
@media (max-width: 767px) {
    .service-card {
        padding: 1.5rem;
    }

    .icon-wrapper {
        width: 3rem;
        height: 3rem;
    }
}

@media (min-width: 1024px) {
    .service-card {
        padding: 2.5rem;
    }
}
</style>