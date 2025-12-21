<template>
    <!-- Impact Section -->
    <section class="relative bg-white py-16 md:py-24 overflow-hidden">
        <div class="container mx-auto px-6 md:px-8 lg:px-12">
            <!-- Main content grid - image and SDG on left, stats on right for desktop -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                <!-- Left Column: Image + SDG Targets -->
                <div class="order-1 lg:order-1 space-y-12">
                    <!-- Image with subtle shadow and border -->
                    <div class="relative overflow-hidden rounded-xl shadow-lg border border-gray-100">
                        <img src="~/assets/img/slider1-veraverde.jpg" alt="Vera Verde impact visualization"
                            class="w-full h-auto object-cover transition-transform duration-500 hover:scale-105" />
                        <!-- Map markers overlay -->
                        <div class="absolute inset-0">
                            <div class="absolute top-[45%] left-[48%] w-4 h-4 bg-primary rounded-full animate-pulse">
                            </div>
                            <div class="absolute top-[50%] left-[42%] w-3 h-3 bg-primary rounded-full animate-pulse">
                            </div>
                            <div class="absolute top-[55%] left-[38%] w-3 h-3 bg-primary rounded-full animate-pulse">
                            </div>
                        </div>
                    </div>

                    <!-- SDG Targets Section -->
                    <div class="bg-gray-50 p-6 rounded-xl">
                        <div class="mb-6">
                            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">SDG Targets</h2>
                            <p class="text-lg text-gray-600">
                                Our work directly supports these United Nations Sustainable Development Goals
                            </p>
                        </div>

                        <!-- SDG Grid - compact with icons -->
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <SDGTile number="13" title="Climate Action" icon="carbon:carbon" />
                            <SDGTile number="15" title="Life on Land" icon="mdi:leaf" />
                            <SDGTile number="12" title="Responsible Consumption" icon="ion:recycle" />
                            <SDGTile number="2" title="Zero Hunger" icon="mdi:food-apple" />
                            <SDGTile number="1" title="No Poverty" icon="mdi:hand-heart" />
                            <SDGTile number="8" title="Decent Work" icon="mdi:briefcase" />
                            <SDGTile number="7" title="Clean Energy" icon="mdi:solar-power" />
                            <SDGTile number="9" title="Innovation" icon="mdi:lightbulb" />
                        </div>
                    </div>
                </div>

                <!-- Right Column: Stats -->
                <div class="order-2 lg:order-2">
                    <!-- Section header -->
                    <div class="mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Impact in Numbers</h2>
                        <p class="text-lg text-gray-600 max-w-lg">
                            Every data point represents progress toward a cleaner, more resilient future.
                        </p>
                    </div>

                    <!-- Stats Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <ImpactStat icon="mdi:grain" value="1.7M" title="Grains Produced & Traded"
                            description="Boosting food production through climate-smart methods" />
                        <ImpactStat icon="mdi:farmer" value="850K" title="Farmers Onboarded"
                            description="Empowering smallholder farmers with sustainable practices" />
                        <ImpactStat icon="mdi:home-group" value="2.7K" title="Communities Reached"
                            description="Driving transformation across rural areas" suffix="+" />
                        <ImpactStat icon="mdi:earth" value="420K" title="Hectares Cultivated"
                            description="Improved soil fertility at scale" suffix="+" />
                        <ImpactStat icon="mdi:briefcase" value="9K" title="Jobs Created"
                            description="Dignified employment across value chains" suffix="+" />
                        <ImpactStat icon="mdi:warehouse" value="225K" title="Storage Acquired"
                            description="Sustainable storage capacity" suffix="MT" />
                        <ImpactStat icon="mdi:factory" value="470" title="Warehouses Available"
                            description="Supporting local distribution" />
                        <ImpactStat icon="mdi:molecule-co2" value="20" title="Tons of CO₂ Sequestered"
                            description="Through biochar and sustainable land use" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Components
const ImpactStat = defineComponent({
    props: {
        icon: String,
        value: [String, Number],
        title: String,
        description: String,
        suffix: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const statRef = ref(null)

        onMounted(() => {
            // Animation logic here if needed
        })

        return { statRef }
    }
})

const SDGTile = defineComponent({
    props: {
        number: String,
        title: String,
        icon: String
    }
})

// Animation logic (same as before)
</script>

<style scoped>
/* Brand colors */
.bg-primary {
    background-color: #406112;
}

.text-primary {
    color: #406112;
}

/* Animations */
@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        transform: scale(1.1);
        opacity: 0.8;
    }
}

.animate-pulse {
    animation: pulse 2s infinite;
}

/* Hover effects */
.hover-scale {
    transition: transform 0.3s ease;
}

.hover-scale:hover {
    transform: translateY(-3px);
}
</style>