<script setup>
import { computed, ref } from 'vue';

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light';
  }
});

const menuitems = [
  { title: "HOME", path: "/", hasDropdown: false },
  { title: "WHO WE ARE", path: "/who-we-are", hasDropdown: false },
  { title: "WHAT WE DO", path: "/what-we-do", hasDropdown: false },
  { title: "OUR WORK", path: "/our-work", hasDropdown: false },
  { title: "OUR TEAM", path: "/our-team", hasDropdown: false },
  { title: "BLOG & RESOURCES", path: "/blog", hasDropdown: false },
];

const open = ref(false);
</script>

<template>
  <div class="w-full bg-transparent">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <header class="flex items-center justify-between py-2 bg-transparent">
        <!-- Logo section -->
        <a href="/" class="inline-block">
          <img src="~/assets/img/tekfolio-logo-final6.svg" alt="Tekfolio Logo" class="h-16 md:h-18 drop-shadow-lg" />
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center">
          <ul class="flex items-center space-x-6 lg:space-x-8">
            <li v-for="item in menuitems" :key="item.title">
              <NuxtLink :to="item.path"
                class="text-sm lg:text-base transition-colors duration-200 flex items-center whitespace-nowrap font-medium text-white hover:text-blue-300">
                {{ item.title }}
              </NuxtLink>
            </li>
            <!-- Special Contact Us Button with margin -->
            <li class="ml-8 lg:ml-12"> <!-- Increased left margin for separation -->
              <NuxtLink to="/contact"
                class="text-sm lg:text-base px-4 py-2 rounded-lg font-medium transition-colors duration-200" :class="{
                  'bg-[#1D4ED8] text-white': !isDark,
                  'bg-blue-700 text-blue-100': isDark
                }">
                CONTACT US
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Color Mode Toggle -->
        <div class="hidden md:flex items-center ml-4"> <!-- Added margin to prevent overlap -->
          <ClientOnly v-if="!colorMode?.forced">
            <div style="background-color: #1D4ED8;" class="rounded-lg p-1">
              <UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" color="white" variant="ghost"
                class="text-white hover:text-blue-300" @click="isDark = !isDark" />
            </div>
            <template #fallback>
              <div class="size-8" />
            </template>
          </ClientOnly>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <ClientOnly v-if="!colorMode?.forced" class="mr-2">
            <div style="background-color: #1D4ED8;" class="rounded-lg p-0.5">
              <UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" color="white" variant="ghost" size="sm"
                class="text-white hover:text-blue-300" @click="isDark = !isDark" />
            </div>
            <template #fallback>
              <div class="size-6" />
            </template>
          </ClientOnly>

          <button @click="open = !open" class="focus:outline-none text-white">
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
              class="block px-4 py-3 text-sm font-medium flex justify-between items-center text-white hover:text-blue-300"
              @click="open = false">
              {{ item.title }}
            </NuxtLink>
          </div>
          <!-- Mobile Contact Us Button -->
          <div class="block">
            <NuxtLink to="/contact"
              class="block px-4 py-3 text-sm font-medium flex justify-between items-center bg-[#1D4ED8] text-white rounded mx-2 my-1"
              @click="open = false">
              CONTACT US
            </NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* Ensure all navbar elements are transparent */
.w-full,
.container,
header,
nav,
ul,
li,
a {
  background-color: transparent !important;
}

/* Force white text for navbar items */
.text-white {
  color: white !important;
}

/* Active link styling */
:deep(.router-link-active) {
  color: #60cbfa !important;
  font-weight: 700;
}

/* Mobile menu styles */
.bg-gray-900\/90 {
  background-color: rgba(17, 24, 39, 0.9) !important;
}

/* Transitions */
a,
button {
  transition-property: color, background-color, border-color;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>