<template>
    <section class="engineering-services py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Main heading with icon -->
            <div class="flex flex-col lg:flex-row items-center justify-center mb-12 lg:mb-16">
                <img src="/assets/img/maintenace.png" alt="Maintenance Icon"
                    class="maintenance-icon w-16 h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16 mb-4 lg:mb-0 lg:mr-4" />
                <h2
                    class="text-2xl sm:text-3xl lg:text-4xl font-barlow-extrabold font-bold text-center lg:text-left text-gray-900 dark:text-white">
                    Engineering that Powers Performance
                </h2>
            </div>

            <!-- Content row: 3/4 text, 1/4 image -->
            <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <!-- Text content - 3/4 width on desktop -->
                <div class="lg:w-3/4">
                    <!-- Services grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Equipment Maintenance Planning -->
                        <div class="service-card fade-up">
                            <h3 class="text-xl font-barlow-semibold font-semibold mb-3 text-brand-red">Equipment
                                Maintenance Planning</h3>
                            <p class="text-gray-900 dark:text-gray-300 font-barlow leading-relaxed">
                                We develop structured maintenance strategies that extend asset life, reduce downtime,
                                and optimize performance.
                                Our predictive and preventive approaches ensure critical equipment operates at peak
                                efficiency, delivering
                                long-term value across complex industrial operations.
                            </p>
                        </div>

                        <!-- Project Management -->
                        <div class="service-card fade-up">
                            <h3 class="text-xl font-barlow-semibold font-semibold mb-3 text-brand-red">Project
                                Management</h3>
                            <p class="text-gray-900 dark:text-gray-300 font-barlow leading-relaxed">
                                Our teams provide full project oversight from planning through delivery. With strong
                                control on cost, time,
                                and quality, we help clients achieve reliable outcomes while reducing risks and
                                maximizing the value of every investment.
                            </p>
                        </div>

                        <!-- Design and Studies -->
                        <div class="service-card fade-up">
                            <h3 class="text-xl font-barlow-semibold font-semibold mb-3 text-brand-red">Design and
                                Studies</h3>
                            <p class="text-gray-900 dark:text-gray-300 font-barlow leading-relaxed">
                                We deliver comprehensive pre-project and detailed engineering studies to support smarter
                                decisions.
                                By combining technical depth with practical insights, our designs improve efficiency,
                                reduce costs,
                                and prepare facilities for safe, reliable, and sustainable operations.
                            </p>
                        </div>

                        <!-- Technical Consulting -->
                        <div class="service-card fade-up">
                            <h3 class="text-xl font-barlow-semibold font-semibold mb-3 text-brand-red">Technical
                                Consulting</h3>
                            <p class="text-gray-900 dark:text-gray-300 font-barlow leading-relaxed">
                                Our specialists help clients solve complex engineering challenges across upstream,
                                midstream, and downstream operations.
                                With a focus on safety, efficiency, and performance, we offer technical guidance that
                                ensures projects meet both
                                immediate and long-term objectives.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Image - 1/4 width on desktop, hidden on mobile -->
                <div class="lg:w-1/4 flex justify-center lg:justify-end">
                    <div class="relative w-full max-w-xs lg:max-w-none">
                        <img src="/assets/img/engineering-syntanium2.png" alt="Engineering at Syntanium"
                            class="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { onMounted } from 'vue';

export default {
    name: 'EngineeringServices',
    setup() {
        onMounted(() => {
            // Add fade-up animation when component mounts
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-up-visible')
                    }
                })
            }, observerOptions)

            // Observe all service cards
            document.querySelectorAll('.service-card').forEach(card => {
                observer.observe(card)
            })
        })
    }
}
</script>

<style scoped>
/* Import Barlow font with different weights */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&display=swap');

/* Brand color */
.text-brand-red {
    color: #fe4135;
}

/* Maintenance icon styling with brand color filter */
.maintenance-icon {
    filter: brightness(0) saturate(100%) invert(29%) sepia(89%) saturate(4847%) hue-rotate(351deg) brightness(101%) contrast(95%);
    transition: all 0.3s ease;
}

.maintenance-icon:hover {
    transform: scale(1.1);
}

/* Force mobile sizing */
@media (max-width: 639px) {
    .maintenance-icon {
        width: 3rem !important;
        /* 80px */
        height: 3rem !important;
        /* 80px */
    }
}

/* Service card styling */
.service-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 1.5rem;
    height: 100%;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Fade-up animation */
.fade-up {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-up-visible {
    opacity: 1;
    transform: translateY(0);
}

/* Staggered animation for cards */
.service-card:nth-child(1) {
    transition-delay: 0.1s;
}

.service-card:nth-child(2) {
    transition-delay: 0.2s;
}

.service-card:nth-child(3) {
    transition-delay: 0.3s;
}

.service-card:nth-child(4) {
    transition-delay: 0.4s;
}

/* Dark mode support */
.dark .service-card {
    background: #1e293b;
    border-color: #334155;
}

.dark .service-card p {
    color: #cbd5e1;
}

/* Responsive adjustments */
@media (max-width: 1023px) {
    .engineering-services {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    .service-card {
        padding: 1.25rem;
    }
}

@media (max-width: 767px) {
    .service-card {
        padding: 1rem;
    }

    .maintenance-icon {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.75rem;
    }
}
</style>