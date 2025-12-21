<script setup>
import { ref } from 'vue';

const menuitems = [
  { title: "HOME", path: "/", hasDropdown: false },
  { title: "ABOUT US", path: "/#", hasDropdown: false },
  {
    title: "OUR WORK", path: "/#", hasDropdown: true, subitems: [
      {
        title: "Climate-Smart Agriculture",
        path: "/climate-smart-agriculture",
        description: "Innovative farming techniques that increase productivity while reducing environmental impact and building resilience to climate change."
      },
      {
        title: "Carbon Sequestration",
        path: "/carbon-sequestration",
        description: "Advanced methods to capture and store atmospheric carbon dioxide, helping mitigate climate change through natural solutions."
      },
      {
        title: "Ecofuel Briquettes",
        path: "/ecofuel-briquettes",
        description: "Sustainable biomass fuel alternatives that provide clean energy while reducing waste and deforestation."
      }
    ]
  },
  { title: "SERVICES", path: "/services", hasDropdown: false },
  { title: "CONTACT US", path: "/contact", hasDropdown: false },
];

const open = ref(false);
const dropdownOpen = ref(false);
</script>

<template>
  <div class="absolute w-full z-50 top-0 left-0 right-0">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <header class="flex items-center justify-between py-8">
        <!-- Logo section with increased size -->
        <NuxtLink to="/" class="inline-block">
          <img src="~/assets/img/veaverde-logo.png" alt="VeraVerde Logo" class="h-18 md:h-24 drop-shadow-lg" />
        </NuxtLink>

        <!-- Desktop Navigation - center fixed with reduced height -->
        <nav class="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-8">
          <ul class="flex space-x-6 lg:space-x-8">
            <li v-for="item in menuitems" :key="item.title" class="relative">
              <NuxtLink v-if="!item.hasDropdown" :to="item.path"
                class="text-sm lg:text-base transition-colors duration-200 flex items-center whitespace-nowrap font-medium text-white hover:text-[#99cc33]">
                {{ item.title }}
              </NuxtLink>

              <!-- Dropdown trigger -->
              <div v-else class="relative" @mouseenter="dropdownOpen = true" @mouseleave="dropdownOpen = false">
                <button
                  class="text-sm lg:text-base transition-colors duration-200 flex items-center whitespace-nowrap font-medium text-white hover:text-[#99cc33]">
                  {{ item.title }}
                  <span class="ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                </button>

                <!-- Dropdown panel -->
                <transition enter-active-class="transition ease-out duration-200"
                  enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-1">
                  <div v-show="dropdownOpen"
                    class="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-black bg-opacity-90 rounded-lg shadow-2xl overflow-hidden z-60 w-[800px]">
                    <div class="flex divide-x divide-gray-600">
                      <NuxtLink v-for="subitem in item.subitems" :key="subitem.title" :to="subitem.path"
                        class="flex-1 p-8 text-white hover:bg-black hover:bg-opacity-60 transition-all duration-200 group">
                        <div class="text-center">
                          <div
                            class="mb-4 mx-auto w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                            <NuxtImg src="#" alt="placeholder" class="w-full h-full object-cover opacity-70" />
                          </div>
                          <h3
                            class="text-lg font-semibold mb-3 group-hover:text-[#99cc33] transition-colors duration-200">
                            {{ subitem.title }}
                          </h3>
                          <p class="text-sm text-gray-300 leading-relaxed">
                            {{ subitem.description }}
                          </p>
                        </div>
                      </NuxtLink>
                    </div>
                  </div>
                </transition>
              </div>
            </li>
          </ul>
        </nav>

        <!-- Partner with Us Button - Desktop -->
        <div class="hidden md:block">
          <NuxtLink to="/partner-with-us"
            class="bg-[#a86414] hover:bg-[#74b41a] text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap">
            Partner with Us
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
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

      <!-- Mobile Menu -->
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <div v-show="open" class="md:hidden mt-2 py-2 rounded-lg shadow-lg bg-white/95">
          <div v-for="item in menuitems" :key="item.title" class="block">
            <NuxtLink v-if="!item.hasDropdown" :to="item.path"
              class="block px-4 py-3 text-sm font-medium text-gray-900 hover:text-[#E6A619]" @click="open = false">
              {{ item.title }}
            </NuxtLink>

            <!-- Mobile dropdown -->
            <div v-else>
              <div class="block px-4 py-3 text-sm font-medium text-gray-900 flex justify-between items-center">
                {{ item.title }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-900" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div class="pl-8">
                <NuxtLink v-for="subitem in item.subitems" :key="subitem.title" :to="subitem.path"
                  class="block px-4 py-2 text-sm text-gray-600 hover:text-[#E6A619]" @click="open = false">
                  {{ subitem.title }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Partner with Us - Mobile -->
          <div class="px-4 py-3">
            <NuxtLink to="/partner-with-us"
              class="block w-full text-center bg-[#a86414] hover:bg-[#74b41a] text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
              @click="open = false">
              Partner with Us
            </NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* Navigation positioning - no longer fixed */
.fixed-nav {
  left: 50%;
  transform: translateX(-50%);
  z-index: 51;
  margin-top: -1rem;
  /* Move items up more to reduce navbar height */
}

/* Active link */
:deep(.router-link-active) {
  color: #99cc33 !important;
  font-weight: 600;
}

/* Transitions */
a,
button {
  transition-property: color, background-color, border-color;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>