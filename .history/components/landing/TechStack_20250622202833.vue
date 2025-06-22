<template>
    <section class="py-20 bg-gray-100 dark:from-gray-900 dark:to-slate-800">
        <div class="container mx-auto px-6 max-w-7xl">
            <!-- Main Content - Side by Side Layout -->
            <div class="grid lg:grid-cols-4 gap-16 items-start mb-16">

                <!-- Left Column - Header Text (1/4) -->
                <div class="lg:col-span-1 lg:flex lg:flex-col lg:justify-center lg:py-8">
                    <div class="flex items-start gap-3 mb-6">
                        <h2 class="text-4xl lg:text-5xl font-bold text-[#01348F] dark:text-white leading-tight">
                            Quality & Security Certified
                        </h2>
                    </div>
                    <p class="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                        We use modern, intuitive technologies to build software that's secure, scalable, and
                        future-ready.
                    </p>
                </div>

                <!-- Right Column - Technology Grid (3/4) -->
                <div class="lg:col-span-3">
                    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-8">
                        <div v-for="tech in allTechs" :key="tech.name"
                            class="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1">
                            <div :class="[
                                'flex items-center justify-center',
                                isGoogleCert(tech.image) ? 'w-28 h-28' : 'w-20 h-20'
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
    { name: 'Nuxt.js', image: 'assets/img/nuxtjs.png' },
    { name: 'Next.js', image: 'assets/img/nextjs.png' },
    { name: 'React', image: 'assets/img/reactjs.png' },
    { name: 'Flutter', image: 'assets/img/flutter.png' },
    { name: 'Vue.js', image: 'assets/img/vuejs.png' },
    { name: 'JavaScript', image: 'assets/img/javascript.png' },
    { name: 'TypeScript', image: 'assets/img/typescript.png' },
    { name: 'Node.js', image: 'assets/img/nodejs.png' },
    { name: 'HTML', image: 'assets/img/html.png' },
    { name: 'CSS', image: 'assets/img/css.png' },
    { name: 'Tailwind', image: 'assets/img/tailwind.png' },
    { name: 'Svelte', image: 'assets/img/svelte.png' },
    { name: 'Jamstack', image: 'assets/img/jamstack.png' },
    { name: 'Python', image: 'assets/img/python.png' },
    { name: 'Go', image: 'assets/img/go.png' },
    { name: 'R', image: 'assets/img/R-logo.png' },
    { name: 'SQL', image: 'assets/img/sql.png' },
    { name: 'PostgreSQL', image: 'assets/img/postgre.png' },
    { name: 'MongoDB', image: 'assets/img/mongodb.png' },
    { name: 'GraphQL', image: 'assets/img/graphql.png' },
    { name: 'Firebase', image: 'assets/img/firebase.png' },
    { name: 'Supabase', image: 'assets/img/supabase.png' },
    { name: 'AWS', image: '/img/aws.png' },
    { name: 'Google Cloud', image: 'assets/img/googlecloud.png' },
    { name: 'Google Cyber', image: 'assets/img/googlecyber.png' }

])
</script>