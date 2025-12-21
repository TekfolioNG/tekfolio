<template>
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header Section -->
            <div class="mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
                <p class="text-lg text-gray-600 max-w-2xl">
                    Every data point represents progress toward a cleaner, more resilient future.
                </p>
            </div>

            <div class="flex flex-col lg:flex-row gap-16">
                <!-- Left Side - Impact Stats -->
                <div class="lg:w-1/2">
                    <div class="grid grid-cols-2 gap-x-12 gap-y-12">
                        <!-- Row 1 -->
                        <div class="text-left">
                            <div class="flex items-center mb-2">
                                <div class="w-8 h-8 mr-3">
                                    <svg class="w-full h-full text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-4xl font-bold text-gray-900">
                                        <AnimatedCounter :target="20" />
                                    </div>
                                    <div class="text-sm text-gray-900 font-medium">Tons of CO₂ Sequestered</div>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 mt-2">
                                Capturing and storing carbon through biochar and sustainable land use.
                            </p>
                        </div>

                        <div class="text-left">
                            <div class="flex items-center mb-2">
                                <div class="w-8 h-8 mr-3">
                                    <svg class="w-full h-full text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.1264 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM21 7C21 8.10457 20.1046 9 19 9C17.8954 9 17 8.10457 17 7C17 5.89543 17.8954 5 19 5C20.1046 5 21 5.89543 21 7ZM7 7C7 8.10457 6.10457 9 5 9C3.89543 9 3 8.10457 3 7C3 5.89543 3.89543 5 5 5C6.10457 5 7 5.89543 7 7Z" />
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-4xl font-bold text-gray-900">
                                        <AnimatedCounter :target="850" />
                                    </div>
                                    <div class="text-sm text-gray-900 font-medium">Farmers Onboarded</div>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 mt-2">
                                Empowering smallholder farmers with climate-smart agricultural practices.
                            </p>
                        </div>

                        <!-- Row 2 -->
                        <div class="text-left">
                            <div class="flex items-center mb-2">
                                <div class="w-8 h-8 mr-3">
                                    <svg class="w-full h-full text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z" />
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-4xl font-bold text-gray-900">
                                        <AnimatedCounter :target="2.7" :decimals="1" />K
                                    </div>
                                    <div class="text-sm text-gray-900 font-medium">Communities Reached</div>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 mt-2">
                                Driving sustainable transformation across rural and peri-urban communities.
                            </p>
                        </div>

                        <div class="text-left">
                            <div class="flex items-center mb-2">
                                <div class="w-8 h-8 mr-3">
                                    <svg class="w-full h-full text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7Z" />
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-4xl font-bold text-gray-900">
                                        <AnimatedCounter :target="420" />K+
                                    </div>
                                    <div class="text-sm text-gray-900 font-medium">Hectares Cultivated</div>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 mt-2">
                                Improved soil fertility and sustainable crop growth at scale.
                            </p>
                        </div>

                        <!-- Row 3 -->
                        <div class="text-left">
                            <div class="flex items-center mb-2">
                                <div class="w-8 h-8 mr-3">
                                    <svg class="w-full h-full text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17L4 12" />
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-4xl font-bold text-gray-900">
                                        <AnimatedCounter :target="9" />K
                                    </div>
                                    <div class="text-sm text-gray-900 font-medium">Jobs Created</div>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 mt-2">
                                Creating dignified employment across rural value chains.
                            </p>
                        </div>

                        <div class="text-left">
                            <div class="flex items-center mb-2">
                                <div class="w-8 h-8 mr-3">
                                    <svg class="w-full h-full text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M7 4V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V4H20C20.5523 4 21 4.44772 21 5S20.5523 6 20 6H19V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V6H4C3.44772 6 3 5.55228 3 5S3.44772 4 4 4H7Z" />
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-4xl font-bold text-gray-900">
                                        <AnimatedCounter :target="225" />K MT
                                    </div>
                                    <div class="text-sm text-gray-900 font-medium">Ecofuel Saved</div>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 mt-2">
                                Replacing traditional fuels with eco-friendly briquettes from agricultural waste.
                            </p>
                        </div>

                        <!-- Row 4 -->
                        <div class="text-left">
                            <div class="flex items-center mb-2">
                                <div class="w-8 h-8 mr-3">
                                    <svg class="w-full h-full text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z" />
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-4xl font-bold text-gray-900">
                                        <AnimatedCounter :target="1.7" :decimals="1" />M+
                                    </div>
                                    <div class="text-sm text-gray-900 font-medium">Grains Produced & Traded</div>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 mt-2">
                                Boosting food production through climate-smart methods.
                            </p>
                        </div>

                        <div class="text-left">
                            <div class="flex items-center mb-2">
                                <div class="w-8 h-8 mr-3">
                                    <svg class="w-full h-full text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z" />
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-4xl font-bold text-gray-900">
                                        <AnimatedCounter :target="50" />
                                    </div>
                                    <div class="text-sm text-gray-900 font-medium">Trees Preserved</div>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 mt-2">
                                Reducing deforestation by providing clean-burning briquettes as alternatives to
                                firewood.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Right Side - Placeholder for illustration -->
                <div class="lg:w-1/2 flex items-center justify-center">
                    <div
                        class="w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center">
                        <div class="text-center text-gray-500">
                            <svg class="w-24 h-24 mx-auto mb-4 text-green-400" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                            </svg>
                            <p class="text-lg font-medium">Impact Visualization</p>
                            <p class="text-sm">Space for infographic or illustration</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SDG Section -->
            <div class="mt-20">
                <div class="mb-12">
                    <h3 class="text-3xl font-bold text-gray-900 mb-4">SDG Targets</h3>
                    <p class="text-lg text-gray-600 max-w-3xl">
                        <strong>Our Work, Aligned with Global Goals</strong><br>
                        From soil to stove, every project at Vera Verde directly supports one or more of the United
                        Nations Sustainable Development Goals.
                    </p>
                </div>

                <!-- SDG Icons Row -->
                <div class="flex flex-wrap justify-start gap-4">
                    <div class="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-sm">1</span>
                    </div>
                    <div class="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-sm">2</span>
                    </div>
                    <div class="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-sm">3</span>
                    </div>
                    <div class="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-sm">5</span>
                    </div>
                    <div class="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-sm">13</span>
                    </div>
                    <div class="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-sm">15</span>
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
        decimals: {
            type: Number,
            default: 0
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

        const formatNumber = (value) => {
            return props.decimals > 0
                ? (Math.round(value * Math.pow(10, props.decimals)) / Math.pow(10, props.decimals)).toFixed(props.decimals)
                : Math.round(value).toLocaleString()
        }

        return {
            count,
            element,
            formatNumber
        }
    },
    template: `
      <span ref="element">
        {{ formatNumber(count) }}
      </span>
    `
}

// Register the AnimatedCounter component
const components = {
    AnimatedCounter
}
</script>

<style scoped>
/* Clean, minimal styling */
</style>