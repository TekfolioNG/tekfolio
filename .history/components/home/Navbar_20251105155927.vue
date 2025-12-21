<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-200/60 transition-all duration-300"
    :class="{ '-translate-y-full': !navVisible }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-18 lg:h-24">
        <!-- Logo and Company Name -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="inline-block">
            <img src="/assets/img/elevation-logo2.png" alt="Syntanium Energy Logo"
              class="h-10 md:h-12 lg:h-14 drop-shadow-lg" />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation - Centered -->
        <div class="hidden lg:flex lg:items-center lg:justify-center lg:flex-1 lg:space-x-8">
          <!-- About Us -->
          <NuxtLink to="/about-us" class="nav-link" :class="{ 'nav-link-active': $route.path === '/about-us' }">
            About Us
          </NuxtLink>

          <!-- Business Advisory Dropdown -->
          <div class="relative group">
            <button class="nav-link flex items-center space-x-1" :class="{ 'nav-link-active': isAdvisoryActive }">
              <span>Business Advisory</span>
              <Icon name="lucide:chevron-down" class="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            <!-- Dropdown Menu -->
            <div
              class="absolute top-full left-0 mt-2 w-64 bg-gray-800/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div class="py-2">
                <NuxtLink to="/business-advisory"
                  class="block px-4 py-3 text-white hover:bg-gray-700/50 transition-colors border-l-4 border-transparent hover:border-[#B0E0E6]"
                  :class="{ 'bg-gray-700/50 border-[#B0E0E6]': $route.path === '/business-advisory' }">
                  Business Advisory
                </NuxtLink>
                <NuxtLink to="/executive-coaching"
                  class="block px-4 py-3 text-white hover:bg-gray-700/50 transition-colors border-l-4 border-transparent hover:border-[#B0E0E6]"
                  :class="{ 'bg-gray-700/50 border-[#B0E0E6]': $route.path === '/executive-coaching' }">
                  Executive Coaching
                </NuxtLink>
                <NuxtLink to="/consultation"
                  class="block px-4 py-3 text-white hover:bg-gray-700/50 transition-colors border-l-4 border-transparent hover:border-[#B0E0E6]"
                  :class="{ 'bg-gray-700/50 border-[#B0E0E6]': $route.path === '/consultation' }">
                  Consultation
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Business Solutions -->
          <NuxtLink to="/consulting" class="nav-link" :class="{ 'nav-link-active': $route.path === '/consulting' }">
            Business Solutions
          </NuxtLink>

          <!-- Employee Productivity Training -->
          <NuxtLink to="/advisory" class="nav-link" :class="{ 'nav-link-active': $route.path === '/advisory' }">
            Employee Productivity Training
          </NuxtLink>

          <!-- Ghostwriting -->
          <NuxtLink to="/training" class="nav-link" :class="{ 'nav-link-active': $route.path === '/training' }">
            Ghostwriting
          </NuxtLink>

          <!-- Publishing -->
          <NuxtLink to="/business-development" class="nav-link"
            :class="{ 'nav-link-active': $route.path === '/business-development' }">
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
      class="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-200/60 z-10">
      <div class="px-4 py-6 space-y-1">
        <!-- Mobile About Us -->
        <NuxtLink to="/about-us" class="mobile-nav-link"
          :class="{ 'mobile-nav-link-active': $route.path === '/about-us' }" @click="closeMobileMenu">
          About Us
        </NuxtLink>

        <!-- Mobile Business Advisory Dropdown -->
        <div class="border-b border-gray-700/50 pb-2">
          <button @click="toggleMobileAdvisory" class="w-full flex justify-between items-center mobile-nav-link">
            <span>Business Advisory</span>
            <Icon name="lucide:chevron-down" class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': mobileAdvisoryOpen }" />
          </button>

          <!-- Mobile Dropdown Content -->
          <div v-show="mobileAdvisoryOpen" class="ml-4 mt-2 space-y-1 border-l-2 border-gray-600/50 pl-4">
            <NuxtLink to="/business-advisory"
              class="block py-2 px-3 text-gray-300 hover:text-[#B0E0E6] hover:bg-gray-800/50 rounded-lg transition-colors"
              :class="{ 'text-[#B0E0E6] bg-gray-800/50': $route.path === '/business-advisory' }"
              @click="closeMobileMenu">
              Business Advisory
            </NuxtLink>
            <NuxtLink to="/executive-coaching"
              class="block py-2 px-3 text-gray-300 hover:text-[#B0E0E6] hover:bg-gray-800/50 rounded-lg transition-colors"
              :class="{ 'text-[#B0E0E6] bg-gray-800/50': $route.path === '/executive-coaching' }"
              @click="closeMobileMenu">
              Executive Coaching
            </NuxtLink>
            <NuxtLink to="/consultation"
              class="block py-2 px-3 text-gray-300 hover:text-[#B0E0E6] hover:bg-gray-800/50 rounded-lg transition-colors"
              :class="{ 'text-[#B0E0E6] bg-gray-800/50': $route.path === '/consultation' }" @click="closeMobileMenu">
              Consultation
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile Business Solutions -->
        <NuxtLink to="/consulting" class="mobile-nav-link"
          :class="{ 'mobile-nav-link-active': $route.path === '/consulting' }" @click="closeMobileMenu">
          Business Solutions
        </NuxtLink>

        <!-- Mobile Employee Productivity Training -->
        <NuxtLink to="/advisory" class="mobile-nav-link"
          :class="{ 'mobile-nav-link-active': $route.path === '/advisory' }" @click="closeMobileMenu">
          Employee Productivity Training
        </NuxtLink>

        <!-- Mobile Ghostwriting -->
        <NuxtLink to="/training" class="mobile-nav-link"
          :class="{ 'mobile-nav-link-active': $route.path === '/training' }" @click="closeMobileMenu">
          Ghostwriting
        </NuxtLink>

        <!-- Mobile Publishing -->
        <NuxtLink to="/business-development" class="mobile-nav-link"
          :class="{ 'mobile-nav-link-active': $route.path === '/business-development' }" @click="closeMobileMenu">
          Publishing
        </NuxtLink>

        <!-- Mobile Contact Us -->
        <NuxtLink to="/contact"
          class="block w-full text-center px-4 py-3 bg-[#B0E0E6] hover:bg-[#00B8E6] text-gray-900 font-medium rounded-lg transition-all duration-200 mt-4"
          @click="closeMobileMenu">
          Book A Clarity Session
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from '#imports'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const route = useRoute()

