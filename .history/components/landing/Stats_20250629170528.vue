<template>
    <section class="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header Section -->
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Every data point represents progress toward a cleaner, more resilient future.
                </p>
            </div>

            <!-- Impact Stats Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                <!-- CO2 Sequestered -->
                <div
                    class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                    <div class="flex items-center mb-4">
                        <div class="p-3 bg-green-100 rounded-full mr-4">
                            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-gray-900">
                                <AnimatedCounter :target="20" suffix=" Tons" />
                            </div>
                            <div class="text-lg font-semibold text-green-600">CO₂ Sequestered</div>
                        </div>
                    </div>
                    <p class="text-gray-600">Capturing and storing carbon through biochar and sustainable land use.</p>
                </div>

                <!-- Ecofuel Saved -->
                <div
                    class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-amber-500">
                    <div class="flex items-center mb-4">
                        <div class="p-3 bg-amber-100 rounded-full mr-4">
                            <svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-gray-900">
                                <AnimatedCounter :target="20" suffix=" Tons" />
                            </div>
                            <div class="text-lg font-semibold text-amber-600">Ecofuel Saved</div>
                        </div>
                    </div>
                    <p class="text-gray-600">Replacing traditional fuels with eco-friendly briquettes from agricultural
                        waste.</p>
                </div>

                <!-- Farmers Onboarded -->
                <div
                    class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                    <div class="flex items-center mb-4">
                        <div class="p-3 bg-blue-100 rounded-full mr-4">
                            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-gray-900">
                                <AnimatedCounter :target="850" suffix="+" />
                            </div>
                            <div class="text-lg font-semibold text-blue-600">Farmers Onboarded</div>
                        </div>
                    </div>
                    <p class="text-gray-600">Empowering smallholder farmers with climate-smart agricultural practices.
                    </p>
                </div>

                <!-- Jobs Created -->
                <div
                    class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                    <div class="flex items-center mb-4">
                        <div class="p-3 bg-purple-100 rounded-full mr-4">
                            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-gray-900">
                                <AnimatedCounter :target="2000" suffix="+" />
                            </div>
                            <div class="text-lg font-semibold text-purple-600">Jobs Created</div>
                        </div>
                    </div>
                    <p class="text-gray-600">Creating dignified employment across rural value chains.</p>
                </div>

                <!-- Hectares Cultivated -->
                <div
                    class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-emerald-500">
                    <div class="flex items-center mb-4">
                        <div class="p-3 bg-emerald-100 rounded-full mr-4">
                            <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-gray-900">
                                <AnimatedCounter :target="420" suffix="K+" />
                            </div>
                            <div class="text-lg font-semibold text-emerald-600">Hectares Cultivated</div>
                        </div>
                    </div>
                    <p class="text-gray-600">Improved soil fertility and sustainable crop growth at scale.</p>
                </div>

                <!-- Grains Produced -->
                <div
                    class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500">
                    <div class="flex items-center mb-4">
                        <div class="p-3 bg-orange-100 rounded-full mr-4">
                            <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                            </svg>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-gray-900">
                                <AnimatedCounter :target="1.7" suffix="M+" />
                            </div>
                            <div class="text-lg font-semibold text-orange-600">Grains Produced & Traded</div>
                        </div>
                    </div>
                    <p class="text-gray-600">Boosting food production through climate-smart methods.</p>
                </div>

                <!-- Trees Preserved -->
                <div
                    class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-teal-500">
                    <div class="flex items-center mb-4">
                        <div class="p-3 bg-teal-100 rounded-full mr-4">
                            <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 3v4M19 3v4M5 7h14l-1 10H6L5 7z"></path>
                            </svg>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-gray-900">
                                <AnimatedCounter :target="50" suffix=" Trees" />
                            </div>
                            <div class="text-lg font-semibold text-teal-600">Trees Preserved</div>
                        </div>
                    </div>
                    <p class="text-gray-600">Reducing deforestation by providing clean-burning briquettes as
                        alternatives to firewood.</p>
                </div>

                <!-- Communities Reached -->
                <div
                    class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-indigo-500">
                    <div class="flex items-center mb-4">
                        <div class="p-3 bg-indigo-100 rounded-full mr-4">
                            <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-gray-900">
                                <AnimatedCounter :target="200" suffix="+" />
                            </div>
                            <div class="text-lg font-semibold text-indigo-600">Communities Reached</div>
                        </div>
                    </div>
                    <p class="text-gray-600">Driving sustainable transformation across rural and peri-urban communities.
                    </p>
                </div>
            </div>

            <!-- SDG Section -->
            <div class="bg-white rounded-3xl p-12 shadow-xl">
                <div class="text-center mb-12">
                    <h3 class="text-3xl font-bold text-gray-900 mb-4">SDG Targets</h3>
                    <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                        Our Work, Aligned with Global Goals. From soil to stove, every project at Vera Verde directly
                        supports one or more of the United Nations Sustainable Development Goals.
                    </p>
                </div>

                <!-- SDG Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- SDG 13 - Climate Action -->
                    <div
                        class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white hover:shadow-lg transition-shadow duration-300">
                        <div class="flex items-center mb-4">
                            <div
                                class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                                <span class="text-2xl">🌍</span>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg">SDG 13</h4>
                                <p class="text-blue-100">Climate Action</p>
                            </div>
                        </div>
                        <p class="text-blue-50 text-sm">We reduce greenhouse gas emissions through carbon sequestration,
                            clean energy, and retrofitted engines.</p>
                    </div>

                    <!-- SDG 15 - Life on Land -->
                    <div
                        class="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white hover:shadow-lg transition-shadow duration-300">
                        <div class="flex items-center mb-4">
                            <div
                                class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                                <span class="text-2xl">🌱</span>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg">SDG 15</h4>
                                <p class="text-green-100">Life on Land</p>
                            </div>
                        </div>
                        <p class="text-green-50 text-sm">We restore degraded soils, enhance biodiversity, and promote
                            sustainable land use through biochar.</p>
                    </div>

                    <!-- SDG 12 - Responsible Consumption -->
                    <div
                        class="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-6 text-white hover:shadow-lg transition-shadow duration-300">
                        <div class="flex items-center mb-4">
                            <div
                                class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                                <span class="text-2xl">♻️</span>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg">SDG 12</h4>
                                <p class="text-yellow-100">Responsible Production</p>
                            </div>
                        </div>
                        <p class="text-yellow-50 text-sm">We turn agricultural waste into value, recycling rice husk and
                            sawdust into briquettes and biochar.</p>
                    </div>

                    <!-- SDG 2 - Zero Hunger -->
                    <div
                        class="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 text-white hover:shadow-lg transition-shadow duration-300">
                        <div class="flex items-center mb-4">
                            <div
                                class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                                <span class="text-2xl">🌾</span>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg">SDG 2</h4>
                                <p class="text-red-100">Zero Hunger</p>
                            </div>
                        </div>
                        <p class="text-red-50 text-sm">Our solutions boost food production by improving soil health and
                            farm productivity.</p>
                    </div>

                    <!-- SDG 1 - No Poverty -->
                    <div
                        class="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white hover:shadow-lg transition-shadow duration-300">
                        <div class="flex items-center mb-4">
                            <div
                                class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                                <span class="text-2xl">🤝</span>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg">SDG 1</h4>
                                <p class="text-orange-100">No Poverty</p>
                            </div>
                        </div>
                        <p class="text-orange-50 text-sm">We increase rural incomes through job creation and inclusive
                            agricultural practices.</p>
                    </div>

                    <!-- SDG 8 - Decent Work -->
                    <div
                        class="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white hover:shadow-lg transition-shadow duration-300">
                        <div class="flex items-center mb-4">
                            <div
                                class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                                <span class="text-2xl">💼</span>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg">SDG 8</h4>
                                <p class="text-purple-100">Decent Work</p>
                            </div>
                        </div>
                        <p class="text-purple-50 text-sm">We create sustainable, dignified jobs across farming and clean
                            energy value chains.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

