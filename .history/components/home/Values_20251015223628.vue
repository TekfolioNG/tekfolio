<template>
    <section class="py-16 md:py-24 bg-gray-50 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <!-- Image Section -->
                <div class="order-2 lg:order-1">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img src="/assets/img/core-values-elevation2.jpg" alt="Business hands joined together teamwork"
                            class="w-full h-auto object-cover transition-transform duration-500 hover:scale-105" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"></div>
                    </div>
                </div>

                <!-- Content Section -->
                <div class="order-1 lg:order-2">
                    <!-- Section Header -->
                    <div class="mb-8">
                        <h2 class="text-2xl lg:text-3xl font-barlow-extrabold text-gray-900 mb-4 tracking-wide">
                            Our Core Values
                        </h2>
                        <h3 class="text-xl lg:text-2xl font-barlow-extrabold text-[#006688] mb-6">
                            The A.L.I.V.E. Principle
                        </h3>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            At Elevation Consulting, our work is guided by the A.L.I.V.E. principle — a set of core
                            values that shape how we think, deliver, and engage with clients.
                        </p>
                    </div>

                    <!-- Values List -->
                    <div class="space-y-6">
                        <!-- Adapt -->
                        <div
                            class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div class="flex items-start space-x-4">
                                <div
                                    class="flex-shrink-0 w-10 h-10 bg-[#006688] rounded-full flex items-center justify-center">
                                    <span class="text-white font-barlow-extrabold text-lg">A</span>
                                </div>
                                <div>
                                    <h4 class="text-lg font-barlow-extrabold text-gray-900 mb-2">Adapt</h4>
                                    <p class="text-gray-800 leading-relaxed">
                                        We embrace innovation and continuous learning, integrating new ideas and best
                                        practices into our work. Every solution is designed to help clients stay ahead
                                        and improve performance in a changing world.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Leadership -->
                        <div
                            class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div class="flex items-start space-x-4">
                                <div
                                    class="flex-shrink-0 w-10 h-10 bg-[#006688] rounded-full flex items-center justify-center">
                                    <span class="text-white font-barlow-extrabold text-lg">L</span>
                                </div>
                                <div>
                                    <h4 class="text-lg font-barlow-extrabold text-gray-900 mb-2">Leadership</h4>
                                    <p class="text-gray-800 leading-relaxed">
                                        We inspire leadership at every level, fostering confidence, accountability, and
                                        purpose in teams and organizations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Impact -->
                        <div
                            class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div class="flex items-start space-x-4">
                                <div
                                    class="flex-shrink-0 w-10 h-10 bg-[#006688] rounded-full flex items-center justify-center">
                                    <span class="text-white font-barlow-extrabold text-lg">I</span>
                                </div>
                                <div>
                                    <h4 class="text-lg font-barlow-extrabold text-gray-900 mb-2">Impact</h4>
                                    <p class="text-gray-800 leading-relaxed">
                                        Our services are designed with results in mind. We tailor solutions to context,
                                        ensuring that knowledge gained leads to measurable and sustainable performance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Value -->
                        <div
                            class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div class="flex items-start space-x-4">
                                <div
                                    class="flex-shrink-0 w-10 h-10 bg-[#006688] rounded-full flex items-center justify-center">
                                    <span class="text-white font-barlow-extrabold text-lg">V</span>
                                </div>
                                <div>
                                    <h4 class="text-lg font-barlow-extrabold text-gray-900 mb-2">Value</h4>
                                    <p class="text-gray-800 leading-relaxed">
                                        We are committed to delivering lasting value in every engagement, helping
                                        clients achieve excellence and remain competitive in their industries.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Equity -->
                        <div
                            class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div class="flex items-start space-x-4">
                                <div
                                    class="flex-shrink-0 w-10 h-10 bg-[#006688] rounded-full flex items-center justify-center">
                                    <span class="text-white font-barlow-extrabold text-lg">E</span>
                                </div>
                                <div>
                                    <h4 class="text-lg font-barlow-extrabold text-gray-900 mb-2">Equity</h4>
                                    <p class="text-gray-800 leading-relaxed">
                                        We uphold fairness, inclusion, and sustainability as central principles—ensuring
                                        that our work contributes to shared progress and social responsibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap');

.font-barlow-extrabold {
    font-family: 'Barlow', sans-serif;
    font-weight: 800;
    font-style: normal;
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
    .space-y-6>div {
        padding: 1rem;
    }

    .flex.items-start.space-x-4 {
        gap: 0.75rem;
    }

    .w-10.h-10 {
        width: 2.5rem;
        height: 2.5rem;
    }

    .w-10.h-10 span {
        font-size: 1rem;
    }
}

@media (max-width: 640px) {
    .grid {
        gap: 2rem;
    }

    .text-lg {
        font-size: 1rem;
    }

    .text-xl {
        font-size: 1.25rem;
    }

    .text-2xl {
        font-size: 1.5rem;
    }

    .text-3xl {
        font-size: 1.75rem;
    }
}

@media (max-width: 480px) {
    .p-6 {
        padding: 1rem;
    }

    .flex.items-start.space-x-4 {
        gap: 0.5rem;
    }

    .w-10.h-10 {
        width: 2rem;
        height: 2rem;
    }

    .w-10.h-10 span {
        font-size: 0.875rem;
    }
}
</style>