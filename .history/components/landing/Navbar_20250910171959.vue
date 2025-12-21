<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-700 transition-all duration-300"
    :class="{ '-translate-y-full': !navVisible }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-24 lg:h-28">
        <!-- Logo and Company Name -->
        <div class="flex-shrink-0 flex items-center">
          <div class="flex items-center space-x-3">
            <!-- Logo section -->
            <NuxtLink to="/" class="inline-block">
              <img src="/assets/img/bot-logo.png" alt="Syntanium Energy Logo"
                class="h-12 md:h-14 lg:h-16 drop-shadow-lg" />
            </NuxtLink>
          </div>
        </div>

        <!-- Desktop Navigation - Centered -->
        <div class="hidden lg:flex lg:items-center lg:justify-center lg:flex-1 lg:space-x-10">
          <!-- Who We Are - Simple Link -->
          <NuxtLink to="/about"
            class="text-gray-700 dark:text-gray-100 hover:text-[#fe4135] dark:hover:text-[#fe4135] font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-[#fe4135] dark:hover:border-[#fe4135] pb-1"
            :class="{ 'text-[#fe4135] dark:text-[#fe4135] border-[#fe4135] dark:border-[#fe4135]': $route.path === '/about' }">
            Who We Are
          </NuxtLink>

          <!-- Solutions & Expertise -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 text-gray-700 dark:text-gray-100 hover:text-[#fe4135] dark:hover:text-[#fe4135] font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-[#fe4135] dark:hover:border-[#fe4135] pb-1"
              :class="{ 'text-[#fe4135] dark:text-[#fe4135] border-[#fe4135] dark:border-[#fe4135]': isActiveSection('solutions') }"
              @click="toggleDropdown('solutions')">
              <span>Solutions & Expertise</span>
              <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === 'solutions' }" />
            </button>
            <div v-show="activeDropdown === 'solutions'"
              class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200/60 dark:border-gray-700 py-4 z-50">
              <div class="grid grid-cols-2 gap-2 px-2">
                <!-- Engineering -->
                <div
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-red-50/80 dark:hover:bg-gray-700/80 transition-colors cursor-pointer group/item">
                  <WrenchScrewdriverIcon class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4
                      class="font-semibold text-[#fe4135] dark:text-[#fe4135] group-hover/item:text-[#dc2626] dark:group-hover/item:text-[#f87171] text-sm">
                      Engineering</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Equipment & Project Management
                    </p>
                  </div>
                </div>
                <!-- Construction -->
                <div
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-red-50/80 dark:hover:bg-gray-700/80 transition-colors cursor-pointer group/item">
                  <BuildingOffice2Icon class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4
                      class="font-semibold text-[#fe4135] dark:text-[#fe4135] group-hover/item:text-[#dc2626] dark:group-hover/item:text-[#f87171] text-sm">
                      Construction</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Turnkey & Industrial Solutions
                    </p>
                  </div>
                </div>
                <!-- Maintenance -->
                <div
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-red-50/80 dark:hover:bg-gray-700/80 transition-colors cursor-pointer group/item">
                  <WrenchIcon class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4
                      class="font-semibold text-[#fe4135] dark:text-[#fe4135] group-hover/item:text-[#dc2626] dark:group-hover/item:text-[#f87171] text-sm">
                      Maintenance</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Asset Integrity & Services</p>
                  </div>
                </div>
                <!-- Oil & Gas -->
                <div
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-red-50/80 dark:hover:bg-gray-700/80 transition-colors cursor-pointer group/item">
                  <FireIcon class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4
                      class="font-semibold text-[#fe4135] dark:text-[#fe4135] group-hover/item:text-[#dc2626] dark:group-hover/item:text-[#f87171] text-sm">
                      Oil & Gas</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Petrochemical & Marine Operations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Our Commitment -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 text-gray-700 dark:text-gray-100 hover:text-[#fe4135] dark:hover:text-[#fe4135] font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-[#fe4135] dark:hover:border-[#fe4135] pb-1"
              :class="{ 'text-[#fe4135] dark:text-[#fe4135] border-[#fe4135] dark:border-[#fe4135]': isActiveSection('commitment') }"
              @click="toggleDropdown('commitment')">
              <span>Our Commitment</span>
              <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === 'commitment' }" />
            </button>
            <div v-show="activeDropdown === 'commitment'"
              class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200/60 dark:border-gray-700 py-4 z-50">
              <div class="grid grid-cols-2 gap-2 px-2">
                <!-- Safety -->
                <div
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-red-50/80 dark:hover:bg-gray-700/80 transition-colors cursor-pointer group/item">
                  <ShieldCheckIcon class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
                  <NuxtLink to="/commitment/safety" class="min-w-0 flex-1">
                    <h4
                      class="font-semibold text-[#fe4135] dark:text-[#fe4135] group-hover/item:text-[#dc2626] dark:group-hover/item:text-[#f87171] text-sm hover:underline"
                      :class="{ 'underline': $route.path === '/commitment/safety' }">
                      Safety</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Zero Harm & Risk Management</p>
                  </NuxtLink>
                </div>
                <!-- Quality -->
                <div
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-red-50/80 dark:hover:bg-gray-700/80 transition-colors cursor-pointer group/item">
                  <StarIcon class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
                  <NuxtLink to="/commitment/quality" class="min-w-0 flex-1">
                    <h4
                      class="font-semibold text-[#fe4135] dark:text-[#fe4135] group-hover/item:text-[#dc2626] dark:group-hover/item:text-[#f87171] text-sm hover:underline"
                      :class="{ 'underline': $route.path === '/commitment/quality' }">
                      Quality</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Excellence & Standards</p>
                  </NuxtLink>
                </div>
                <!-- CSR -->
                <div
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-red-50/80 dark:hover:bg-gray-700/80 transition-colors cursor-pointer group/item">
                  <HeartIcon class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
                  <NuxtLink to="/commitment/csr" class="min-w-0 flex-1">
                    <h4
                      class="font-semibold text-[#fe4135] dark:text-[#fe4135] group-hover/item:text-[#dc2626] dark:group-hover/item:text-[#f87171] text-sm hover:underline"
                      :class="{ 'underline': $route.path === '/commitment/csr' }">
                      CSR Initiative</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Community Impact & Responsibility
                    </p>
                  </NuxtLink>
                </div>
                <!-- Sustainability -->
                <div
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-red-50/80 dark:hover:bg-gray-700/80 transition-colors cursor-pointer group/item">
                  <GlobeAltIcon class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
                  <NuxtLink to="/commitment/sustainability" class="min-w-0 flex-1">
                    <h4
                      class="font-semibold text-[#fe4135] dark:text-[#fe4135] group-hover/item:text-[#dc2626] dark:group-hover/item:text-[#f87171] text-sm hover:underline"
                      :class="{ 'underline': $route.path === '/commitment/sustainability' }">
                      Sustainability</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Environmental Stewardship</p>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Careers -->
          <NuxtLink to="/careers"
            class="text-gray-700 dark:text-gray-100 hover:text-[#fe4135] dark:hover:text-[#fe4135] font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-[#fe4135] dark:hover:border-[#fe4135] pb-1"
            :class="{ 'text-[#fe4135] dark:text-[#fe4135] border-[#fe4135] dark:border-[#fe4135]': $route.path === '/careers' }">
            Careers
          </NuxtLink>
        </div>

        <!-- Right Side - Contact Us and Controls -->
        <div class="flex items-center space-x-4 lg:space-x-6">
          <!-- Contact Us - Desktop Only -->
          <NuxtLink to="/contact"
            class="hidden lg:inline-flex items-center px-5 py-2.5 bg-[#fe4135] hover:bg-[#dc2626] hover:shadow-lg hover:scale-105 dark:bg-[#fe4135] dark:hover:bg-[#dc2626] text-white font-medium rounded-lg transition-all duration-200">
            Contact Us
          </NuxtLink>

          <ClientOnly v-if="!colorMode?.forced">
            <button @click="isDark = !isDark"
              class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 drop-shadow-sm"
              :class="isDark ? 'bg-[#0078d4]' : 'bg-[#0078d4]'">
              <!-- Toggle Circle with Icon -->
              <span
                class="inline-flex h-4 w-4 items-center justify-center transform rounded-full bg-white transition duration-300 ease-in-out"
                :class="isDark ? 'translate-x-6' : 'translate-x-1'">
                <!-- Sun Icon (visible in light mode) -->
                <svg v-if="!isDark" class="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd" />
                </svg>
                <!-- Moon Icon (visible in dark mode) -->
                <svg v-else class="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </span>
            </button>
            <template #fallback>
              <div class="w-11 h-6" />
            </template>
          </ClientOnly>


          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-100 hover:bg-red-50/80 dark:hover:bg-gray-800/80 hover:text-[#fe4135] dark:hover:text-[#fe4135] transition-colors duration-200"
            aria-label="Toggle mobile menu">
            <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6" />
            <XMarkIcon v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="mobileMenuOpen"
      class="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/60 dark:border-gray-800">
      <div class="px-4 py-6 space-y-6">
        <!-- Mobile Who We Are - Simple Link -->
        <NuxtLink to="/about"
          class="block font-medium text-gray-900 dark:text-gray-100 hover:text-[#fe4135] dark:hover:text-[#fe4135] py-2 transition-colors"
          :class="{ 'text-[#fe4135] dark:text-[#fe4135] underline': $route.path === '/about' }">
          Who We Are
        </NuxtLink>

        <!-- Mobile Solutions & Expertise -->
        <div>
          <button @click="toggleMobileDropdown('solutions')"
            class="w-full flex items-center justify-between text-left font-medium text-gray-900 dark:text-gray-100 py-2 hover:text-[#fe4135] dark:hover:text-[#fe4135] transition-colors">
            <span>Solutions & Expertise</span>
            <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': activeMobileDropdown === 'solutions' }" />
          </button>
          <div v-show="activeMobileDropdown === 'solutions'" class="mt-3 ml-4 space-y-4">
            <!-- Engineering -->
            <div class="flex items-center space-x-3 py-2">
              <WrenchScrewdriverIcon class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#fe4135] dark:text-[#fe4135]">Engineering</h5>
                <p class="text-sm text-gray-600 dark:text-gray-400">Equipment & Project Management</p>
              </div>
            </div>
            <!-- Construction -->
            <div class="flex items-center space-x-3 py-2">
              <BuildingOffice2Icon class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#fe4135] dark:text-[#fe4135]">Construction</h5>
                <p class="text-sm text-gray-600 dark:text-gray-400">Turnkey & Industrial Solutions</p>
              </div>
            </div>
            <!-- Maintenance -->
            <div class="flex items-center space-x-3 py-2">
              <WrenchIcon class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#fe4135] dark:text-[#fe4135]">Maintenance</h5>
                <p class="text-sm text-gray-600 dark:text-gray-400">Asset Integrity & Services</p>
              </div>
            </div>
            <!-- Oil & Gas -->
            <div class="flex items-center space-x-3 py-2">
              <FireIcon class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#fe4135] dark:text-[#fe4135]">Oil & Gas</h5>
                <p class="text-sm text-gray-600 dark:text-gray-400">Petrochemical & Marine Operations</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Our Commitment -->
        <div>
          <button @click="toggleMobileDropdown('commitment')"
            class="w-full flex items-center justify-between text-left font-medium text-gray-900 dark:text-gray-100 py-2 hover:text-[#fe4135] dark:hover:text-[#fe4135] transition-colors">
            <span>Our Commitment</span>
            <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': activeMobileDropdown === 'commitment' }" />
          </button>
          <div v-show="activeMobileDropdown === 'commitment'" class="mt-3 ml-4 space-y-3">
            <div class="flex items-center space-x-3 py-1">
              <ShieldCheckIcon class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
              <div>
                <NuxtLink to="/commitment/safety"
                  class="text-[#fe4135] dark:text-[#fe4135] hover:text-[#dc2626] dark:hover:text-[#f87171] transition-colors font-medium hover:underline"
                  :class="{ 'underline': $route.path === '/commitment/safety' }">
                  Safety
                </NuxtLink>
                <p class="text-xs text-gray-600 dark:text-gray-400">Zero Harm & Risk Management</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 py-1">
              <StarIcon class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
              <div>
                <NuxtLink to="/commitment/quality"
                  class="text-[#fe4135] dark:text-[#fe4135] hover:text-[#dc2626] dark:hover:text-[#f87171] transition-colors font-medium hover:underline"
                  :class="{ 'underline': $route.path === '/commitment/quality' }">
                  Quality
                </NuxtLink>
                <p class="text-xs text-gray-600 dark:text-gray-400">Excellence & Standards</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 py-1">
              <HeartIcon class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
              <div>
                <NuxtLink to="/commitment/csr"
                  class="text-[#fe4135] dark:text-[#fe4135] hover:text-[#dc2626] dark:hover:text-[#f87171] transition-colors font-medium hover:underline"
                  :class="{ 'underline': $route.path === '/commitment/csr' }">
                  CSR Initiative
                </NuxtLink>
                <p class="text-xs text-gray-600 dark:text-gray-400">Community Impact & Responsibility</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 py-1">
              <GlobeAltIcon class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
              <div>
                <NuxtLink to="/commitment/sustainability"
                  class="text-[#fe4135] dark:text-[#fe4135] hover:text-[#dc2626] dark:hover:text-[#f87171] transition-colors font-medium hover:underline"
                  :class="{ 'underline underline-offset-2': $route.path === '/commitment/sustainability' }">
                  Sustainability
                </NuxtLink>
                <p class="text-xs text-gray-600 dark:text-gray-400">Environmental Stewardship</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Careers -->
        <NuxtLink to="/careers"
          class="block font-medium text-gray-900 dark:text-gray-100 hover:text-[#fe4135] dark:hover:text-[#fe4135] py-2 transition-colors"
          :class="{ 'text-[#fe4135] dark:text-[#fe4135] underline': $route.path === '/careers' }">
          Careers
        </NuxtLink>

        <!-- Mobile Contact Us -->
        <NuxtLink to="/contact"
          class="block w-full text-center px-4 py-3 bg-[#fe4135] hover:bg-[#dc2626] hover:shadow-lg hover:scale-105 dark:bg-[#fe4135] dark:hover:bg-[#dc2626] text-white font-medium rounded-lg transition-all duration-200">
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