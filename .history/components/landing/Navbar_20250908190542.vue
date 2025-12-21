<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="inline-block">
            <img src="/assets/img/bot-logo.png" alt="Bot Integrated Services Logo"
              class="h-10 md:h-12 drop-shadow-lg" />
          </NuxtLink>
        </div>

        <!-- Desktop Nav -->
        <div class="hidden lg:flex lg:items-center lg:space-x-8">
          <!-- Example Dropdown -->
          <div class="relative group">
            <button @click="toggleDropdown('whoWeAre')" :aria-expanded="activeDropdown === 'whoWeAre'"
              class="flex items-center space-x-1 text-secondary-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
              <span>Who We Are</span>
              <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === 'whoWeAre' }" />
            </button>

            <div v-show="activeDropdown === 'whoWeAre'"
              class="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
              <NuxtLink to="/about"
                class="block px-4 py-2 text-sm text-secondary-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary transition-colors">
                About Us
              </NuxtLink>
              <NuxtLink to="/team"
                class="block px-4 py-2 text-sm text-secondary-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary transition-colors">
                Our Team
              </NuxtLink>
              <NuxtLink to="/history"
                class="block px-4 py-2 text-sm text-secondary-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary transition-colors">
                Company History
              </NuxtLink>
            </div>
          </div>

          <!-- Careers -->
          <NuxtLink to="/careers"
            class="text-secondary-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200">
            Careers
          </NuxtLink>

          <!-- Contact -->
          <NuxtLink to="/contact"
            class="text-secondary-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200">
            Contact Us
          </NuxtLink>
        </div>

        <!-- Actions -->
        <div class="flex items-center space-x-4">
          <!-- Dark Mode Toggle -->
          <button @click="toggleDarkMode" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            class="p-2 rounded-lg text-secondary-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <SunIcon v-if="isDark" class="w-5 h-5" />
            <MoonIcon v-else class="w-5 h-5" />
          </button>

          <!-- Mobile Menu -->
          <button @click="toggleMobileMenu" aria-label="Toggle mobile menu"
            class="lg:hidden p-2 rounded-lg text-secondary-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
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
        <NuxtLink to="/about" class="block font-medium text-secondary-900 dark:text-white py-2">About Us</NuxtLink>
        <NuxtLink to="/team" class="block font-medium text-secondary-900 dark:text-white py-2">Our Team</NuxtLink>
        <NuxtLink to="/history" class="block font-medium text-secondary-900 dark:text-white py-2">Company History
        </NuxtLink>
        <NuxtLink to="/careers" class="block font-medium text-secondary-900 dark:text-white py-2">Careers</NuxtLink>
        <NuxtLink to="/contact" class="block font-medium text-secondary-900 dark:text-white py-2">Contact Us</NuxtLink>
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

const activeDropdown = ref(null)
const mobileMenuOpen = ref(false)
const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('darkMode', isDark.value)
}

onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode')
  if (savedDarkMode === 'true' || (!savedDarkMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

const toggleDropdown = (dropdown) => {
  activeDropdown.value = activeDropdown.value === dropdown ? null : dropdown
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) activeDropdown.value = null
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative.group')) {
    activeDropdown.value = null
  }
}
onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>
