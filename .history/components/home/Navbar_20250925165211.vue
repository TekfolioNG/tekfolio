<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-700 transition-all duration-300"
    :class="{ '-translate-y-full': !navVisible }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-18 lg:h-24">
        <!-- Logo and Company Name -->
        <div class="flex-shrink-0 flex items-center">
          <div class="flex items-center space-x-3">
            <!-- Logo section -->
            <NuxtLink to="/" class="inline-block">
              <img src="/assets/img/syntanium-logo-temp.png" alt="Syntanium Energy Logo"
                class="h-10 md:h-12 lg:h-14 drop-shadow-lg dark:invert" />
            </NuxtLink>
          </div>
        </div>

        <!-- Desktop Navigation - Centered -->
        <div class="hidden lg:flex lg:items-center lg:justify-center lg:flex-1 lg:space-x-4">
          <!-- Who We Are - Simple Link -->
          <NuxtLink to="/who-we-are"
            class="text-base text-gray-800 dark:text-gray-100 hover:text-[#fe4135] dark:hover:text-[#fe4135] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#fe4135] dark:hover:border-[#fe4135] pb-1"
            :class="{ 'text-[#fe4135] dark:text-[#fe4135] border-[#fe4135] dark:border-[#fe4135]': $route.path === '/who-we-are' }">
            WHO WE ARE
          </NuxtLink>

          <!-- Our Expertise (renamed from Solutions & Expertise) -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 text-base text-gray-800 dark:text-gray-100 hover:text-[#fe4135] dark:hover:text-[#fe4135] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#fe4135] dark:hover:border-[#fe4135] pb-1"
              :class="{ 'text-[#fe4135] dark:text-[#fe4135] border-[#fe4135] dark:border-[#fe4135]': isActiveSection('expertise') }"
              @click="toggleDropdown('expertise')">
              <span>OUR EXPERTISE</span>
              <Icon name="lucide:chevron-down" class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === 'expertise' }" />
            </button>
            <div v-show="activeDropdown === 'expertise'"
              class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200/60 dark:border-gray-700 py-4 z-50">
              <div class="grid grid-cols-2 gap-2 px-2">
                <!-- Engineering -->
                <NuxtLink to="/engineering"
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-red-50/80 dark:hover:bg-gray-700/80 transition-colors cursor-pointer group/item"
                  @click="activeDropdown = null">
                  <Icon name="lucide:hard-hat" class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4
                      class="font-semibold text-[#fe4135] dark:text-[#fe4135] group-hover/item:text-[#dc2626] dark:group-hover/item:text-[#f87171] text-sm">
                      Engineering</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Equipment & Project Management
                    </p>
                  </div>
                </NuxtLink>
                <!-- Construction -->
                <NuxtLink to="/construction"
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-red-50/80 dark:hover:bg-gray-700/80 transition-colors cursor-pointer group/item"
                  @click="activeDropdown = null">
                  <Icon name="lucide:building" class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4
                      class="font-semibold text-[#fe4135] dark:text-[#fe4135] group-hover/item:text-[#dc2626] dark:group-hover/item:text-[#f87171] text-sm">
                      Construction</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Turnkey & Industrial Solutions
                    </p>
                  </div>
                </NuxtLink>
                <!-- Maintenance -->
                <NuxtLink to="/maintenance"
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-red-50/80 dark:hover:bg-gray-700/80 transition-colors cursor-pointer group/item"
                  @click="activeDropdown = null">
                  <Icon name="lucide:settings" class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4
                      class="font-semibold text-[#fe4135] dark:text-[#fe4135] group-hover/item:text-[#dc2626] dark:group-hover/item:text-[#f87171] text-sm">
                      Maintenance</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Asset Integrity & Services</p>
                  </div>
                </NuxtLink>
                <!-- Oil & Gas -->
                <NuxtLink to="/oil-and-gas"
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-red-50/80 dark:hover:bg-gray-700/80 transition-colors cursor-pointer group/item"
                  @click="activeDropdown = null">
                  <Icon name="lucide:droplets" class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4
                      class="font-semibold text-[#fe4135] dark:text-[#fe4135] group-hover/item:text-[#dc2626] dark:group-hover/item:text-[#f87171] text-sm">
                      Oil & Gas Solutions</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Petrochemical & Marine Operations
                    </p>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Our Solutions (new dropdown) -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 text-base text-gray-800 dark:text-gray-100 hover:text-[#fe4135] dark:hover:text-[#fe4135] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#fe4135] dark:hover:border-[#fe4135] pb-1"
              :class="{ 'text-[#fe4135] dark:text-[#fe4135] border-[#fe4135] dark:border-[#fe4135]': isActiveSection('solutions') }"
              @click="toggleDropdown('solutions')">
              <span>OUR SOLUTIONS</span>
              <Icon name="lucide:chevron-down" class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === 'solutions' }" />
            </button>
            <div v-show="activeDropdown === 'solutions'"
              class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200/60 dark:border-gray-700 py-4 z-50">
              <div class="grid grid-cols-2 gap-2 px-2">
                <!-- Products & Applications -->
                <NuxtLink to="/products-and-applications"
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-red-50/80 dark:hover:bg-gray-700/80 transition-colors cursor-pointer group/item"
                  @click="activeDropdown = null">
                  <Icon name="lucide:beaker" class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4
                      class="font-semibold text-[#fe4135] dark:text-[#fe4135] group-hover/item:text-[#dc2626] dark:group-hover/item:text-[#f87171] text-sm">
                      Products & Applications</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Specialty chemicals and coatings
                    </p>
                  </div>
                </NuxtLink>
                <!-- Corrosion & Integrity Management -->
                <NuxtLink to="/corrosion-and-integrity-management"
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-red-50/80 dark:hover:bg-gray-700/80 transition-colors cursor-pointer group/item"
                  @click="activeDropdown = null">
                  <Icon name="lucide:shield-half" class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4
                      class="font-semibold text-[#fe4135] dark:text-[#fe4135] group-hover/item:text-[#dc2626] dark:group-hover/item:text-[#f87171] text-sm">
                      Corrosion & Integrity Management</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Asset protection and renewal
                    </p>
                  </div>
                </NuxtLink>
                <!-- Marine-Vessels -->
                <NuxtLink to="/marine-vessel"
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-red-50/80 dark:hover:bg-gray-700/80 transition-colors cursor-pointer group/item"
                  @click="activeDropdown = null">
                  <Icon name="lucide:clipboard-list" class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4
                      class="font-semibold text-[#fe4135] dark:text-[#fe4135] group-hover/item:text-[#dc2626] dark:group-hover/item:text-[#f87171] text-sm">
                      Project & Contract Management</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Planning, execution, delivery
                    </p>
                  </div>
                </NuxtLink>
                <!-- Supply Chain Manegement -->
                <NuxtLink to="/ssupply-chain"
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-red-50/80 dark:hover:bg-gray-700/80 transition-colors cursor-pointer group/item"
                  @click="activeDropdown = null">
                  <Icon name="lucide:users" class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4
                      class="font-semibold text-[#fe4135] dark:text-[#fe4135] group-hover/item:text-[#dc2626] dark:group-hover/item:text-[#f87171] text-sm">
                      Manpower Services</h4>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Skilled personnel support
                    </p>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Commitment-->
          <NuxtLink to="/commitment"
            class="text-base text-gray-800 dark:text-gray-100 hover:text-[#fe4135] dark:hover:text-[#fe4135] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#fe4135] dark:hover:border-[#fe4135] pb-1"
            :class="{ 'text-[#fe4135] dark:text-[#fe4135] border-[#fe4135] dark:border-[#fe4135]': $route.path === '/commitment' }">
            OUR COMMITMENT
          </NuxtLink>

          <!-- Careers -->
          <NuxtLink to="/careers"
            class="text-base text-gray-800 dark:text-gray-100 hover:text-[#fe4135] dark:hover:text-[#fe4135] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#fe4135] dark:hover:border-[#fe4135] pb-1"
            :class="{ 'text-[#fe4135] dark:text-[#fe4135] border-[#fe4135] dark:border-[#fe4135]': $route.path === '/careers' }">
            CAREERS
          </NuxtLink>
        </div>

        <!-- Right Side - Contact Us and Controls -->
        <div class="flex items-center space-x-4 lg:space-x-6 ml-6 lg:ml-10">
          <!-- Contact Us - Desktop Only -->
          <NuxtLink to="/contact"
            class="hidden lg:inline-flex items-center px-5 py-2.5 bg-[#fe4135] hover:bg-[#dc2626] hover:shadow-lg hover:scale-105 dark:bg-[#fe4135] dark:hover:bg-[#dc2626] text-white font-medium rounded-lg transition-all duration-200">
            Contact Us
          </NuxtLink>

          <!-- Dark Mode Toggle -->
          <button @click="toggleDarkMode"
            class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#fe4135] focus:ring-offset-2 drop-shadow-sm"
            :class="$colorMode.value === 'dark' ? 'bg-gray-700' : 'bg-gray-700'">
            <!-- Toggle Circle with Icon -->
            <span
              class="inline-flex h-4 w-4 items-center justify-center transform rounded-full bg-white transition duration-300 ease-in-out"
              :class="$colorMode.value === 'dark' ? 'translate-x-6' : 'translate-x-1'">
              <!-- Sun Icon (visible in light mode) -->
              <Icon v-if="$colorMode.value === 'light'" name="lucide:sun" class="w-3 h-3 text-yellow-600" />
              <!-- Moon Icon (visible in dark mode) -->
              <Icon v-else name="lucide:moon" class="w-2 h-2 text-gray-800" />
            </span>
          </button>

          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-100 hover:bg-red-50/80 dark:hover:bg-gray-800/80 hover:text-[#fe4135] dark:hover:text-[#fe4135] transition-colors duration-200"
            aria-label="Toggle mobile menu">
            <Icon v-if="!mobileMenuOpen" name="lucide:menu" class="w-6 h-6" />
            <Icon v-else name="lucide:x" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="mobileMenuOpen"
      class="lg:hidden absolute right-0 bg-white/95 dark:bg-gray-900/95 w-2/3 h-screen backdrop-blur-md border-t border-gray-200/60 dark:border-gray-800 z-10">
      <div class="px-4 py-6 space-y-6">
        <!-- Mobile Who We Are - Simple Link -->
        <NuxtLink to="/who-we-are"
          class="block font-medium text-gray-900 dark:text-gray-100 hover:text-[#fe4135] dark:hover:text-[#fe4135] py-2 transition-colors"
          :class="{ 'text-[#fe4135] dark:text-[#fe4135] underline': $route.path === '/who-we-are' }"
          @click="mobileMenuOpen = false">
          WHO WE ARE
        </NuxtLink>

        <!-- Mobile Our Expertise (renamed) -->
        <div>
          <button @click="toggleMobileDropdown('expertise')"
            class="w-full flex items-center justify-between text-left font-medium text-gray-900 dark:text-gray-100 py-2 hover:text-[#fe4135] dark:hover:text-[#fe4135] transition-colors"
            :class="{ 'text-[#fe4135] dark:text-[#fe4135]': isActiveSection('expertise') }">
            <span>OUR EXPERTISE</span>
            <Icon name="lucide:chevron-down" class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': activeMobileDropdown === 'expertise' }" />
          </button>
          <div v-show="activeMobileDropdown === 'expertise'" class="mt-3 ml-4 space-y-4">
            <!-- Engineering -->
            <NuxtLink to="/engineering"
              class="flex items-center space-x-3 py-2 hover:text-[#dc2626] dark:hover:text-[#f87171] transition-colors"
              @click="mobileMenuOpen = false; activeMobileDropdown = null">
              <Icon name="lucide:hard-hat" class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#fe4135] dark:text-[#fe4135]">Engineering</h5>
                <p class="text-sm text-gray-600 dark:text-gray-400">Equipment & Project Management</p>
              </div>
            </NuxtLink>
            <!-- Construction -->
            <NuxtLink to="/construction"
              class="flex items-center space-x-3 py-2 hover:text-[#dc2626] dark:hover:text-[#f87171] transition-colors"
              @click="mobileMenuOpen = false; activeMobileDropdown = null">
              <Icon name="lucide:building" class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#fe4135] dark:text-[#fe4135]">Construction</h5>
                <p class="text-sm text-gray-600 dark:text-gray-400">Turnkey & Industrial Solutions</p>
              </div>
            </NuxtLink>
            <!-- Maintenance -->
            <NuxtLink to="/maintenance"
              class="flex items-center space-x-3 py-2 hover:text-[#dc2626] dark:hover:text-[#f87171] transition-colors"
              @click="mobileMenuOpen = false; activeMobileDropdown = null">
              <Icon name="lucide:settings" class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#fe4135] dark:text-[#fe4135]">Maintenance</h5>
                <p class="text-sm text-gray-600 dark:text-gray-400">Asset Integrity & Services</p>
              </div>
            </NuxtLink>
            <!-- Oil & Gas -->
            <NuxtLink to="/oil-and-gas"
              class="flex items-center space-x-3 py-2 hover:text-[#dc2626] dark:hover:text-[#f87171] transition-colors"
              @click="mobileMenuOpen = false; activeMobileDropdown = null">
              <Icon name="lucide:droplets" class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#fe4135] dark:text-[#fe4135]">Oil & Gas Solutions</h5>
                <p class="text-sm text-gray-600 dark:text-gray-400">Petrochemical & Marine Operations</p>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile Our Solutions (new) -->
        <div>
          <button @click="toggleMobileDropdown('solutions')"
            class="w-full flex items-center justify-between text-left font-medium text-gray-900 dark:text-gray-100 py-2 hover:text-[#fe4135] dark:hover:text-[#fe4135] transition-colors"
            :class="{ 'text-[#fe4135] dark:text-[#fe4135]': isActiveSection('solutions') }">
            <span>OUR SOLUTIONS</span>
            <Icon name="lucide:chevron-down" class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': activeMobileDropdown === 'solutions' }" />
          </button>
          <div v-show="activeMobileDropdown === 'solutions'" class="mt-3 ml-4 space-y-4">
            <!-- Products & Applications -->
            <NuxtLink to="/products-and-applications"
              class="flex items-center space-x-3 py-2 hover:text-[#dc2626] dark:hover:text-[#f87171] transition-colors"
              @click="mobileMenuOpen = false; activeMobileDropdown = null">
              <Icon name="lucide:beaker" class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#fe4135] dark:text-[#fe4135]">Products & Applications</h5>
                <p class="text-sm text-gray-600 dark:text-gray-400">Specialty chemicals and coatings</p>
              </div>
            </NuxtLink>
            <!-- Corrosion & Integrity Management -->
            <NuxtLink to="/corrosion-and-integrity-management"
              class="flex items-center space-x-3 py-2 hover:text-[#dc2626] dark:hover:text-[#f87171] transition-colors"
              @click="mobileMenuOpen = false; activeMobileDropdown = null">
              <Icon name="lucide:shield-half" class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#fe4135] dark:text-[#fe4135]">Corrosion & Integrity Management</h5>
                <p class="text-sm text-gray-600 dark:text-gray-400">Asset protection and renewal</p>
              </div>
            </NuxtLink>
            <!-- Marine-Vessel-Operations -->
            <NuxtLink to="/marine-vessel"
              class="flex items-center space-x-3 py-2 hover:text-[#dc2626] dark:hover:text-[#f87171] transition-colors"
              @click="mobileMenuOpen = false; activeMobileDropdown = null">
              <Icon name="lucide:clipboard-list" class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#fe4135] dark:text-[#fe4135]">Project & Contract Management</h5>
                <p class="text-sm text-gray-600 dark:text-gray-400">Planning, execution, delivery</p>
              </div>
            </NuxtLink>
            <!-- Supply-Chain-Mgt -->
            <NuxtLink to="/supply-chain"
              class="flex items-center space-x-3 py-2 hover:text-[#dc2626] dark:hover:text-[#f87171] transition-colors"
              @click="mobileMenuOpen = false; activeMobileDropdown = null">
              <Icon name="lucide:users" class="w-5 h-5 text-[#fe4135] dark:text-[#fe4135] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#fe4135] dark:text-[#fe4135]">Manpower Services</h5>
                <p class="text-sm text-gray-600 dark:text-gray-400">Skilled personnel support</p>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile Commitment -->
        <NuxtLink to="/commitment"
          class="block font-medium text-gray-900 dark:text-gray-100 hover:text-[#fe4135] dark:hover:text-[#fe4135] py-2 transition-colors"
          :class="{ 'text-[#fe4135] dark:text-[#fe4135] underline': $route.path === '/commitment' }"
          @click="mobileMenuOpen = false">
          OUR COMMITMENT
        </NuxtLink>

        <!-- Mobile Careers -->
        <NuxtLink to="/careers"
          class="block font-medium text-gray-900 dark:text-gray-100 hover:text-[#fe4135] dark:hover:text-[#fe4135] py-2 transition-colors"
          :class="{ 'text-[#fe4135] dark:text-[#fe4135] underline': $route.path === '/careers' }"
          @click="mobileMenuOpen = false">
          CAREERS
        </NuxtLink>

        <!-- Mobile Contact Us -->
        <NuxtLink to="/contact"
          class="block w-full text-center px-4 py-3 bg-[#fe4135] hover:bg-[#dc2626] hover:shadow-lg hover:scale-105 dark:bg-[#fe4135] dark:hover:bg-[#dc2626] text-white font-medium rounded-lg transition-all duration-200"
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
const activeDropdown = ref(null)
const activeMobileDropdown = ref(null)
const mobileMenuOpen = ref(false)
const navVisible = ref(true)
const lastScrollY = ref(0)

// Get color mode from Nuxt's useColorMode composable
const colorMode = useColorMode()

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
    case 'expertise':
      return ['/engineering', '/construction', '/maintenance', '/oil-and-gas'].includes(route.path)
    case 'solutions':
      return ['/products-and-applications', '/corrosion-and-integrity-management', '/project-and-contract-management', '/manpower-services'].includes(route.path)
    case 'commitment':
      return route.path.startsWith('/commitment')
    default:
      return false
  }
}

// Dark mode functionality using Nuxt's color mode
const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
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
  if (!event.target.closest('.relative.group') && !event.target.closest('button')) {
    activeDropdown.value = null
  }
}

onMounted(() => {
  // Add scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true })
  lastScrollY.value = window.scrollY

  // Add click outside listener
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('scroll', handleScroll)
})
</script>