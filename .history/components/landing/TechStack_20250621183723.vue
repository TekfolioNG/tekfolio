<template>
    <section class="py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
        <div class="container mx-auto px-6 max-w-7xl">
            <!-- Main Content - Side by Side Layout -->
            <div class="grid lg:grid-cols-4 gap-16 items-start mb-16">

                <!-- Left Column - Header Text (1/4) -->
                <div class="lg:col-span-1 lg:flex lg:flex-col lg:justify-center lg:py-8">
                    <div class="flex items-start gap-3 mb-6">
                        <div class="p-2 bg-emerald-500 rounded-lg flex-shrink-0">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                            Quality & Security, Certified
                        </h2>
                    </div>
                    <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        We use modern, intuitive technologies to build software that's secure, scalable, and
                        future-ready.
                    </p>
                </div>

                <!-- Right Column - Technology Grid (3/4) -->
                <div class="lg:col-span-3">
                    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-8">
                        <div v-for="tech in allTechs" :key="tech.name"
                            class="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1">
                            <div class="w-20 h-20 mb-4 flex items-center justify-center">
                                <img :src="tech.image" :alt="tech.name"
                                    class="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                    loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Certifications Section -->
            <div
                class="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <div class="flex items-center justify-center mb-8">
                    <div class="p-3 bg-blue-500 rounded-xl mr-4">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Professional Certifications</h3>
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                    <div
                        class="flex items-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
                        <div
                            class="w-20 h-20 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mr-6 shadow-md">
                            <img src="/img/googlecloud.png" alt="Google Cloud" class="w-16 h-16 object-contain" />
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Google Cloud Computing
                            </h4>
                            <p class="text-gray-600 dark:text-gray-300">Professional Certificate</p>
                        </div>
                    </div>

                    <div
                        class="flex items-center p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl border border-red-100 dark:border-red-800">
                        <div
                            class="w-20 h-20 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mr-6 shadow-md">
                            <img src="/img/googlecyber.png" alt="Google Cybersecurity"
                                class="w-16 h-16 object-contain" />
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Google Cloud
                                Cybersecurity</h4>
                            <p class="text-gray-600 dark:text-gray-300">Professional Certificate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';

// All technologies with their image paths
const allTechs = computed(() => [
    { name: 'Nuxt.js', image: '/img/nuxtjs.png' },
    { name: 'Next.js', image: '/img/nextjs.png' },
    { name: 'React', image: '/img/reactjs.png' },
    { name: 'Flutter', image: '/img/flutter.png' },
    { name: 'Vue.js', image: '/img/vuejs.png' },
    { name: 'JavaScript', image: '/img/javascript.png' },
    { name: 'TypeScript', image: '/img/typescript.png' },
    { name: 'Node.js', image: '/img/nodejs.png' },
    { name: 'HTML', image: '/img/html.png' },
    { name: 'CSS', image: '/img/css.png' },
    { name: 'Tailwind', image: '/img/tailwind.png' },
    { name: 'Svelte', image: '/img/svelte.png' },
    { name: 'Jamstack', image: '/img/jamstack.png' },
    { name: 'Python', image: '/img/python.png' },
    { name: 'Go', image: '/img/go.png' },
    { name: 'R', image: '/img/R-logo.png' },
    { name: 'SQL', image: '/img/sql.png' },
    { name: 'PostgreSQL', image: '/img/postgre.png' },
    { name: 'MongoDB', image: '/img/mongodb.png' },
    { name: 'GraphQL', image: '/img/graphql.png' },
    { name: 'Firebase', image: '/img/firebase.png' },
    { name: 'Supabase', image: '/img/supabase.png' },
    { name: 'Google Cloud', image: '/img/googlecloud.png' },
    { name: 'AWS', image: '/img/aws.png' }
])
</script>