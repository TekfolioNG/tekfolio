<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const menuitems = [
  {
    title: "WHO WE ARE",
    path: "/who-we-are",
    dropdown: [
      { title: "About Us", path: "/about" },
      { title: "Our Team", path: "/team" },
      { title: "Company History", path: "/history" }
    ]
  },
  {
    title: "SOLUTIONS & EXPERTISE",
    path: "/solutions",
    dropdown: [
      {
        category: "Engineering",
        items: [
          { title: "Equipment Maintenance", path: "/solutions/equipment-maintenance" },
          { title: "Project Management", path: "/solutions/project-management" }
        ]
      },
      {
        category: "Construction",
        items: [
          { title: "Turnkey Solutions", path: "/solutions/turnkey-solutions" },
          { title: "Industrial Installations", path: "/solutions/industrial-installations" }
        ]
      },
      {
        category: "Maintenance",
        items: [
          { title: "Corrosion Management", path: "/solutions/corrosion-management" },
          { title: "Asset Integrity Management", path: "/solutions/asset-integrity" },
          { title: "Manpower Services", path: "/solutions/manpower-services" },
          { title: "Tank & Vessel Cleaning", path: "/solutions/tank-vessel-cleaning" }
        ]
      },
      {
        category: "Oil & Gas",
        items: [
          { title: "Petrochemical Processing", path: "/solutions/petrochemical" },
          { title: "Downstream Operations", path: "/solutions/downstream" },
          { title: "Marine Operations", path: "/solutions/marine" },
          { title: "Supply Chain Management", path: "/solutions/supply-chain" }
        ]
      }
    ]
  },
  {
    title: "OUR COMMITMENT",
    path: "/commitment",
    dropdown: [
      { title: "Safety", path: "/commitment/safety" },
      { title: "Quality", path: "/commitment/quality" },
      { title: "CSR (Oaktree Initiative)", path: "/commitment/csr" },
      { title: "Sustainability", path: "/commitment/sustainability" }
    ]
  },
  { title: "CAREERS", path: "/careers" },
  { title: "CONTACT US", path: "/contact" }
];

const open = ref(false);
const isScrolled = ref(false);
const activeDropdown = ref(null);
const isDark = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleDropdown = (index) => {
  activeDropdown.value = activeDropdown.value === index ? null : index;
};

