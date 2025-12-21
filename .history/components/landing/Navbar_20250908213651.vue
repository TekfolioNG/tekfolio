<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo and Company Name -->
        <div class="flex-shrink-0 flex items-center">
          <div class="flex items-center space-x-3">
            <!-- Logo section -->
            <NuxtLink to="/" class="inline-block">
              <img src="/assets/img/bot-logo.png" alt="Bot Integrated Services Logo"
                class="h-10 md:h-12 drop-shadow-lg" />
            </NuxtLink>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:items-center lg:space-x-8">
          <!-- Who We Are -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200"
              @click="toggleDropdown('whoWeAre')">
              <span>Who We Are</span>
              <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === 'whoWeAre' }" />
            </button>
            <div v-show="activeDropdown === 'whoWeAre'"
              class="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
              <NuxtLink to="/about"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary transition-colors">
                About
                Us</NuxtLink>
              <NuxtLink to="/team"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary transition-colors">
                Our
                Team</NuxtLink>
              <NuxtLink to="/history"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary transition-colors">
                Company
                History</NuxtLink>
            </div>
          </div>

          <!-- Solutions & Expertise -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200"
              @click="toggleDropdown('solutions')">
              <span>Solutions & Expertise</span>
              <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === 'solutions' }" />
            </button>
            <div v-show="activeDropdown === 'solutions'"
              class="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-4 z-50">
              <div class="grid grid-cols-2 gap-4 px-4">
                <!-- Engineering Column -->
                <div>
                  <h4 class="font-semibold text-primary mb-2">Engineering</h4>
                  <NuxtLink to="/solutions/equipment-maintenance"
                    class="block py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    Equipment
                    Maintenance</NuxtLink>
                  <NuxtLink to="/solutions/project-management"
                    class="block py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    Project
                    Management</NuxtLink>
                </div>
                <!-- Construction Column -->
                <div>
                  <h4 class="font-semibold text-primary mb-2">Construction</h4>
                  <NuxtLink to="/solutions/turnkey-solutions"
                    class="block py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    Turnkey
                    Solutions</NuxtLink>
                  <NuxtLink to="/solutions/industrial-installations"
                    class="block py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    Industrial
                    Installations</NuxtLink>
                </div>
                <!-- Maintenance Column -->
                <div>
                  <h4 class="font-semibold text-primary mb-2">Maintenance</h4>
                  <NuxtLink to="/solutions/corrosion-management"
                    class="block py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    Corrosion
                    Management</NuxtLink>
                  <NuxtLink to="/solutions/asset-integrity"
                    class="block py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    Asset
                    Integrity</NuxtLink>
                  <NuxtLink to="/solutions/manpower-services"
                    class="block py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    Manpower
                    Services</NuxtLink>
                  <NuxtLink to="/solutions/tank-vessel-cleaning"
                    class="block py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    Tank
                    & Vessel Cleaning</NuxtLink>
                </div>
                <!-- Oil & Gas Column -->
                <div>
                  <h4 class="font-semibold text-primary mb-2">Oil & Gas</h4>
                  <NuxtLink to="/solutions/petrochemical-processing"
                    class="block py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    Petrochemical
                    Processing</NuxtLink>
                  <NuxtLink to="/solutions/downstream-operations"
                    class="block py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    Downstream
                    Operations</NuxtLink>
                  <NuxtLink to="/solutions/marine-operations"
                    class="block py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    Marine
                    Operations</NuxtLink>
                  <NuxtLink to="/solutions/supply-chain"
                    class="block py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    Supply
                    Chain</NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Our Commitment -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200"
              @click="toggleDropdown('commitment')">
              <span>Our Commitment</span>
              <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === 'commitment' }" />
            </button>
            <div v-show="activeDropdown === 'commitment'"
              class="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
              <NuxtLink to="/commitment/safety"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary transition-colors">
                Safety</NuxtLink>
              <NuxtLink to="/commitment/quality"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary transition-colors">
                Quality</NuxtLink>
              <NuxtLink to="/commitment/csr"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary transition-colors">
                CSR
                (Oaktree Initiative)</NuxtLink>
              <NuxtLink to="/commitment/sustainability"
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary transition-colors">
                Sustainability</NuxtLink>
            </div>
          </div>

          <!-- Careers -->
          <NuxtLink to="/careers"
            class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200">
            Careers
          </NuxtLink>

          <!-- Contact Us -->
          <NuxtLink to="/contact"
            class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200">
            Contact Us
          </NuxtLink>
        </div>

        <!-- Dark Mode Toggle and Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <!-- Dark Mode Toggle -->
          <button @click="toggleDarkMode"
            class="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
            <SunIcon v-if="isDark" class="w-5 h-5" />
            <MoonIcon v-else class="w-5 h-5" />
          </button>

          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle mobile menu">
            <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6" />
            <XMarkIcon v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="mobileMenuOpen"
      class="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div class="px-4 py-4 space-y-4">
        <!-- Mobile Who We Are -->
        <div>
          <button @click="toggleMobileDropdown('whoWeAre')"
            class="w-full flex items-center justify-between text-left font-medium text-gray-900 dark:text-white py-2">
            <span>Who We Are</span>
            <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': activeMobileDropdown === 'whoWeAre' }" />
          </button>
          <div v-show="activeMobileDropdown === 'whoWeAre'" class="mt-2 ml-4 space-y-2">
            <NuxtLink to="/about" class="block text-gray-700 dark:text-gray-300 py-1">About Us</NuxtLink>
            <NuxtLink to="/team" class="block text-gray-700 dark:text-gray-300 py-1">Our Team</NuxtLink>
            <NuxtLink to="/history" class="block text-gray-700 dark:text-gray-300 py-1">Company History</NuxtLink>
          </div>
        </div>

        <!-- Mobile Solutions & Expertise -->
        <div>
          <button @click="toggleMobileDropdown('solutions')"
            class="w-full flex items-center justify-between text-left font-medium text-gray-900 dark:text-white py-2">
            <span>Solutions & Expertise</span>
            <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': activeMobileDropdown === 'solutions' }" />
          </button>
          <div v-show="activeMobileDropdown === 'solutions'" class="mt-2 ml-4 space-y-3">
            <div>
              <h5 class="font-semibold text-primary mb-1">Engineering</h5>
              <div class="ml-2 space-y-1">
                <NuxtLink to="/solutions/equipment-maintenance"
                  class="block text-gray-700 dark:text-gray-300 text-sm py-1">Equipment Maintenance</NuxtLink>
                <NuxtLink to="/solutions/project-management"
                  class="block text-gray-700 dark:text-gray-300 text-sm py-1">Project Management</NuxtLink>
              </div>
            </div>
            <div>
              <h5 class="font-semibold text-primary mb-1">Construction</h5>
              <div class="ml-2 space-y-1">
                <NuxtLink to="/solutions/turnkey-solutions" class="block text-gray-700 dark:text-gray-300 text-sm py-1">
                  Turnkey Solutions</NuxtLink>
                <NuxtLink to="/solutions/industrial-installations"
                  class="block text-gray-700 dark:text-gray-300 text-sm py-1">Industrial
                  Installations</NuxtLink>
              </div>
            </div>
            <div>
              <h5 class="font-semibold text-primary mb-1">Maintenance</h5>
              <div class="ml-2 space-y-1">
                <NuxtLink to="/solutions/corrosion-management"
                  class="block text-gray-700 dark:text-gray-300 text-sm py-1">Corrosion Management</NuxtLink>
                <NuxtLink to="/solutions/asset-integrity" class="block text-gray-700 dark:text-gray-300 text-sm py-1">
                  Asset Integrity</NuxtLink>
                <NuxtLink to="/solutions/manpower-services" class="block text-gray-700 dark:text-gray-300 text-sm py-1">
                  Manpower Services</NuxtLink>
                <NuxtLink to="/solutions/tank-vessel-cleaning"
                  class="block text-gray-700 dark:text-gray-300 text-sm py-1">Tank & Vessel Cleaning</NuxtLink>
              </div>
            </div>
            <div>
              <h5 class="font-semibold text-primary mb-1">Oil & Gas</h5>
              <div class="ml-2 space-y-1">
                <NuxtLink to="/solutions/petrochemical-processing"
                  class="block text-gray-700 dark:text-gray-300 text-sm py-1">Petrochemical
                  Processing</NuxtLink>
                <NuxtLink to="/solutions/downstream-operations"
                  class="block text-gray-700 dark:text-gray-300 text-sm py-1">Downstream Operations</NuxtLink>
                <NuxtLink to="/solutions/marine-operations" class="block text-gray-700 dark:text-gray-300 text-sm py-1">
                  Marine Operations</NuxtLink>
                <NuxtLink to="/solutions/supply-chain" class="block text-gray-700 dark:text-gray-300 text-sm py-1">
                  Supply Chain</NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Our Commitment -->
        <div>
          <button @click="toggleMobileDropdown('commitment')"
            class="w-full flex items-center justify-between text-left font-medium text-gray-900 dark:text-white py-2">
            <span>Our Commitment</span>
            <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': activeMobileDropdown === 'commitment' }" />
          </button>
          <div v-show="activeMobileDropdown === 'commitment'" class="mt-2 ml-4 space-y-2">
            <NuxtLink to="/commitment/safety" class="block text-gray-700 dark:text-gray-300 py-1">Safety</NuxtLink>
            <NuxtLink to="/commitment/quality" class="block text-gray-700 dark:text-gray-300 py-1">Quality
            </NuxtLink>
            <NuxtLink to="/commitment/csr" class="block text-gray-700 dark:text-gray-300 py-1">CSR (Oaktree
              Initiative)</NuxtLink>
            <NuxtLink to="/commitment/sustainability" class="block text-gray-700 dark:text-gray-300 py-1">
              Sustainability</NuxtLink>
          </div>
        </div>

        <!-- Mobile Simple Links -->
        <NuxtLink to="/careers" class="block font-medium text-gray-900 dark:text-white py-2">Careers</NuxtLink>
        <NuxtLink to="/contact" class="block font-medium text-gray-900 dark:text-white py-2">Contact Us</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {
  Bars3Icon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'
import { onMounted, onUnmounted, ref } from 'vue'

// Reactive state
const activeDropdown = ref(null)
const activeMobileDropdown = ref(null)
const mobileMenuOpen = ref(false)
const isDark = ref(false)

// Dark mode functionality - using @nuxt/ui's color mode
const colorMode = useColorMode()

const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

// Initialize dark mode from @nuxt/ui
onMounted(() => {
  isDark.value = colorMode.value === 'dark'
})

// Watch for color mode changes
watch(() => colorMode.value, (newMode) => {
  isDark.value = newMode === 'dark'
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
})
</script>