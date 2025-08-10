<template>
    <section class="py-20 bg-gray-100 dark:from-gray-900 dark:to-slate-800">
        <div class="container mx-auto px-16 max-w-7xl">
            <!-- Main Content - Side by Side Layout -->
            <div class="grid lg:grid-cols-4 gap-16 items-start mb-16">

                <!-- Left Column - Header Text (1/4) -->
                <div class="relative">
                    <h3 class="text-gray-900 text-sm md:text-base font-medium uppercase tracking-wider mb-3">
                        Plus we're...
                    </h3>

                    <div class="relative inline-block">
                        <!-- Stacked box effect -->
                        <div
                            class="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 transform -skew-y-3 -z-10">
                        </div>
                        <div
                            class="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 transform -skew-y-2 -z-10 opacity-80">
                        </div>
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 transform -skew-y-1 -z-10 opacity-60">
                        </div>

                        <!-- Main heading -->
                        <h2
                            class="relative text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 barlow-condensed px-4 py-2">
                            Quality & Security Certified
                        </h2>
                    </div>
                </div>

                <!-- Right Column - Technology Grid (3/4) -->
                <div class="lg:col-span-3">
                    <div
                        class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-12 lg:gap-4 xl:gap-3">
                        <div v-for="tech in allTechs" :key="tech.name"
                            class="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1">
                            <div :class="[
                                'flex items-center justify-center',
                                isGoogleCert(tech.image) ? 'w-20 h-28' : 'w-20 h-20'
                            ]">
                                <img :src="tech.image" :alt="tech.name"
                                    class="w-full h-full object-contain group-hover:grayscale transition-all duration-300"
                                    loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';

// Function to check if the image is a Google certificate
const isGoogleCert = (imagePath) => {
    return imagePath === '/img/googlecloud.png' || imagePath === '/img/googlecyber.png';
};

// All technologies with their image paths
const allTechs = computed(() => [
    { name: 'Nuxt.js', image: '/img/nuxtjs.png' },
    { name: 'Next.js', image: '/img/nextjs.png' },
    { name: 'Angular', image: '/img/angular.png' },
    { name: 'React', image: '/img/reactjs.png' },
    { name: 'Flutter', image: '/img/flutter.png' },
    { name: 'Vue.js', image: '/img/vuejs.png' },
    { name: 'JavaScript', image: '/img/javascript.png' },
    { name: 'TypeScriptLogo', image: '/img/typescriptlogo.png' },
    { name: 'Node.js', image: '/img/nodejs.png' },
    { name: 'HTML', image: '/img/html.png' },
    { name: 'CSS', image: '/img/css.png' },
    { name: 'Tailwind', image: '/img/tailwind.png' },
    { name: 'Svelte', image: '/img/svelte.png' },
    { name: 'Jamstack', image: '/img/jamstack.png' },
    { name: 'Python', image: '/img/python.png' },
    { name: 'Go-Logo', image: '/img/go-logo.png' },
    { name: 'R', image: '/img/R-logo.png' },
    { name: 'SQL', image: '/img/sql.png' },
    { name: 'PostgreSQL', image: '/img/postgre.png' },
    { name: 'MongoDB', image: '/img/mongodb.png' },
    { name: 'GraphQL', image: '/img/graphql.png' },
    { name: 'Firebase', image: '/img/firebase.png' },
    { name: 'Supabase', image: '/img/supabase.png' },
    { name: 'AWS', image: '/img/aws.png' },
    { name: 'Google Cloud', image: '/img/googlecloud.png' },
    { name: 'Google Cyber', image: '/img/googlecyber.png' }
])
</script>

<style scoped>
/* Import Barlow Condensed font */
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');

.barlow-condensed {
    font-family: 'Barlow Condensed', sans-serif;
}
</style>