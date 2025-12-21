<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo and Company Name -->
        <div class="flex-shrink-0 flex items-center">
          <div class="flex items-center space-x-3">
            <!-- Placeholder logo - replace with actual logo when available -->
            <div
              class="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">S</span>
            </div>
            <span class="font-heading font-bold text-xl text-secondary-900 dark:text-white">
              Syntanium Energy
            </span>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:items-center lg:space-x-8">
          <!-- Who We Are -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 text-secondary-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200"
              @click="toggleDropdown('whoWeAre')">
              <span>Who We Are</span>
              <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === 'whoWeAre' }" />
            </button>
            <div v-show="activeDropdown === 'whoWeAre'"
              class="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
              <a href="#"
                class="block px-4 py-2 text-sm text-secondary-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary transition-colors">About
                Us</a>
              <a href="#"
                class="block px-4 py-2 text-sm text-secondary-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary transition-colors">Our
                Team</a>
              <a href="#"
                class="block px-4 py-2 text-sm text-secondary-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary transition-colors">Company
                History</a>
            </div>
          </div>

          <!-- Solutions & Expertise -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 text-secondary-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200"
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
                  <a href="#"
                    class="block py-1 text-sm text-secondary-700 dark:text-gray-300 hover:text-primary transition-colors">Equipment
                    Maintenance</a>
                  <a href="#"
                    class="block py-1 text-sm text-secondary-700 dark:text-gray-300 hover:text-primary transition-colors">Project
                    Management</a>
                </div>
                <!-- Construction Column -->
                <div>
                  <h4 class="font-semibold text-primary mb-2">Construction</h4>
                  <a href="#"
                    class="block py-1 text-sm text-secondary-700 dark:text-gray-300 hover:text-primary transition-colors">Turnkey
                    Solutions</a>
                  <a href="#"
                    class="block py-1 text-sm text-secondary-700 dark:text-gray-300 hover:text-primary transition-colors">Industrial
                    Installations</a>
                </div>
                <!-- Maintenance Column -->
                <div>
                  <h4 class="font-semibold text-primary mb-2">Maintenance</h4>
                  <a href="#"
                    class="block py-1 text-sm text-secondary-700 dark:text-gray-300 hover:text-primary transition-colors">Corrosion
                    Management</a>
                  <a href="#"
                    class="block py-1 text-sm text-secondary-700 dark:text-gray-300 hover:text-primary transition-colors">Asset
                    Integrity</a>
                  <a href="#"
                    class="block py-1 text-sm text-secondary-700 dark:text-gray-300 hover:text-primary transition-colors">Manpower
                    Services</a>
                  <a href="#"
                    class="block py-1 text-sm text-secondary-700 dark:text-gray-300 hover:text-primary transition-colors">Tank
                    & Vessel Cleaning</a>
                </div>
                <!-- Oil & Gas Column -->
                <div>
                  <h4 class="font-semibold text-primary mb-2">Oil & Gas</h4>
                  <a href="#"
                    class="block py-1 text-sm text-secondary-700 dark:text-gray-300 hover:text-primary transition-colors">Petrochemical
                    Processing</a>
                  <a href="#"
                    class="block py-1 text-sm text-secondary-700 dark:text-gray-300 hover:text-primary transition-colors">Downstream
                    Operations</a>
                  <a href="#"
                    class="block py-1 text-sm text-secondary-700 dark:text-gray-300 hover:text-primary transition-colors">Marine
                    Operations</a>
                  <a href="#"
                    class="block py-1 text-sm text-secondary-700 dark:text-gray-300 hover:text-primary transition-colors">Supply
                    Chain</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Our Commitment -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 text-secondary-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200"
              @click="toggleDropdown('commitment')">
              <span>Our Commitment</span>
              <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === 'commitment' }" />
            </button>
            <div v-show="activeDropdown === 'commitment'"
              class="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
              <a href="#"
                class="block px-4 py-2 text-sm text-secondary-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary transition-colors">Safety</a>
              <a href="#"
                class="block px-4 py-2 text-sm text-secondary-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary transition-colors">Quality</a>
              <a href="#"
                class="block px-4 py-2 text-sm text-secondary-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary transition-colors">CSR
                (Oaktree Initiative)</a>
              <a href="#"
                class="block px-4 py-2 text-sm text-secondary-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary transition-colors">Sustainability</a>
            </div>
          </div>

          <!-- Careers -->
          <a href="#"
            class="text-secondary-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200">
            Careers
          </a>

          <!-- Contact Us -->
          <a href="#"
            class="text-secondary-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200">
            Contact Us
          </a>
        </div>

        <!-- Dark Mode Toggle and Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <!-- Dark Mode Toggle -->
          <button @click="toggleDarkMode"
            class="p-2 rounded-lg text-secondary-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
            <SunIcon v-if="isDark" class="w-5 h-5" />
            <MoonIcon v-else class="w-5 h-5" />
          </button>

          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-lg text-secondary-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
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
            class="w-full flex items-center justify-between text-left font-medium text-secondary-900 dark:text-white py-2">
            <span>Who We Are</span>
            <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': activeMobileDropdown === 'whoWeAre' }" />
          </button>
          <div v-show="activeMobileDropdown === 'whoWeAre'" class="mt-2 ml-4 space-y-2">
            <a href="#" class="block text-secondary-700 dark:text-gray-300 py-1">About Us</a>
            <a href="#" class="block text-secondary-700 dark:text-gray-300 py-1">Our Team</a>
            <a href="#" class="block text-secondary-700 dark:text-gray-300 py-1">Company History</a>
          </div>
        </div>

        <!-- Mobile Solutions & Expertise -->
        <div>
          <button @click="toggleMobileDropdown('solutions')"
            class="w-full flex items-center justify-between text-left font-medium text-secondary-900 dark:text-white py-2">
            <span>Solutions & Expertise</span>
            <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': activeMobileDropdown === 'solutions' }" />
          </button>
          <div v-show="activeMobileDropdown === 'solutions'" class="mt-2 ml-4 space-y-3">
            <div>
              <h5 class="font-semibold text-primary mb-1">Engineering</h5>
              <div class="ml-2 space-y-1">
                <a href="#" class="block text-secondary-700 dark:text-gray-300 text-sm py-1">Equipment Maintenance</a>
                <a href="#" class="block text-secondary-700 dark:text-gray-300 text-sm py-1">Project Management</a>
              </div>
            </div>
            <div>
              <h5 class="font-semibold text-primary mb-1">Construction</h5>
              <div class="ml-2 space-y-1">
                <a href="#" class="block text-secondary-700 dark:text-gray-300 text-sm py-1">Turnkey Solutions</a>
                <a href="#" class="block text-secondary-700 dark:text-gray-300 text-sm py-1">Industrial
                  Installations</a>
              </div>
            </div>
            <div>
              <h5 class="font-semibold text-primary mb-1">Maintenance</h5>
              <div class="ml-2 space-y-1">
                <a href="#" class="block text-secondary-700 dark:text-gray-300 text-sm py-1">Corrosion Management</a>
                <a href="#" class="block text-secondary-700 dark:text-gray-300 text-sm py-1">Asset Integrity</a>
                <a href="#" class="block text-secondary-700 dark:text-gray-300 text-sm py-1">Manpower Services</a>
                <a href="#" class="block text-secondary-700 dark:text-gray-300 text-sm py-1">Tank & Vessel Cleaning</a>
              </div>
            </div>
            <div>
              <h5 class="font-semibold text-primary mb-1">Oil & Gas</h5>
              <div class="ml-2 space-y-1">
                <a href="#" class="block text-secondary-700 dark:text-gray-300 text-sm py-1">Petrochemical
                  Processing</a>
                <a href="#" class="block text-secondary-700 dark:text-gray-300 text-sm py-1">Downstream Operations</a>
                <a href="#" class="block text-secondary-700 dark:text-gray-300 text-sm py-1">Marine Operations</a>
                <a href="#" class="block text-secondary-700 dark:text-gray-300 text-sm py-1">Supply Chain</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Our Commitment -->
        <div>
          <button @click="toggleMobileDropdown('commitment')"
            class="w-full flex items-center justify-between text-left font-medium text-secondary-900 dark:text-white py-2">
            <span>Our Commitment</span>
            <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': activeMobileDropdown === 'commitment' }" />
          </button>
          <div v-show="activeMobileDropdown === 'commitment'" class="mt-2 ml-4 space-y-2">
            <a href="#" class="block text-secondary-700 dark:text-gray-300 py-1">Safety</a>
            <a href="#" class="block text-secondary-700 dark:text-gray-300 py-1">Quality</a>
            <a href="#" class="block text-secondary-700 dark:text-gray-300 py-1">CSR (Oaktree Initiative)</a>
            <a href="#" class="block text-secondary-700 dark:text-gray-300 py-1">Sustainability</a>
          </div>
        </div>

        <!-- Mobile Simple Links -->
        <a href="#" class="block font-medium text-secondary-900 dark:text-white py-2">Careers</a>
        <a href="#" class="block font-medium text-secondary-900 dark:text-white py-2">Contact Us</a>
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