<template>
  <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-200/20 transition-all duration-300"
    :class="{ '-translate-y-full': !navVisible }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 lg:h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="inline-block rounded-lg px-2 py-1 hover:opacity-80 transition-opacity duration-200">
            <img src="/assets/home/img/tekfolio-full.png" alt="Tekfolio Logo" class="h-6 md:h-8 lg:h-10" />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation - Centered -->
        <div class="hidden lg:flex lg:items-center lg:space-x-1 lg:ml-8 xl:ml-12">
          <!-- Enterprise Web Solutions -->
          <NuxtLink to="/web-solutions"
            class="text-sm xl:text-base text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600 font-semibold transition-all duration-200 px-4 py-2 rounded-lg"
            :class="{ 'text-white bg-gradient-to-r from-purple-700 to-blue-600': route.path === '/web-solutions' }">
            Web Solutions
          </NuxtLink>

          <!-- Mobile App Development -->
          <NuxtLink to="/mobile-apps"
            class="text-sm xl:text-base text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600 font-semibold transition-all duration-200 px-4 py-2 rounded-lg"
            :class="{ 'text-white bg-gradient-to-r from-purple-700 to-blue-600': route.path === '/mobile-apps' }">
            Mobile Apps
          </NuxtLink>

          <!-- Creative Coding -->
          <NuxtLink to="/creative-coding"
            class="text-sm xl:text-base text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600 font-semibold transition-all duration-200 px-4 py-2 rounded-lg"
            :class="{ 'text-white bg-gradient-to-r from-purple-700 to-blue-600': route.path === '/creative-coding' }">
            Creative Coding
          </NuxtLink>

          <!-- Cloud & Security -->
          <NuxtLink to="/cloud-security"
            class="text-sm xl:text-base text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600 font-semibold transition-all duration-200 px-4 py-2 rounded-lg"
            :class="{ 'text-white bg-gradient-to-r from-purple-700 to-blue-600': route.path === '/cloud-security' }">
            Cloud & Security
          </NuxtLink>

          <!-- SEO & Performance -->
          <NuxtLink to="/seo-performance"
            class="text-sm xl:text-base text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600 font-semibold transition-all duration-200 px-4 py-2 rounded-lg"
            :class="{ 'text-white bg-gradient-to-r from-purple-700 to-blue-600': route.path === '/seo-performance' }">
            SEO & Performance
          </NuxtLink>

          <!-- Company -->
          <NuxtLink to="/company"
            class="text-sm xl:text-base text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600 font-semibold transition-all duration-200 px-4 py-2 rounded-lg"
            :class="{ 'text-white bg-gradient-to-r from-purple-700 to-blue-600': route.path === '/company' }">
            Company
          </NuxtLink>
        </div>

        <!-- Right Side - Contact Button -->
        <div class="flex items-center space-x-3 lg:space-x-4">
          <!-- Ready to Start - Desktop Only -->
          <NuxtLink to="/contact"
            class="hidden lg:inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-purple-700 to-blue-600 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 text-white font-bold text-sm xl:text-base rounded-lg transition-all duration-200">
            Ready to Start?
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu">
            <Icon v-if="!mobileMenuOpen" name="lucide:menu" class="w-6 h-6" />
            <Icon v-else name="lucide:x" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div v-if="mobileMenuOpen" @click="mobileMenuOpen = false"
        class="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" :style="{ top: navHeight + 'px' }">
      </div>
    </Transition>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="mobileMenuOpen"
        class="lg:hidden fixed right-0 bg-white/98 backdrop-blur-md border-l border-gray-200/60 overflow-y-auto z-50 w-72 max-w-full h-[calc(100vh-64px)]">
        <div class="px-4 py-6 space-y-2">
          <!-- Mobile Web Solutions -->
          <NuxtLink to="/web-solutions"
            class="block font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600 px-4 py-3 rounded-lg transition-all"
            :class="{ 'text-white bg-gradient-to-r from-purple-700 to-blue-600': route.path === '/web-solutions' }"
            @click="closeMobileMenu">
            Enterprise Web Solutions
          </NuxtLink>

          <!-- Mobile Mobile Apps -->
          <NuxtLink to="/mobile-apps"
            class="block font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600 px-4 py-3 rounded-lg transition-all"
            :class="{ 'text-white bg-gradient-to-r from-purple-700 to-blue-600': route.path === '/mobile-apps' }"
            @click="closeMobileMenu">
            Mobile App Development
          </NuxtLink>

          <!-- Mobile Creative Coding -->
          <NuxtLink to="/creative-coding"
            class="block font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600 px-4 py-3 rounded-lg transition-all"
            :class="{ 'text-white bg-gradient-to-r from-purple-700 to-blue-600': route.path === '/creative-coding' }"
            @click="closeMobileMenu">
            Creative Coding & Interactive
          </NuxtLink>

          <!-- Mobile Cloud & Security -->
          <NuxtLink to="/cloud-security"
            class="block font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600 px-4 py-3 rounded-lg transition-all"
            :class="{ 'text-white bg-gradient-to-r from-purple-700 to-blue-600': route.path === '/cloud-security' }"
            @click="closeMobileMenu">
            Cloud Migration & Security
          </NuxtLink>

          <!-- Mobile SEO & Performance -->
          <NuxtLink to="/seo-performance"
            class="block font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600 px-4 py-3 rounded-lg transition-all"
            :class="{ 'text-white bg-gradient-to-r from-purple-700 to-blue-600': route.path === '/seo-performance' }"
            @click="closeMobileMenu">
            SEO & Performance Optimization
          </NuxtLink>

          <!-- Mobile Company -->
          <NuxtLink to="/company"
            class="block font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600 px-4 py-3 rounded-lg transition-all"
            :class="{ 'text-white bg-gradient-to-r from-purple-700 to-blue-600': route.path === '/company' }"
            @click="closeMobileMenu">
            Company
          </NuxtLink>

          <!-- Mobile Contact Button -->
          <NuxtLink to="/contact"
            class="block w-full text-center mt-6 px-4 py-3 bg-gradient-to-r from-purple-700 to-blue-600 hover:shadow-lg text-white font-bold rounded-lg transition-all duration-200"
            @click="closeMobileMenu">
            Ready to Start?
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
// Import Vue composables
import { onMounted, onUnmounted, ref } from 'vue'

// Use Nuxt composables
const route = useRoute()

// Reactive state
const mobileMenuOpen = ref(false)
const navVisible = ref(true)
const lastScrollY = ref(0)
const navHeight = ref(64) // Default height

// Navigation visibility on scroll
const handleScroll = () => {
  const currentScrollY = window.scrollY

  if (currentScrollY < 100) {
    navVisible.value = true
  } else if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    navVisible.value = false
    mobileMenuOpen.value = false
  } else if (currentScrollY < lastScrollY.value) {
    navVisible.value = true
  }

  lastScrollY.value = currentScrollY
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Calculate nav height dynamically
const updateNavHeight = () => {
  const nav = document.querySelector('nav')
  if (nav) {
    navHeight.value = nav.offsetHeight
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  lastScrollY.value = window.scrollY
  updateNavHeight()

  // Update nav height on resize
  window.addEventListener('resize', updateNavHeight)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateNavHeight)
})
</script>

<style scoped>
/* Custom transitions for mobile menu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>