<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-200/60 transition-all duration-300"
    :class="{ '-translate-y-full': !navVisible }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-18 lg:h-24">
        <!-- Logo and Company Name -->
        <div class="flex-shrink-0 flex items-center">
          <div class="flex items-center space-x-3">
            <!-- Logo section -->
            <NuxtLink to="/" class="inline-block">
              <img src="/assets/img/elevation-logo2.png" alt="Syntanium Energy Logo"
                class="h-12 md:h-12 lg:h-16 drop-shadow-lg" />
            </NuxtLink>
          </div>
        </div>
        <!-- Desktop Navigation - Centered -->
        <div class="hidden lg:flex lg:items-center lg:justify-center lg:flex-1 lg:space-x-4">
          <!-- Who We Are - Simple Link -->
          <NuxtLink to="/who-we-are"
            class="text-base text-white hover:text-[#00D4FF] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#00D4FF] pb-1"
            :class="{ 'text-[#00D4FF] border-[#00D4FF]': $route.path === '/who-we-are' }">
            WHO WE ARE
          </NuxtLink>

          <!-- Our Expertise (renamed from Solutions & Expertise) -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 text-base text-white hover:text-[#00D4FF] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#00D4FF] pb-1"
              :class="{ 'text-[#00D4FF] border-[#00D4FF]': isActiveSection('expertise') }"
              @click="toggleDropdown('expertise')">
              <span>OUR EXPERTISE</span>
              <Icon name="lucide:chevron-down" class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === 'expertise' }" />
            </button>
            <div v-show="activeDropdown === 'expertise'"
              class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200/60 py-4 z-50">
              <div class="grid grid-cols-2 gap-2 px-2">
                <!-- Engineering -->
                <NuxtLink to="/engineering"
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-cyan-50/80 transition-colors cursor-pointer group/item"
                  @click="activeDropdown = null">
                  <Icon name="lucide:hard-hat" class="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4 class="font-semibold text-[#00D4FF] group-hover/item:text-[#00B8E6] text-sm">
                      Engineering</h4>
                    <p class="text-xs text-gray-600 mt-1">Equipment & Project Management</p>
                  </div>
                </NuxtLink>
                <!-- Construction -->
                <NuxtLink to="/construction"
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-cyan-50/80 transition-colors cursor-pointer group/item"
                  @click="activeDropdown = null">
                  <Icon name="lucide:building" class="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4 class="font-semibold text-[#00D4FF] group-hover/item:text-[#00B8E6] text-sm">
                      Construction</h4>
                    <p class="text-xs text-gray-600 mt-1">Turnkey & Industrial Solutions</p>
                  </div>
                </NuxtLink>
                <!-- Maintenance -->
                <NuxtLink to="/maintenance"
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-cyan-50/80 transition-colors cursor-pointer group/item"
                  @click="activeDropdown = null">
                  <Icon name="lucide:settings" class="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4 class="font-semibold text-[#00D4FF] group-hover/item:text-[#00B8E6] text-sm">
                      Maintenance</h4>
                    <p class="text-xs text-gray-600 mt-1">Asset Integrity & Services</p>
                  </div>
                </NuxtLink>
                <!-- Oil & Gas -->
                <NuxtLink to="/oil-and-gas"
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-cyan-50/80 transition-colors cursor-pointer group/item"
                  @click="activeDropdown = null">
                  <Icon name="lucide:droplets" class="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4 class="font-semibold text-[#00D4FF] group-hover/item:text-[#00B8E6] text-sm">
                      Oil & Gas Solutions</h4>
                    <p class="text-xs text-gray-600 mt-1">Petrochemical & Marine Operations</p>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Our Solutions (new dropdown) -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 text-base text-white hover:text-[#00D4FF] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#00D4FF] pb-1"
              :class="{ 'text-[#00D4FF] border-[#00D4FF]': isActiveSection('solutions') }"
              @click="toggleDropdown('solutions')">
              <span>OUR SOLUTIONS</span>
              <Icon name="lucide:chevron-down" class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === 'solutions' }" />
            </button>
            <div v-show="activeDropdown === 'solutions'"
              class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200/60 py-4 z-50">
              <div class="grid grid-cols-2 gap-2 px-2">
                <!-- Products & Applications -->
                <NuxtLink to="/products-applications"
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-cyan-50/80 transition-colors cursor-pointer group/item"
                  @click="activeDropdown = null">
                  <Icon name="lucide:beaker" class="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4 class="font-semibold text-[#00D4FF] group-hover/item:text-[#00B8E6] text-sm">
                      Products & Applications</h4>
                    <p class="text-xs text-gray-600 mt-1">Specialty chemicals and coatings</p>
                  </div>
                </NuxtLink>
                <!-- Corrosion & Integrity Management -->
                <NuxtLink to="/corrosion-integrity-management"
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-cyan-50/80 transition-colors cursor-pointer group/item"
                  @click="activeDropdown = null">
                  <Icon name="lucide:shield-half" class="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4 class="font-semibold text-[#00D4FF] group-hover/item:text-[#00B8E6] text-sm">
                      Corrosion & Integrity Management</h4>
                    <p class="text-xs text-gray-600 mt-1">Asset protection and renewal</p>
                  </div>
                </NuxtLink>
                <!-- Marine-Vessels -->
                <NuxtLink to="/marine-vessel"
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-cyan-50/80 transition-colors cursor-pointer group/item"
                  @click="activeDropdown = null">
                  <Icon name="lucide:ship" class="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4 class="font-semibold text-[#00D4FF] group-hover/item:text-[#00B8E6] text-sm">
                      Marine Vessel Operations</h4>
                    <p class="text-xs text-gray-600 mt-1">Offshore transport and logistics</p>
                  </div>
                </NuxtLink>
                <!-- Supply Chain Management -->
                <NuxtLink to="/supply-chain"
                  class="flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-cyan-50/80 transition-colors cursor-pointer group/item"
                  @click="activeDropdown = null">
                  <Icon name="lucide:forklift" class="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h4 class="font-semibold text-[#00D4FF] group-hover/item:text-[#00B8E6] text-sm">
                      Supply Chain Management</h4>
                    <p class="text-xs text-gray-600 mt-1">Efficient movement of resources</p>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Commitment-->
          <NuxtLink to="/commitment"
            class="text-base text-white hover:text-[#00D4FF] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#00D4FF] pb-1"
            :class="{ 'text-[#00D4FF] border-[#00D4FF]': $route.path === '/commitment' }">
            OUR COMMITMENT
          </NuxtLink>

          <!-- Careers -->
          <NuxtLink to="/careers"
            class="text-base text-white hover:text-[#00D4FF] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#00D4FF] pb-1"
            :class="{ 'text-[#00D4FF] border-[#00D4FF]': $route.path === '/careers' }">
            CAREERS
          </NuxtLink>
        </div>

        <!-- Right Side - Contact Us -->
        <div class="flex items-center space-x-4 lg:space-x-6 ml-6 lg:ml-10">
          <!-- Contact Us - Desktop Only -->
          <NuxtLink to="/contact"
            class="hidden lg:inline-flex items-center px-5 py-2.5 bg-[#00D4FF] hover:bg-[#00B8E6] hover:shadow-lg hover:scale-105 text-gray-900 font-medium rounded-lg transition-all duration-200">
            Contact Us
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-lg text-white hover:bg-gray-800/80 hover:text-[#00D4FF] transition-colors duration-200"
            aria-label="Toggle mobile menu">
            <Icon v-if="!mobileMenuOpen" name="lucide:menu" class="w-6 h-6" />
            <Icon v-else name="lucide:x" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="mobileMenuOpen"
      class="lg:hidden absolute right-0 bg-gray-900/95 w-2/3 h-screen backdrop-blur-md border-t border-gray-200/60 z-10">
      <div class="px-4 py-6 space-y-6">
        <!-- Mobile Who We Are - Simple Link -->
        <NuxtLink to="/who-we-are" class="block font-medium text-white hover:text-[#00D4FF] py-2 transition-colors"
          :class="{ 'text-[#00D4FF] underline': $route.path === '/who-we-are' }" @click="mobileMenuOpen = false">
          WHO WE ARE
        </NuxtLink>

        <!-- Mobile Our Expertise (renamed) -->
        <div>
          <button @click="toggleMobileDropdown('expertise')"
            class="w-full flex items-center justify-between text-left font-medium text-white py-2 hover:text-[#00D4FF] transition-colors"
            :class="{ 'text-[#00D4FF]': isActiveSection('expertise') }">
            <span>OUR EXPERTISE</span>
            <Icon name="lucide:chevron-down" class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': activeMobileDropdown === 'expertise' }" />
          </button>
          <div v-show="activeMobileDropdown === 'expertise'" class="mt-3 ml-4 space-y-4">
            <!-- Engineering -->
            <NuxtLink to="/engineering" class="flex items-center space-x-3 py-2 hover:text-[#00B8E6] transition-colors"
              @click="mobileMenuOpen = false; activeMobileDropdown = null">
              <Icon name="lucide:hard-hat" class="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#00D4FF]">Engineering</h5>
                <p class="text-sm text-gray-400">Equipment & Project Management</p>
              </div>
            </NuxtLink>
            <!-- Construction -->
            <NuxtLink to="/construction" class="flex items-center space-x-3 py-2 hover:text-[#00B8E6] transition-colors"
              @click="mobileMenuOpen = false; activeMobileDropdown = null">
              <Icon name="lucide:building" class="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#00D4FF]">Construction</h5>
                <p class="text-sm text-gray-400">Turnkey & Industrial Solutions</p>
              </div>
            </NuxtLink>
            <!-- Maintenance -->
            <NuxtLink to="/maintenance" class="flex items-center space-x-3 py-2 hover:text-[#00B8E6] transition-colors"
              @click="mobileMenuOpen = false; activeMobileDropdown = null">
              <Icon name="lucide:settings" class="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#00D4FF]">Maintenance</h5>
                <p class="text-sm text-gray-400">Asset Integrity & Services</p>
              </div>
            </NuxtLink>
            <!-- Oil & Gas -->
            <NuxtLink to="/oil-and-gas" class="flex items-center space-x-3 py-2 hover:text-[#00B8E6] transition-colors"
              @click="mobileMenuOpen = false; activeMobileDropdown = null">
              <Icon name="lucide:droplets" class="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#00D4FF]">Oil & Gas Solutions</h5>
                <p class="text-sm text-gray-400">Petrochemical & Marine Operations</p>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile Our Solutions (new) -->
        <div>
          <button @click="toggleMobileDropdown('solutions')"
            class="w-full flex items-center justify-between text-left font-medium text-white py-2 hover:text-[#00D4FF] transition-colors"
            :class="{ 'text-[#00D4FF]': isActiveSection('solutions') }">
            <span>OUR SOLUTIONS</span>
            <Icon name="lucide:chevron-down" class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': activeMobileDropdown === 'solutions' }" />
          </button>
          <div v-show="activeMobileDropdown === 'solutions'" class="mt-3 ml-4 space-y-4">
            <!-- Products & Applications -->
            <NuxtLink to="/products-applications"
              class="flex items-center space-x-3 py-2 hover:text-[#00B8E6] transition-colors"
              @click="mobileMenuOpen = false; activeMobileDropdown = null">
              <Icon name="lucide:beaker" class="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#00D4FF]">Products & Applications</h5>
                <p class="text-sm text-gray-400">Specialty chemicals and coatings</p>
              </div>
            </NuxtLink>
            <!-- Corrosion & Integrity Management -->
            <NuxtLink to="/corrosion-integrity-management"
              class="flex items-center space-x-3 py-2 hover:text-[#00B8E6] transition-colors"
              @click="mobileMenuOpen = false; activeMobileDropdown = null">
              <Icon name="lucide:shield-half" class="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#00D4FF]">Corrosion & Integrity Management</h5>
                <p class="text-sm text-gray-400">Asset protection and renewal</p>
              </div>
            </NuxtLink>
            <!-- Marine-Vessel-Operations -->
            <NuxtLink to="/marine-vessel"
              class="flex items-center space-x-3 py-2 hover:text-[#00B8E6] transition-colors"
              @click="mobileMenuOpen = false; activeMobileDropdown = null">
              <Icon name="lucide:clipboard-list" class="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#00D4FF]">Marine Vessel Operations</h5>
                <p class="text-sm text-gray-400">Offshore transport and logistics</p>
              </div>
            </NuxtLink>
            <!-- Supply-Chain-Mgt -->
            <NuxtLink to="/supply-chain" class="flex items-center space-x-3 py-2 hover:text-[#00B8E6] transition-colors"
              @click="mobileMenuOpen = false; activeMobileDropdown = null">
              <Icon name="lucide:users" class="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
              <div>
                <h5 class="font-semibold text-[#00D4FF]">Supply Chain Management</h5>
                <p class="text-sm text-gray-400">Efficient movement of resources</p>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile Commitment -->
        <NuxtLink to="/commitment" class="block font-medium text-white hover:text-[#00D4FF] py-2 transition-colors"
          :class="{ 'text-[#00D4FF] underline': $route.path === '/commitment' }" @click="mobileMenuOpen = false">
          OUR COMMITMENT
        </NuxtLink>

        <!-- Mobile Careers -->
        <NuxtLink to="/careers" class="block font-medium text-white hover:text-[#00D4FF] py-2 transition-colors"
          :class="{ 'text-[#00D4FF] underline': $route.path === '/careers' }" @click="mobileMenuOpen = false">
          CAREERS
        </NuxtLink>

        <!-- Mobile Contact Us -->
        <NuxtLink to="/contact"
          class="block w-full text-center px-4 py-3 bg-[#00D4FF] hover:bg-[#00B8E6] hover:shadow-lg hover:scale-105 text-gray-900 font-medium rounded-lg transition-all duration-200"
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
      return ['/products-applications', '/corrosion-integrity-management', '/project-and-contract-management', '/manpower-services'].includes(route.path)
    case 'commitment':
      return route.path.startsWith('/commitment')
    default:
      return false
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