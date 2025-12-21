<template>
    <!-- Impact Section -->
    <section class="relative bg-white py-16 md:py-24 overflow-hidden">
        <div class="container mx-auto px-6 md:px-8 lg:px-12">
            <!-- Section header -->
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
                <p class="text-lg text-gray-600">
                    Every data point represents progress toward a cleaner, more resilient future.
                </p>
            </div>

            <!-- Main content with map -->
            <div class="flex flex-col lg:flex-row items-start gap-12">
                <!-- Stats column - flush right -->
                <div class="lg:w-1/2 lg:order-2 space-y-10">
                    <!-- Stat 1 -->
                    <div class="flex items-start gap-4">
                        <div class="bg-primary/10 p-3 rounded-full">
                            <Icon name="ph:grain-duotone" class="text-primary text-2xl" />
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-primary mb-1"
                                v-animate-number="{ value: 1700000, duration: 2000 }">0</div>
                            <h3 class="text-xl font-medium text-gray-800 mb-1">Grains Produced & Traded</h3>
                            <p class="text-gray-600">Boosting food production through climate-smart methods</p>
                        </div>
                    </div>

                    <!-- Stat 2 -->
                    <div class="flex items-start gap-4">
                        <div class="bg-primary/10 p-3 rounded-full">
                            <Icon name="ph:farmer-duotone" class="text-primary text-2xl" />
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-primary mb-1"
                                v-animate-number="{ value: 850, duration: 2000 }">0+</div>
                            <h3 class="text-xl font-medium text-gray-800 mb-1">Farmers Onboarded</h3>
                            <p class="text-gray-600">Empowering smallholder farmers with sustainable practices</p>
                        </div>
                    </div>

                    <!-- Stat 3 -->
                    <div class="flex items-start gap-4">
                        <div class="bg-primary/10 p-3 rounded-full">
                            <Icon name="ph:house-duotone" class="text-primary text-2xl" />
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-primary mb-1"
                                v-animate-number="{ value: 2700, duration: 2000 }">0+</div>
                            <h3 class="text-xl font-medium text-gray-800 mb-1">Communities Reached</h3>
                            <p class="text-gray-600">Driving transformation across rural areas</p>
                        </div>
                    </div>

                    <!-- Stat 4 -->
                    <div class="flex items-start gap-4">
                        <div class="bg-primary/10 p-3 rounded-full">
                            <Icon name="ph:plant-duotone" class="text-primary text-2xl" />
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-primary mb-1"
                                v-animate-number="{ value: 420000, duration: 2000 }">0+</div>
                            <h3 class="text-xl font-medium text-gray-800 mb-1">Hectares Cultivated</h3>
                            <p class="text-gray-600">Improved soil fertility at scale</p>
                        </div>
                    </div>
                </div>

                <!-- Map column -->
                <div class="lg:w-1/2 lg:order-1 relative">
                    <div class="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-gray-200">
                        <!-- Map placeholder - replace with your actual map component -->
                        <div class="absolute inset-0 bg-gray-100 flex items-center justify-center">
                            <div class="relative w-full h-full">
                                <!-- Simplified map representation -->
                                <img src="~/assets/img/west-africa-map.png" alt="West Africa Coverage Map"
                                    class="w-full h-full object-contain" />
                                <div
                                    class="absolute top-[40%] left-[45%] w-16 h-16 bg-primary/80 rounded-full animate-pulse">
                                </div> <!-- Nigeria -->
                                <div
                                    class="absolute top-[45%] left-[35%] w-12 h-12 bg-primary/80 rounded-full animate-pulse">
                                </div> <!-- Ghana -->
                                <div
                                    class="absolute top-[50%] left-[30%] w-10 h-10 bg-primary/80 rounded-full animate-pulse">
                                </div> <!-- Ivory Coast -->
                                <div
                                    class="absolute top-[42%] left-[50%] w-8 h-8 bg-primary/80 rounded-full animate-pulse">
                                </div> <!-- Benin -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SDG Targets Section - shifted left -->
            <div class="border-t border-gray-200 pt-16 mt-20 lg:pl-0 lg:pr-[50%]">
                <div class="mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SDG Targets</h2>
                    <p class="text-lg text-gray-600">
                        Our work directly supports these United Nations Sustainable Development Goals
                    </p>
                </div>

                <!-- SDG Grid - compact layout -->
                <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3">
                    <div class="bg-primary p-3 rounded-lg text-center">
                        <div class="text-white text-2xl font-bold mb-1">13</div>
                        <p class="text-white text-sm">Climate Action</p>
                    </div>
                    <div class="bg-primary p-3 rounded-lg text-center">
                        <div class="text-white text-2xl font-bold mb-1">15</div>
                        <p class="text-white text-sm">Life on Land</p>
                    </div>
                    <div class="bg-primary p-3 rounded-lg text-center">
                        <div class="text-white text-2xl font-bold mb-1">12</div>
                        <p class="text-white text-sm">Responsible Consumption</p>
                    </div>
                    <div class="bg-primary p-3 rounded-lg text-center">
                        <div class="text-white text-2xl font-bold mb-1">2</div>
                        <p class="text-white text-sm">Zero Hunger</p>
                    </div>
                    <div class="bg-primary p-3 rounded-lg text-center">
                        <div class="text-white text-2xl font-bold mb-1">1</div>
                        <p class="text-white text-sm">No Poverty</p>
                    </div>
                    <div class="bg-primary p-3 rounded-lg text-center">
                        <div class="text-white text-2xl font-bold mb-1">8</div>
                        <p class="text-white text-sm">Decent Work</p>
                    </div>
                    <div class="bg-primary p-3 rounded-lg text-center">
                        <div class="text-white text-2xl font-bold mb-1">7</div>
                        <p class="text-white text-sm">Clean Energy</p>
                    </div>
                    <div class="bg-primary p-3 rounded-lg text-center">
                        <div class="text-white text-2xl font-bold mb-1">9</div>
                        <p class="text-white text-sm">Innovation</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import icons (using Nuxt Icon module)
const Icon = resolveComponent('Icon')

// Animation directive for counter
const vAnimateNumber = {
    mounted(el, binding) {
        const { value, duration } = binding.value;
        const start = 0;
        const increment = value / (duration / 16); // 60fps

        let current = start;
        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                clearInterval(timer);
                current = value;
            }
            el.textContent = current >= 1000 ? Math.floor(current).toLocaleString() : Math.floor(current);
        }, 16);
    }
}
</script>

<style scoped>
/* Brand colors */
.text-primary {
    color: #406112;
}

/* Mobile responsiveness */
@media (max-width: 1023px) {
    .lg\:pr-\[50\%\] {
        padding-right: 1rem;
    }
}

/* Map dots animation */
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.7;
        transform: scale(1.05);
    }
}
</style>