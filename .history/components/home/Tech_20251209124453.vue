<template>
    <section class="relative w-full py-16 md:py-24 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                <!-- Text Content - Left Side -->
                <div class="lg:w-1/2">
                    <div class="space-y-6">
                        <div
                            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100">
                            <div
                                class="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse">
                            </div>
                            <span class="text-sm font-medium text-gradient">Our Tech Stack</span>
                        </div>

                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            <span class="text-gray-900">The Technology </span>
                            <span class="text-gradient">Behind Our Work</span>
                        </h2>

                        <p class="text-lg text-gray-600 leading-relaxed">
                            We work with the tools trusted by the world's best engineering teams.
                            Our stack evolves with industry standards, ensuring scalable,
                            performant, and future-proof solutions.
                        </p>

                        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
                            <div class="tech-feature">
                                <div class="feature-icon">⚡</div>
                                <div>
                                    <h4 class="font-semibold text-gray-900">Modern Frameworks</h4>
                                    <p class="text-sm text-gray-500">Cutting-edge technology stack</p>
                                </div>
                            </div>
                            <div class="tech-feature">
                                <div class="feature-icon">🔒</div>
                                <div>
                                    <h4 class="font-semibold text-gray-900">Enterprise Grade</h4>
                                    <p class="text-sm text-gray-500">Production-ready infrastructure</p>
                                </div>
                            </div>
                            <div class="tech-feature">
                                <div class="feature-icon">🚀</div>
                                <div>
                                    <h4 class="font-semibold text-gray-900">Cloud Native</h4>
                                    <p class="text-sm text-gray-500">Scalable cloud architecture</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tech Logos Sphere - Right Side -->
                <div class="lg:w-1/2 relative">
                    <div class="relative h-[400px] md:h-[500px] lg:h-[550px] w-full">
                        <!-- Background Sphere -->
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div
                                class="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-50/50 to-blue-50/50 blur-xl">
                            </div>
                        </div>

                        <!-- Animated Logos Container -->
                        <div class="relative h-full w-full">
                            <!-- Each logo positioned in a spherical arrangement -->
                            <template v-for="(logo, index) in techLogos" :key="index">
                                <div class="absolute tech-logo" :class="logo.class" :style="{
                                    animationDelay: logo.delay,
                                    left: logo.position.x + '%',
                                    top: logo.position.y + '%'
                                }">
                                    <img :src="logo.src" :alt="logo.name"
                                        class="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                                    <div class="logo-glow"></div>
                                </div>
                            </template>

                            <!-- Center Point Indicator -->
                            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div
                                    class="w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 animate-pulse">
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
import { onMounted, ref } from 'vue'

const techLogos = ref([
    {
        src: '/assets/img/js.png',
        name: 'JavaScript',
        class: 'bounce-left',
        delay: '0s',
        position: { x: 20, y: 20 }
    },
    {
        src: '/assets/img/ts.png',
        name: 'TypeScript',
        class: 'bounce-right',
        delay: '0.2s',
        position: { x: 80, y: 15 }
    },
    {
        src: '/assets/img/python.png',
        name: 'Python',
        class: 'bounce-left',
        delay: '0.4s',
        position: { x: 10, y: 50 }
    },
    {
        src: '/assets/img/react.png',
        name: 'React',
        class: 'bounce-right',
        delay: '0.6s',
        position: { x: 90, y: 45 }
    },
    {
        src: '/assets/img/nuxt.png',
        name: 'Nuxt',
        class: 'bounce-left',
        delay: '0.8s',
        position: { x: 25, y: 80 }
    },
    {
        src: '/assets/img/node.png',
        name: 'Node.js',
        class: 'bounce-right',
        delay: '1s',
        position: { x: 75, y: 75 }
    },
    {
        src: '/assets/img/flutter.png',
        name: 'Flutter',
        class: 'bounce-left',
        delay: '1.2s',
        position: { x: 40, y: 35 }
    },
    {
        src: '/assets/img/tailwind.png',
        name: 'Tailwind CSS',
        class: 'bounce-right',
        delay: '1.4s',
        position: { x: 60, y: 60 }
    },
    {
        src: '/assets/img/docker.png',
        name: 'Docker',
        class: 'bounce-left',
        delay: '1.6s',
        position: { x: 15, y: 65 }
    },
    {
        src: '/assets/img/postgress.png',
        name: 'PostgreSQL',
        class: 'bounce-right',
        delay: '1.8s',
        position: { x: 85, y: 30 }
    },
    {
        src: '/assets/img/aws.png',
        name: 'AWS',
        class: 'bounce-left',
        delay: '2s',
        position: { x: 35, y: 15 }
    },
    {
        src: '/assets/img/gcp.png',
        name: 'Google Cloud',
        class: 'bounce-right',
        delay: '2.2s',
        position: { x: 65, y: 85 }
    },
    {
        src: '/assets/img/cloudflare.png',
        name: 'Cloudflare',
        class: 'bounce-left',
        delay: '2.4s',
        position: { x: 90, y: 65 }
    }
])