const closeDropdown = () => {
  activeDropdown.value = null;
};

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('darkMode', 'false');
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  // Initialize dark mode from localStorage
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'true') {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  } else if (savedDarkMode === 'false') {
    isDark.value = false;
    document.documentElement.classList.remove('dark');
  } else {
    // Default to system preference
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark.value) {
      document.documentElement.classList.add('dark');
    }
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="fixed w-full z-50 top-0 left-0 right-0 transition-all duration-300"
    :class="isScrolled ? 'bg-white/95 dark:bg-gray-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <header class="flex items-center justify-between py-4 md:py-6">
        <!-- Logo section -->
        <NuxtLink to="/" class="inline-block flex items-center space-x-3">
          <img src="assets/img/bot-logo.png" alt="Syntanium Energy Logo" class="h-10 md:h-12 drop-shadow-lg" />
          <span class="font-heading font-bold text-xl hidden sm:block transition-colors duration-200"
            :class="isScrolled ? 'text-secondary-900 dark:text-white' : 'text-white'">
            Syntanium Energy
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <nav>
            <ul class="flex space-x-6 lg:space-x-8">
              <li v-for="(item, index) in menuitems" :key="item.title" class="relative group">
                <div v-if="item.dropdown" class="relative">
                  <button @click="toggleDropdown(index)"
                    class="flex items-center space-x-1 text-sm lg:text-base transition-colors duration-200 font-medium focus:outline-none"
                    :class="isScrolled ? 'text-secondary-900 dark:text-gray-300 hover:text-primary dark:hover:text-primary' : 'text-white hover:text-primary'">
                    <span>{{ item.title }}</span>
                    <svg class="w-4 h-4 transition-transform duration-200"
                      :class="{ 'rotate-180': activeDropdown === index }" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <!-- Dropdown Menu -->
                  <div v-show="activeDropdown === index"
                    class="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
                    :class="item.title === 'SOLUTIONS & EXPERTISE' ? 'w-80' : 'w-48'">
                    <!-- Solutions & Expertise - Multi-column layout -->
                    <div v-if="item.title === 'SOLUTIONS & EXPERTISE'" class="grid grid-cols-2 gap-4 px-4">
                      <div v-for="category in item.dropdown" :key="category.category">
                        <h4 class="font-semibold text-primary mb-2">{{ category.category }}</h4>
                        <NuxtLink v-for="subItem in category.items" :key="subItem.title" :to="subItem.path"
                          @click="closeDropdown"
                          class="block py-1 text-sm text-secondary-700 dark:text-gray-300 hover:text-primary transition-colors">
                          {{ subItem.title }}
                        </NuxtLink>
                      </div>
                    </div>

                    <!-- Regular dropdown items -->
                    <div v-else>
                      <NuxtLink v-for="subItem in item.dropdown" :key="subItem.title" :to="subItem.path"
                        @click="closeDropdown"
                        class="block px-4 py-2 text-sm text-secondary-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary transition-colors">
                        {{ subItem.title }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>

                <!-- Regular menu item -->
                <NuxtLink v-else :to="item.path" class="text-sm lg:text-base transition-colors duration-200 font-medium"
                  :class="isScrolled ? 'text-secondary-900 dark:text-gray-300 hover:text-primary dark:hover:text-primary' : 'text-white hover:text-primary'">
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <!-- Dark Mode Toggle -->
          <button @click="toggleDarkMode" class="p-2 rounded-lg transition-colors duration-200 focus:outline-none"
            :class="isScrolled ? 'text-secondary-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white/10'"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
            <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden flex items-center space-x-4">
          <!-- Mobile Dark Mode Toggle -->
          <button @click="toggleDarkMode" class="p-2 rounded-lg transition-colors duration-200 focus:outline-none"
            :class="isScrolled ? 'text-secondary-900 dark:text-gray-300' : 'text-white'">
            <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <button @click="open = !open" class="focus:outline-none transition-colors duration-200"
            :class="isScrolled ? 'text-secondary-900 dark:text-gray-300' : 'text-white'">
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
        <div v-show="open"
          class="lg:hidden mt-2 py-4 rounded-lg shadow-lg bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
          <div v-for="(item, index) in menuitems" :key="item.title" class="px-4">
            <!-- Mobile dropdown items -->
            <div v-if="item.dropdown" class="mb-4">
              <button @click="toggleDropdown(index)"
                class="w-full flex items-center justify-between text-left font-medium text-secondary-900 dark:text-white py-2 focus:outline-none">
                <span>{{ item.title }}</span>
                <svg class="w-4 h-4 transition-transform duration-200"
                  :class="{ 'rotate-180': activeDropdown === index }" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div v-show="activeDropdown === index" class="mt-2 ml-4 space-y-3">
                <!-- Solutions & Expertise mobile layout -->
                <div v-if="item.title === 'SOLUTIONS & EXPERTISE'">
                  <div v-for="category in item.dropdown" :key="category.category" class="mb-3">
                    <h5 class="font-semibold text-primary mb-1">{{ category.category }}</h5>
                    <div class="ml-2 space-y-1">
                      <NuxtLink v-for="subItem in category.items" :key="subItem.title" :to="subItem.path"
                        @click="open = false; closeDropdown()"
                        class="block text-secondary-700 dark:text-gray-300 text-sm py-1 hover:text-primary transition-colors">
                        {{ subItem.title }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>

                <!-- Regular mobile dropdown -->
                <div v-else class="space-y-2">
                  <NuxtLink v-for="subItem in item.dropdown" :key="subItem.title" :to="subItem.path"
                    @click="open = false; closeDropdown()"
                    class="block text-secondary-700 dark:text-gray-300 py-1 hover:text-primary transition-colors">
                    {{ subItem.title }}
                  </NuxtLink>
                </div>
              </div>
            </div>

            <!-- Mobile regular menu item -->
            <NuxtLink v-else :to="item.path"
              class="block font-medium text-secondary-900 dark:text-white py-2 hover:text-primary transition-colors duration-200 mb-2"
              @click="open = false">
              {{ item.title }}
            </NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </div>

  <!-- Click overlay to close dropdowns -->
  <div v-if="activeDropdown !== null" @click="closeDropdown" class="fixed inset-0 z-40"></div>
</template>

<style scoped>
/* Active link styles */
:deep(.router-link-exact-active) {
  color: #D2410C !important;
  font-weight: 600;
}

:deep(.router-link-active:not(.router-link-exact-active)) {
  color: inherit;
  font-weight: inherit;
}

/* Smooth transitions */
a,
button {
  transition-property: color, background-color, border-color, transform, box-shadow;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Dropdown animation */
.group:hover .group-hover\:block {
  display: block;
}
</style>