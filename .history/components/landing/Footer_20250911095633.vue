<template>
  <footer class="bg-gray-900/95 dark:bg-gray-950/95 backdrop-blur-md text-white">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

        <!-- Company Info -->
        <div class="lg:col-span-1">
          <div class="flex items-center space-x-3 mb-6">
            <img src="/assets/img/bot-logo.png" alt="Syntanium Energy Logo" class="h-10 md:h-12 drop-shadow-lg" />
          
          </div>
          <p class="text-gray-300 text-sm leading-relaxed mb-6">
            Leading provider of comprehensive engineering, construction, and maintenance solutions for the energy
            sector.
            Committed to safety, quality, and sustainable practices.
          </p>

          <!-- Social Media Links -->
          <div class="flex space-x-4">
            <a href="#"
              class="w-10 h-10 bg-gray-800/80 hover:bg-[#fe4135] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <Icon name="lucide:linkedin" class="w-5 h-5" />
            </a>
            <a href="#"
              class="w-10 h-10 bg-gray-800/80 hover:bg-[#fe4135] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <Icon name="lucide:twitter" class="w-5 h-5" />
            </a>
            <a href="#"
              class="w-10 h-10 bg-gray-800/80 hover:bg-[#fe4135] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <Icon name="lucide:facebook" class="w-5 h-5" />
            </a>
            <a href="#"
              class="w-10 h-10 bg-gray-800/80 hover:bg-[#fe4135] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <Icon name="lucide:instagram" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-6 relative">
            Quick Links
            <div class="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#fe4135] rounded-full"></div>
          </h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/about"
                class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200 text-sm flex items-center group">
                <Icon name="lucide:chevron-right"
                  class="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Who We Are
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/careers"
                class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200 text-sm flex items-center group">
                <Icon name="lucide:chevron-right"
                  class="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Careers
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact"
                class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200 text-sm flex items-center group">
                <Icon name="lucide:chevron-right"
                  class="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Contact Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/news"
                class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200 text-sm flex items-center group">
                <Icon name="lucide:chevron-right"
                  class="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                News & Updates
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-6 relative">
            Our Services
            <div class="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#fe4135] rounded-full"></div>
          </h4>
          <ul class="space-y-3">
            <li>
              <a href="#"
                class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200 text-sm flex items-center group">
                <Icon name="lucide:chevron-right"
                  class="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Engineering Solutions
              </a>
            </li>
            <li>
              <a href="#"
                class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200 text-sm flex items-center group">
                <Icon name="lucide:chevron-right"
                  class="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Construction Services
              </a>
            </li>
            <li>
              <a href="#"
                class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200 text-sm flex items-center group">
                <Icon name="lucide:chevron-right"
                  class="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Maintenance & Support
              </a>
            </li>
            <li>
              <a href="#"
                class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200 text-sm flex items-center group">
                <Icon name="lucide:chevron-right"
                  class="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Oil & Gas Operations
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-6 relative">
            Get In Touch
            <div class="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#fe4135] rounded-full"></div>
          </h4>
          <div class="space-y-4">
            <!-- Address -->
            <div class="flex items-start space-x-3 group">
              <div
                class="w-8 h-8 bg-[#fe4135]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#fe4135]/30 transition-colors">
                <Icon name="lucide:map-pin" class="w-4 h-4 text-[#fe4135]" />
              </div>
              <div>
                <p class="text-gray-300 text-sm leading-relaxed">
                  123 Energy Boulevard<br />
                  Industrial District<br />
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-center space-x-3 group">
              <div
                class="w-8 h-8 bg-[#fe4135]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#fe4135]/30 transition-colors">
                <Icon name="lucide:phone" class="w-4 h-4 text-[#fe4135]" />
              </div>
              <a href="tel:+234-XXX-XXX-XXXX"
                class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200 text-sm">
                +234-XXX-XXX-XXXX
              </a>
            </div>

            <!-- Email -->
            <div class="flex items-center space-x-3 group">
              <div
                class="w-8 h-8 bg-[#fe4135]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#fe4135]/30 transition-colors">
                <Icon name="lucide:mail" class="w-4 h-4 text-[#fe4135]" />
              </div>
              <a href="mailto:info@syntaniumenergy.com"
                class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200 text-sm">
                info@syntaniumenergy.com
              </a>
            </div>

            <!-- Business Hours -->
            <div class="flex items-start space-x-3 group">
              <div
                class="w-8 h-8 bg-[#fe4135]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#fe4135]/30 transition-colors">
                <Icon name="lucide:clock" class="w-4 h-4 text-[#fe4135]" />
              </div>
              <div>
                <p class="text-gray-300 text-sm">
                  Mon - Fri: 8:00 AM - 6:00 PM<br />
                  Sat: 9:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter Signup Section -->
    <div class="border-t border-gray-800/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          <div class="text-center lg:text-left">
            <h4 class="text-lg font-semibold text-white mb-2">Stay Updated</h4>
            <p class="text-gray-300 text-sm">Subscribe to our newsletter for the latest industry insights and company
              updates.</p>
          </div>
          <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
            <input type="email" placeholder="Enter your email address"
              class="px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fe4135] focus:border-[#fe4135] transition-all duration-200 w-full sm:w-80" />
            <button
              class="px-6 py-3 bg-[#fe4135] hover:bg-[#dc2626] text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2 whitespace-nowrap">
              <Icon name="lucide:send" class="w-4 h-4" />
              <span>Subscribe</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-gray-800/60 bg-gray-950/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <!-- Copyright -->
          <div class="text-center lg:text-left">
            <p class="text-gray-400 text-sm">
              © {{ currentYear }} Syntanium Energy. All rights reserved.
            </p>
          </div>

          <!-- Footer Links -->
          <div class="flex flex-wrap items-center justify-center space-x-6 text-sm">
            <NuxtLink to="/privacy" class="text-gray-400 hover:text-[#fe4135] transition-colors duration-200">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms" class="text-gray-400 hover:text-[#fe4135] transition-colors duration-200">
              Terms of Service
            </NuxtLink>
            <NuxtLink to="/sitemap" class="text-gray-400 hover:text-[#fe4135] transition-colors duration-200">
              Sitemap
            </NuxtLink>
          </div>

          <!-- Back to Top Button -->
          <button @click="scrollToTop"
            class="w-10 h-10 bg-[#fe4135]/20 hover:bg-[#fe4135] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            aria-label="Back to top">
            <Icon name="lucide:arrow-up" class="w-4 h-4 text-[#fe4135] group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

// Get current year for copyright
const currentYear = computed(() => new Date().getFullYear())

// Scroll to top functionality
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>