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
    <!-- Top Contact Bar - Hidden on mobile -->
    <div class="hidden md:block bg-gray-900 text-white text-xs py-1.5 px-4">
      <div class="container mx-auto flex justify-end items-center space-x-6">
        <div class="flex items-center space-x-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>32 Owulade Street Irawo Bus Stop, Bako Estate, along Ikorodu Road Lagos</span>
        </div>
        <div class="flex items-center space-x-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a href="tel:+2348022007759" class="hover:text-[#D2691E] transition-colors">+234 802 200 7759</a>
        </div>
        <div class="flex items-center space-x-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div class="flex space-x-1">
            <a href="mailto:info@botintegrated.com"
              class="hover:text-[#D2691E] transition-colors">info@botintegrated.com</a>
            <span>/</span>
            <a href="mailto:support@botintegrated.com"
              class="hover:text-[#D2691E] transition-colors">support@botintegrated.com</a>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <header class="flex items-center justify-between py-4 md:py-6">
        <!-- Logo section -->
        <NuxtLink to="/" class="inline-block">
          <img src="assets/img/bot-logo.png" alt="Bot Integrated Services Logo" class="h-10 md:h-12 drop-shadow-lg" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center">
          <nav class="absolute left-1/2 transform -translate-x-1/2">
            <ul class="flex space-x-6 lg:space-x-16">
              <li v-for="item in menuitems" :key="item.title">
                <NuxtLink :to="item.path" class="text-sm lg:text-base transition-colors duration-200 font-medium"
                  :class="isScrolled ? 'text-gray-900 hover:text-[#D2691E]' : 'text-white hover:text-[#D2691E]'">
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Mobile Contact Button - Visible only on mobile -->
        <div class="md:hidden flex items-center space-x-4">
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
          <!-- Mobile Contact Info - Visible when menu is open -->
          <div class="px-4 py-3 border-b border-gray-200">
            <div class="flex items-start space-x-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p class="text-sm text-gray-700">32 Owulade Street Irawo Bus Stop, Bako Estate, along Ikorodu Road Lagos
              </p>
            </div>
            <div class="flex items-center space-x-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 flex-shrink-0" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+2348022007759" class="text-sm text-gray-700 hover:text-[#D2691E]">+234 802 200 7759</a>
            </div>
            <div class="flex items-start space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div class="flex flex-col">
                <a href="mailto:info@botintegrated.com"
                  class="text-sm text-gray-700 hover:text-[#D2691E]">info@botintegrated.com</a>
                <a href="mailto:support@botintegrated.com"
                  class="text-sm text-gray-700 hover:text-[#D2691E]">support@botintegrated.com</a>
              </div>
            </div>
          </div>

          <!-- Navigation Links -->
          <NuxtLink v-for="item in menuitems" :key="item.title" :to="item.path"
            class="block px-4 py-3 text-sm font-medium text-gray-900 hover:text-[#D2691E] transition-colors duration-200"
            @click="open = false">
            {{ item.title }}
          </NuxtLink>
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