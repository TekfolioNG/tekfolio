<template>
    <section class="bg-white dark:bg-gray-900 py-12 transition-colors duration-300">
        <div class="container mx-auto px-4 max-w-6xl">
            <!-- Section Header with Dark BG -->
            <div class="bg-gray-900 text-white p-8 rounded-t-xl">
                <h2 class="text-2xl md:text-3xl font-bold mb-2">
                    Why Work With <span class="text-blue-400">TEKFOLIO</span>
                </h2>
                <p class="text-gray-300">
                    We work with teams that think ahead, move fast, and build with purpose.
                </p>
            </div>

            <!-- 1/4 - 3/4 Split Layout -->
            <div class="grid md:grid-cols-4 gap-0 bg-white dark:bg-gray-800 rounded-b-xl shadow-lg overflow-hidden">
                <!-- Left Column - Image (1/4) -->
                <div class="md:col-span-1 bg-transparent p-4 flex items-center justify-center">
                    <img src="~/assets/img/why-choose-tekfolio.png" alt="Tekfolio team collaborating"
                        class="w-full h-auto object-cover rounded-lg" />
                </div>

                <!-- Right Column - Benefits (3/4) -->
                <div class="md:col-span-3 p-6">
                    <div class="grid sm:grid-cols-2 gap-6">
                        <div v-for="(benefit, index) in benefits" :key="index"
                            class="p-4 border-b border-gray-200 dark:border-gray-700 last:border-0 sm:border-b-0 sm:border-r dark:sm:border-gray-700">
                            <h3 class="font-bold text-lg mb-2 dark:text-white">{{ benefit.title }}</h3>
                            <p class="text-gray-600 dark:text-gray-300 text-sm">{{ benefit.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const benefits = [
    {
        title: 'Ready Your Goals Faster',
        description: 'User-friendly, next-gen tech that keeps users engaged and moves business forward.'
    },
    {
        title: 'Quality You Can Rely On',
        description: 'High-quality software that differentiates your business in the market.'
    },
    {
        title: 'User-Focused Design',
        description: 'Intuitive interfaces that streamline customer experiences.'
    },
    {
        title: 'Future-Ready Technology',
        description: 'Modern tools that adapt as your needs evolve.'
    },
    {
        title: 'Phased Development',
        description: 'Clear milestones with progress visibility at each stage.'
    },
    {
        title: 'We Listen to You',
        description: 'Solutions built on deep understanding of your objectives.'
    }
];
</script>

<style scoped>
/* Smooth dark mode transitions */
.bg-white,
.bg-gray-900,
.bg-gray-800 {
    transition: background-color 0.3s ease;
}
</style>