<template>
    <!-- Impact Section -->
    <section class="relative bg-gradient-to-b from-white to-green-50 py-16 md:py-24 lg:py-32 overflow-hidden">
        <!-- Decorative background elements -->
        <div class="absolute inset-0 z-0 opacity-10">
            <div class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
            <div class="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-accent/20 blur-2xl"></div>
        </div>

        <div class="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
            <!-- Section header -->
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
                <p class="text-lg text-gray-600">
                    Every data point represents progress toward a cleaner, more resilient future.
                </p>
            </div>

            <!-- Impact stats grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
                <!-- Stat Item 1 -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div class="text-4xl font-bold text-primary mb-3" v-animate-number="{ value: 20, duration: 2000 }">0
                    </div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Tons of CO₂ Sequestered</h3>
                    <p class="text-gray-600">Capturing and storing carbon through biochar and sustainable land use.</p>
                </div>

                <!-- Stat Item 2 -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div class="text-4xl font-bold text-primary mb-3" v-animate-number="{ value: 20, duration: 2000 }">0
                    </div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Tons of Ecofuel Saved</h3>
                    <p class="text-gray-600">Replacing traditional fuels with eco-friendly briquettes from agricultural
                        waste.</p>
                </div>

                <!-- Stat Item 3 -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div class="text-4xl font-bold text-primary mb-3" v-animate-number="{ value: 850, duration: 2000 }">
                        0+</div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Farmers Onboarded</h3>
                    <p class="text-gray-600">Empowering smallholder farmers with climate-smart agricultural practices.
                    </p>
                </div>

                <!-- Stat Item 4 -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div class="text-4xl font-bold text-primary mb-3"
                        v-animate-number="{ value: 2000, duration: 2000 }">0+</div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Jobs Created</h3>
                    <p class="text-gray-600">Creating dignified employment across rural value chains.</p>
                </div>

                <!-- Stat Item 5 -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div class="text-4xl font-bold text-primary mb-3"
                        v-animate-number="{ value: 420000, duration: 2000 }">0+</div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Hectares Cultivated</h3>
                    <p class="text-gray-600">Improved soil fertility and sustainable crop growth at scale.</p>
                </div>

                <!-- Stat Item 6 -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div class="text-4xl font-bold text-primary mb-3"
                        v-animate-number="{ value: 1700000, duration: 2000 }">0+</div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Grains Produced & Traded</h3>
                    <p class="text-gray-600">Boosting food production through climate-smart methods.</p>
                </div>

                <!-- Stat Item 7 -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div class="text-4xl font-bold text-primary mb-3" v-animate-number="{ value: 50, duration: 2000 }">0
                    </div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Trees Preserved</h3>
                    <p class="text-gray-600">Reducing deforestation by providing clean-burning briquettes as
                        alternatives to firewood.</p>
                </div>

                <!-- Stat Item 8 -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div class="text-4xl font-bold text-primary mb-3" v-animate-number="{ value: 200, duration: 2000 }">
                        0+</div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Communities Reached</h3>
                    <p class="text-gray-600">Driving sustainable transformation across rural and peri-urban communities.
                    </p>
                </div>
            </div>

            <!-- SDG Targets Section -->
            <div class="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
                <div class="max-w-3xl mx-auto text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SDG Targets</h2>
                    <p class="text-lg text-gray-700">
                        Our Work, Aligned with Global Goals
                    </p>
                    <p class="text-gray-600 mt-2">
                        From soil to stove, every project at Vera Verde directly supports one or more of the United
                        Nations Sustainable Development Goals.
                    </p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <!-- SDG 13 -->
                    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                        <div class="bg-blue-100 p-2 rounded-full">
                            <span class="text-blue-600 font-bold">13</span>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800">Climate Action</h3>
                            <p class="text-sm text-gray-600 mt-1">Reducing emissions through carbon sequestration</p>
                        </div>
                    </div>

                    <!-- SDG 15 -->
                    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                        <div class="bg-green-100 p-2 rounded-full">
                            <span class="text-green-600 font-bold">15</span>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800">Life on Land</h3>
                            <p class="text-sm text-gray-600 mt-1">Restoring soils and enhancing biodiversity</p>
                        </div>
                    </div>

                    <!-- SDG 12 -->
                    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                        <div class="bg-yellow-100 p-2 rounded-full">
                            <span class="text-yellow-600 font-bold">12</span>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800">Responsible Consumption</h3>
                            <p class="text-sm text-gray-600 mt-1">Turning waste into value</p>
                        </div>
                    </div>

                    <!-- SDG 2 -->
                    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                        <div class="bg-red-100 p-2 rounded-full">
                            <span class="text-red-600 font-bold">2</span>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800">Zero Hunger</h3>
                            <p class="text-sm text-gray-600 mt-1">Boosting food production</p>
                        </div>
                    </div>

                    <!-- SDG 1 -->
                    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                        <div class="bg-orange-100 p-2 rounded-full">
                            <span class="text-orange-600 font-bold">1</span>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800">No Poverty</h3>
                            <p class="text-sm text-gray-600 mt-1">Increasing rural incomes</p>
                        </div>
                    </div>

                    <!-- SDG 8 -->
                    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                        <div class="bg-blue-100 p-2 rounded-full">
                            <span class="text-blue-600 font-bold">8</span>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800">Decent Work</h3>
                            <p class="text-sm text-gray-600 mt-1">Creating sustainable jobs</p>
                        </div>
                    </div>

                    <!-- SDG 6 -->
                    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                        <div class="bg-purple-100 p-2 rounded-full">
                            <span class="text-purple-600 font-bold">6</span>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800">Clean Water</h3>
                            <p class="text-sm text-gray-600 mt-1">Reducing runoff pollution</p>
                        </div>
                    </div>

                    <!-- SDG 7 -->
                    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                        <div class="bg-orange-100 p-2 rounded-full">
                            <span class="text-orange-600 font-bold">7</span>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800">Clean Energy</h3>
                            <p class="text-sm text-gray-600 mt-1">Offering accessible energy</p>
                        </div>
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
            el.textContent = Math.floor(current).toLocaleString();
        }, 16);
    }
}
</script>

<style scoped>
/* Brand colors */
.bg-primary {
    background-color: #406112;
}

.text-primary {
    color: #406112;
}

.bg-secondary {
    background-color: #E6A619;
}

.text-secondary {
    color: #E6A619;
}

.bg-accent {
    background-color: #E6A619;
}

/* Smooth transitions */
.transition-shadow {
    transition: box-shadow 0.3s ease;
}
</style>