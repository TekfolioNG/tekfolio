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
  { title: "CONTACT US", path: "/contact", hasDropdown: false },
];

const open = ref(false);
</script>

<template>
  <div class="fixed w-full z-50 top-0 left-0 right-0">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <header class="flex items-center justify-between py-2">
        <!-- Logo section -->
        <NuxtLink to="/" class="inline-block">
          <img src="~/assets/img/tekfolio-logo-final6.svg" alt="Tekfolio Logo" class="h-16 md:h-18 drop-shadow-lg" />
        </NuxtLink>

        <!-- Desktop Navigation - centered -->
        <nav class="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
          <ul class="flex space-x-6 lg:space-x-8">
            <li v-for="item in menuitems" :key="item.title">
              <NuxtLink :to="item.path"
                class="text-sm lg:text-base transition-colors duration-200 flex items-center whitespace-nowrap font-medium"
                :class="{
                  'text-white': true, // Force white text in both modes
                  'hover:text-blue-300': true
                }">
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

        <!-- Color Mode Toggle -->
        <div class="hidden md:flex items-center">
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
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* Force transparent background on all navbar elements */
.fixed,
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

/* Mobile menu styles (should have background when open) */
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

/* Mobile contrast */
@media (max-width: 767px) {

  .bg-transparent a,
  .bg-gray-900\/90 a {
    color: #f3f4f6 !important;
  }
}
</style>