<template>
    <section class="py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
      <div class="container mx-auto px-6 max-w-7xl">
        <!-- Header -->
        <div class="text-center mb-16">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="p-2 bg-emerald-500 rounded-lg">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white">
              Quality & Security, Certified
            </h2>
          </div>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We use modern, intuitive technologies to build software that's secure, scalable, and future-ready.
          </p>
        </div>
  
        <!-- Technology Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 mb-16">
          <!-- Frontend Frameworks -->
          <div v-for="tech in frontendTechs" :key="tech.name" 
               class="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
            <div class="w-12 h-12 mb-4 flex items-center justify-center">
              <component :is="tech.icon" class="w-full h-full" />
            </div>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{{ tech.name }}</span>
          </div>
  
          <!-- Backend & Languages -->
          <div v-for="tech in backendTechs" :key="tech.name" 
               class="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
            <div class="w-12 h-12 mb-4 flex items-center justify-center">
              <component :is="tech.icon" class="w-full h-full" />
            </div>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{{ tech.name }}</span>
          </div>
  
          <!-- Databases -->
          <div v-for="tech in databaseTechs" :key="tech.name" 
               class="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
            <div class="w-12 h-12 mb-4 flex items-center justify-center">
              <component :is="tech.icon" class="w-full h-full" />
            </div>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{{ tech.name }}</span>
          </div>
        </div>
  
        <!-- Certifications -->
        <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
          <div class="flex items-center justify-center mb-8">
            <div class="p-3 bg-blue-500 rounded-xl mr-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Professional Certifications</h3>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="flex items-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
              <div class="w-16 h-16 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mr-6 shadow-md">
                <svg class="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.74-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Google Cloud Computing</h4>
                <p class="text-gray-600 dark:text-gray-300">Professional Certificate</p>
              </div>
            </div>
            
            <div class="flex items-center p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl border border-red-100 dark:border-red-800">
              <div class="w-16 h-16 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mr-6 shadow-md">
                <svg class="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Google Cloud Cybersecurity</h4>
                <p class="text-gray-600 dark:text-gray-300">Professional Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

<script setup>
import { ref } from 'vue'

// Technology data organized by category
const frontendTechs = ref([
    { name: 'Nuxt.js', icon: 'NuxtIcon' },
    { name: 'Vue.js', icon: 'VueIcon' },
    { name: 'Next.js', icon: 'NextIcon' },
    { name: 'Angular', icon: 'AngularIcon' },
    { name: 'Svelte', icon: 'SvelteIcon' },
    { name: 'React', icon: 'ReactIcon' },
    { name: 'Flutter', icon: 'FlutterIcon' },
    { name: 'HTML', icon: 'HtmlIcon' }
])

const backendTechs = ref([
    { name: 'Node.js', icon: 'NodeIcon' },
    { name: 'JavaScript', icon: 'JavaScriptIcon' },
    { name: 'TypeScript', icon: 'TypeScriptIcon' },
    { name: 'Go', icon: 'GoIcon' },
    { name: 'CSS', icon: 'CssIcon' },
    { name: 'GraphQL', icon: 'GraphQLIcon' },
    { name: 'Nitro', icon: 'NitroIcon' },
    { name: 'JSON', icon: 'JsonIcon' }
])

const databaseTechs = ref([
    { name: 'PostgreSQL', icon: 'PostgresIcon' },
    { name: 'MongoDB', icon: 'MongoIcon' },
    { name: 'Firebase', icon: 'FirebaseIcon' },
    { name: 'SQL', icon: 'SqlIcon' }
])
</script>

<!-- Icon Components (you can replace these with actual logo SVGs) -->
<template>
    <!-- Nuxt Icon -->
    <component name="NuxtIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-green-500">
            <path
                d="M12.146 2.263a1 1 0 011.708 0l8.5 14A1 1 0 0121.5 18h-4.764a1 1 0 01-.894-.553L12 9.618l-3.842 7.829A1 1 0 017.264 18H2.5a1 1 0 01-.854-1.737l8.5-14z" />
        </svg>
    </component>

    <!-- Vue Icon -->
    <component name="VueIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-green-400">
            <path d="M12 2L2 7l10 10L22 7l-10-5zM6.5 7.5L12 4l5.5 3.5L12 15L6.5 7.5z" />
        </svg>
    </component>

    <!-- Next Icon -->
    <component name="NextIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-black dark:text-white">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    </component>

    <!-- Angular Icon -->
    <component name="AngularIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-red-600">
            <path d="M12 2L2 7l10 10L22 7l-10-5zM6.5 7.5L12 4l5.5 3.5L12 15L6.5 7.5z" />
        </svg>
    </component>

    <!-- Svelte Icon -->
    <component name="SvelteIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-orange-500">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    </component>

    <!-- React Icon -->
    <component name="ReactIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-blue-400">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    </component>

    <!-- Flutter Icon -->
    <component name="FlutterIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-blue-500">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    </component>

    <!-- HTML Icon -->
    <component name="HtmlIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-orange-600">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    </component>

    <!-- Node Icon -->
    <component name="NodeIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-green-600">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    </component>

    <!-- JavaScript Icon -->
    <component name="JavaScriptIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-yellow-500">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    </component>

    <!-- TypeScript Icon -->
    <component name="TypeScriptIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-blue-600">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    </component>

    <!-- Go Icon -->
    <component name="GoIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-cyan-500">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    </component>

    <!-- CSS Icon -->
    <component name="CssIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-blue-500">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    </component>

    <!-- GraphQL Icon -->
    <component name="GraphQLIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-pink-500">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    </component>

    <!-- Nitro Icon -->
    <component name="NitroIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-purple-500">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    </component>

    <!-- JSON Icon -->
    <component name="JsonIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-gray-600">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    </component>

    <!-- PostgreSQL Icon -->
    <component name="PostgresIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-blue-700">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    </component>

    <!-- MongoDB Icon -->
    <component name="MongoIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-green-500">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    </component>

    <!-- Firebase Icon -->
    <component name="FirebaseIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-orange-500">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    </component>

    <!-- SQL Icon -->
    <component name="SqlIcon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="text-indigo-600">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    </component>
</template>