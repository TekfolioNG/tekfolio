<script setup>
import { ref, computed } from 'vue';

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light';
  }
});

// Updated menu items with dropdown indicators
const menuitems = [
  { title: "Who We Are", path: "/who-we-are", hasDropdown: false },
  { title: "Our Services", path: "/what-we-do", hasDropdown: true },
  { title: "Our Work", path: "/projects", hasDropdown: false },
  { title: "Sectors", path: "/services", hasDropdown: true },
  { title: "Why PPIL", path: "/careers", hasDropdown: false },
  { title: "Contact Us", path: "/contact", hasDropdown: false },
];

const open = ref(false);
</script>

<template>
  <div class="fixed w-full z-50 top-0"
    :class="{ 'bg-white/90 backdrop-blur-sm shadow-md': !isDark, 'bg-gray-900/90 backdrop-blur-sm shadow-md': isDark }">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <header class="flex justify-between items-center py-4">
        <!-- Logo with improved contrast -->
        <a href="/" class="flex-shrink-0 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg shadow-sm">
          <img src="~/assets/img/PPIL Logo.svg" alt="PPIL Logo" class="h-16 md:h-20" />
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center">
          <div v-for="item in menuitems" :key="item.title" class="flex items-center">
            <NuxtLink :to="item.path"
              class="px-4 py-2 text-sm lg:text-base font-medium hover:text-primary transition-colors duration-200 flex items-center"
              :class="{ 'text-gray-900': !isDark, 'text-white': isDark }">
              {{ item.title }}
              <span v-if="item.hasDropdown" class="ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"
                  :class="{ 'text-gray-500': !isDark, 'text-white': isDark }">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </NuxtLink>
          </div>
        </nav>

        <!-- Color Mode Toggle with custom colors -->
        <div class="hidden md:flex items-center ml-4">
          <ClientOnly v-if="!colorMode?.forced">
            <button @click="isDark = !isDark" class="p-2 rounded-full focus:outline-none"
              :class="{ 'bg-transparent text-white': !isDark, 'bg-white text-blue-800': isDark }">
              <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
            <template #fallback>
              <div class="size-8" />
            </template>
          </ClientOnly>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <!-- Color Mode Toggle Mobile with custom colors -->
          <ClientOnly v-if="!colorMode?.forced" class="mr-2">
            <button @click="isDark = !isDark" class="p-1.5 rounded-full focus:outline-none"
              :class="{ 'bg-transparent text-white': !isDark, 'bg-white text-blue-800': isDark }">
              <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
            <template #fallback>
              <div class="size-6" />
            </template>
          </ClientOnly>

          <!-- Hamburger Menu -->
          <button @click="open = !open" class="focus:outline-none"
            :class="{ 'text-gray-900': !isDark, 'text-white': isDark }">
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
        <div v-show="open" class="md:hidden mt-2 py-2 rounded-lg shadow-lg"
          :class="{ 'bg-white/95': !isDark, 'bg-gray-900/95': isDark }">
          <div v-for="item in menuitems" :key="item.title" class="block">
            <NuxtLink :to="item.path" class="block px-4 py-3 text-sm font-medium flex justify-between"
              :class="{ 'text-gray-900 hover:text-primary': !isDark, 'text-white hover:text-yellow-400': isDark }"
              @click="open = false">
              {{ item.title }}
              <span v-if="item.hasDropdown">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"
                  :class="{ 'text-gray-500': !isDark, 'text-white': isDark }">
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