// Reactive state
const mobileMenuOpen = ref(false)
const mobileAdvisoryOpen = ref(false)
const navVisible = ref(true)
const lastScrollY = ref(0)

// Computed property to check if any advisory route is active
const isAdvisoryActive = computed(() => {
  return ['/business-advisory', '/executive-coaching', '/consultation'].includes(route.path)
})

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
    closeMobileMenu()
  } else if (currentScrollY < lastScrollY.value) {
    // Show navbar when scrolling up
    navVisible.value = true
  }

  lastScrollY.value = currentScrollY
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  // Reset mobile advisory state when closing menu
  if (!mobileMenuOpen.value) {
    mobileAdvisoryOpen.value = false
  }
}

const toggleMobileAdvisory = () => {
  mobileAdvisoryOpen.value = !mobileAdvisoryOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  mobileAdvisoryOpen.value = false
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

<style scoped>
.nav-link {
  @apply text-base text-white hover:text-[#B0E0E6] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#B0E0E6] pb-1;
}

.nav-link-active {
  @apply text-[#B0E0E6] border-[#B0E0E6];
}

.mobile-nav-link {
  @apply block w-full text-left py-3 px-4 font-medium text-white hover:text-[#B0E0E6] transition-colors rounded-lg;
}

.mobile-nav-link-active {
  @apply text-[#B0E0E6] bg-gray-800/50;
}
</style>