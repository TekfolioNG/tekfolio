<template>
    <section class="py-16 md:py-24 bg-white dark:bg-gray-900 w-full transition-colors duration-300">
        <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-12 items-center">
                <!-- Text Content (1/4 width on desktop) -->
                <div class="lg:w-1/4">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Quality & Security, Certified
                    </h2>
                    <div class="w-24 h-1 bg-[#01348F] mb-6"></div>
                    <p class="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                        We use modern, intuitive technologies to build software that's secure, scalable, and
                        future-ready.
                    </p>
                </div>

                <!-- Tech Stack Grid (3/4 width on desktop) -->
                <div class="lg:w-3/4 w-full">
                    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                        <!-- Tech Items -->
                        <div v-for="tech in technologies" :key="tech.name" class="tech-item">
                            <img :src="`/img/${tech.image}`" :alt="tech.name"
                                class="tech-logo grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                                loading="lazy" />
                            <span class="tech-name">{{ tech.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const technologies = [
    { name: 'Nuxt', image: 'nuxtjs.png' },
    { name: 'Next', image: 'nextjs.png' },
    { name: 'React', image: 'react.png' },
    { name: 'Flutter', image: 'flutter.png' },
    { name: 'Vue', image: 'vuejs.png' },
    { name: 'JavaScript', image: 'javascript.png' },
    { name: 'TypeScript', image: 'typescript.png' },
    { name: 'Node', image: 'nodejs.png' },
    { name: 'HTML', image: 'html.png' },
    { name: 'CSS', image: 'css.png' },
    { name: 'Tailwind', image: 'tailwind.png' },
    { name: 'Svelte', image: 'svelte.png' },
    { name: 'JAMstack', image: 'jamstack.png' },
    { name: 'Python', image: 'python.png' },
    { name: 'Go', image: 'go.png' },
    { name: 'SQL', image: 'sql.png' },
    { name: 'PostgreSQL', image: 'postgre.png' },
    { name: 'MongoDB', image: 'mongodb.png' },
    { name: 'GraphQL', image: 'graphql.png' },
    { name: 'Firebase', image: 'firebase.png' },
    { name: 'Supabase', image: 'supabase.png' }
]
</script>

<style scoped>
/* Tech Item Styles */
.tech-item {
    @apply flex flex-col items-center p-3 sm:p-4;
}

.tech-logo {
    @apply w-10 h-10 sm:w-12 sm:h-12 mb-2 object-contain;
    filter: contrast(0.8);
}

.dark .tech-logo {
    filter: brightness(0) invert(1) contrast(0.8) opacity(0.8);
}

.tech-name {
    @apply text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300;
    @apply transition-colors duration-300;
}

/* Hover Effects */
.tech-item:hover .tech-name {
    @apply text-[#01348F] dark:text-blue-400;
}

.tech-item:hover .tech-logo {
    @apply grayscale-0 opacity-100;
    filter: none;
}

.dark .tech-item:hover .tech-logo {
    filter: brightness(0) invert(1);
}

/* Responsive Adjustments */
@media (max-width: 640px) {
    .tech-logo {
        @apply w-8 h-8;
    }

    .tech-name {
        @apply text-[10px];
    }
}
</style>