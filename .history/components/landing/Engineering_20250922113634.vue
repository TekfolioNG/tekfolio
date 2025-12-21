<template>
    <div class="min-h-screen bg-white dark:bg-gray-900">

        <!-- Engineering Services Section -->
        <section class="w-full bg-white py-16 lg:py-24">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <!-- Main Content Container -->
                <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    <!-- Text Content - 3/4 width on desktop -->
                    <div class="lg:w-3/4 space-y-8">
                        <!-- Main Title -->
                        <div class="mb-12">
                            <h2
                                class="text-3xl sm:text-4xl lg:text-5xl font-barlow font-bold text-gray-900 leading-tight fade-up">
                                Engineering that Powers Performance
                            </h2>
                        </div>

                        <!-- Services Grid -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                            <!-- Equipment Maintenance Planning -->
                            <div class="bg-gray-50 rounded-lg p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 fade-up"
                                style="animation-delay: 0.1s;">
                                <h3 class="text-xl lg:text-2xl font-barlow font-bold mb-4" style="color: #fe4135;">
                                    Equipment Maintenance Planning
                                </h3>
                                <p class="text-gray-700 leading-relaxed font-barlow font-light text-sm lg:text-base">
                                    We develop structured maintenance strategies that extend asset life, reduce
                                    downtime, and optimize performance. Our predictive and preventive approaches ensure
                                    critical equipment operates at peak efficiency, delivering long-term value across
                                    complex industrial operations.
                                </p>
                            </div>

                            <!-- Project Management -->
                            <div class="bg-gray-50 rounded-lg p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 fade-up"
                                style="animation-delay: 0.2s;">
                                <h3 class="text-xl lg:text-2xl font-barlow font-bold mb-4" style="color: #fe4135;">
                                    Project Management
                                </h3>
                                <p class="text-gray-700 leading-relaxed font-barlow font-light text-sm lg:text-base">
                                    Our teams provide full project oversight from planning through delivery. With strong
                                    control on cost, time, and quality, we help clients achieve reliable outcomes while
                                    reducing risks and maximizing the value of every investment.
                                </p>
                            </div>

                            <!-- Design and Studies -->
                            <div class="bg-gray-50 rounded-lg p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 fade-up"
                                style="animation-delay: 0.3s;">
                                <h3 class="text-xl lg:text-2xl font-barlow font-bold mb-4" style="color: #fe4135;">
                                    Design and Studies
                                </h3>
                                <p class="text-gray-700 leading-relaxed font-barlow font-light text-sm lg:text-base">
                                    We deliver comprehensive pre-project and detailed engineering studies to support
                                    smarter decisions. By combining technical depth with practical insights, our designs
                                    improve efficiency, reduce costs, and prepare facilities for safe, reliable, and
                                    sustainable operations.
                                </p>
                            </div>

                            <!-- Technical Consulting -->
                            <div class="bg-gray-50 rounded-lg p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 fade-up"
                                style="animation-delay: 0.4s;">
                                <h3 class="text-xl lg:text-2xl font-barlow font-bold mb-4" style="color: #fe4135;">
                                    Technical Consulting
                                </h3>
                                <p class="text-gray-700 leading-relaxed font-barlow font-light text-sm lg:text-base">
                                    Our specialists help clients solve complex engineering challenges across upstream,
                                    midstream, and downstream operations. With a focus on safety, efficiency, and
                                    performance, we offer technical guidance that ensures projects meet both immediate
                                    and long-term objectives.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Image - 1/4 width on desktop -->
                    <div class="lg:w-1/4 flex justify-center lg:justify-end">
                        <div class="w-full max-w-sm lg:max-w-none">
                            <img src="/assets/img/engineering-syntanium2.png"
                                alt="Engineering Services at Syntanium Energy"
                                class="w-full h-auto object-cover rounded-lg shadow-lg" />
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

.fade-up {
    animation: fadeUp 0.8s ease-out forwards;
    opacity: 0;
}

/* Apply Barlow font family */
.font-barlow {
    font-family: 'Barlow', sans-serif;
}

/* Ensure smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}

/* Custom responsive adjustments if needed */
@media (max-width: 640px) {
    .font-barlow {
        letter-spacing: 0.025em;
    }
}
</style>