<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

const colorMode = useColorMode();
const isScrolled = ref(false);
const isContactClicked = ref(false);
const lastScrollY = ref(0);
const isVisible = ref(true);

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light';
  }
});

// Always transparent navbar
const navbarBackgroundClass = computed(() => {
  return 'bg-transparent';
});

// Text color - always white for visibility on transparent background
const textColorClass = computed(() => {
  return 'text-white';
});

const progressBarColor = computed(() => {
  return 'bg-[#1A73E8]';
});

const menuitems = [
  { title: "COMPANY", path: "/who-we-are", hasDropdown: false },
  { title: "SERVICES", path: "/what-we-do", hasDropdown: true },
  { title: "INDUSTRIES", path: "/our-work", hasDropdown: false },
  { title: "TECHNOLOGIES", path: "/our-team", hasDropdown: false },
  { title: "CASE STUDIES", path: "/case-studies", hasDropdown: false },
];

const open = ref(false);

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // Hide navbar when scrolling down, show when scrolling up
  if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    isVisible.value = false;
  } else if (currentScrollY < lastScrollY.value) {
    isVisible.value = true;
  }

  // Show navbar when at top of page
  if (currentScrollY <= 10) {
    isVisible.value = true;
  }

  lastScrollY.value = currentScrollY;
  isScrolled.value = currentScrollY > 10;
};

const isContactHovered = ref(false);

const handleContactClick = () => {
  isContactClicked.value = true;
  setTimeout(() => {
    isContactClicked.value = false;
  }, 600);
};

