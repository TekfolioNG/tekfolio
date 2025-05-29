<script setup>
// ... (keep all the script setup code the same as before) ...
</script>

<template>
  <div class="fixed w-full z-50 top-0 left-0 right-0 transition-colors duration-300" :class="navbarBackgroundClass">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <header class="flex items-center py-2">
        <!-- Left-aligned logo -->
        <NuxtLink to="/" class="inline-block">
          <img src="~/assets/img/tekfolio-logo-final6.svg" alt="Tekfolio Logo" class="h-16 md:h-18 drop-shadow-lg" />
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
                    'hover:text-blue-300'
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

        <!-- Right-aligned elements with adjusted contact button spacing -->
        <div class="hidden md:flex items-center ml-auto">
          <!-- Contact button moved left with mr-8 -->
          <NuxtLink to="/contact"
            class="px-4 py-2 rounded-md text-sm lg:text-base font-medium whitespace-nowrap transition-colors duration-200 mr-8"
            :class="[
              isDark
                ? 'text-blue-700 hover:text-white hover:bg-blue-700 border border-blue-700'
                : 'bg-blue-700 text-white hover:bg-blue-800'
            ]">
            CONTACT US
          </NuxtLink>

          <!-- Color mode toggle -->
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

        <!-- Mobile Menu Button (unchanged) -->
        <div class="md:hidden flex items-center ml-auto">
          <ClientOnly v-if="!colorMode?.forced" class="mr-2">
            <div style="background-color: #1D4ED8;" class="rounded-lg p-0.5">
              <UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" color="white" variant="ghost" size="sm"
                class="text-white hover:text-blue-300" @click="isDark = !isDark" />
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

      <!-- Mobile Menu (unchanged) -->
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
            <NuxtLink to="/contact" class="block px-4 py-2 rounded-md text-sm font-medium text-center" :class="[
              isDark
                ? 'text-blue-700 hover:text-white hover:bg-blue-700 border border-blue-700'
                : 'bg-blue-700 text-white hover:bg-blue-800'
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
/* ... (keep all style rules the same as before) ... */
</style>