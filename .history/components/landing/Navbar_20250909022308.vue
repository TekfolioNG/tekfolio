<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-secondary-200 dark:border-secondary-700 transition-all duration-300"
    :class="{ '-translate-y-full': !navVisible }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo and Company Name -->
        <div class="flex-shrink-0 flex items-center">
          <div class="flex items-center space-x-3">
            <!-- Logo section -->
            <NuxtLink to="/" class="inline-block">
              <img src="/assets/img/bot-logo.png" alt="Syntanium Energy Logo" class="h-12 md:h-14 drop-shadow-lg" />
            </NuxtLink>
          </div>
        </div>

        <!-- Desktop Navigation - Centered -->
        <div class="hidden lg:flex lg:items-center lg:justify-center lg:flex-1 lg:space-x-8">
          <!-- Who We Are - Simple Link -->
          <NuxtLink to="/about"
            class="text-secondary-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 relative"
            :class="{ 'text-primary-600 dark:text-primary-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-600 dark:after:bg-primary-400': $route.path === '/about' }">
            Who We Are
          </NuxtLink>

          <!-- Solutions & Expertise -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 text-secondary-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 relative"
              :class="{ 'text-primary-600 dark:text-primary-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-600 dark:after:bg-primary-400': isActiveSection('solutions') }"
              @click="toggleDropdown('solutions')">
              <span>Solutions & Expertise</span>
              <ChevronDownIcon class="w-5 h-5 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === 'solutions' }" />
            </button>
            <div v-show="activeDropdown === 'solutions'"
              class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700 py-4 z-50">
              <div class="grid grid-cols-2 gap-2 px-4">
                <!-- Engineering -->
                <NuxtLink to="/solutions/engineering"
                  class="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group/item">
                  <WrenchScrewdriverIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <div>
                    <h4
                      class="font-semibold text-primary-600 dark:text-primary-400 group-hover/item:text-primary-700 dark:group-hover/item:text-primary-300">
                      Engineering</h4>
                    <p class="text-xs text-secondary-600 dark:text-secondary-400">Equipment & Project Management</p>
                  </div>
                </NuxtLink>
                <!-- Construction -->
                <NuxtLink to="/solutions/construction"
                  class="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group/item">
                  <BuildingOffice2Icon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <div>
                    <h4
                      class="font-semibold text-primary-600 dark:text-primary-400 group-hover/item:text-primary-700 dark:group-hover/item:text-primary-300">
                      Construction</h4>
                    <p class="text-xs text-secondary-600 dark:text-secondary-400">Turnkey & Industrial Solutions</p>
                  </div>
                </NuxtLink>
                <!-- Maintenance -->
                <NuxtLink to="/solutions/maintenance"
                  class="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group/item">
                  <WrenchIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <div>
                    <h4
                      class="font-semibold text-primary-600 dark:text-primary-400 group-hover/item:text-primary-700 dark:group-hover/item:text-primary-300">
                      Maintenance</h4>
                    <p class="text-xs text-secondary-600 dark:text-secondary-400">Asset Integrity & Services</p>
                  </div>
                </NuxtLink>
                <!-- Oil & Gas -->
                <NuxtLink to="/solutions/oil-gas"
                  class="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group/item">
                  <FireIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <div>
                    <h4
                      class="font-semibold text-primary-600 dark:text-primary-400 group-hover/item:text-primary-700 dark:group-hover/item:text-primary-300">
                      Oil & Gas</h4>
                    <p class="text-xs text-secondary-600 dark:text-secondary-400">Petrochemical & Marine Operations</p>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Our Commitment -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 text-secondary-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 relative"
              :class="{ 'text-primary-600 dark:text-primary-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-600 dark:after:bg-primary-400': isActiveSection('commitment') }"
              @click="toggleDropdown('commitment')">
              <span>Our Commitment</span>
              <ChevronDownIcon class="w-5 h-5 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === 'commitment' }" />
            </button>
            <div v-show="activeDropdown === 'commitment'"
              class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700 py-4 z-50">
              <div class="grid grid-cols-2 gap-2 px-4">
                <!-- Safety -->
                <NuxtLink to="/commitment/safety"
                  class="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group/item">
                  <ShieldCheckIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <div>
                    <h4
                      class="font-semibold text-primary-600 dark:text-primary-400 group-hover/item:text-primary-700 dark:group-hover/item:text-primary-300"
                      :class="{ 'underline': $route.path === '/commitment/safety' }">
                      Safety</h4>
                    <p class="text-xs text-secondary-600 dark:text-secondary-400">Zero Harm & Risk Management</p>
                  </div>
                </NuxtLink>
                <!-- Quality -->
                <NuxtLink to="/commitment/quality"
                  class="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group/item">
                  <StarIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <div>
                    <h4
                      class="font-semibold text-primary-600 dark:text-primary-400 group-hover/item:text-primary-700 dark:group-hover/item:text-primary-300"
                      :class="{ 'underline': $route.path === '/commitment/quality' }">
                      Quality</h4>
                    <p class="text-xs text-secondary-600 dark:text-secondary-400">Excellence & Standards</p>
                  </div>
                </NuxtLink>
                <!-- CSR -->
                <NuxtLink to="/commitment/csr"
                  class="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group/item">
                  <HeartIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <div>
                    <h4
                      class="font-semibold text-primary-600 dark:text-primary-400 group-hover/item:text-primary-700 dark:group-hover/item:text-primary-300"
                      :class="{ 'underline': $route.path === '/commitment/csr' }">
                      CSR Initiative</h4>
                    <p class="text-xs text-secondary-600 dark:text-secondary-400">Community Impact & Responsibility</p>
                  </div>
                </NuxtLink>
                <!-- Sustainability -->
                <NuxtLink to="/commitment/sustainability"
                  class="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group/item">
                  <GlobeAltIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <div>
                    <h4
                      class="font-semibold text-primary-600 dark:text-primary-400 group-hover/item:text-primary-700 dark:group-hover/item:text-primary-300"
                      :class="{ 'underline': $route.path === '/commitment/sustainability' }">
                      Sustainability</h4>
                    <p class="text-xs text-secondary-600 dark:text-secondary-400">Environmental Stewardship</p>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Careers -->
          <NuxtLink to="/careers"
            class="text-secondary-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 relative"
            :class="{ 'text-primary-600 dark:text-primary-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-600 dark:after:bg-primary-400': $route.path === '/careers' }">
            Careers
          </NuxtLink>
        </div>

        <!-- Right Side - Contact Us and Controls -->
        <div class="flex items-center space-x-4">
          <!-- Contact Us - Desktop Only -->
          <NuxtLink to="/contact"
            class="hidden lg:inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 hover:shadow-lg hover:scale-105 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-200">
            Contact Us
          </NuxtLink>

          <!-- Dark Mode Toggle -->
          <div class="relative">
            <button @click="toggleDarkMode"
              class="flex items-center p-1 w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-inner"
              :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
              <div
                class="flex items-center justify-center w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-transform duration-300"
                :class="{ 'translate-x-8': isDark }">
                <SunIcon v-if="!isDark" class="w-4 h-4 text-yellow-500" />
                <MoonIcon v-else class="w-4 h-4 text-blue-400" />
              </div>
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-lg text-secondary-700 dark:text-white hover:bg-primary-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            aria-label="Toggle mobile menu">
            <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6" />
            <XMarkIcon v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="mobileMenuOpen"
      class="lg:hidden bg-white dark:bg-gray-900 border-t border-secondary-200 dark:border-secondary-800">
      <div class="px-4 py-6 space-y-6">
        <!-- Mobile Who We Are - Simple Link -->
        <NuxtLink to="/about"
          class="block font-medium text-secondary-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 py-2 transition-colors"
          :class="{ 'text-primary-600 dark:text-primary-400 underline': $route.path === '/about' }"
          @click="mobileMenuOpen = false">
          Who We Are
        </NuxtLink>

        <!-- Mobile Solutions & Expertise -->
        <div>
          <button @click="toggleMobileDropdown('solutions')"
            class="w-full flex items-center justify-between text-left font-medium text-secondary-900 dark:text-white py-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            <span>Solutions & Expertise</span>
            <ChevronDownIcon class="w-5 h-5 transition-transform duration-200"
              :class="{ 'rotate-180': activeMobileDropdown === 'solutions' }" />
          </button>
          <div v-show="activeMobileDropdown === 'solutions'" class="mt-3 ml-4 space-y-4">
            <!-- Engineering -->
            <NuxtLink to="/solutions/engineering" class="flex items-center space-x-3 py-2"
              @click="mobileMenuOpen = false">
              <WrenchScrewdriverIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <div>
                <h5 class="font-semibold text-primary-600 dark:text-primary-400">Engineering</h5>
                <p class="text-sm text-secondary-600 dark:text-secondary-400">Equipment & Project Management</p>
              </div>
            </NuxtLink>
            <!-- Construction -->
            <NuxtLink to="/solutions/construction" class="flex items-center space-x-3 py-2"
              @click="mobileMenuOpen = false">
              <BuildingOffice2Icon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <div>
                <h5 class="font-semibold text-primary-600 dark:text-primary-400">Construction</h5>
                <p class="text-sm text-secondary-600 dark:text-secondary-400">Turnkey & Industrial Solutions</p>
              </div>
            </NuxtLink>
            <!-- Maintenance -->
            <NuxtLink to="/solutions/maintenance" class="flex items-center space-x-3 py-2"
              @click="mobileMenuOpen = false">
              <WrenchIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <div>
                <h5 class="font-semibold text-primary-600 dark:text-primary-400">Maintenance</h5>
                <p class="text-sm text-secondary-600 dark:text-secondary-400">Asset Integrity & Services</p>
              </div>
            </NuxtLink>
            <!-- Oil & Gas -->
            <NuxtLink to="/solutions/oil-gas" class="flex items-center space-x-3 py-2" @click="mobileMenuOpen = false">
              <FireIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <div>
                <h5 class="font-semibold text-primary-600 dark:text-primary-400">Oil & Gas</h5>
                <p class="text-sm text-secondary-600 dark:text-secondary-400">Petrochemical & Marine Operations</p>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile Our Commitment -->
        <div>
          <button @click="toggleMobileDropdown('commitment')"
            class="w-full flex items-center justify-between text-left font-medium text-secondary-900 dark:text-white py-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            <span>Our Commitment</span>
            <ChevronDownIcon class="w-5 h-5 transition-transform duration-200"
              :class="{ 'rotate-180': activeMobileDropdown === 'commitment' }" />
          </button>
          <div v-show="activeMobileDropdown === 'commitment'" class="mt-3 ml-4 space-y-3">
            <NuxtLink to="/commitment/safety" class="flex items-center space-x-3 py-1" @click="mobileMenuOpen = false">
              <ShieldCheckIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <div>
                <span class="text-primary-600 dark:text-primary-400 font-medium"
                  :class="{ 'underline': $route.path === '/commitment/safety' }">
                  Safety
                </span>
                <p class="text-xs text-secondary-600 dark:text-secondary-400">Zero Harm & Risk Management</p>
              </div>
            </NuxtLink>
            <NuxtLink to="/commitment/quality" class="flex items-center space-x-3 py-1" @click="mobileMenuOpen = false">
              <StarIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <div>
                <span class="text-primary-600 dark:text-primary-400 font-medium"
                  :class="{ 'underline': $route.path === '/commitment/quality' }">
                  Quality
                </span>
                <p class="text-xs text-secondary-600 dark:text-secondary-400">Excellence & Standards</p>
              </div>
            </NuxtLink>
            <NuxtLink to="/commitment/csr" class="flex items-center space-x-3 py-1" @click="mobileMenuOpen = false">
              <HeartIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <div>
                <span class="text-primary-600 dark:text-primary-400 font-medium"
                  :class="{ 'underline': $route.path === '/commitment/csr' }">
                  CSR Initiative
                </span>
                <p class="text-xs text-secondary-600 dark:text-secondary-400">Community Impact & Responsibility</p>
              </div>
            </NuxtLink>
            <NuxtLink to="/commitment/sustainability" class="flex items-center space-x-3 py-1"
              @click="mobileMenuOpen = false">
              <GlobeAltIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <div>
                <span class="text-primary-600 dark:text-primary-400 font-medium"
                  :class="{ 'underline': $route.path === '/commitment/sustainability' }">
                  Sustainability
                </span>
                <p class="text-xs text-secondary-600 dark:text-secondary-400">Environmental Stewardship</p>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile Careers -->
        <NuxtLink to="/careers"
          class="block font-medium text-secondary-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 py-2 transition-colors"
          :class="{ 'text-primary-600 dark:text-primary-400 underline': $route.path === '/careers' }"
          @click="mobileMenuOpen = false">
          Careers
        </NuxtLink>

        <!-- Mobile Contact Us -->
        <NuxtLink to="/contact"
          class="block w-full text-center px-4 py-3 bg-primary-600 hover:bg-primary-700 hover:shadow-lg hover:scale-105 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-200"
          @click="mobileMenuOpen = false">
          Contact Us
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {
  Bars3Icon,
  BuildingOffice2Icon,
  ChevronDownIcon,
  FireIcon,
  GlobeAltIcon,
  HeartIcon,
  MoonIcon,
  ShieldCheckIcon,
  StarIcon,
  SunIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'
import { onMounted, onUnmounted, ref } from 'vue'

// Reactive state
const activeDropdown = ref(null)
const activeMobileDropdown = ref(null)
const mobileMenuOpen = ref(false)
const isDark = ref(false)
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
    // Close any open dropdowns when hiding
    activeDropdown.value = null
    activeMobileDropdown.value = null
    mobileMenuOpen.value = false
  } else if (currentScrollY < lastScrollY.value) {
    // Show navbar when scrolling up
    navVisible.value = true
  }

  lastScrollY.value = currentScrollY
}

// Check if current route matches a section
const isActiveSection = (section) => {
  const route = useRoute()
  switch (section) {
    case 'solutions':
      return route.path.startsWith('/solutions')
    case 'commitment':
      return route.path.startsWith('/commitment')
    default:
      return false
  }
}

// Dark mode functionality
const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('darkMode', 'true')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('darkMode', 'false')
  }
}

// Initialize dark mode from localStorage
onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode')
  if (savedDarkMode === 'true') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else if (savedDarkMode === 'false') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  } else {
    // Default to system preference
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    }
  }

  // Add scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true })
  lastScrollY.value = window.scrollY
})

// Dropdown functionality
const toggleDropdown = (dropdown) => {
  if (activeDropdown.value === dropdown) {
    activeDropdown.value = null
  } else {
    activeDropdown.value = dropdown
  }
}

const toggleMobileDropdown = (dropdown) => {
  if (activeMobileDropdown.value === dropdown) {
    activeMobileDropdown.value = null
  } else {
    activeMobileDropdown.value = dropdown
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) {
    activeMobileDropdown.value = null
  }
}

// Close dropdowns when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative.group') && !event.target.closest('button')) {
    activeDropdown.value = null
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('scroll', handleScroll)
})
</script>