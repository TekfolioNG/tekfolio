<template>
    <section class="bg-white py-16 md:py-24">
        <div class="container mx-auto px-4 max-w-6xl">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    Why Work With <span class="text-blue-600">TEKFOLIO</span> As Your Software Dev Partner?
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    We work with teams that think ahead, move fast, and build with purpose.
                </p>
            </div>

            <!-- Two Column Layout -->
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <!-- Left Column - Benefits List -->
                <div class="space-y-8">
                    <div v-for="(benefit, index) in benefits" :key="index" class="flex items-start">
                        <div class="bg-blue-100 p-3 rounded-lg mr-6">
                            <span class="text-2xl">{{ benefit.icon }}</span>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">{{ benefit.title }}</h3>
                            <p class="text-gray-600">{{ benefit.description }}</p>
                        </div>
                    </div>
                </div>

                <!-- Right Column - Image -->
                <div class="relative">
                    <img src="~/assets/img/why-choose-tekfolio.png" alt="Tekfolio team collaborating"
                        class="rounded-xl shadow-xl border-8 border-white" />
                    <div class="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                        <div class="flex items-center">
                            <div class="bg-blue-100 p-2 rounded-full mr-3">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span class="font-medium">Proven Results</span>
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
        icon: '🚀',
        title: 'Ready Your Goals Faster',
        description: 'User-friendly, next-gen tech that keeps your users happy and moves your business forward.'
    },
    {
        icon: '🎯',
        title: 'Quality You Can Rely On',
        description: 'High-quality software that sets your business apart in the market.'
    },
    {
        icon: '👥',
        title: 'User-Focused Design',
        description: 'Simple, intuitive interfaces that help customers find what they need.'
    },
    {
        icon: '🔮',
        title: 'Future-Ready Technology',
        description: 'Modern tools that adapt to ensure your software stays relevant.'
    },
    {
        icon: '🔄',
        title: 'Phased Development',
        description: 'Clear stages with progress visibility and adjustment flexibility.'
    },
    {
        icon: '👂',
        title: 'We Listen to You',
        description: 'Deep understanding of your business goals and needs.'
    }
];
</script>

<style scoped>
/* Subtle hover effects */
.bg-blue-100 {
    transition: all 0.3s ease;
}

.bg-blue-100:hover {
    transform: scale(1.05);
}
</style>