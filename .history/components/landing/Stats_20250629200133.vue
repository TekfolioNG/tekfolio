<template>
    <!-- Impact Section -->
    <section class="relative bg-white py-16 md:py-24 overflow-hidden">
        <div class="container mx-auto px-6 md:px-8 lg:px-12">
            <!-- Main content grid - image on left, header + stats on right for desktop -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

                <!-- Left Column: Image (moved from right) -->
                <div class="order-1 lg:order-1 flex items-start justify-center">
                    <div class="w-full h-96 rounded-lg overflow-hidden">
                        <img src="~/assets/img/slider1-veraverde.jpg" alt="Impact visualization"
                            class="w-full h-full object-cover" />
                    </div>
                </div>

                <!-- Right Column: Header + Stats (moved from left) -->
                <div class="order-2 lg:order-2">
                    <!-- Section header -->
                    <div class="mb-16">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
                        <p class="text-lg text-gray-600">
                            Every data point represents progress toward a cleaner, more resilient future.
                        </p>
                    </div>

                    <!-- Stats Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">

                        <!-- Stat 1 -->
                        <div class="flex items-start space-x-4 transition-all hover:transform hover:-translate-y-1">
                            <div class="flex-shrink-0">
                                <svg class="w-12 h-12 text-primary" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <div class="text-4xl md:text-5xl font-bold text-primary mb-1" ref="stat1">0</div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Grains Produced & Traded</h3>
                                <p class="text-sm text-gray-600">Boosting food production through climate-smart methods
                                </p>
                            </div>
                        </div>

                        <!-- Stat 2 -->
                        <div class="flex items-start space-x-4 transition-all hover:transform hover:-translate-y-1">
                            <div class="flex-shrink-0">
                                <svg class="w-12 h-12 text-primary" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <div class="text-4xl md:text-5xl font-bold text-primary mb-1" ref="stat2">0</div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Farmers Onboarded</h3>
                                <p class="text-sm text-gray-600">Empowering smallholder farmers with sustainable
                                    practices</p>
                            </div>
                        </div>

                        <!-- Stat 3 -->
                        <div class="flex items-start space-x-4 transition-all hover:transform hover:-translate-y-1">
                            <div class="flex-shrink-0">
                                <svg class="w-12 h-12 text-primary" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <div class="text-4xl md:text-5xl font-bold text-primary mb-1" ref="stat3">0</div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Communities Reached</h3>
                                <p class="text-sm text-gray-600">Driving transformation across rural areas</p>
                            </div>
                        </div>

                        <!-- Stat 4 -->
                        <div class="flex items-start space-x-4 transition-all hover:transform hover:-translate-y-1">
                            <div class="flex-shrink-0">
                                <svg class="w-12 h-12 text-primary" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <div class="text-4xl md:text-5xl font-bold text-primary mb-1" ref="stat4">0</div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Hectares Cultivated</h3>
                                <p class="text-sm text-gray-600">Improved soil fertility at scale</p>
                            </div>
                        </div>

                        <!-- Stat 5 -->
                        <div class="flex items-start space-x-4 transition-all hover:transform hover:-translate-y-1">
                            <div class="flex-shrink-0">
                                <svg class="w-12 h-12 text-primary" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <div class="text-4xl md:text-5xl font-bold text-primary mb-1" ref="stat5">0</div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Jobs Created</h3>
                                <p class="text-sm text-gray-600">Dignified employment across value chains</p>
                            </div>
                        </div>

                        <!-- Stat 6 -->
                        <div class="flex items-start space-x-4 transition-all hover:transform hover:-translate-y-1">
                            <div class="flex-shrink-0">
                                <svg class="w-12 h-12 text-primary" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <div class="text-4xl md:text-5xl font-bold text-primary mb-1" ref="stat6">0</div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Storage Acquired (MT)</h3>
                                <p class="text-sm text-gray-600">Sustainable storage capacity</p>
                            </div>
                        </div>

                        <!-- Stat 7 -->
                        <div class="flex items-start space-x-4 transition-all hover:transform hover:-translate-y-1">
                            <div class="flex-shrink-0">
                                <svg class="w-12 h-12 text-primary" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <div class="text-4xl md:text-5xl font-bold text-primary mb-1" ref="stat7">0</div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Warehouses Available</h3>
                                <p class="text-sm text-gray-600">Supporting local distribution</p>
                            </div>
                        </div>

                        <!-- Stat 8 -->
                        <div class="flex items-start space-x-4 transition-all hover:transform hover:-translate-y-1">
                            <div class="flex-shrink-0">
                                <svg class="w-12 h-12 text-primary" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <div class="text-4xl md:text-5xl font-bold text-primary mb-1" ref="stat8">0</div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Tons of CO₂ Sequestered</h3>
                                <p class="text-sm text-gray-600">Through biochar and sustainable land use</p>
                            </div>
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

                        <!-- SDG Grid - enhanced layout with icons -->
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <!-- SDG 13: Climate Action -->
                            <div class="text-center">
                                <div
                                    class="w-24 h-24 mx-auto mb-3 bg-primary rounded-lg flex flex-col items-center justify-center p-3">
                                    <svg class="w-8 h-8 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                    <span class="text-lg font-bold text-white">13</span>
                                    <p class="text-xs text-white font-medium leading-tight">Climate Action</p>
                                </div>
                            </div>

                            <!-- SDG 15: Life on Land -->
                            <div class="text-center">
                                <div
                                    class="w-24 h-24 mx-auto mb-3 bg-primary rounded-lg flex flex-col items-center justify-center p-3">
                                    <svg class="w-8 h-8 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M14,6l-1,-2l-1,2l-1,-1l-1,1l-1,-1l-1,1l-1,-1l-1,1l-1,-1l-1,1L4,5v2c0,2.21 1.79,4 4,4s4,-1.79 4,-4V5l-1,1z" />
                                        <path d="M20,15H4v2h16v-2z" />
                                        <path d="M20,19H4v2h16v-2z" />
                                    </svg>
                                    <span class="text-lg font-bold text-white">15</span>
                                    <p class="text-xs text-white font-medium leading-tight">Life on Land</p>
                                </div>
                            </div>

                            <!-- SDG 12: Responsible Consumption -->
                            <div class="text-center">
                                <div
                                    class="w-24 h-24 mx-auto mb-3 bg-primary rounded-lg flex flex-col items-center justify-center p-3">
                                    <svg class="w-8 h-8 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z" />
                                        <path d="M10.5,8.5L9,10L12,13L18,7L16.5,5.5L12,10L10.5,8.5Z" />
                                    </svg>
                                    <span class="text-lg font-bold text-white">12</span>
                                    <p class="text-xs text-white font-medium leading-tight">Responsible Consumption</p>
                                </div>
                            </div>

                            <!-- SDG 2: Zero Hunger -->
                            <div class="text-center">
                                <div
                                    class="w-24 h-24 mx-auto mb-3 bg-primary rounded-lg flex flex-col items-center justify-center p-3">
                                    <svg class="w-8 h-8 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12,3L8,7.58L6.36,6L2,10.58L3.42,12L6.36,9L8,10.58L12,6.5L16,10.58L17.64,9L22,13.58L20.58,15L17.64,12L16,13.58L12,8.5L8,12.58L12,17L16,12.58L12,8.5Z" />
                                    </svg>
                                    <span class="text-lg font-bold text-white">2</span>
                                    <p class="text-xs text-white font-medium leading-tight">Zero Hunger</p>
                                </div>
                            </div>

                            <!-- SDG 1: No Poverty -->
                            <div class="text-center">
                                <div
                                    class="w-24 h-24 mx-auto mb-3 bg-primary rounded-lg flex flex-col items-center justify-center p-3">
                                    <svg class="w-8 h-8 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,13H14V16H10V13H7V9H10V6H14V9H17V13Z" />
                                    </svg>
                                    <span class="text-lg font-bold text-white">1</span>
                                    <p class="text-xs text-white font-medium leading-tight">No Poverty</p>
                                </div>
                            </div>

                            <!-- SDG 8: Decent Work -->
                            <div class="text-center">
                                <div
                                    class="w-24 h-24 mx-auto mb-3 bg-primary rounded-lg flex flex-col items-center justify-center p-3">
                                    <svg class="w-8 h-8 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M14,12H19.5L18,10.5L19.5,9L23,12.5L19.5,16L18,14.5L19.5,13H14V12M10,12H4.5L6,10.5L4.5,9L1,12.5L4.5,16L6,14.5L4.5,13H10V12Z" />
                                    </svg>
                                    <span class="text-lg font-bold text-white">8</span>
                                    <p class="text-xs text-white font-medium leading-tight">Decent Work</p>
                                </div>
                            </div>

                            <!-- SDG 7: Clean Energy -->
                            <div class="text-center">
                                <div
                                    class="w-24 h-24 mx-auto mb-3 bg-primary rounded-lg flex flex-col items-center justify-center p-3">
                                    <svg class="w-8 h-8 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2M12,8A1,1 0 0,0 11,9A1,1 0 0,0 12,10A1,1 0 0,0 13,9A1,1 0 0,0 12,8Z" />
                                    </svg>
                                    <span class="text-lg font-bold text-white">7</span>
                                    <p class="text-xs text-white font-medium leading-tight">Clean Energy</p>
                                </div>
                            </div>

                            <!-- SDG 9: Innovation -->
                            <div class="text-center">
                                <div
                                    class="w-24 h-24 mx-auto mb-3 bg-primary rounded-lg flex flex-col items-center justify-center p-3">
                                    <svg class="w-8 h-8 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M9,2V8H11V11H5C3.89,11 3,11.89 3,13V16H5V22H19V16H21V13C21,11.89 20.11,11 19,11H13V8H15V2H9M11,4H13V6H11V4M7,13H17V16H16V20H8V16H7V13Z" />
                                    </svg>
                                    <span class="text-lg font-bold text-white">9</span>
                                    <p class="text-xs text-white font-medium leading-tight">Innovation</p>
                                </div>
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

// Format number with K for thousands
const formatNumber = (num) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K'
    }
    return num.toString()
}

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
        const formattedValue = formatNumber(displayValue)
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

/* Responsive adjustments */
@media (max-width: 768px) {
    .text-3xl {
        font-size: 1.875rem;
    }

    .text-4xl {
        font-size: 2.25rem;
    }

    .text-5xl {
        font-size: 3rem;
    }
}
</style>