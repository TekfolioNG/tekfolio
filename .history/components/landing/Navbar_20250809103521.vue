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
      <header class="flex items-center justify-between py-8">
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

        <!-- Contact Info (Desktop) -->
        <div class="hidden lg:block relative">
          <button @click="showContactDetails = !showContactDetails"
            class="flex items-center space-x-2 px-4 py-2 rounded-lg backdrop-blur-md border transition-all duration-200"
            :class="isScrolled ? 'bg-gray-900/90 text-white border-gray-700 hover:bg-gray-800/90' : 'bg-white/20 text-white border-white/30 hover:bg-white/30'">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span class="text-sm font-medium">Contact</span>
            <svg class="w-4 h-4 transition-transform duration-200" :class="showContactDetails ? 'rotate-180' : ''"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Contact Details Dropdown -->
          <transition enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 scale-95 translate-y-2"
            enter-to-class="transform opacity-100 scale-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="transform opacity-100 scale-100 translate-y-0"
            leave-to-class="transform opacity-0 scale-95 translate-y-2">
            <div v-show="showContactDetails"
              class="absolute right-0 mt-2 w-80 rounded-xl shadow-xl backdrop-blur-md border overflow-hidden"
              :class="isScrolled ? 'bg-white/95 border-gray-200' : 'bg-white/95 border-white/20'">
              <div class="p-4 space-y-3">
                <!-- Office Address -->
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0 mt-0.5">
                    <svg class="w-5 h-5 text-[#D2691E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 text-sm">Office Address</h4>
                    <p class="text-xs text-gray-600 leading-relaxed">32 Owulade Street Irawo Bus Stop,<br>Bako Estate,
                      along Ikorodu Road Lagos</p>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0 mt-0.5">
                    <svg class="w-5 h-5 text-[#D2691E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 text-sm">Tel</h4>
                    <a href="tel:+2348022007759"
                      class="text-xs text-gray-600 hover:text-[#D2691E] transition-colors duration-200">+234 802 200
                      7759</a>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0 mt-0.5">
                    <svg class="w-5 h-5 text-[#D2691E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 text-sm">E-mail</h4>
                    <div class="space-y-1">
                      <a href="mailto:info@botintegrated.com"
                        class="block text-xs text-gray-600 hover:text-[#D2691E] transition-colors duration-200">info@botintegrated.com</a>
                      <a href="mailto:support@botintegrated.com"
                        class="block text-xs text-gray-600 hover:text-[#D2691E] transition-colors duration-200">support@botintegrated.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!-- Contact Info Button (Medium screens) -->
        <div class="hidden md:block lg:hidden">
          <button @click="showContactDetails = !showContactDetails"
            class="p-2 rounded-lg backdrop-blur-md border transition-all duration-200"
            :class="isScrolled ? 'bg-gray-900/90 text-white border-gray-700 hover:bg-gray-800/90' : 'bg-white/20 text-white border-white/30 hover:bg-white/30'">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>

          <!-- Contact Details Dropdown for Medium screens -->
          <transition enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 scale-95 translate-y-2"
            enter-to-class="transform opacity-100 scale-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="transform opacity-100 scale-100 translate-y-0"
            leave-to-class="transform opacity-0 scale-95 translate-y-2">
            <div v-show="showContactDetails"
              class="absolute right-4 mt-2 w-72 rounded-xl shadow-xl backdrop-blur-md border overflow-hidden"
              :class="isScrolled ? 'bg-white/95 border-gray-200' : 'bg-white/95 border-white/20'">
              <div class="p-4 space-y-3">
                <!-- Same content as large screen but slightly smaller -->
                <div class="flex items-start space-x-2">
                  <svg class="w-4 h-4 text-[#D2691E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 class="font-medium text-gray-900 text-xs">Office Address</h4>
                    <p class="text-xs text-gray-600 leading-relaxed">32 Owulade Street Irawo Bus Stop, Bako Estate,
                      along Ikorodu Road Lagos</p>
                  </div>
                </div>

                <div class="flex items-start space-x-2">
                  <svg class="w-4 h-4 text-[#D2691E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 class="font-medium text-gray-900 text-xs">Tel</h4>
                    <a href="tel:+2348022007759"
                      class="text-xs text-gray-600 hover:text-[#D2691E] transition-colors duration-200">+234 802 200
                      7759</a>
                  </div>
                </div>

                <div class="flex items-start space-x-2">
                  <svg class="w-4 h-4 text-[#D2691E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 class="font-medium text-gray-900 text-xs">E-mail</h4>
                    <div class="space-y-1">
                      <a href="mailto:info@botintegrated.com"
                        class="block text-xs text-gray-600 hover:text-[#D2691E] transition-colors duration-200">info@botintegrated.com</a>
                      <a href="mailto:support@botintegrated.com"
                        class="block text-xs text-gray-600 hover:text-[#D2691E] transition-colors duration-200">support@botintegrated.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
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

            <div class="space-y-2">
              <div>
                <p class="text-xs font-medium text-gray-700">Office Address</p>
                <p class="text-xs text-gray-600">32 Owulade Street Irawo Bus Stop, Bako Estate, along Ikorodu Road Lagos
                </p>
              </div>

              <div>
                <p class="text-xs font-medium text-gray-700">Tel</p>
                <a href="tel:+2348022007759" class="text-xs text-gray-600 hover:text-[#D2691E]">+234 802 200 7759</a>
              </div>

              <div>
                <p class="text-xs font-medium text-gray-700">E-mail</p>
                <div class="space-y-1">
                  <a href="mailto:info@botintegrated.com"
                    class="block text-xs text-gray-600 hover:text-[#D2691E]">info@botintegrated.com</a>
                  <a href="mailto:support@botintegrated.com"
                    class="block text-xs text-gray-600 hover:text-[#D2691E]">support@botintegrated.com</a>
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

/* Custom scrollbar for contact dropdown if needed */
.contact-dropdown::-webkit-scrollbar {
  width: 4px;
}

.contact-dropdown::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}

.contact-dropdown::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}
</style>