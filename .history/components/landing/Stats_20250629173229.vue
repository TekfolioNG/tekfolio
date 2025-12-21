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

            <!-- Main content grid - stats on left, image placeholder on right for desktop -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

                <!-- Stats Column (Left on desktop, full width on mobile) -->
                <div class="order-2 lg:order-1">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">

                        <!-- Stat 1 -->
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex-1">
                                <div class="text-3xl md:text-4xl font-bold text-primary mb-1" ref="stat1">0</div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Grains Produced & Traded</h3>
                                <p class="text-sm text-gray-600">Boosting food production through climate-smart methods
                                </p>
                            </div>
                        </div>

                        <!-- Stat 2 -->
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex-1">
                                <div class="text-3xl md:text-4xl font-bold text-primary mb-1" ref="stat2">0</div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Farmers Onboarded</h3>
                                <p class="text-sm text-gray-600">Empowering smallholder farmers with sustainable
                                    practices</p>
                            </div>
                        </div>

                        <!-- Stat 3 -->
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex-1">
                                <div class="text-3xl md:text-4xl font-bold text-primary mb-1" ref="stat3">0</div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Communities Reached</h3>
                                <p class="text-sm text-gray-600">Driving transformation across rural areas</p>
                            </div>
                        </div>

                        <!-- Stat 4 -->
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex-1">
                                <div class="text-3xl md:text-4xl font-bold text-primary mb-1" ref="stat4">0</div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Hectares Cultivated</h3>
                                <p class="text-sm text-gray-600">Improved soil fertility at scale</p>
                            </div>
                        </div>

                        <!-- Stat 5 -->
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex-1">
                                <div class="text-3xl md:text-4xl font-bold text-primary mb-1" ref="stat5">0</div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Jobs Created</h3>
                                <p class="text-sm text-gray-600">Dignified employment across value chains</p>
                            </div>
                        </div>

                        <!-- Stat 6 -->
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex-1">
                                <div class="text-3xl md:text-4xl font-bold text-primary mb-1" ref="stat6">0</div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Storage Acquired (MT)</h3>
                                <p class="text-sm text-gray-600">Sustainable storage capacity</p>
                            </div>
                        </div>

                        <!-- Stat 7 -->
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex-1">
                                <div class="text-3xl md:text-4xl font-bold text-primary mb-1" ref="stat7">0</div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Warehouses Available</h3>
                                <p class="text-sm text-gray-600">Supporting local distribution</p>
                            </div>
                        </div>

                        <!-- Stat 8 -->
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex-1">
                                <div class="text-3xl md:text-4xl font-bold text-primary mb-1" ref="stat8">0</div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Tons of CO₂ Sequestered</h3>
                                <p class="text-sm text-gray-600">Through biochar and sustainable land use</p>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Image Placeholder (Right on desktop, hidden on mobile initially) -->
                <div class="order-1 lg:order-2 flex items-center justify-center">
                    <div class="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                        <!-- Replace this div with your image -->
                        <div class="text-center">
                            <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p>Image placeholder</p>
                        </div>
                    </div>
                </div>

            </div>

            <!-- SDG Targets Section -->
            <div class="border-t border-gray-200 pt-16">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <!-- SDG Content (Left side on desktop) -->
                    <div>
                        <div class="mb-8">
                            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SDG Targets</h2>
                            <p class="text-lg text-gray-600">
                                Our work directly supports these United Nations Sustainable Development Goals
                            </p>
                        </div>

                        <!-- SDG Grid - compact layout -->
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div class="text-center">
                                <div
                                    class="w-16 h-16 mx-auto mb-3 bg-primary rounded-lg flex items-center justify-center">
                                    <span class="text-xl font-bold text-white">13</span>
                                </div>
                                <p class="text-sm text-gray-600 font-medium">Climate Action</p>
                            </div>

                            <div class="text-center">
                                <div
                                    class="w-16 h-16 mx-auto mb-3 bg-primary rounded-lg flex items-center justify-center">
                                    <span class="text-xl font-bold text-white">15</span>
                                </div>
                                <p class="text-sm text-gray-600 font-medium">Life on Land</p>
                            </div>

                            <div class="text-center">
                                <div
                                    class="w-16 h-16 mx-auto mb-3 bg-primary rounded-lg flex items-center justify-center">
                                    <span class="text-xl font-bold text-white">12</span>
                                </div>
                                <p class="text-sm text-gray-600 font-medium">Responsible Consumption</p>
                            </div>

                            <div class="text-center">
                                <div
                                    class="w-16 h-16 mx-auto mb-3 bg-primary rounded-lg flex items-center justify-center">
                                    <span class="text-xl font-bold text-white">2</span>
                                </div>
                                <p class="text-sm text-gray-600 font-medium">Zero Hunger</p>
                            </div>

                            <div class="text-center">
                                <div
                                    class="w-16 h-16 mx-auto mb-3 bg-primary rounded-lg flex items-center justify-center">
                                    <span class="text-xl font-bold text-white">1</span>
                                </div>
                                <p class="text-sm text-gray-600 font-medium">No Poverty</p>
                            </div>

                            <div class="text-center">
                                <div
                                    class="w-16 h-16 mx-auto mb-3 bg-primary rounded-lg flex items-center justify-center">
                                    <span class="text-xl font-bold text-white">8</span>
                                </div>
                                <p class="text-sm text-gray-600 font-medium">Decent Work</p>
                            </div>

                            <div class="text-center">
                                <div
                                    class="w-16 h-16 mx-auto mb-3 bg-primary rounded-lg flex items-center justify-center">
                                    <span class="text-xl font-bold text-white">7</span>
                                </div>
                                <p class="text-sm text-gray-600 font-medium">Clean Energy</p>
                            </div>

                            <div class="text-center">
                                <div
                                    class="w-16 h-16 mx-auto mb-3 bg-primary rounded-lg flex items-center justify-center">
                                    <span class="text-xl font-bold text-white">9</span>
                                </div>
                                <p class="text-sm text-gray-600 font-medium">Innovation</p>
                            </div>
                        </div>
                    </div>

                    <!-- Right side space for future content -->
                    <div class="hidden lg:block">
                        <!-- This space can be used for additional content or images -->
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// Refs for the stat elements
const stat1 = ref(null)
const stat2 = ref(null)
const stat3 = ref(null)
const stat4 = ref(null)
const stat5 = ref(null)
const stat6 = ref(null)
const stat7 = ref(null)
const stat8 = ref(null)

