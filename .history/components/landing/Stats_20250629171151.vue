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

            <!-- Main stats grid - 2 columns -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <!-- Left column -->
                <div class="space-y-8">
                    <!-- Stat 1 -->
                    <div>
                        <div class="text-5xl font-bold text-primary mb-2"
                            v-animate-number="{ value: 1700000, duration: 2000 }">0</div>
                        <h3 class="text-xl font-medium text-gray-800 mb-1">Grains Produced & Traded</h3>
                        <p class="text-gray-600">Boosting food production through climate-smart methods</p>
                    </div>

                    <!-- Stat 2 -->
                    <div>
                        <div class="text-5xl font-bold text-primary mb-2"
                            v-animate-number="{ value: 850, duration: 2000 }">0+</div>
                        <h3 class="text-xl font-medium text-gray-800 mb-1">Farmers Onboarded</h3>
                        <p class="text-gray-600">Empowering smallholder farmers with sustainable practices</p>
                    </div>

                    <!-- Stat 3 -->
                    <div>
                        <div class="text-5xl font-bold text-primary mb-2"
                            v-animate-number="{ value: 2700, duration: 2000 }">0+</div>
                        <h3 class="text-xl font-medium text-gray-800 mb-1">Communities Reached</h3>
                        <p class="text-gray-600">Driving transformation across rural areas</p>
                    </div>

                    <!-- Stat 4 -->
                    <div>
                        <div class="text-5xl font-bold text-primary mb-2"
                            v-animate-number="{ value: 420000, duration: 2000 }">0+</div>
                        <h3 class="text-xl font-medium text-gray-800 mb-1">Hectares Cultivated</h3>
                        <p class="text-gray-600">Improved soil fertility at scale</p>
                    </div>
                </div>

                <!-- Right column -->
                <div class="space-y-8">
                    <!-- Stat 5 -->
                    <div>
                        <div class="text-5xl font-bold text-primary mb-2"
                            v-animate-number="{ value: 9000, duration: 2000 }">0+</div>
                        <h3 class="text-xl font-medium text-gray-800 mb-1">Jobs Created</h3>
                        <p class="text-gray-600">Dignified employment across value chains</p>
                    </div>

                    <!-- Stat 6 -->
                    <div>
                        <div class="text-5xl font-bold text-primary mb-2"
                            v-animate-number="{ value: 225000, duration: 2000 }">0</div>
                        <h3 class="text-xl font-medium text-gray-800 mb-1">Storage Acquired (MT)</h3>
                        <p class="text-gray-600">Sustainable storage capacity</p>
                    </div>

                    <!-- Stat 7 -->
                    <div>
                        <div class="text-5xl font-bold text-primary mb-2"
                            v-animate-number="{ value: 470, duration: 2000 }">0</div>
                        <h3 class="text-xl font-medium text-gray-800 mb-1">Warehouses Available</h3>
                        <p class="text-gray-600">Supporting local distribution</p>
                    </div>

                    <!-- Stat 8 -->
                    <div>
                        <div class="text-5xl font-bold text-primary mb-2"
                            v-animate-number="{ value: 20, duration: 2000 }">0</div>
                        <h3 class="text-xl font-medium text-gray-800 mb-1">Tons of CO₂ Sequestered</h3>
                        <p class="text-gray-600">Through biochar and sustainable land use</p>
                    </div>
                </div>
            </div>

            <!-- SDG Targets Section -->
            <div class="border-t border-gray-200 pt-16">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SDG Targets</h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our work directly supports these United Nations Sustainable Development Goals
                    </p>
                </div>

                <!-- SDG Grid - simple and clean -->
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <div class="text-center p-4">
                        <div class="text-2xl font-bold text-gray-800 mb-2">13</div>
                        <p class="text-gray-600">Climate Action</p>
                    </div>
                    <div class="text-center p-4">
                        <div class="text-2xl font-bold text-gray-800 mb-2">15</div>
                        <p class="text-gray-600">Life on Land</p>
                    </div>
                    <div class="text-center p-4">
                        <div class="text-2xl font-bold text-gray-800 mb-2">12</div>
                        <p class="text-gray-600">Responsible Consumption</p>
                    </div>
                    <div class="text-center p-4">
                        <div class="text-2xl font-bold text-gray-800 mb-2">2</div>
                        <p class="text-gray-600">Zero Hunger</p>
                    </div>
                    <div class="text-center p-4">
                        <div class="text-2xl font-bold text-gray-800 mb-2">1</div>
                        <p class="text-gray-600">No Poverty</p>
                    </div>
                    <div class="text-center p-4">
                        <div class="text-2xl font-bold text-gray-800 mb-2">8</div>
                        <p class="text-gray-600">Decent Work</p>
                    </div>
                    <div class="text-center p-4">
                        <div class="text-2xl font-bold text-gray-800 mb-2">7</div>
                        <p class="text-gray-600">Clean Energy</p>
                    </div>
                    <div class="text-center p-4">
                        <div class="text-2xl font-bold text-gray-800 mb-2">9</div>
                        <p class="text-gray-600">Innovation</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
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

/* Simple animations */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>