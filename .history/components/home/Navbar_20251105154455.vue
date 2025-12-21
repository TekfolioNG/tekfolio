<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-200/60 transition-all duration-300"
    :class="{ '-translate-y-full': !navVisible }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-18 lg:h-24">
        <!-- Logo and Company Name -->
        <div class="flex-shrink-0 flex items-center">
          <div class="flex items-center space-x-3">
            <!-- Logo section -->
            <NuxtLink to="/" class="inline-block">
              <img src="/assets/img/elevation-logo2.png" alt="Syntanium Energy Logo"
                class="h-10 md:h-12 lg:h-14 drop-shadow-lg" />
            </NuxtLink>
          </div>
        </div>

        <!-- Desktop Navigation - Centered -->
        <div class="hidden lg:flex lg:items-center lg:justify-center lg:flex-1 lg:space-x-6">
          <!-- Who We Are -->
          <NuxtLink to="/about-us"
            class="text-base text-white hover:text-[#B0E0E6] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#B0E0E6] pb-1"
            :class="{ 'text-[#B0E0E6] border-[#B0E0E6]': $route.path === '/about-us' }">
            About Us
          </NuxtLink>

          <!-- Consulting -->
          <NuxtLink to="/consulting"
            class="text-base text-white hover:text-[#B0E0E6] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#B0E0E6] pb-1"
            :class="{ 'text-[#B0E0E6] border-[#B0E0E6]': $route.path === '/consulting' }">
            Business Solutions
          </NuxtLink>

          <!-- Advisory -->
          <NuxtLink to="/advisory"
            class="text-base text-white hover:text-[#B0E0E6] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#B0E0E6] pb-1"
            :class="{ 'text-[#B0E0E6] border-[#B0E0E6]': $route.path === '/advisory' }">
            Employee Productivity Training
          </NuxtLink>

          <!-- Training -->
          <NuxtLink to="/training"
            class="text-base text-white hover:text-[#B0E0E6] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#B0E0E6] pb-1"
            :class="{ 'text-[#B0E0E6] border-[#B0E0E6]': $route.path === '/training' }">
            Ghostwriting
          </NuxtLink>

          <!-- Business Development -->
          <NuxtLink to="/business-development"
            class="text-base text-white hover:text-[#B0E0E6] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#B0E0E6] pb-1"
            :class="{ 'text-[#B0E0E6] border-[#B0E0E6]': $route.path === '/business-development' }">
            Publishing
          </NuxtLink>
        </div>




        <!-- Right Side - Contact Us -->
        <div class="flex items-center space-x-4 lg:space-x-6 ml-6 lg:ml-10">
          <!-- Contact Us - Desktop Only -->
          <NuxtLink to="/contact"
            class="hidden lg:inline-flex items-center px-5 py-2.5 bg-[#B0E0E6] hover:bg-[#00B8E6] hover:shadow-lg hover:scale-105 text-gray-900 font-medium rounded-lg transition-all duration-200">
            Book A Clarity Session
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-lg text-white hover:bg-gray-800/80 hover:text-[#B0E0E6] transition-colors duration-200"
            aria-label="Toggle mobile menu">
            <Icon v-if="!mobileMenuOpen" name="lucide:menu" class="w-6 h-6" />
            <Icon v-else name="lucide:x" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="mobileMenuOpen"
      class="lg:hidden absolute right-0 bg-gray-900/95 w-2/3 h-screen backdrop-blur-md border-t border-gray-200/60 z-10">
      <div class="px-4 py-6 space-y-6">
        <!-- Mobile About Us -->
        <NuxtLink to="/about-us" class="block font-medium text-white hover:text-[#B0E0E6] py-2 transition-colors"
          :class="{ 'text-[#B0E0E6] underline': $route.path === '/about-us' }" @click="mobileMenuOpen = false">
          ABOUT US
        </NuxtLink>

        <!-- Mobile Consulting -->
        <NuxtLink to="/consulting" class="block font-medium text-white hover:text-[#B0E0E6] py-2 transition-colors"
          :class="{ 'text-[#B0E0E6] underline': $route.path === '/consulting' }" @click="mobileMenuOpen = false">
          CONSULTING
        </NuxtLink>

        <!-- Mobile Advisory -->
        <NuxtLink to="/advisory" class="block font-medium text-white hover:text-[#B0E0E6] py-2 transition-colors"
          :class="{ 'text-[#B0E0E6] underline': $route.path === '/advisory' }" @click="mobileMenuOpen = false">
          ADVISORY
        </NuxtLink>

        <!-- Mobile Training -->
        <NuxtLink to="/training" class="block font-medium text-white hover:text-[#B0E0E6] py-2 transition-colors"
          :class="{ 'text-[#B0E0E6] underline': $route.path === '/training' }" @click="mobileMenuOpen = false">
          TRAINING
        </NuxtLink>

        <!-- Mobile Business Development -->
        <NuxtLink to="/business-development"
          class="block font-medium text-white hover:text-[#B0E0E6] py-2 transition-colors"
          :class="{ 'text-[#B0E0E6] underline': $route.path === '/business-development' }"
          @click="mobileMenuOpen = false">
          BUSINESS DEVELOPMENT
        </NuxtLink>

        <!-- Mobile Monitoring & Evaluation -->
        <NuxtLink to="/monitoring-evaluation"
          class="block font-medium text-white hover:text-[#B0E0E6] py-2 transition-colors"
          :class="{ 'text-[#B0E0E6] underline': $route.path === '/monitoring-evaluation' }"
          @click="mobileMenuOpen = false">
          EVALUATION
        </NuxtLink>

        <!-- Mobile Program & Events -->
        <NuxtLink to="/programs-event" class="block font-medium text-white hover:text-[#B0E0E6] py-2 transition-colors"
          :class="{ 'text-[#B0E0E6] underline': $route.path === '/program-sevent' }" @click="mobileMenuOpen = false">
          PROGRAMS
        </NuxtLink>


        <!-- Mobile Contact Us -->
        <NuxtLink to="/contact"
          class="block w-full text-center px-4 py-3 bg-[#B0E0E6] hover:bg-[#00B8E6] hover:shadow-lg hover:scale-105 text-gray-900 font-medium rounded-lg transition-all duration-200"
          @click="mobileMenuOpen = false">
          Contact Us
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

// Reactive state
const mobileMenuOpen = ref(false)
const navVisible = ref(true)
const lastScrollY = ref(0)

// Navigation visibility on scroll
const handleScroll = () => {
  const currentScrollY = window.scrollY

  if (currentScrollY < 100) {
    // Always show navbar when near top
    navVisible.value = true
  } else if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    // Hide navbar when scrolling down
    navVisible.value = false
    // Close mobile menu when hiding
    mobileMenuOpen.value = false
  } else if (currentScrollY < lastScrollY.value) {
    // Show navbar when scrolling up
    navVisible.value = true
  }

  lastScrollY.value = currentScrollY
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

onMounted(() => {
  // Add scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true })
  lastScrollY.value = window.scrollY
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>