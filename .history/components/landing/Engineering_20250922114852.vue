<template>
    <div class="min-h-screen bg-white dark:bg-gray-900">

        <!-- Engineering Services Section -->
        <section class="w-full bg-white py-16 lg:py-24">
            <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
                <!-- Main Content Container -->
                <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    <!-- Text Content - Takes more space on desktop -->
                    <div class="lg:w-2/3 space-y-8">
                        <!-- Main Title -->
                        <div class="mb-12 ml-4 lg:ml-8">
                            <h2
                                class="text-2xl sm:text-3xl lg:text-4xl font-barlow font-bold text-gray-900 leading-tight fade-up">
                                Engineering that Powers Performance
                            </h2>
                        </div>

                        <!-- Services Grid - Single Column -->
                        <div class="grid grid-cols-1 gap-8 lg:gap-10">
                            <!-- Equipment Maintenance Planning -->
                            <div class="bg-gray-50 rounded-lg p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-500 fade-up border border-gray-100"
                                style="animation-delay: 0.1s;">
                                <h3 class="text-xl lg:text-2xl font-barlow font-bold mb-6 service-title"
                                    style="color: #fe4135;">
                                    Equipment Maintenance Planning
                                </h3>
                                <p class="text-gray-800 leading-relaxed font-barlow font-normal text-base lg:text-lg">
                                    We develop structured maintenance strategies that extend asset life, reduce
                                    downtime, and optimize performance. Our predictive and preventive approaches ensure
                                    critical equipment operates at peak efficiency, delivering long-term value across
                                    complex industrial operations.
                                </p>
                            </div>

                            <!-- Project Management -->
                            <div class="bg-gray-50 rounded-lg p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-500 fade-up border border-gray-100"
                                style="animation-delay: 0.2s;">
                                <h3 class="text-xl lg:text-2xl font-barlow font-bold mb-6 service-title"
                                    style="color: #fe4135;">
                                    Project Management
                                </h3>
                                <p class="text-gray-800 leading-relaxed font-barlow font-normal text-base lg:text-lg">
                                    Our teams provide full project oversight from planning through delivery. With strong
                                    control on cost, time, and quality, we help clients achieve reliable outcomes while
                                    reducing risks and maximizing the value of every investment.
                                </p>
                            </div>

                            <!-- Design and Studies -->
                            <div class="bg-gray-50 rounded-lg p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-500 fade-up border border-gray-100"
                                style="animation-delay: 0.3s;">
                                <h3 class="text-xl lg:text-2xl font-barlow font-bold mb-6 service-title"
                                    style="color: #fe4135;">
                                    Design and Studies
                                </h3>
                                <p class="text-gray-800 leading-relaxed font-barlow font-normal text-base lg:text-lg">
                                    We deliver comprehensive pre-project and detailed engineering studies to support
                                    smarter decisions. By combining technical depth with practical insights, our designs
                                    improve efficiency, reduce costs, and prepare facilities for safe, reliable, and
                                    sustainable operations.
                                </p>
                            </div>

                            <!-- Technical Consulting -->
                            <div class="bg-gray-50 rounded-lg p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-500 fade-up border border-gray-100"
                                style="animation-delay: 0.4s;">
                                <h3 class="text-xl lg:text-2xl font-barlow font-bold mb-6 service-title"
                                    style="color: #fe4135;">
                                    Technical Consulting
                                </h3>
                                <p class="text-gray-800 leading-relaxed font-barlow font-normal text-base lg:text-lg">
                                    Our specialists help clients solve complex engineering challenges across upstream,
                                    midstream, and downstream operations. With a focus on safety, efficiency, and
                                    performance, we offer technical guidance that ensures projects meet both immediate
                                    and long-term objectives.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Image - Wider and full height -->
                    <div class="lg:w-1/3 flex justify-center lg:justify-end">
                        <div class="w-full max-w-md lg:max-w-none lg:h-full">
                            <img src="/assets/img/engineering-syntanium2.png"
                                alt="Engineering Services at Syntanium Energy"
                                class="w-full h-full mobile-img-height desktop-img-height object-cover rounded-lg shadow-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
/* Import Barlow font with multiple weights */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* Fade up animation */
@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Service title specific fade up animation - slower and more professional */
@keyframes serviceTitleFadeUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-up {
    animation: fadeUp 0.8s ease-out forwards;
    opacity: 0;
}

.service-title {
    animation: serviceTitleFadeUp 1.2s ease-out forwards;
    opacity: 0;
    position: relative;
    display: inline-block;
}

.service-title::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #fe4135, #ff6b5c);
    transition: width 0.6s ease-out;
}

.service-title:hover::after {
    width: 60px;
}

/* Apply Barlow font family */
.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Enhanced transitions */
.transition-all {
    transition: all 0.3s ease;
}

/* Custom hover effects for cards */
.bg-gray-50:hover {
    transform: translateY(-2px);
    background-color: #f9fafb;
}

/* Mobile responsive adjustments */
@media (max-width: 640px) {
    .font-barlow {
        letter-spacing: 0.025em;
    }

    .service-title {
        font-size: 1.25rem;
    }

    .mobile-img-height {
        min-height: 300px;
    }
}

/* Tablet responsive adjustments */
@media (max-width: 1024px) and (min-width: 641px) {
    .service-title {
        font-size: 1.375rem;
    }

    .mobile-img-height {
        min-height: 350px;
    }
}

/* Large screen optimizations */
@media (min-width: 1025px) {
    .desktop-img-height {
        min-height: 700px;
    }
}
</style>