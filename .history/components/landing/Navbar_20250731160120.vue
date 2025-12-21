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
    :class="isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <header class="flex items-center justify-between py-8">
        <!-- Logo section -->
        <NuxtLink to="/" class="inline-block">
          <img src="assets/img/bot-logo.png" alt="Bot Integrated Services Logo" class="h-10 md:h-12 drop-shadow-lg" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center">
          <nav>
            <ul class="flex space-x-6 lg:space-x-16">
              <li v-for="item in menuitems" :key="item.title">
                <NuxtLink :to="item.path"
                  class="text-sm lg:text-base transition-colors duration-200 font-medium text-white hover:text-[#D2691E]">
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
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