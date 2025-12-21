<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-200/60 transition-all duration-300"
    :class="{ '-translate-y-full': !navVisible }">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
      <div class="flex justify-between items-center h-18 lg:h-24">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/"
            class="inline-block bg-white rounded-lg px-3 py-2 shadow-md hover:shadow-lg transition-shadow duration-200">
            <img src="/assets/img/literaforge-logo.png" alt="Syntanium Energy Logo" class="h-10 md:h-12 lg:h-16" />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation - Slightly Left of Center -->
        <div class="hidden lg:flex lg:items-center lg:absolute lg:left-[45%] lg:-translate-x-1/2 lg:space-x-6">
          <!-- About Us -->
          <NuxtLink to="/about-us"
            class="text-base text-white hover:text-[#4D7EFF] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#4D7EFF] pb-1 uppercase"
            :class="{ 'text-[#4D7EFF] border-[#4D7EFF]': route.path === '/about-us' }">
            About Us
          </NuxtLink>

          <!-- Business Solutions with Dropdown -->
          <div class="relative" @mouseenter="showSolutionsDropdown = true" @mouseleave="showSolutionsDropdown = false">
            <button
              class="text-base text-white hover:text-[#4D7EFF] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#4D7EFF] pb-1 flex items-center gap-1 uppercase"
              :class="{ 'text-[#4D7EFF] border-[#4D7EFF]': isSolutionsActive }">
              Business Solutions
              <Icon name="lucide:chevron-down" class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': showSolutionsDropdown }" />
            </button>

            <!-- Solutions Dropdown Menu -->
            <Transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <div v-show="showSolutionsDropdown"
                class="absolute left-0 mt-2 w-56 bg-gray-900/98 backdrop-blur-md border border-gray-200/60 rounded-lg shadow-xl overflow-hidden z-50">
                <NuxtLink to="/consulting"
                  class="block px-4 py-3 text-white hover:bg-gray-800 hover:text-[#4D7EFF] transition-colors duration-200"
                  :class="{ 'bg-gray-800 text-[#4D7EFF]': route.path === '/consulting' }">
                  Business Consulting
                </NuxtLink>
                <NuxtLink to="/business-restructuring"
                  class="block px-4 py-3 text-white hover:bg-gray-800 hover:text-[#4D7EFF] transition-colors duration-200"
                  :class="{ 'bg-gray-800 text-[#4D7EFF]': route.path === '/business-restructuring' }">
                  Business Restructuring
                </NuxtLink>
                <NuxtLink to="/strategic-planning"
                  class="block px-4 py-3 text-white hover:bg-gray-800 hover:text-[#4D7EFF] transition-colors duration-200"
                  :class="{ 'bg-gray-800 text-[#4D7EFF]': route.path === '/strategic-planning' }">
                  Strategic Planning
                </NuxtLink>
                <NuxtLink to="/operations-management"
                  class="block px-4 py-3 text-white hover:bg-gray-800 hover:text-[#4D7EFF] transition-colors duration-200"
                  :class="{ 'bg-gray-800 text-[#4D7EFF]': route.path === '/operations-management' }">
                  Operations Management
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <!-- Employee Productivity Training -->
          <NuxtLink to="/training"
            class="text-base text-white hover:text-[#4D7EFF] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#4D7EFF] pb-1 uppercase"
            :class="{ 'text-[#4D7EFF] border-[#4D7EFF]': route.path === '/training' }">
            Training
          </NuxtLink>

          <!-- Ghostwriting -->
          <NuxtLink to="/ghostwriting"
            class="text-base text-white hover:text-[#4D7EFF] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#4D7EFF] pb-1 uppercase"
            :class="{ 'text-[#4D7EFF] border-[#4D7EFF]': route.path === '/ghostwriting' }">
            Ghostwriting
          </NuxtLink>

          <!-- Publishing -->
          <NuxtLink to="/publishing"
            class="text-base text-white hover:text-[#4D7EFF] font-bold transition-colors duration-200 border-b-2 border-transparent hover:border-[#4D7EFF] pb-1 uppercase"
            :class="{ 'text-[#4D7EFF] border-[#4D7EFF]': route.path === '/publishing' }">
            Publishing
          </NuxtLink>
        </div>

        <!-- Right Side - Contact Button -->
        <div class="flex items-center space-x-4 lg:space-x-6 ml-auto">
          <!-- Contact Us - Desktop Only -->
          <NuxtLink to="/contact"
            class="hidden lg:inline-flex items-center px-5 py-2.5 bg-[#0246d5] hover:bg-[#0236b5] hover:shadow-lg hover:shadow-[#0246d5]/30 hover:scale-105 text-white font-medium rounded-lg transition-all duration-200 uppercase">
            Book A Clarity Session
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-lg text-white hover:bg-gray-800/80 hover:text-[#4D7EFF] transition-colors duration-200"
            aria-label="Toggle mobile menu">
            <Icon v-if="!mobileMenuOpen" name="lucide:menu" class="w-6 h-6" />
            <Icon v-else name="lucide:x" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div v-if="mobileMenuOpen" @click="mobileMenuOpen = false"
        class="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" :style="{ top: navHeight + 'px' }">
      </div>
    </Transition>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="mobileMenuOpen"
        class="lg:hidden fixed right-0 bg-gray-900/98 backdrop-blur-md border-l border-gray-200/60 overflow-y-auto z-50 w-80 max-w-full h-[calc(100vh-72px)]">
        <div class="px-4 py-6 space-y-1">
          <!-- Mobile About Us -->
          <NuxtLink to="/about-us"
            class="block font-medium text-white hover:text-[#4D7EFF] hover:bg-gray-800/50 px-3 py-3 rounded-lg transition-all uppercase"
            :class="{ 'text-[#4D7EFF] bg-gray-800/50': route.path === '/about-us' }" @click="closeMobileMenu">
            About Us
          </NuxtLink>

          <!-- Mobile Business Solutions Dropdown -->
          <div>
            <button @click="mobileSolutionsOpen = !mobileSolutionsOpen"
              class="w-full flex items-center justify-between font-medium text-white hover:text-[#4D7EFF] hover:bg-gray-800/50 px-3 py-3 rounded-lg transition-all uppercase"
              :class="{ 'text-[#4D7EFF] bg-gray-800/50': isSolutionsActive }">
              <span>Business Solutions</span>
              <Icon name="lucide:chevron-down" class="w-5 h-5 transition-transform duration-200"
                :class="{ 'rotate-180': mobileSolutionsOpen }" />
            </button>

            <!-- Mobile Solutions Dropdown Items -->
            <Transition name="expand">
              <div v-if="mobileSolutionsOpen" class="ml-4 mt-1 space-y-1">
                <NuxtLink to="/consulting"
                  class="block text-sm text-gray-300 hover:text-[#4D7EFF] hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all"
                  :class="{ 'text-[#4D7EFF] bg-gray-800/50': route.path === '/consulting' }" @click="closeMobileMenu">
                  Business Consulting
                </NuxtLink>
                <NuxtLink to="/business-restructuring"
                  class="block text-sm text-gray-300 hover:text-[#4D7EFF] hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all"
                  :class="{ 'text-[#4D7EFF] bg-gray-800/50': route.path === '/business-restructuring' }"
                  @click="closeMobileMenu">
                  Business Restructuring
                </NuxtLink>
                <NuxtLink to="/strategic-planning"
                  class="block text-sm text-gray-300 hover:text-[#4D7EFF] hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all"
                  :class="{ 'text-[#4D7EFF] bg-gray-800/50': route.path === '/strategic-planning' }"
                  @click="closeMobileMenu">
                  Strategic Planning
                </NuxtLink>
                <NuxtLink to="/operations-management"
                  class="block text-sm text-gray-300 hover:text-[#4D7EFF] hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all"
                  :class="{ 'text-[#4D7EFF] bg-gray-800/50': route.path === '/operations-management' }"
                  @click="closeMobileMenu">
                  Operations Management
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <!-- Mobile Ghostwriting -->
          <NuxtLink to="/ghostwriting"
            class="block font-medium text-white hover:text-[#4D7EFF] hover:bg-gray-800/50 px-3 py-3 rounded-lg transition-all uppercase"
            :class="{ 'text-[#4D7EFF] bg-gray-800/50': route.path === '/ghostwriting' }" @click="closeMobileMenu">
            Ghostwriting
          </NuxtLink>

          <!-- Mobile Employee Productivity Training -->
          <NuxtLink to="/training"
            class="block font-medium text-white hover:text-[#4D7EFF] hover:bg-gray-800/50 px-3 py-3 rounded-lg transition-all uppercase"
            :class="{ 'text-[#4D7EFF] bg-gray-800/50': route.path === '/training' }" @click="closeMobileMenu">
            Training
          </NuxtLink>

          <!-- Mobile Publishing -->
          <NuxtLink to="/publishing"
            class="block font-medium text-white hover:text-[#4D7EFF] hover:bg-gray-800/50 px-3 py-3 rounded-lg transition-all uppercase"
            :class="{ 'text-[#4D7EFF] bg-gray-800/50': route.path === '/publishing' }" @click="closeMobileMenu">
            Publishing
          </NuxtLink>

          <!-- Mobile Contact Button -->
          <NuxtLink to="/contact"
            class="block w-full text-center mt-6 px-4 py-3 bg-[#0246d5] hover:bg-[#0236b5] hover:shadow-lg text-white font-medium rounded-lg transition-all duration-200 uppercase"
            @click="closeMobileMenu">
            Book A Clarity Session
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
// Import Vue composables
import { computed, onMounted, onUnmounted, ref } from 'vue'

// Use Nuxt composables
const route = useRoute()

// Reactive state
const mobileMenuOpen = ref(false)
const mobileSolutionsOpen = ref(false)
const showSolutionsDropdown = ref(false)
const navVisible = ref(true)
const lastScrollY = ref(0)
const navHeight = ref(72) // Default height

// Check if any solutions route is active
const isSolutionsActive = computed(() => {
  return ['/consulting', '/business-restructuring', '/strategic-planning', '/operations-management'].includes(route.path)
})

// Navigation visibility on scroll
const handleScroll = () => {
  const currentScrollY = window.scrollY

  if (currentScrollY < 100) {
    navVisible.value = true
  } else if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    navVisible.value = false
    mobileMenuOpen.value = false
  } else if (currentScrollY < lastScrollY.value) {
    navVisible.value = true
  }

  lastScrollY.value = currentScrollY
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  // Reset dropdown when closing menu
  if (!mobileMenuOpen.value) {
    mobileSolutionsOpen.value = false
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  mobileSolutionsOpen.value = false
}

// Calculate nav height dynamically
const updateNavHeight = () => {
  const nav = document.querySelector('nav')
  if (nav) {
    navHeight.value = nav.offsetHeight
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  lastScrollY.value = window.scrollY
  updateNavHeight()

  // Update nav height on resize
  window.addEventListener('resize', updateNavHeight)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateNavHeight)
})
</script>

<style scoped>
/* Custom transitions for mobile menu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 200px;
}
</style>