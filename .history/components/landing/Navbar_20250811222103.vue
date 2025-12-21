<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const menuitems = [
  { title: "HOME", path: "/" },
  { title: "TRAVEL", path: "/travel" },
  { title: "PROPERTIES", path: "/properties" },
  { title: "OIL & GAS", path: "/oil-gas" },
  { title: "CONTACT", path: "/contact" },
];

const open = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="fixed w-full z-50 top-0 left-0 right-0 transition-all duration-300"
    :class="isScrolled ? 'bg-white/90 shadow-lg' : 'bg-transparent'">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <header class="flex items-center justify-between py-4 md:py-6">
        <!-- Logo section -->
        <NuxtLink to="/" class="inline-block">
          <img src="assets/img/bot-logo.png" alt="Bot Integrated Services Logo" class="h-10 md:h-12 drop-shadow-lg" />
        </NuxtLink>

        <!-- Desktop Navigation with Contact Info -->
        <div class="hidden md:flex items-center space-x-8 lg:space-x-12">
          <nav class="absolute left-1/2 transform -translate-x-1/2">
            <ul class="flex space-x-6 lg:space-x-8">
              <li v-for="item in menuitems" :key="item.title">
                <NuxtLink :to="item.path" class="text-sm lg:text-base transition-colors duration-200 font-medium"
                  :class="isScrolled ? 'text-gray-900 hover:text-[#D2691E]' : 'text-white hover:text-[#D2691E]'">
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <!-- Contact Info - Stacked in top right -->
          <div class="ml-4 pl-4 border-l border-gray-200/50">
            <div class="text-right space-y-1">
              <div class="flex items-center justify-end space-x-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5"
                  :class="isScrolled ? 'text-gray-600' : 'text-gray-300'" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+2348022007759"
                  :class="isScrolled ? 'text-gray-700 hover:text-[#D2691E]' : 'text-gray-200 hover:text-white'"
                  class="text-sm font-medium transition-colors">
                  +234 805 524 406, 0802 200 7759
                </a>
              </div>
              <div class="flex items-center justify-end space-x-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5"
                  :class="isScrolled ? 'text-gray-600' : 'text-gray-300'" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@botintegrated.com"
                  :class="isScrolled ? 'text-gray-700 hover:text-[#D2691E]' : 'text-gray-200 hover:text-white'"
                  class="text-sm font-medium transition-colors">
                  info@botintegrated.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button @click="open = !open" class="focus:outline-none transition-colors duration-200"
            :class="isScrolled ? 'text-gray-900' : 'text-white'">
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
        <div v-show="open" class="md:hidden mt-2 py-2 rounded-lg shadow-lg bg-white/95">
          <NuxtLink v-for="item in menuitems" :key="item.title" :to="item.path"
            class="block px-4 py-3 text-sm font-medium text-gray-900 hover:text-[#D2691E] transition-colors duration-200"
            @click="open = false">
            {{ item.title }}
          </NuxtLink>

          <!-- Mobile Contact Info -->
          <div class="px-4 py-3 border-t border-gray-200 mt-2">
            <div class="flex items-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+2348022007759" class="text-xs text-gray-700 hover:text-[#D2691E]">+234 802 200 7759</a>
            </div>
            <div class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@botintegrated.com"
                class="text-xs text-gray-700 hover:text-[#D2691E]">info@botintegrated.com</a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* Active link - only for exact matches */
:deep(.router-link-exact-active) {
  color: #D2691E !important;
  font-weight: 600;
}

/* Prevent non-exact active links from getting the active color */
:deep(.router-link-active:not(.router-link-exact-active)) {
  color: inherit;
  font-weight: inherit;
}

/* Transitions */
a,
button {
  transition-property: color, background-color, border-color, transform, box-shadow;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>