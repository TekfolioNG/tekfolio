<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

const colorMode = useColorMode();
const isScrolled = ref(false);

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light';
  }
});

const navbarBackgroundClass = computed(() => {
  if (!isScrolled.value) {
    return 'bg-transparent';
  }
  return isDark.value
    ? 'bg-gray-900/90'
    : 'bg-white/95';
});

const textColorClass = computed(() => {
  if (isDark.value) {
    return 'text-white';
  }
  return isScrolled.value ? 'text-gray-800' : 'text-white';
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
  isScrolled.value = window.scrollY > 10;
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
  <div class="fixed w-full z-50 top-0 left-0 right-0 transition-colors duration-300" :class="navbarBackgroundClass">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <header class="flex items-center py-2">
        <!-- Left-aligned logo -->
        <NuxtLink to="/" class="inline-block">
          <img src="~/assets/img/tekfolio-logo-final9.svg" alt="Tekfolio Logo"
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
                    'hover:text-[#4A9BC4] md:hover:text-[#1d8ad8]'
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
            class="px-4 py-2 rounded-md text-sm lg:text-base font-medium whitespace-nowrap transition-colors duration-200 mr-12"
            :class="[
              isDark
                ? 'text-white hover:text-white hover:bg-[#4A9BC4] md:hover:bg-[#1d8ad8] border border-[#4A9BC4] md:border-[#1d8ad8]'
                : 'bg-[#4A6FA5] md:bg-[#01348F] text-white hover:bg-[#4A9BC4] md:hover:bg-[#1d8ad8]'
            ]">
            CONTACT US
          </NuxtLink>

          <ClientOnly v-if="!colorMode?.forced">
            <div class="rounded-lg p-1 bg-[#4A6FA5] md:bg-[#01348F]">
              <UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" color="white" variant="ghost"
                class="text-white hover:text-white" @click="isDark = !isDark" />
            </div>
            <template #fallback>
              <div class="size-8" />
            </template>
          </ClientOnly>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center ml-auto">
          <ClientOnly v-if="!colorMode?.forced" class="mr-2">
            <div class="rounded-lg p-0.5 bg-[#5B7BB8] md:bg-[#1D4ED8]">
              <UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" color="white" variant="ghost" size="sm"
                class="text-white hover:text-[#A8C5E8] md:hover:text-blue-300" @click="isDark = !isDark" />
            </div>
            <template #fallback>
              <div class="size-6" />
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
              class="block px-4 py-3 text-sm font-medium flex justify-between items-center text-gray-100 hover:text-[#A8C5E8] md:hover:text-blue-300"
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
            <NuxtLink to="/contact" class="block px-4 py-2 rounded-md text-sm font-medium text-center" :class="[
              isDark
                ? 'text-[#7AA5CE] md:text-blue-700 hover:text-white hover:bg-[#7AA5CE] md:hover:bg-blue-700 border border-[#7AA5CE] md:border-blue-700'
                : 'bg-[#7AA5CE] md:bg-blue-700 text-white hover:bg-[#5B94C4] md:hover:bg-blue-800'
            ]" @click="open = false">
              CONTACT US
            </NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* Force transparent background only when not scrolled */
.bg-transparent {
  background-color: transparent !important;
}

/* Active link styling - desaturated for mobile */
:deep(.router-link-active) {
  color: #A8C5E8 !important;
  /* Desaturated for mobile */
  font-weight: 700;
}

/* Desktop active link styling */
@media (min-width: 768px) {
  :deep(.router-link-active) {
    color: #60cbfa !important;
    /* Original vibrant color for desktop */
  }
}

/* Transitions */
a,
button {
  transition-property: color, background-color, border-color;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mobile contrast */
@media (max-width: 767px) {
  .bg-gray-900\/90 a {
    color: #f3f4f6 !important;
  }

  /* Logo desaturation for mobile */
  .logo-mobile-desaturated {
    filter: saturate(0.7) brightness(0.95);
  }
}
</style>