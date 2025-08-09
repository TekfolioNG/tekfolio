<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8 px-6 sm:px-8">
    <div class="container mx-auto">
      <!-- Main Footer -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-2">
        <div class="md:col-span-4 flex flex-col items-center md:items-start">
          <NuxtLink to="/" class="logo-mobile-center">
            <div class="mb-4 transition-all duration-200 hover:scale-105">
              <img src="~/assets/img/tekfolio-no-tagline.png" alt="Tekfolio Logo"
                class="h-10 md:h-12 drop-shadow-lg mb-2" />
            </div>
          </NuxtLink>

          <p class="text-gray-300 leading-relaxed mb-6 text-center md:text-left">
            Tekfolio is a Nigerian digital solutions agency focused on empowering businesses and organizations with
            cutting-edge and
            customized
            digital products and services that drive lasting success. We're dedicated to delivering efficient, scalable,
            and fast
            solutions in web
            and mobile app development, cloud migration, cybersecurity, and digital marketing.
          </p>
          <div class="w-full flex justify-center md:justify-start">
            <NuxtLink to="/who-we-are"
              class="text-blue-400 hover:text-blue-300 transition-colors text-sm inline-flex items-center accent-link">
              Learn more about us
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="md:col-span-2 flex flex-col items-center md:items-start">
          <h3
            class="text-lg font-semibold mb-6 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
            Quick Links
          </h3>
          <ul class="space-y-4 text-center md:text-left">
            <li>
              <NuxtLink to="/#" class="text-gray-300 hover:text-white transition-colors">
                About Tekfolio
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/what-we-do" class="text-gray-300 hover:text-white transition-colors">
                How We're Different
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/our-work" class="text-gray-300 hover:text-white transition-colors">
                Our Competencies
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/our-team" class="text-gray-300 hover:text-white transition-colors">
                Past Projects
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-gray-300 hover:text-white transition-colors">
                Contact Us
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Services -->
        <div class="md:col-span-3 flex flex-col items-center md:items-start">
          <h3
            class="text-lg font-semibold mb-6 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
            Services
          </h3>
          <ul class="space-y-3 text-center md:text-left">
            <li>
              <NuxtLink to="/#" class="text-gray-300 hover:text-white transition-colors">
                Enterprise Web Apps
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#" class="text-gray-300 hover:text-white transition-colors">
                Business Mobile Apps
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#" class="text-gray-300 hover:text-white transition-colors">
                Search Engine Optimization
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#" class="text-gray-300 hover:text-white transition-colors">
                Search Engine Marketing
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#" class="text-gray-300 hover:text-white transition-colors">
                Email Marketing
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#" class="text-gray-300 hover:text-white transition-colors">
                Staff Training
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact Info -->
        <div class="md:col-span-3 flex flex-col items-center md:items-start">
          <h3
            class="text-lg font-semibold mb-6 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
            Contact Us
          </h3>
          <ul class="space-y-4 text-center md:text-left">
            <li class="flex flex-col md:flex-row items-center md:items-start">
              <div class="flex items-start mb-2 md:mb-0 md:mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 accent-icon flex-shrink-0 mt-1" fill="none"
                  viewBox="0 0 24 24" stroke="url(#iconGradient)">
                  <defs>
                    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#3b82f6" />
                      <stop offset="100%" stop-color="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div class="text-gray-300 text-sm">
                <strong class="block text-white mb-1">Corporate Address:</strong>
                4th Floor, 77 Awolowo Way (MAN House), Ikeja, Lagos.
              </div>
            </li>
            <li class="flex flex-col md:flex-row items-center md:items-start">
              <div class="flex items-start mb-2 md:mb-0 md:mr-3">
              </div>
            </li>
            <li class="flex flex-col md:flex-row items-center md:items-start">
              <div class="flex items-center mb-2 md:mb-0 md:mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 accent-icon flex-shrink-0 mt-1" fill="none"
                  viewBox="0 0 24 24" stroke="url(#iconGradient)">
                  <defs>
                    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#3b82f6" />
                      <stop offset="100%" stop-color="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div class="text-gray-300 text-sm">
                <strong class="block text-white mb-1">Tel:</strong>
                +234 (0) 708 854 7450
              </div>
            </li>
            <li class="flex flex-col md:flex-row items-center md:items-start">
              <div class="flex items-center mb-2 md:mb-0 md:mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 accent-icon flex-shrink-0 mt-1" fill="none"
                  viewBox="0 0 24 24" stroke="url(#iconGradient)">
                  <defs>
                    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#3b82f6" />
                      <stop offset="100%" stop-color="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="text-gray-300 text-sm">
                <strong class="block text-white mb-1">E-mail:</strong>
                <NuxtLink to="mailto:info@ppil.com.ng" class="hover:text-blue-400 accent-link-hover transition-colors">
                  hello@tekfolo.io</NuxtLink>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-gray-700 pt-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="order-2 md:order-1 text-gray-400 text-sm text-center">
            © {{ new Date().getFullYear() }} TEKFOLIO Ltd, All Rights Reserved.
          </div>

          <div class="order-1 md:order-2 flex flex-col md:flex-row items-center gap-4">
            <div class="text-gray-400 text-sm">Connect with us:</div>
            <div class="flex gap-3">
              <NuxtLink to="linkedin.com/company/tekfoilio-ltd" class="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn">
                <Icon name="mdi:linkedin" size="20" />
              </NuxtLink>
              <NuxtLink to="https://www.facebook.com/tekfolio" class="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook">
                <Icon name="mdi:facebook" size="20" />
              </NuxtLink>
              <NuxtLink to="#" class="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Icon name="mdi:instagram" size="20" />
              </NuxtLink>
              <NuxtLink to="https://x.com/tekfoliong" class="text-gray-400 hover:text-white transition-colors"
                aria-label="X">
                <img src="/img/twitter.png" alt="twitter"
                  class="w-5 h-5 invert opacity-60 hover:opacity-100 transition-all" />
              </NuxtLink>

            </div>
          </div>

          <div class="order-3 text-gray-400 text-sm text-center md:text-right">
            Website Development by <NuxtLink to="https://tekfol.io" target="_blank"
              class="text-gray-300 hover:text-blue-400 accent-link-hover transition-colors">Tekfolio Ltd</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>