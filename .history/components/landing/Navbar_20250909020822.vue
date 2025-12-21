<template>
  <nav ref="navElement"
    class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-secondary-200 dark:border-secondary-700 transition-all duration-300"
    :class="{ '-translate-y-full': !navVisible, 'shadow-lg': scrolled }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo and Company Name -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="inline-block focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md p-1">
            <img src="/assets/img/bot-logo.png" alt="Syntanium Energy Logo" class="h-12 md:h-14 drop-shadow-lg"
              width="56" height="56" loading="eager" />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation - Centered -->
        <div class="hidden lg:flex lg:items-center lg:justify-center lg:flex-1 lg:space-x-8">
          <!-- Navigation Items -->
          <NavItem to="/about" :active="$route.path === '/about'">
            Who We Are
          </NavItem>

          <!-- Solutions & Expertise Dropdown -->
          <NavDropdown title="Solutions & Expertise" :active="isActiveSection('solutions')"
            :open="activeDropdown === 'solutions'" @toggle="toggleDropdown('solutions')">
            <DropdownItem to="/solutions/engineering" icon="WrenchScrewdriverIcon" title="Engineering"
              description="Equipment & Project Management" />
            <DropdownItem to="/solutions/construction" icon="BuildingOffice2Icon" title="Construction"
              description="Turnkey & Industrial Solutions" />
            <DropdownItem to="/solutions/maintenance" icon="WrenchIcon" title="Maintenance"
              description="Asset Integrity & Services" />
            <DropdownItem to="/solutions/oil-gas" icon="FireIcon" title="Oil & Gas"
              description="Petrochemical & Marine Operations" />
          </NavDropdown>

          <!-- Our Commitment Dropdown -->
          <NavDropdown title="Our Commitment" :active="isActiveSection('commitment')"
            :open="activeDropdown === 'commitment'" @toggle="toggleDropdown('commitment')">
            <DropdownItem to="/commitment/safety" icon="ShieldCheckIcon" title="Safety"
              description="Zero Harm & Risk Management" />
            <DropdownItem to="/commitment/quality" icon="StarIcon" title="Quality"
              description="Excellence & Standards" />
            <DropdownItem to="/commitment/csr" icon="HeartIcon" title="CSR Initiative"
              description="Community Impact & Responsibility" />
            <DropdownItem to="/commitment/sustainability" icon="GlobeAltIcon" title="Sustainability"
              description="Environmental Stewardship" />
          </NavDropdown>

          <NavItem to="/careers" :active="$route.path === '/careers'">
            Careers
          </NavItem>
        </div>

        <!-- Right Side - Contact Us and Controls -->
        <div class="flex items-center space-x-4">
          <!-- Contact Us - Desktop Only -->
          <NuxtLink to="/contact"
            class="hidden lg:inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 hover:shadow-lg hover:scale-105 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
            Contact Us
          </NuxtLink>

          <!-- Dark Mode Toggle -->
          <DarkModeToggle :is-dark="isDark" @toggle="toggleDarkMode" />

          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-lg text-secondary-700 dark:text-white hover:bg-primary-50 dark:hover:bg-secondary-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'" :aria-expanded="mobileMenuOpen">
            <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6" />
            <XMarkIcon v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <MobileMenu :open="mobileMenuOpen" :active-dropdown="activeMobileDropdown" @toggle-dropdown="toggleMobileDropdown"
      @close="mobileMenuOpen = false" />
  </nav>
</template>

<script setup>
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

// Import components
const NavItem = defineAsyncComponent(() => import('./NavItem.vue'))
const NavDropdown = defineAsyncComponent(() => import('./NavDropdown.vue'))
const DropdownItem = defineAsyncComponent(() => import('./DropdownItem.vue'))
const DarkModeToggle = defineAsyncComponent(() => import('./DarkModeToggle.vue'))
const MobileMenu = defineAsyncComponent(() => import('./MobileMenu.vue'))

// Reactive state
const activeDropdown = ref(null)
const activeMobileDropdown = ref(null)
const mobileMenuOpen = ref(false)
const isDark = ref(false)
const navVisible = ref(true)
const scrolled = ref(false)
const lastScrollY = ref(0)
const navElement = ref(null)

// Throttle scroll handler for better performance
const throttle = (func, limit) => {
  let inThrottle
  return function () {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Navigation visibility on scroll
const handleScroll = throttle(() => {
  const currentScrollY = window.scrollY
  scrolled.value = currentScrollY > 10

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
}, 100)

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

// Initialize dark mode from localStorage or system preference
const initDarkMode = () => {
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
}

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
  if (navElement.value && !navElement.value.contains(event.target)) {
    activeDropdown.value = null
  }
}

// Handle keyboard events for accessibility
const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    activeDropdown.value = null
    activeMobileDropdown.value = null
    mobileMenuOpen.value = false
  }
}

onMounted(() => {
  initDarkMode()

  // Add event listeners
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)

  lastScrollY.value = window.scrollY
})

onUnmounted(() => {
  // Clean up event listeners
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
})

// Watch for route changes to close mobile menu
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
  activeDropdown.value = null
  activeMobileDropdown.value = null
})
</script>