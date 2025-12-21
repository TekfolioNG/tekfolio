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

        <!-- Desktop Navigation - Centered -->
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

        <!-- Contact Info (Desktop) - Top Right -->
        <div class="hidden lg:block">
          <div class="px-4 py-3 rounded-lg backdrop-blur-md border text-right max-w-xs"
            :class="isScrolled ? 'bg-gray-900/85 text-white border-gray-600' : 'bg-white/25 text-white border-white/40'">
            <div class="space-y-1">
              <!-- Address -->
              <div class="text-sm leading-tight">
                <div class="font-medium">32 Owulade Street Irawo Bus Stop,</div>
                <div>Bako Estate, along Ikorodu Road Lagos</div>
              </div>

              <!-- Phone -->
              <div class="pt-1">
                <a href="tel:+2348022007759"
                  class="text-sm font-medium hover:text-[#D2691E] transition-colors duration-200 flex items-center justify-end space-x-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+234 802 200 7759</span>
                </a>
              </div>

              <!-- Emails -->
              <div class="space-y-0.5">
                <a href="mailto:info@botintegrated.com"
                  class="block text-sm hover:text-[#D2691E] transition-colors duration-200 flex items-center justify-end space-x-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@botintegrated.com</span>
                </a>
                <a href="mailto:support@botintegrated.com"
                  class="block text-sm hover:text-[#D2691E] transition-colors duration-200 flex items-center justify-end space-x-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>support@botintegrated.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Info (Medium screens) - Simplified -->
        <div class="hidden md:block lg:hidden">
          <div class="px-3 py-2 rounded-lg backdrop-blur-md border text-right"
            :class="isScrolled ? 'bg-gray-900/85 text-white border-gray-600' : 'bg-white/25 text-white border-white/40'">
            <div class="space-y-1">
              <a href="tel:+2348022007759"
                class="block text-sm font-medium hover:text-[#D2691E] transition-colors duration-200 flex items-center justify-end space-x-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+234 802 200 7759</span>
              </a>
              <a href="mailto:info@botintegrated.com"
                class="block text-sm hover:text-[#D2691E] transition-colors duration-200 flex items-center justify-end space-x-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@botintegrated.com</span>
              </a>
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
        <div v-show="open" class="md:hidden mt-2 rounded-lg shadow-lg bg-white/95 overflow-hidden">
          <!-- Navigation Links -->
          <div class="py-2">
            <NuxtLink v-for="item in menuitems" :key="item.title" :to="item.path"
              class="block px-4 py-3 text-sm font-medium text-gray-900 hover:text-[#D2691E] transition-colors duration-200"
              @click="open = false">
              {{ item.title }}
            </NuxtLink>
          </div>

          <!-- Contact Details for Mobile -->
          <div class="border-t border-gray-200 bg-gray-50/90 p-4">
            <h3 class="font-semibold text-gray-900 text-sm mb-3 flex items-center">
              <svg class="w-4 h-4 mr-2 text-[#D2691E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Info
            </h3>

            <div class="space-y-3">
              <div>
                <p class="text-xs font-medium text-gray-700 mb-1">Office Address</p>
                <p class="text-sm text-gray-600 leading-relaxed">32 Owulade Street Irawo Bus Stop, Bako Estate, along
                  Ikorodu Road Lagos</p>
              </div>

              <div>
                <p class="text-xs font-medium text-gray-700 mb-1">Tel</p>
                <a href="tel:+2348022007759" class="text-sm text-gray-600 hover:text-[#D2691E] transition-colors">+234
                  802 200 7759</a>
              </div>

              <div>
                <p class="text-xs font-medium text-gray-700 mb-1">E-mail</p>
                <div class="space-y-1">
                  <a href="mailto:info@botintegrated.com"
                    class="block text-sm text-gray-600 hover:text-[#D2691E] transition-colors">info@botintegrated.com</a>
                  <a href="mailto:support@botintegrated.com"
                    class="block text-sm text-gray-600 hover:text-[#D2691E] transition-colors">support@botintegrated.com</a>
                </div>
              </div>
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