<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-secondary-900/95 backdrop-blur-sm border-b border-secondary-200 dark:border-secondary-700 transition-all duration-300 h-20 flex items-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="flex justify-between items-center">
        <!-- Logo and Company Name -->
        <div class="flex-shrink-0 flex items-center">
          <div class="flex items-center space-x-3">
            <!-- Logo section -->
            <NuxtLink to="/" class="inline-block">
              <img src="/assets/img/bot-logo.png" alt="Syntanium Energy Logo" class="h-10 md:h-12 drop-shadow-lg" />
            </NuxtLink>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:items-center lg:space-x-8 lg:flex-1 lg:justify-center">
          <!-- Who We Are -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
              @click="toggleDropdown('whoWeAre')">
              <span>Who We Are</span>
            </button>
            <div v-show="activeDropdown === 'whoWeAre'"
              class="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700 py-2 z-50">
              <NuxtLink to="/about"
                class="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                About Us</NuxtLink>
              <NuxtLink to="/team"
                class="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Our Team</NuxtLink>
              <NuxtLink to="/history"
                class="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Company History</NuxtLink>
            </div>
          </div>

          <!-- Solutions & Expertise -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
              @click="toggleDropdown('solutions')">
              <span>Solutions & Expertise</span>
              <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === 'solutions' }" />
            </button>
            <div v-show="activeDropdown === 'solutions'"
              class="absolute top-full left-0 mt-2 w-96 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700 py-4 z-50">
              <div class="grid grid-cols-2 gap-4 px-4">
                <!-- Engineering Column -->
                <div class="flex items-start space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                  <div>
                    <h4 class="font-semibold text-primary-600 dark:text-primary-400 mb-2">Engineering</h4>
                    <NuxtLink to="/solutions/engineering"
                      class="block py-1 text-sm text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      Engineering Services</NuxtLink>
                  </div>
                </div>

                <!-- Construction Column -->
                <div class="flex items-start space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                      clip-rule="evenodd" />
                  </svg>
                  <div>
                    <h4 class="font-semibold text-primary-600 dark:text-primary-400 mb-2">Construction</h4>
                    <NuxtLink to="/solutions/construction"
                      class="block py-1 text-sm text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      Construction Services</NuxtLink>
                  </div>
                </div>

                <!-- Maintenance Column -->
                <div class="flex items-start space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clip-rule="evenodd" />
                  </svg>
                  <div>
                    <h4 class="font-semibold text-primary-600 dark:text-primary-400 mb-2">Maintenance</h4>
                    <NuxtLink to="/solutions/maintenance"
                      class="block py-1 text-sm text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      Maintenance Services</NuxtLink>
                  </div>
                </div>

                <!-- Oil & Gas Column -->
                <div class="flex items-start space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                  <div>
                    <h4 class="font-semibold text-primary-600 dark:text-primary-400 mb-2">Oil & Gas</h4>
                    <NuxtLink to="/solutions/oil-gas"
                      class="block py-1 text-sm text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      Oil & Gas Services</NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Our Commitment -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
              @click="toggleDropdown('commitment')">
              <span>Our Commitment</span>
              <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === 'commitment' }" />
            </button>
            <div v-show="activeDropdown === 'commitment'"
              class="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700 py-2 z-50">
              <!-- Safety -->
              <NuxtLink to="/commitment/safety"
                class="flex items-center space-x-2 px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <span>Safety</span>
              </NuxtLink>

              <!-- Quality -->
              <NuxtLink to="/commitment/quality"
                class="flex items-center space-x-2 px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 01-1.265.633l-4-12a1 1 0 111.265-.633l3.367 1.011 3.367-1.011a1 1 0 011.265.633z"
                    clip-rule="evenodd" />
                </svg>
                <span>Quality</span>
              </NuxtLink>

              <!-- CSR -->
              <NuxtLink to="/commitment/csr"
                class="flex items-center space-x-2 px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span>CSR (Oaktree Initiative)</span>
              </NuxtLink>

              <!-- Sustainability -->
              <NuxtLink to="/commitment/sustainability"
                class="flex items-center space-x-2 px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                    clip-rule="evenodd" />
                </svg>
                <span>Sustainability</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Careers -->
          <NuxtLink to="/careers"
            class="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200">
            Careers
          </NuxtLink>

          <!-- Contact Us -->
          <NuxtLink to="/contact"
            class="ml-8 bg-primary-500 hover:bg-primary-600 text-primary-50 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
            Contact Us
          </NuxtLink>
        </div>

        <!-- Dark Mode Toggle and Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <!-- Dark Mode Toggle -->
          <button @click="toggleDarkMode"
            class="p-2 rounded-lg text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
            <SunIcon v-if="isDark" class="w-5 h-5" />
            <MoonIcon v-else class="w-5 h-5" />
          </button>

          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-lg text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            aria-label="Toggle mobile menu">
            <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6" />
            <XMarkIcon v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="mobileMenuOpen"
      class="lg:hidden bg-white dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-800">
      <div class="px-4 py-4 space-y-4">
        <!-- Mobile Who We Are -->
        <div>
          <button @click="toggleMobileDropdown('whoWeAre')"
            class="w-full flex items-center justify-between text-left font-medium text-secondary-900 dark:text-white py-2">
            <span>Who We Are</span>
            <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': activeMobileDropdown === 'whoWeAre' }" />
          </button>
          <div v-show="activeMobileDropdown === 'whoWeAre'" class="mt-2 ml-4 space-y-2">
            <NuxtLink to="/about"
              class="block text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 py-1 transition-colors">
              About Us</NuxtLink>
            <NuxtLink to="/team"
              class="block text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 py-1 transition-colors">
              Our Team</NuxtLink>
            <NuxtLink to="/history"
              class="block text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 py-1 transition-colors">
              Company History</NuxtLink>
          </div>
        </div>

        <!-- Mobile Solutions & Expertise -->
        <div>
          <button @click="toggleMobileDropdown('solutions')"
            class="w-full flex items-center justify-between text-left font-medium text-secondary-900 dark:text-white py-2">
            <span>Solutions & Expertise</span>
            <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': activeMobileDropdown === 'solutions' }" />
          </button>
          <div v-show="activeMobileDropdown === 'solutions'" class="mt-2 ml-4 space-y-3">
            <div class="flex items-start space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0"
                viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
              <div>
                <h5 class="font-semibold text-primary-600 dark:text-primary-400 mb-1">Engineering</h5>
                <NuxtLink to="/solutions/engineering"
                  class="block text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm py-1 transition-colors">
                  Engineering Services</NuxtLink>
              </div>
            </div>

            <div class="flex items-start space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0"
                viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clip-rule="evenodd" />
              </svg>
              <div>
                <h5 class="font-semibold text-primary-600 dark:text-primary-400 mb-1">Construction</h5>
                <NuxtLink to="/solutions/construction"
                  class="block text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm py-1 transition-colors">
                  Construction Services</NuxtLink>
              </div>
            </div>

            <div class="flex items-start space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0"
                viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clip-rule="evenodd" />
              </svg>
              <div>
                <h5 class="font-semibold text-primary-600 dark:text-primary-400 mb-1">Maintenance</h5>
                <NuxtLink to="/solutions/maintenance"
                  class="block text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm py-1 transition-colors">
                  Maintenance Services</NuxtLink>
              </div>
            </div>

            <div class="flex items-start space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0"
                viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
              <div>
                <h5 class="font-semibold text-primary-600 dark:text-primary-400 mb-1">Oil & Gas</h5>
                <NuxtLink to="/solutions/oil-gas"
                  class="block text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm py-1 transition-colors">
                  Oil & Gas Services</NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Our Commitment -->
        <div>
          <button @click="toggleMobileDropdown('commitment')"
            class="w-full flex items-center justify-between text-left font-medium text-secondary-900 dark:text-white py-2">
            <span>Our Commitment</span>
            <ChevronDownIcon class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': activeMobileDropdown === 'commitment' }" />
          </button>
          <div v-show="activeMobileDropdown === 'commitment'" class="mt-2 ml-4 space-y-2">
            <NuxtLink to="/commitment/safety"
              class="flex items-center space-x-2 text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 py-1 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span>Safety</span>
            </NuxtLink>

            <NuxtLink to="/commitment/quality"
              class="flex items-center space-x-2 text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 py-1 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 01-1.265.633l-4-12a1 1 0 111.265-.633l3.367 1.011 3.367-1.011a1 1 0 011.265.633z"
                  clip-rule="evenodd" />
              </svg>
              <span>Quality</span>
            </NuxtLink>

            <NuxtLink to="/commitment/csr"
              class="flex items-center space-x-2 text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 py-1 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span>CSR (Oaktree Initiative)</span>
            </NuxtLink>

            <NuxtLink to="/commitment/sustainability"
              class="flex items-center space-x-2 text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 py-1 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clip-rule="evenodd" />
              </svg>
              <span>Sustainability</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile Simple Links -->
        <NuxtLink to="/careers"
          class="block font-medium text-secondary-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 py-2 transition-colors">
          Careers</NuxtLink>
        <NuxtLink to="/contact"
          class="block font-medium text-secondary-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 py-2 transition-colors">
          Contact Us</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {
  Bars3Icon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'
import { onMounted, onUnmounted, ref } from 'vue'

// Reactive state
const activeDropdown = ref(null)
const activeMobileDropdown = ref(null)
const mobileMenuOpen = ref(false)
const isDark = ref(false)

// Dark mode functionality
const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('darkMode', 'true')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('darkMode', 'false')
  }
}

// Initialize dark mode from localStorage
onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode')
  if (savedDarkMode === 'true') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else if (savedDarkMode === 'false') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  } else {
    // Default to system preference
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    }
  }
})

// Dropdown functionality
const toggleDropdown = (dropdown) => {
  if (activeDropdown.value === dropdown) {
    activeDropdown.value = null
  } else {
    activeDropdown.value = dropdown
  }
}

const toggleMobileDropdown = (dropdown) => {
  if (activeMobileDropdown.value === dropdown) {
    activeMobileDropdown.value = null
  } else {
    activeMobileDropdown.value = dropdown
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) {
    activeMobileDropdown.value = null
  }
}

// Close dropdowns when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative.group') && !event.target.closest('button')) {
    activeDropdown.value = null
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>