<template>
  <nav class="fixed w-full z-50 top-0 left-0 right-0 transition-all duration-300" :class="navBackground">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo section -->
        <NuxtLink to="/" class="flex items-center flex-shrink-0">
          <div class="w-10 h-10 rounded-md bg-primary flex items-center justify-center mr-3">
            <span class="text-white font-heading font-bold text-lg">SE</span>
          </div>
          <span class="text-xl font-heading font-bold text-secondary-dark dark:text-white">Syntanium Energy</span>
        </NuxtLink>

        <!-- Desktop Navigation with Contact Info -->
        <div class="hidden md:flex items-center space-x-8 lg:space-x-10">
          <nav class="absolute left-1/2 transform -translate-x-1/2">
            <ul class="flex space-x-6 lg:space-x-8">
              <li v-for="(item, index) in navigation" :key="index" class="relative group">
                <button v-if="item.children" @click="toggleSubmenu(index)"
                  class="text-sm lg:text-base transition-colors duration-200 font-medium flex items-center"
                  :class="isScrolled ? 'text-secondary-dark hover:text-primary dark:text-gray-300 dark:hover:text-white' : 'text-white hover:text-primary-light'">
                  {{ item.name }}
                  <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <NuxtLink v-else :to="item.href" class="text-sm lg:text-base transition-colors duration-200 font-medium"
                  :class="isScrolled ? 'text-secondary-dark hover:text-primary dark:text-gray-300 dark:hover:text-white' : 'text-white hover:text-primary-light'">
                  {{ item.name }}
                </NuxtLink>

                <!-- Submenu Dropdown -->
                <div v-if="item.children && activeSubmenu === index"
                  class="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-secondary-dark ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 dark:divide-gray-700 z-50">
                  <div v-for="(subitem, subIndex) in item.children" :key="subIndex" class="py-1">
                    <NuxtLink :to="subitem.href"
                      class="block px-4 py-2 text-sm text-secondary-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary dark:hover:text-white transition-colors duration-200"
                      @click.native="closeSubmenus">
                      {{ subitem.name }}
                    </NuxtLink>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <!-- Contact Info - Stacked in top right -->
          <div class="ml-4 pl-4 border-l" :class="isScrolled ? 'border-gray-200' : 'border-gray-200/50'">
            <div class="text-right space-y-1">
              <div class="flex items-center justify-end space-x-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5"
                  :class="isScrolled ? 'text-secondary-light' : 'text-gray-300'" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+2348022007759"
                  :class="isScrolled ? 'text-secondary hover:text-primary' : 'text-gray-200 hover:text-primary-light'"
                  class="text-sm font-medium transition-colors">
                  +234 805 524 8406
                </a>
              </div>
              <div class="flex items-center justify-end space-x-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5"
                  :class="isScrolled ? 'text-secondary-light' : 'text-gray-300'" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@syntaniumenergy.com"
                  :class="isScrolled ? 'text-secondary hover:text-primary' : 'text-gray-200 hover:text-primary-light'"
                  class="text-sm font-medium transition-colors">
                  info@syntaniumenergy.com
                </a>
              </div>
            </div>
          </div>

          <!-- Dark mode toggle -->
          <button @click="toggleDarkMode" class="p-2 rounded-md focus:outline-none"
            :class="isScrolled ? 'text-secondary-dark dark:text-gray-300 hover:text-primary' : 'text-white hover:text-primary-light'"
            aria-label="Toggle dark mode">
            <svg v-if="!darkMode" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center space-x-4">
          <!-- Dark mode toggle for mobile -->
          <button @click="toggleDarkMode" class="p-2 rounded-md focus:outline-none"
            :class="isScrolled ? 'text-secondary-dark dark:text-gray-300' : 'text-white'" aria-label="Toggle dark mode">
            <svg v-if="!darkMode" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>

          <button @click="open = !open" class="focus:outline-none transition-colors duration-200"
            :class="isScrolled ? 'text-secondary-dark dark:text-gray-300' : 'text-white'">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-show="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
              <path v-show="open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <div v-show="open"
          class="md:hidden mt-2 py-2 rounded-lg shadow-lg bg-white/95 dark:bg-secondary-dark/95 backdrop-blur-sm">
          <div v-for="(item, index) in navigation" :key="index">
            <div v-if="item.children">
              <button @click="toggleMobileSubmenu(index)"
                class="w-full flex justify-between items-center px-4 py-3 text-sm font-medium transition-colors duration-200"
                :class="isScrolled ? 'text-secondary-dark dark:text-gray-300 hover:text-primary' : 'text-secondary-dark dark:text-gray-300 hover:text-primary'">
                {{ item.name }}
                <svg class="h-4 w-4" :class="{ 'rotate-180': openMobileSubmenu === index }" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div v-if="openMobileSubmenu === index" class="pl-6 space-y-1">
                <NuxtLink v-for="(subitem, subIndex) in item.children" :key="subIndex" :to="subitem.href"
                  class="block px-3 py-2 text-sm font-medium transition-colors duration-200"
                  :class="isScrolled ? 'text-secondary-light dark:text-gray-400 hover:text-primary' : 'text-secondary-light dark:text-gray-400 hover:text-primary'"
                  @click.native="open = false">
                  {{ subitem.name }}
                </NuxtLink>
              </div>
            </div>

            <NuxtLink v-else :to="item.href" class="block px-4 py-3 text-sm font-medium transition-colors duration-200"
              :class="isScrolled ? 'text-secondary-dark dark:text-gray-300 hover:text-primary' : 'text-secondary-dark dark:text-gray-300 hover:text-primary'"
              @click.native="open = false">
              {{ item.name }}
            </NuxtLink>
          </div>

          <!-- Mobile Contact Info -->
          <div class="px-4 py-3 border-t border-gray-200 dark:border-gray-700 mt-2">
            <div class="flex items-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-secondary-light dark:text-gray-400"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+2348055248406"
                class="text-xs text-secondary-light dark:text-gray-400 hover:text-primary">+234 805 524 8406</a>
            </div>
            <div class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-secondary-light dark:text-gray-400"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@syntaniumenergy.com"
                class="text-xs text-secondary-light dark:text-gray-400 hover:text-primary">info@syntaniumenergy.com</a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

