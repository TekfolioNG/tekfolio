<template>
    <section class="py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
        <div class="container mx-auto px-6 max-w-7xl">
            <!-- Main Content - Side by Side Layout -->
            <div class="grid lg:grid-cols-4 gap-16 items-start mb-16">

                <!-- Left Column - Header Text (1/4) -->
                <div class="lg:col-span-1">
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
                    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6">
                        <div v-for="tech in allTechs" :key="tech.name"
                            class="group flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                            <div class="w-12 h-12 mb-3 flex items-center justify-center">
                                <img :src="tech.image" :alt="tech.name"
                                    class="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                                    loading="lazy" />
                            </div>
                            <span
                                class="text-xs font-medium text-gray-600 dark:text-gray-400 text-center group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                                {{ tech.name }}
                            </span>
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
                            class="w-16 h-16 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mr-6 shadow-md">
                            <svg class="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
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
                            class="w-16 h-16 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mr-6 shadow-md">
                            <svg class="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
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
    { name: 'React', image: '/img/react.png' },
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
    { name: 'SQL', image: '/img/sql.png' },
    { name: 'PostgreSQL', image: '/img/postgre.png' },
    { name: 'MongoDB', image: '/img/mongodb.png' },
    { name: 'GraphQL', image: '/img/graphql.png' },
    { name: 'Firebase', image: '/img/firebase.png' },
    { name: 'Supabase', image: '/img/supabase.png' }
])
</script>