<template>
    <section class="bg-gray-50 py-16 md:py-24">
        <div class="container mx-auto px-4">
            <!-- Header with subtle tech accent -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    Why We're the <span class="text-blue-600">Go-To Tech Partner</span> for Ambitious Brands
                </h2>
                <p class="text-lg max-w-3xl mx-auto opacity-90">
                    We work with teams that think ahead, move fast, and build with purpose.
                </p>
            </div>

            <!-- Grid layout with image integration -->
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <!-- Left column - Image with tech overlay -->
                <div class="relative">
                    <img src="~/assets/img/why-choose-tekfolio.png" alt="Team collaborating on tech solutions"
                        class="rounded-xl shadow-lg" />
                    <div class="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md border border-gray-100">
                        <div class="flex items-center">
                            <div class="bg-blue-100 p-2 rounded-full mr-3">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span class="font-medium">Since 2023</span>
                        </div>
                    </div>
                </div>

                <!-- Right column - Benefit cards -->
                <div class="space-y-8">
                    <div v-for="(benefit, index) in benefits" :key="index"
                        class="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                        <div class="flex items-start">
                            <span class="text-2xl mr-4">{{ benefit.icon }}</span>
                            <div>
                                <h3 class="text-xl font-semibold mb-2">{{ benefit.title }}</h3>
                                <p class="text-gray-600">{{ benefit.description }}</p>
                            </div>
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
        title: 'We Build Fast — Without Breaking Things',
        description: 'Speed matters, but quality lasts. We ship clean, scalable code you won’t need to rebuild.'
    },
    {
        icon: '🎯',
        title: 'Strategy Comes Before Screens',
        description: 'Every decision maps to what actually moves the needle for your business goals.'
    },
    {
        icon: '🧠',
        title: 'Tech-Led, Human-Centered',
        description: 'From Nuxt to Flutter, we use next-gen tools to craft user-first experiences.'
    },
    {
        icon: '🤝',
        title: 'A True Partner, Not Just a Vendor',
        description: 'We ask better questions and stay engaged long after launch.'
    }
];
</script>

<style scoped>
/* Smooth hover transitions */
.border-gray-100 {
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.border-gray-100:hover {
    transform: translateY(-2px);
}
</style>