// Optional: Randomize positions on mount for variety
onMounted(() => {
    // Add slight random variation to positions
    techLogos.value.forEach(logo => {
        const variation = 3 // Max percentage variation
        logo.position.x += (Math.random() * variation * 2 - variation)
        logo.position.y += (Math.random() * variation * 2 - variation)
    })
})
</script>

<style scoped>
.text-gradient {
    background: linear-gradient(135deg, #5B21B6 0%, #3B82F6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.tech-feature {
    @apply flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 border border-gray-100 hover:border-purple-200 transition-all duration-300;
}

.feature-icon {
    @apply text-2xl;
}

/* Tech Logo Styling */
.tech-logo {
    width: 60px;
    height: 60px;
    transform-origin: center;
    z-index: 1;
}

@media (min-width: 768px) {
    .tech-logo {
        width: 70px;
        height: 70px;
    }
}

@media (min-width: 1024px) {
    .tech-logo {
        width: 80px;
        height: 80px;
    }
}

.tech-logo:hover {
    transform: scale(1.15) !important;
    z-index: 10;
    filter: drop-shadow(0 10px 20px rgba(91, 33, 182, 0.2));
}

.tech-logo:hover img {
    filter: grayscale(0);
}

/* Glow Effect */
.logo-glow {
    @apply absolute inset-0 rounded-full opacity-0 transition-opacity duration-300;
    background: radial-gradient(circle at center, rgba(91, 33, 182, 0.1) 0%, transparent 70%);
}

.tech-logo:hover .logo-glow {
    opacity: 1;
}

/* Bounce Animations */
@keyframes bounceLeft {

    0%,
    100% {
        transform: translateY(0) rotate(-2deg);
    }

    50% {
        transform: translateY(-15px) rotate(2deg);
    }
}

@keyframes bounceRight {

    0%,
    100% {
        transform: translateY(0) rotate(2deg);
    }

    50% {
        transform: translateY(-15px) rotate(-2deg);
    }
}

.bounce-left {
    animation: bounceLeft 4s ease-in-out infinite;
}

.bounce-right {
    animation: bounceRight 4s ease-in-out infinite;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .tech-logo {
        width: 50px;
        height: 50px;
    }

    @keyframes bounceLeft {

        0%,
        100% {
            transform: translateY(0) rotate(-1deg);
        }

        50% {
            transform: translateY(-10px) rotate(1deg);
        }
    }

    @keyframes bounceRight {

        0%,
        100% {
            transform: translateY(0) rotate(1deg);
        }

        50% {
            transform: translateY(-10px) rotate(-1deg);
        }
    }
}

/* Mobile specific */
@media (max-width: 640px) {
    .tech-logo {
        width: 45px;
        height: 45px;
    }

    .tech-feature {
        @apply p-3;
    }
}
</style>