// Animated Counter Component
const AnimatedCounter = {
    props: {
        target: {
            type: Number,
            required: true
        },
        suffix: {
            type: String,
            default: ''
        },
        duration: {
            type: Number,
            default: 2000
        }
    },
    setup(props) {
        const count = ref(0)
        let animationId = null
        let observer = null
        const element = ref(null)

        const animateCounter = () => {
            const startTime = Date.now()
            const startValue = 0
            const endValue = props.target

            const animate = () => {
                const currentTime = Date.now()
                const elapsed = currentTime - startTime
                const progress = Math.min(elapsed / props.duration, 1)

                // Easing function for smooth animation
                const easeOutCubic = 1 - Math.pow(1 - progress, 3)
                count.value = startValue + (endValue - startValue) * easeOutCubic

                if (progress < 1) {
                    animationId = requestAnimationFrame(animate)
                }
            }

            animate()
        }

        onMounted(() => {
            // Use Intersection Observer to trigger animation when element comes into view
            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            animateCounter()
                            observer.unobserve(entry.target)
                        }
                    })
                },
                { threshold: 0.1 }
            )

            if (element.value) {
                observer.observe(element.value)
            }
        })

        onUnmounted(() => {
            if (animationId) {
                cancelAnimationFrame(animationId)
            }
            if (observer) {
                observer.disconnect()
            }
        })

        return {
            count,
            element
        }
    },
    template: `
      <span ref="element">
        {{ Math.round(count * 10) / 10 }}{{ suffix }}
      </span>
    `
}

// Register the AnimatedCounter component
const components = {
    AnimatedCounter
}
</script>

<style scoped>
/* Additional custom styles if needed */
.hover\:shadow-xl:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Smooth transitions for all interactive elements */
* {
    transition: all 0.3s ease;
}
</style>