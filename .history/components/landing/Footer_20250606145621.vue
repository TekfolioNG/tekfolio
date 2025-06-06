<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8 px-6 sm:px-8">
    <div class="container mx-auto">
      <!-- Main Footer -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <!-- Column 1: Logo and About (adjusted width) -->
        <div class="md:col-span-4 flex flex-col items-center md:items-start">
          <NuxtLink to="/" class="logo-mobile-center">
            <img src="~/assets/img/tekfolio-logo-final9.svg" alt="Tekfolio Logo"
              class="h-24 md:h-28 drop-shadow-lg logo-mobile-desaturated mb-6" />
          </NuxtLink>

          <p class="text-gray-300 leading-relaxed mb-6 text-center md:text-left">
            PPIL is one of Nigeria's most trusted hybrid construction and infrastructure firms —
            bringing together engineering, project management, and facility services under one roof.
            Since 2014, we've helped shape cities and communities through high-impact projects that
            deliver true value.
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
          <h3 class="text-lg font-semibold mb-6 accent-heading">
            Quick Links
          </h3>
          <ul class="space-y-4 text-center md:text-left">
            <li>
              <NuxtLink to="/who-we-are" class="text-gray-300 hover:text-white transition-colors">
                Who We Are
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/what-we-do" class="text-gray-300 hover:text-white transition-colors">
                What We Do
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/our-work" class="text-gray-300 hover:text-white transition-colors">
                Our Work
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/our-team" class="text-gray-300 hover:text-white transition-colors">
                Our Team
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
          <h3 class="text-lg font-semibold mb-6 accent-heading">
            Services
          </h3>
          <ul class="space-y-3 text-center md:text-left">
            <li>
              <NuxtLink to="/what-we-do#design-planning" class="text-gray-300 hover:text-white transition-colors">
                Design & Planning
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/what-we-do#construction-project" class="text-gray-300 hover:text-white transition-colors">
                Construction & Project Planning
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/what-we-do#renovation-upgrades" class="text-gray-300 hover:text-white transition-colors">
                Renovation & Upgrades
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/what-we-do#facility-audit" class="text-gray-300 hover:text-white transition-colors">
                Facility Audit/
                Condition Survey
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/what-we-do#facility-management" class="text-gray-300 hover:text-white transition-colors">
                Facility Management
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/what-we-do#engineering-procurement"
                class="text-gray-300 hover:text-white transition-colors">
                Engineering/Procurement Consultancy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/what-we-do#import-export" class="text-gray-300 hover:text-white transition-colors">
                Import & Export
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/what-we-do#general-contractor" class="text-gray-300 hover:text-white transition-colors">
                General Contractor
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact Info -->
        <div class="md:col-span-3 flex flex-col items-center md:items-start">
          <h3 class="text-lg font-semibold mb-6 accent-heading">
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
                <strong class="block text-white mb-1">Head Office:</strong>
                03, Borno Road, off Independence Way, Marafa, Kaduna.
              </div>
            </li>
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
                <strong class="block text-white mb-1">Abuja Office:</strong>
                02, Bilyamin Usman Street, Off Ebitu Ukiwe Street, Jabi Abuja.
              </div>
            </li>
            <li class="flex flex-col md:flex-row items-center md:items-start">
              <div class="flex items-center mb-2 md:mb-0 md:mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400 accent-icon flex-shrink-0"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div class="text-gray-300 text-sm">
                <strong class="block text-white mb-1">Tel:</strong>
                +234 (0) 9-292-0035, +234 803 786 7646
              </div>
            </li>
            <li class="flex flex-col md:flex-row items-center md:items-start">
              <div class="flex items-center mb-2 md:mb-0 md:mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400 accent-icon flex-shrink-0"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="text-gray-300 text-sm">
                <strong class="block text-white mb-1">E-mail:</strong>
                <NuxtLink to="mailto:info@ppil.com.ng" class="hover:text-blue-400 accent-link-hover transition-colors">
                  info@ppil.com.ng</NuxtLink>
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
            <div class="text-gray-400 text-sm">Connect:</div>
            <div class="flex gap-3">
              <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Icon name="mdi:linkedin" size="20" />
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Icon name="mdi:instagram" size="20" />
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="X">
                <Icon name="mdi:twitter" size="20" />
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Icon name="mdi:facebook" size="20" />
              </a>
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

<script setup>
// No script logic needed for this component
</script>

<style scoped>
/* Simple gradient styles for headings - Blue to Cyan */
.accent-heading {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-weight: 600;
}

/* Lighter shade on hover */
.accent-heading:hover {
  background: linear-gradient(135deg, #60a5fa, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  transition: all 0.3s ease;
}

/* Mobile desaturation styles */
@media (max-width: 768px) {

  /* Logo positioning - shift slightly right on mobile only */
  .logo-mobile-center {
    display: block;
    margin-left: 2rem;
    /* Shift logo right by 24px */
  }

  /* Simplified gradient for mobile - blue to cyan */
  .accent-heading {
    background: linear-gradient(135deg, #7fb3d9, #7ecfd4) !important;
    -webkit-background-clip: text !important;
    background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    color: transparent !important;
  }

  .accent-heading:hover {
    background: linear-gradient(135deg, #94c5ea, #93d9de) !important;
    -webkit-background-clip: text !important;
    background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    color: transparent !important;
  }

  .accent-icon {
    color: #7fb3d9,
      #7ecfd4;
    /* Desaturated blue-400 */
  }

  .accent-link {
    color: #7fb3d9,
      #7ecfd4;
    /* Desaturated blue-400 */
  }

  .accent-link:hover {
    color: #a3c7e8 !important;
    /* Desaturated blue-300 */
  }

  .accent-link-hover:hover {
    color: #7fb3d9 !important;
    /* Desaturated blue-400 */
  }

  /* Logo desaturation for mobile */
  .logo-mobile-desaturated {
    filter: saturate(0.5) brightness(1.95);
  }
}
</style>