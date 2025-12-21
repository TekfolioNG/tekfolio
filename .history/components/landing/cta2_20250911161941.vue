<template>
    <section class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 lg:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <!-- Image Section -->
                <div class="order-2 lg:order-1">
                    <div class="relative">
                        <img src="/assets/img/cta.png" alt="Syntanium Energy CTA"
                            class="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300" />
                        <!-- Optional decorative elements -->
                        <div class="absolute -top-4 -right-4 w-20 h-20 bg-[#fe4135] opacity-10 rounded-full blur-xl">
                        </div>
                        <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 opacity-5 rounded-full blur-2xl">
                        </div>
                    </div>
                </div>

                <!-- Content Section -->
                <div class="order-1 lg:order-2">
                    <div class="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                        <!-- Badge -->
                        <div
                            class="inline-flex items-center px-4 py-2 bg-[#fe4135] bg-opacity-10 text-[#fe4135] rounded-full text-sm font-medium mb-6">
                            <Icon name="lucide:zap" class="w-4 h-4 mr-2" />
                            Ready to Get Started?
                        </div>

                        <!-- Heading -->
                        <h2
                            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            Partner with
                            <span class="text-[#fe4135] relative">
                                Energy Experts
                                <svg class="absolute -bottom-2 left-0 w-full h-3 text-[#fe4135] opacity-30"
                                    viewBox="0 0 200 12" fill="none">
                                    <path d="M2 10C50 2 100 2 198 10" stroke="currentColor" stroke-width="3"
                                        stroke-linecap="round" />
                                </svg>
                            </span>
                        </h2>

                        <!-- Description -->
                        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            Transform your energy projects with our innovative engineering solutions.
                            From concept to completion, we deliver excellence that powers your success.
                        </p>

                        <!-- Key Points -->
                        <ul class="space-y-3 mb-8">
                            <li class="flex items-center text-gray-700 dark:text-gray-300">
                                <Icon name="lucide:check-circle" class="w-5 h-5 mr-3 text-[#fe4135] flex-shrink-0" />
                                25+ Years of Industry Experience
                            </li>
                            <li class="flex items-center text-gray-700 dark:text-gray-300">
                                <Icon name="lucide:check-circle" class="w-5 h-5 mr-3 text-[#fe4135] flex-shrink-0" />
                                Cutting-Edge Engineering Solutions
                            </li>
                            <li class="flex items-center text-gray-700 dark:text-gray-300">
                                <Icon name="lucide:check-circle" class="w-5 h-5 mr-3 text-[#fe4135] flex-shrink-0" />
                                Uncompromising Safety Standards
                            </li>
                        </ul>

                        <!-- CTA Buttons -->
                        <div class="flex flex-col sm:flex-row gap-4">
                            <NuxtLink to="/contact"
                                class="inline-flex items-center justify-center px-8 py-4 bg-[#fe4135] hover:bg-[#dc2626] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                                <Icon name="lucide:phone-call" class="w-5 h-5 mr-2" />
                                Get Started Today
                            </NuxtLink>

                            <NuxtLink to="/solutions"
                                class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#fe4135] hover:text-[#fe4135] font-semibold rounded-xl transition-all duration-300">
                                <Icon name="lucide:arrow-right" class="w-5 h-5 mr-2" />
                                Explore Solutions
                            </NuxtLink>
                        </div>

                        <!-- Contact Info -->
                        <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                Ready to discuss your project?
                            </p>
                            <div
                                class="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6">
                                <div class="flex items-center text-gray-700 dark:text-gray-300">
                                    <Icon name="lucide:phone" class="w-4 h-4 mr-2 text-[#fe4135]" />
                                    <span class="font-medium">(+234) 814 857 1524</span>
                                </div>
                                <div class="flex items-center text-gray-700 dark:text-gray-300">
                                    <Icon name="lucide:mail" class="w-4 h-4 mr-2 text-[#fe4135]" />
                                    <span class="font-medium">info@syntaniumenergy.com</span>
                                </div>
                            </div>
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
// Component props for customization
defineProps({
    title: {
        type: String,
        default: 'Partner with Energy Experts Today'
    },
    description: {
        type: String,
        default: 'Transform your energy projects with our innovative engineering solutions. From concept to completion, we deliver excellence that powers your success.'
    },
    imageSrc: {
        type: String,
        default: '/assets/img/cta.png'
    },
    primaryButtonText: {
        type: String,
        default: 'Get Started Today'
    },
    secondaryButtonText: {
        type: String,
        default: 'Explore Solutions'
    },
    primaryButtonLink: {
        type: String,
        default: '/contact'
    },
    secondaryButtonLink: {
        type: String,
        default: '/solutions'
    }
})
</script>

<style scoped>
/* Custom animations */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

/* Smooth transitions */
.transition-all {
    transition: all 0.3s ease-in-out;
}
</style>