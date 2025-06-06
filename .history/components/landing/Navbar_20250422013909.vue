<template>
  <div class="fixed w-full z-50 top-0 left-0 right-0">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <header class="flex items-center py-3">
        <!-- Logo section with reduced background effect -->
        <div class="w-1/3">
          <a href="/" class="flex-shrink-0 backdrop-blur-sm rounded-lg p-1">
            <img src="~/assets/img/PPIL Logo.svg" alt="PPIL Logo" class="h-14 md:h-16" :class="{ 'invert': isDark }" />
          </a>
        </div>

        <!-- Desktop Navigation - with more spacing between items -->
        <nav class="hidden md:flex items-center justify-center w-1/3">
          <ul class="flex space-x-6 lg:space-x-8">
            <li v-for="item in menuitems" :key="item.title">
              <NuxtLink :to="item.path"
                class="text-sm lg:text-base font-medium text-white hover:text-primary transition-colors duration-200 flex items-center whitespace-nowrap"
                :class="{ 'text-gray-900': !isDark, 'text-white': isDark }">
                {{ item.title }}
                <span v-if="item.hasDropdown" class="ml-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Color Mode Toggle - with blue background for moon icon -->
        <div class="hidden md:flex items-center justify-end w-1/3">
          <ClientOnly v-if="!colorMode?.forced">
            <div :class="{ 'bg-blue-600 rounded-lg p-1': isDark }">
              <UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" color="white" variant="ghost"
                class="text-white hover:text-primary" @click="isDark = !isDark" />
            </div>
            <template #fallback>
              <div class="size-8" />
            </template>
          </ClientOnly>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden ml-auto flex items-center">
          <!-- Color Mode Toggle Mobile -->
          <ClientOnly v-if="!colorMode?.forced" class="mr-2">
            <div :class="{ 'bg-blue-600 rounded-lg p-0.5': isDark }">
              <UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" color="white" variant="ghost" size="sm"
                class="text-white hover:text-primary" @click="isDark = !isDark" />
            </div>
            <template #fallback>
              <div class="size-6" />
            </template>
          </ClientOnly>

          <!-- Hamburger Menu -->
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

      <!-- Mobile Menu (unchanged) -->
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
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
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