// Stats data
const stats = [
    { ref: stat1, value: 1700000, suffix: '' },
    { ref: stat2, value: 850000, suffix: '' },
    { ref: stat3, value: 2700, suffix: '+' },
    { ref: stat4, value: 420000, suffix: '+' },
    { ref: stat5, value: 9000, suffix: '+' },
    { ref: stat6, value: 225000, suffix: 'MT' },
    { ref: stat7, value: 470, suffix: '' },
    { ref: stat8, value: 20, suffix: '' }
]

// Animation function
const animateNumber = (element, targetValue, duration = 2000, suffix = '') => {
    let startValue = 0
    const increment = targetValue / (duration / 16) // 60fps
    let currentValue = startValue

    const timer = setInterval(() => {
        currentValue += increment
        if (currentValue >= targetValue) {
            clearInterval(timer)
            currentValue = targetValue
        }

        const displayValue = Math.floor(currentValue)
        const formattedValue = displayValue >= 1000 ? displayValue.toLocaleString() : displayValue.toString()
        element.textContent = formattedValue + suffix
    }, 16)
}

// Intersection Observer for triggering animations
const observeStats = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const statIndex = stats.findIndex(stat => stat.ref.value === entry.target)
                if (statIndex !== -1) {
                    const { value, suffix } = stats[statIndex]
                    animateNumber(entry.target, value, 2000, suffix)
                    observer.unobserve(entry.target) // Animate only once
                }
            }
        })
    }, { threshold: 0.5 })

    stats.forEach(stat => {
        if (stat.ref.value) {
            observer.observe(stat.ref.value)
        }
    })
}

onMounted(() => {
    observeStats()
})
</script>

<style scoped>
/* Brand colors */
.bg-primary {
    background-color: #406112;
}

.text-primary {
    color: #406112;
}

/* Smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}

/* Hover effects for stats */
.flex:hover {
    transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .text-3xl {
        font-size: 1.875rem;
    }

    .text-4xl {
        font-size: 2.25rem;
    }
}
</style>