const handleContactHover = (hovered) => {
  isContactHovered.value = hovered;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="fixed w-full z-50 top-0 left-0 right-0 transition-all duration-300 ease-in-out" :class="[
    navbarBackgroundClass,
    isVisible ? 'translate-y-0' : '-translate-y-full'
  ]">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <header class="flex items-center py-2">
        <!-- Left-aligned logo -->
        <NuxtLink to="/" class="inline-block">
          <img src="~/assets/img/tekfolio-logo-final6.svg" alt="Tekfolio Logo"
            class="h-16 md:h-18 drop-shadow-lg logo-mobile-desaturated" />
        </NuxtLink>

        <!-- Centered navigation container -->
        <div class="hidden md:flex flex-grow justify-center">
          <nav class="flex items-center">
            <ul class="flex space-x-6 lg:space-x-8">
              <li v-for="item in menuitems" :key="item.title">
                <NuxtLink :to="item.path"
                  class="text-sm lg:text-base transition-colors duration-200 flex items-center whitespace-nowrap font-medium"
                  :class="[
                    textColorClass,
                    'hover:text-[#1d8ad8]'
                  ]">
                  {{ item.title }}
                  <span v-if="item.hasDropdown" class="ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Right-aligned contact button and color toggle -->
        <div class="hidden md:flex items-center ml-auto">
          <NuxtLink to="/contact"
            class="px-4 py-2 rounded-md text-sm lg:text-base font-medium whitespace-nowrap transition-all duration-200 mr-12 relative overflow-hidden group"
            :class="[
              textColorClass,
              'border border-transparent bg-transparent',
              isContactClicked ? 'animate-pulse scale-95' : ''
            ]" @click="handleContactClick" @mouseenter="handleContactHover(true)"
            @mouseleave="handleContactHover(false)">
            CONTACT US

            <!-- Animated Border Progress - Default state (visible) -->
            <div class="absolute inset-0 rounded-md pointer-events-none">
              <!-- Top border -->
              <div class="absolute top-0 left-0 h-0.5 rounded-t-md transition-all duration-300 ease-out" :class="[
                progressBarColor,
                !isContactHovered && !isContactClicked ? 'w-full' : 'w-0'
              ]"></div>
              <!-- Right border -->
              <div class="absolute top-0 right-0 w-0.5 rounded-tr-md transition-all duration-300 ease-out delay-75"
                :class="[
                  progressBarColor,
                  !isContactHovered && !isContactClicked ? 'h-full' : 'h-0'
                ]"></div>
              <!-- Bottom border -->
              <div class="absolute bottom-0 right-0 h-0.5 rounded-br-md transition-all duration-300 ease-out delay-150"
                :class="[
                  progressBarColor,
                  !isContactHovered && !isContactClicked ? 'w-full' : 'w-0'
                ]"></div>
              <!-- Left border -->
              <div
                class="absolute bottom-0 left-0 w-0.5 rounded-bl-md transition-all duration-300 ease-out delay-[225ms]"
                :class="[
                  progressBarColor,
                  !isContactHovered && !isContactClicked ? 'h-full' : 'h-0'
                ]"></div>
            </div>

            <!-- Small dash underneath text on hover -->
            <div class="absolute bottom-0 right-4 h-0.5 bg-[#1A73E8] rounded-full transition-all duration-300 ease-out"
              :class="[
                isContactHovered ? 'w-8 opacity-100' : 'w-0 opacity-0'
              ]"></div>

            <!-- Ripple effect overlay -->
            <span v-if="isContactClicked" class="absolute inset-0 bg-white/20 rounded-md animate-ping"></span>
          </NuxtLink>

          <!-- Desktop Toggle Switch -->
          <ClientOnly v-if="!colorMode?.forced">
            <button @click="isDark = !isDark"
              class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              :class="isDark ? 'bg-[#1A73E8]' : 'bg-[#1A73E8]'">
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
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center ml-auto space-x-4">
          <!-- Mobile Toggle Switch -->
          <ClientOnly v-if="!colorMode?.forced" class="mr-2">
            <button @click="isDark = !isDark"
              class="relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              :class="isDark ? 'bg-blue-600' : 'bg-blue-600'">
              <!-- Toggle Circle with Icon -->
              <span
                class="inline-flex h-3 w-3 items-center justify-center transform rounded-full bg-white transition duration-300 ease-in-out"
                :class="isDark ? 'translate-x-5' : 'translate-x-1'">
                <!-- Sun Icon (visible in light mode) -->
                <svg v-if="!isDark" class="w-2 h-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd" />
                </svg>
                <!-- Moon Icon (visible in dark mode) -->
                <svg v-else class="w-2 h-2 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 716.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </span>
            </button>
            <template #fallback>
              <div class="w-9 h-5" />
            </template>
          </ClientOnly>

          <button @click="open = !open" :class="textColorClass">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-show="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
              <path v-show="open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </header>

      <!-- Mobile Menu -->
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <div v-show="open" class="md:hidden mt-2 py-2 rounded-lg shadow-lg bg-gray-900/90">
          <div v-for="item in menuitems" :key="item.title" class="block">
            <NuxtLink :to="item.path"
              class="block px-4 py-3 text-sm font-medium flex justify-between items-center text-gray-100 hover:text-blue-300"
              @click="open = false">
              {{ item.title }}
              <span v-if="item.hasDropdown">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </NuxtLink>
          </div>
          <div class="block px-4 py-3">
            <NuxtLink to="/contact"
              class="block px-4 py-2 rounded-md text-sm font-medium text-center relative overflow-hidden transition-all duration-200 group"
              :class="[
                isDark
                  ? 'text-[#1A73E8] hover:text-white border border-[#1A73E8] bg-transparent hover:bg-blue-700/10'
                  : 'bg-[#1A73E8] text-white hover:bg-[#1A73E8] border border-transparent',
                isContactClicked ? 'animate-pulse scale-95' : ''
              ]" @click="open = false; handleContactClick()" @mouseenter="handleContactHover(true)"
              @mouseleave="handleContactHover(false)">
              CONTACT US

              <!-- Mobile Animated Border Progress - Reverse logic -->
              <div class="absolute inset-0 rounded-md pointer-events-none">
                <!-- Top border -->
                <div class="absolute top-0 left-0 h-0.5 bg-[#1A73E8] rounded-t-md transition-all duration-300 ease-out"
                  :class="!isContactHovered && !isContactClicked ? 'w-full' : 'w-0'"></div>
                <!-- Right border -->
                <div
                  class="absolute top-0 right-0 w-0.5 bg-[#1A73E8] rounded-tr-md transition-all duration-300 ease-out delay-75"
                  :class="!isContactHovered && !isContactClicked ? 'h-full' : 'h-0'"></div>
                <!-- Bottom border -->
                <div
                  class="absolute bottom-0 right-0 h-0.5 bg-[#1A73E8] rounded-br-md transition-all duration-300 ease-out delay-150"
                  :class="!isContactHovered && !isContactClicked ? 'w-full' : 'w-0'"></div>
                <!-- Left border -->
                <div
                  class="absolute bottom-0 left-0 w-0.5 bg-[#1A73E8] rounded-bl-md transition-all duration-300 ease-out delay-[225ms]"
                  :class="!isContactHovered && !isContactClicked ? 'h-full' : 'h-0'"></div>
              </div>

              <!-- Mobile small dash underneath text on hover -->
              <div class="absolute bottom-0 right-4 h-0.5 bg-white rounded-full transition-all duration-300 ease-out"
                :class="[
                  isContactHovered ? 'w-8 opacity-100' : 'w-0 opacity-0'
                ]"></div>

              <!-- Mobile ripple effect -->
              <span v-if="isContactClicked" class="absolute inset-0 bg-white/20 rounded-md animate-ping"></span>
            </NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* Force transparent background */
.bg-transparent {
  background-color: transparent !important;
}

/* Active link styling - consistent blue for all screen sizes */
:deep(.router-link-active) {
  color: #2D9CDB !important;
  font-weight: 700;
}

/* Transitions */
a,
button {
  transition-property: color, background-color, border-color, transform;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mobile contrast */
@media (max-width: 767px) {
  .bg-gray-900\/90 a {
    color: #f3f4f6 !important;
  }
}

/* Custom animations */
@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }

  100% {
    transform: scale(4);
    opacity: 0;
  }
}

.animate-ripple {
  animation: ripple 0.6s cubic-bezier(0, 0, 0.2, 1);
}
</style>