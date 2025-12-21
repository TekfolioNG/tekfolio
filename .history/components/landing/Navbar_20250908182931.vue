<template>
  <nav class="navbar fixed top-0 w-full z-50 transition-all duration-300" :class="navBackground">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="flex items-center">
            <div class="w-10 h-10 rounded-md bg-primary flex items-center justify-center mr-3">
              <span class="text-white font-heading font-bold text-lg">SE</span>
            </div>
            <span class="text-xl font-heading font-bold text-secondary-dark dark:text-white">Syntanium Energy</span>
          </NuxtLink>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-1">
          <div v-for="(item, index) in navigation" :key="index" class="relative group">
            <button v-if="item.children" @click="toggleSubmenu(index)"
              class="px-3 py-2 rounded-md text-sm font-medium text-secondary-dark dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors duration-200 flex items-center"
              :class="{ 'text-primary dark:text-white': activeSubmenu === index }">
              {{ item.name }}
              <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <NuxtLink v-else :to="item.href"
              class="px-3 py-2 rounded-md text-sm font-medium text-secondary-dark dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors duration-200"
              :class="{ 'text-primary dark:text-white': $route.path === item.href }">
              {{ item.name }}
            </NuxtLink>

            <!-- Submenu Dropdown -->
            <div v-if="item.children && activeSubmenu === index"
              class="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white dark:bg-secondary-dark ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 dark:divide-gray-700">
              <div v-for="(subitem, subIndex) in item.children" :key="subIndex" class="py-1">
                <NuxtLink :to="subitem.href"
                  class="block px-4 py-2 text-sm text-secondary-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary dark:hover:text-white transition-colors duration-200"
                  @click.native="closeSubmenus">
                  {{ subitem.name }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Right side items -->
        <div class="flex items-center space-x-4">
          <!-- Dark mode toggle -->
          <button @click="toggleDarkMode"
            class="p-2 rounded-md text-secondary-dark dark:text-gray-300 hover:text-primary dark:hover:text-white focus:outline-none"
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

          <!-- Contact button -->
          <NuxtLink to="/contact-us"
            class="hidden md:inline-block px-4 py-2 rounded-md text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors duration-200">
            Contact Us
          </NuxtLink>

          <!-- Mobile menu button -->
          <button @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="lg:hidden p-2 rounded-md text-secondary-dark dark:text-gray-300 hover:text-primary dark:hover:text-white focus:outline-none"
            aria-label="Toggle mobile menu">
            <svg v-if="!isMobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMobileMenuOpen" class="lg:hidden bg-white dark:bg-secondary-dark shadow-lg">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <div v-for="(item, index) in navigation" :key="index">
          <div v-if="item.children">
            <button @click="toggleMobileSubmenu(index)"
              class="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-secondary-dark dark:text-gray-300 hover:text-primary dark:hover:text-white">
              {{ item.name }}
              <svg class="h-4 w-4" :class="{ 'rotate-180': openMobileSubmenu === index }" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div v-if="openMobileSubmenu === index" class="pl-6 space-y-1">
              <NuxtLink v-for="(subitem, subIndex) in item.children" :key="subIndex" :to="subitem.href"
                class="block px-3 py-2 rounded-md text-base font-medium text-secondary-light dark:text-gray-400 hover:text-primary dark:hover:text-white"
                @click.native="isMobileMenuOpen = false">
                {{ subitem.name }}
              </NuxtLink>
            </div>
          </div>

          <NuxtLink v-else :to="item.href"
            class="block px-3 py-2 rounded-md text-base font-medium text-secondary-dark dark:text-gray-300 hover:text-primary dark:hover:text-white"
            @click.native="isMobileMenuOpen = false">
            {{ item.name }}
          </NuxtLink>
        </div>

        <NuxtLink to="/contact-us"
          class="block md:hidden px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary-dark mt-4 text-center"
          @click.native="isMobileMenuOpen = false">
          Contact Us
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

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

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Navbar background on scroll
const navBackground = ref('bg-white dark:bg-secondary-dark')

onMounted(() => {
  const handleScroll = () => {
    if (window.scrollY > 10) {
      navBackground.value = 'bg-white/95 dark:bg-secondary-dark/95 backdrop-blur-sm shadow-md'
    } else {
      navBackground.value = 'bg-white dark:bg-secondary-dark'
    }
  }

  window.addEventListener('scroll', handleScroll)

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style scoped>
.navbar {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.rotate-180 {
  transform: rotate(180deg);
  transition: transform 0.2s ease;
}
</style>