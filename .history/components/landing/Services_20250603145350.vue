<template>
    <section class="py-16 md:py-24 bg-gray-900 text-white w-full">
        <div class="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <!-- Section Heading -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
                    What We Do
                </h2>
                <div class="w-24 h-1 bg-white mx-auto"></div>
            </div>

            <!-- Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 px-4 sm:px-0">
                <!-- Service Card - Template for all cards -->
                <NuxtLink v-for="(service, index) in services" :key="index" :to="service.path" class="group">
                    <div
                        class="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
                        <div
                            class="w-16 h-16 icon-bg rounded-lg flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:animate-twinkle">
                            <Icon :name="service.icon"
                                class="w-8 h-8 text-white transition-all duration-600 group-hover:brightness-125" />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 text-center">{{ service.title }}</h3>
                        <p class="text-blue-400 font-medium mb-4 text-center">{{ service.subtitle }}</p>
                        <p class="text-gray-300 flex-grow mb-6 text-center">{{ service.description }}</p>
                        <div
                            class="flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                            <span class="mr-2 font-medium">Here's how</span>
                            <Icon name="lucide:arrow-right"
                                class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
// Service data array for cleaner template
const services = [
    {
        title: "Enterprise Web Apps",
        subtitle: "High-performance with higher conversion",
        description: "We build sleek, scalable, and conversion-driven websites customized to your brand and goals.",
        icon: "lucide:code",
        path: "/services/web-development"
    },
    {
        title: "Business Mobile Apps",
        subtitle: "One codebase, all devices",
        description: "Launch apps that run smoothly on web, iOS, and Android — all from a single build.",
        icon: "lucide:smartphone",
        path: "/services/app-development"
    },
    {
        title: "Search Engine Optimization",
        subtitle: "Rank higher, sell more",
        description: "We combine SEO and content strategy to grow your visibility, engagement, and sales.",
        icon: "lucide:trending-up",
        path: "/services/seo"
    },
    {
        title: "Search Engine Marketing",
        subtitle: "Targeted ads, powerful returns",
        description: "Our data-led campaigns put your offer in front of the right eyes, at the right time.",
        icon: "lucide:megaphone",
        path: "/services/sem"
    },
    {
        title: "Email Marketing",
        subtitle: "Improved customer retention with automated workflows",
        description: "We set up smart campaigns that keep your audience engaged and ready to buy again.",
        icon: "lucide:mail",
        path: "/services/email-marketing"
    },
    {
        title: "Workforce e-Productivity Training",
        subtitle: "Transform your workforce with efficiency gains",
        description: "Upskill your team with hands-on training that drives performance and output.",
        icon: "lucide:graduation-cap",
        path: "/services/training"
    }
]
</script>

<style scoped>
/* Icon background - consistent blue for all screen sizes */
.icon-bg {
    background-color: #01348F;
}

/* Hover states - consistent blue for all screen sizes */
.group:hover .icon-bg {
    background-color: #1d8ad8;
}

/* Custom twinkle animation - subtle and professional */
@keyframes twinkle {
    0% {
        transform: scale(1) rotate(0deg);
    }

    25% {
        transform: scale(1.15) rotate(5deg);
    }

    50% {
        transform: scale(1.15) rotate(-5deg);
    }

    75% {
        transform: scale(1.15) rotate(5deg);
    }

    100% {
        transform: scale(1) rotate(0deg);
    }
}

.animate-twinkle {
    animation: twinkle 0.6s ease-in-out;
    transform-origin: center;
}

/* Custom duration class for icon brightness transition */
.duration-600 {
    transition-duration: 0.6s;
}

/* Smooth transitions */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}
</style>