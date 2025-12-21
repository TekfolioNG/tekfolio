<template>
    <section class="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <!-- Left Side: Image -->
                <div class="order-2 lg:order-1">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
                        <img src="/assets/img/core-values-elevation.jpg" alt="Business hands joined together teamwork"
                            class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-[#0077AA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                    </div>
                </div>

                <!-- Right Side: Content -->
                <div class="order-1 lg:order-2">
                    <!-- Section Header -->
                    <div class="mb-8">
                        <h2
                            class="text-2xl lg:text-3xl font-barlow-extrabold text-gray-900 mb-4 tracking-wide uppercase">
                            Core Values
                        </h2>
                        <h3 class="text-xl md:text-2xl font-barlow-extrabold text-[#0077AA] mb-4">
                            The A.L.I.V.E. Principle
                        </h3>
                        <p class="text-base md:text-lg text-gray-800 leading-relaxed">
                            At Elevation Consulting, our work is guided by the A.L.I.V.E. principle — a set of core
                            values that shape how we think, deliver, and engage with clients.
                        </p>
                    </div>

                    <!-- Values List -->
                    <div class="space-y-6">
                        <!-- Adapt -->
                        <div class="flex gap-4 group">
                            <div class="flex-shrink-0">
                                <div
                                    class="w-12 h-12 rounded-full bg-[#0077AA] flex items-center justify-center text-white font-barlow-extrabold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    A
                                </div>
                            </div>
                            <div>
                                <h4
                                    class="text-lg font-barlow-extrabold text-gray-900 mb-2 group-hover:text-[#0077AA] transition-colors duration-300">
                                    Adapt
                                </h4>
                                <p class="text-sm md:text-base text-gray-800 leading-relaxed">
                                    We embrace innovation and continuous learning, integrating new ideas and best
                                    practices into our work. Every solution is designed to help clients stay ahead and
                                    improve performance in a changing world.
                                </p>
                            </div>
                        </div>

                        <!-- Leadership -->
                        <div class="flex gap-4 group">
                            <div class="flex-shrink-0">
                                <div
                                    class="w-12 h-12 rounded-full bg-[#0077AA] flex items-center justify-center text-white font-barlow-extrabold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    L
                                </div>
                            </div>
                            <div>
                                <h4
                                    class="text-lg font-barlow-extrabold text-gray-900 mb-2 group-hover:text-[#0077AA] transition-colors duration-300">
                                    Leadership
                                </h4>
                                <p class="text-sm md:text-base text-gray-800 leading-relaxed">
                                    We inspire leadership at every level, fostering confidence, accountability, and
                                    purpose in teams and organizations.
                                </p>
                            </div>
                        </div>

                        <!-- Impact -->
                        <div class="flex gap-4 group">
                            <div class="flex-shrink-0">
                                <div
                                    class="w-12 h-12 rounded-full bg-[#0077AA] flex items-center justify-center text-white font-barlow-extrabold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    I
                                </div>
                            </div>
                            <div>
                                <h4
                                    class="text-lg font-barlow-extrabold text-gray-900 mb-2 group-hover:text-[#0077AA] transition-colors duration-300">
                                    Impact
                                </h4>
                                <p class="text-sm md:text-base text-gray-800 leading-relaxed">
                                    Our services are designed with results in mind. We tailor solutions to context,
                                    ensuring that knowledge gained leads to measurable and sustainable performance.
                                </p>
                            </div>
                        </div>

                        <!-- Value -->
                        <div class="flex gap-4 group">
                            <div class="flex-shrink-0">
                                <div
                                    class="w-12 h-12 rounded-full bg-[#0077AA] flex items-center justify-center text-white font-barlow-extrabold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    V
                                </div>
                            </div>
                            <div>
                                <h4
                                    class="text-lg font-barlow-extrabold text-gray-900 mb-2 group-hover:text-[#0077AA] transition-colors duration-300">
                                    Value
                                </h4>
                                <p class="text-sm md:text-base text-gray-800 leading-relaxed">
                                    We are committed to delivering lasting value in every engagement, helping clients
                                    achieve excellence and remain competitive in their industries.
                                </p>
                            </div>
                        </div>

                        <!-- Equity -->
                        <div class="flex gap-4 group">
                            <div class="flex-shrink-0">
                                <div
                                    class="w-12 h-12 rounded-full bg-[#0077AA] flex items-center justify-center text-white font-barlow-extrabold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    E
                                </div>
                            </div>
                            <div>
                                <h4
                                    class="text-lg font-barlow-extrabold text-gray-900 mb-2 group-hover:text-[#0077AA] transition-colors duration-300">
                                    Equity
                                </h4>
                                <p class="text-sm md:text-base text-gray-800 leading-relaxed">
                                    We uphold fairness, inclusion, and sustainability as central principles—ensuring
                                    that our work contributes to shared progress and social responsibility.
                                </p>
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
@media (max-width: 1023px) {
    .order-1 {
        order: 1;
    }

    .order-2 {
        order: 2;
    }
}

@media (max-width: 640px) {
    .space-y-6 {
        gap: 1.25rem;
    }
}
</style>