// Dark mode handling
const darkMode = ref(false)

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  if (darkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('color-theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('color-theme', 'light')
  }
}

onMounted(() => {
  // Check for saved theme preference
  if (localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkMode.value = true
    document.documentElement.classList.add('dark')
  } else {
    darkMode.value = false
    document.documentElement.classList.remove('dark')
  }
})

// Navigation data
const navigation = [
  {
    name: 'Who We Are',
    href: '/who-we-are'
  },
  {
    name: 'Solutions & Expertise',
    children: [
      { name: 'Engineering', href: '/solutions/engineering' },
      { name: 'Equipment Maintenance', href: '/solutions/equipment-maintenance' },
      { name: 'Project Management', href: '/solutions/project-management' },
      { name: 'Construction', href: '/solutions/construction' },
      { name: 'Turnkey Solutions', href: '/solutions/turnkey-solutions' },
      { name: 'Industrial Installations', href: '/solutions/industrial-installations' },
      { name: 'Maintenance', href: '/solutions/maintenance' },
      { name: 'Corrosion Management', href: '/solutions/corrosion-management' },
      { name: 'Asset Integrity Management', href: '/solutions/asset-integrity-management' },
      { name: 'Manpower Services', href: '/solutions/manpower-services' },
      { name: 'Tank & Vessel Cleaning', href: '/solutions/tank-vessel-cleaning' },
      { name: 'Oil & Gas', href: '/solutions/oil-gas' },
      { name: 'Petrochemical Processing', href: '/solutions/petrochemical-processing' },
      { name: 'Downstream Operations', href: '/solutions/downstream-operations' },
      { name: 'Marine Operations', href: '/solutions/marine-operations' },
      { name: 'Supply Chain Management', href: '/solutions/supply-chain-management' }
    ]
  },
  {
    name: 'Our Commitment',
    children: [
      { name: 'Safety', href: '/commitment/safety' },
      { name: 'Quality', href: '/commitment/quality' },
      { name: 'CSR', href: '/commitment/csr' },
      { name: 'Sustainability', href: '/commitment/sustainability' }
    ]
  },
  {
    name: 'Careers',
    href: '/careers'
  },
  {
    name: 'Contact Us',
    href: '/contact-us'
  }
]

// Submenu handling
const activeSubmenu = ref(null)
const openMobileSubmenu = ref(null)

const toggleSubmenu = (index) => {
  activeSubmenu.value = activeSubmenu.value === index ? null : index
}

const toggleMobileSubmenu = (index) => {
  openMobileSubmenu.value = openMobileSubmenu.value === index ? null : index
}

const closeSubmenus = () => {
  activeSubmenu.value = null
}

// Close submenus when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative.group')) {
    activeSubmenu.value = null
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

// Mobile menu state
const open = ref(false)

// Navbar background on scroll
const isScrolled = ref(false)
const navBackground = ref('bg-transparent')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  navBackground.value = isScrolled.value
    ? 'bg-white/95 dark:bg-secondary-dark/95 backdrop-blur-sm shadow-md'
    : 'bg-transparent'
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initialize on mount
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.router-link-active.router-link-exact-active {
  color: #D2410C !important;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: transform 0.2s ease;
}
</style>