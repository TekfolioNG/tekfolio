<script setup>
import { ref } from 'vue';

// Services data structure with icons from Lucide
const services = [
    {
        id: 1,
        title: "Custom Web Development",
        headline: "High-performance websites with 3× higher conversion",
        description: "We build sleek, scalable, and conversion-driven websites tailored to your brand and goals.",
        icon: "layout",
        path: "/what-we-do/web-development"
    },
    {
        id: 2,
        title: "Cross-Platform App Development",
        headline: "One codebase, all devices: 40% savings, 100% reach",
        description: "Launch apps that run smoothly on web, iOS, and Android — all from a single build.",
        icon: "smartphone",
        path: "/what-we-do/app-development"
    },
    {
        id: 3,
        title: "Search Engine Optimization (SEO)",
        headline: "Rank higher, sell more: 50% traffic boost in 90 days",
        description: "We combine SEO and content strategy to grow your visibility, engagement, and sales.",
        icon: "search",
        path: "/what-we-do/seo"
    },
    {
        id: 4,
        title: "Search Engine Marketing (SEM)",
        headline: "Targeted ads, powerful returns with average 5× ROAS",
        description: "Our data-led campaigns put your offer in front of the right eyes, at the right time.",
        icon: "target",
        path: "/what-we-do/sem"
    },
    {
        id: 5,
        title: "Email Marketing",
        headline: "Enjoy 30% customer retention with automated workflows",
        description: "We set up smart campaigns that keep your audience engaged and ready to buy again.",
        icon: "mail",
        path: "/what-we-do/email-marketing"
    },
    {
        id: 6,
        title: "Digital Productivity Training",
        headline: "Transform your workforce with 30% efficiency gains in just weeks",
        description: "Upskill your team with hands-on training that drives performance and output.",
        icon: "graduation-cap",
        path: "/what-we-do/training"
    }
];

// Hover state tracking for animation
const hoveredCard = ref(null);

const setHoveredCard = (id) => {
    hoveredCard.value = id;
};

const clearHoveredCard = () => {
    hoveredCard.value = null;
};
</script>

<template>
    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section header -->
            <div class="text-center mb-12 lg:mb-16">
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    How We Help Our Clients
                </h2>
                <div class="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
                <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Tailored solutions designed to amplify your digital presence and drive measurable business growth.
                </p>
            </div>

            <!-- Service cards grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                <!-- Individual service cards -->
                <div v-for="service in services" :key="service.id"
                    class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
                    @mouseenter="setHoveredCard(service.id)" @mouseleave="clearHoveredCard()">
                    <NuxtLink :to="service.path" class="block h-full">
                        <div class="p-6 lg:p-8 flex flex-col h-full">
                            <!-- Icon with tadaa effect -->
                            <div class="mb-5 relative">
                                <div class="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 transition-all duration-500"
                                    :class="{ 'scale-110 rotate-12': hoveredCard === service.id }">
                                    <ClientOnly>
                                        <UIcon :name="'i-lucide-' + service.icon"
                                            class="w-8 h-8 transition-all duration-500"
                                            :class="{ 'scale-125': hoveredCard === service.id }" />
                                    </ClientOnly>
                                </div>
                                <!-- Animated circles for tadaa effect -->
                                <div v-if="hoveredCard === service.id"
                                    class="absolute -inset-1 flex items-center justify-center pointer-events-none">
                                    <div
                                        class="absolute w-12 h-12 rounded-full border border-blue-400 opacity-0 animate-ping-slow">
                                    </div>
                                    <div
                                        class="absolute w-14 h-14 rounded-full border border-blue-300 opacity-0 animate-ping-slow-delayed">
                                    </div>
                                </div>
                            </div>

                            <!-- Content -->
                            <h3 class="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                {{ service.title }}
                            </h3>
                            <p class="font-medium text-blue-700 dark:text-blue-400 mb-3">
                                {{ service.headline }}
                            </p>
                            <p class="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                {{ service.description }}
                            </p>

                            <!-- Learn more link -->
                            <div class="mt-auto flex items-center text-blue-700 dark:text-blue-400 font-medium group">
                                <span>Learn more</span>
                                <UIcon name="i-lucide-arrow-right"
                                    class="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Animation for tadaa effect circles */
@keyframes ping-slow {
    0% {
        transform: scale(0.2);
        opacity: 0;
    }

    40% {
        opacity: 0.3;
    }

    100% {
        transform: scale(1.8);
        opacity: 0;
    }
}

@keyframes ping-slow-delayed {
    0% {
        transform: scale(0.2);
        opacity: 0;
    }

    20% {
        opacity: 0;
    }

    60% {
        opacity: 0.3;
    }

    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}

.animate-ping-slow {
    animation: ping-slow 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animate-ping-slow-delayed {
    animation: ping-slow-delayed 1.8s cubic-bezier(0, 0, 0.2, 1) 0.3s infinite;
}
</style>