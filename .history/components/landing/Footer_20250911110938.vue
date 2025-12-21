<template>
  <footer class="bg-gray-900 dark:bg-gray-900 text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center md:text-left">
        <!-- Company Info & Logo -->
        <div class="col-span-1 md:col-span-2 lg:col-span-1">
          <div class="mb-6">
            <NuxtLink to="/" class="inline-block">
              <img src="/assets/img/bot-logo.png" alt="Syntanium Energy Logo"
                class="h-12 md:h-16 lg:h-18 drop-shadow-lg" />
            </NuxtLink>
          </div>
          <p class="text-gray-300 mb-6 max-w-md mx-auto md:mx-0">
            Syntanium Energy delivers innovative engineering, construction, and maintenance solutions for the energy
            sector with uncompromising commitment to safety and quality.
          </p>
          <div class="flex space-x-4 justify-center md:justify-start">
            <NuxtLink to="#" class="text-gray-400 hover:text-[#fe4135] transition-colors duration-200">
              <Icon name="lucide:facebook" class="w-6 h-6" />
            </NuxtLink>
            <NuxtLink to="#" class="text-gray-400 hover:text-[#fe4135] transition-colors duration-200">
              <Icon name="lucide:twitter" class="w-6 h-6" />
            </NuxtLink>
            <NuxtLink to="#" class="text-gray-400 hover:text-[#fe4135] transition-colors duration-200">
              <Icon name="lucide:linkedin" class="w-6 h-6" />
            </NuxtLink>
            <NuxtLink to="#" class="text-gray-400 hover:text-[#fe4135] transition-colors duration-200">
              <Icon name="lucide:instagram" class="w-6 h-6" />
            </NuxtLink>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-6 text-white border-b border-[#fe4135] pb-2">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/about" class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200">
                Who We Are
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/solutions" class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200">
                Solutions & Expertise
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/commitment" class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200">
                Our Commitment
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/careers" class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200">
                Careers
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200">
                Contact Us
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-6 text-white border-b border-[#fe4135] pb-2">Our Services</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="#"
                class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200 flex items-center justify-center md:justify-start">
                <Icon name="lucide:hard-hat" class="w-4 h-4 mr-2 text-[#fe4135]" />
                Engineering
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#"
                class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200 flex items-center justify-center md:justify-start">
                <Icon name="lucide:building" class="w-4 h-4 mr-2 text-[#fe4135]" />
                Construction
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#"
                class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200 flex items-center justify-center md:justify-start">
                <Icon name="lucide:settings" class="w-4 h-4 mr-2 text-[#fe4135]" />
                Maintenance
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#"
                class="text-gray-300 hover:text-[#fe4135] transition-colors duration-200 flex items-center justify-center md:justify-start">
                <Icon name="lucide:droplets" class="w-4 h-4 mr-2 text-[#fe4135]" />
                Oil & Gas
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Information -->
        <div>
          <h3 class="text-lg font-semibold mb-6 text-white border-b border-[#fe4135] pb-2">Contact Us</h3>
          <ul class="space-y-4">
            <li class="flex items-start justify-center md:justify-start">
              <Icon name="lucide:map-pin" class="w-5 h-5 mt-0.5 mr-3 text-[#fe4135] flex-shrink-0" />
              <span class="text-gray-300 text-left">11 Oromineke Layout,
                Off Wogu Street, D-Line,
                Port Harcourt, Nigeria</span>
            </li>
            <li class="flex items-center justify-center md:justify-start">
              <Icon name="lucide:phone" class="w-5 h-5 mr-3 text-[#fe4135] flex-shrink-0" />
              <span class="text-gray-300">(+234) 814 857 1524</span>
            </li>
            <li class="flex items-center justify-center md:justify-start">
              <Icon name="lucide:mail" class="w-5 h-5 mr-3 text-[#fe4135] flex-shrink-0" />
              <span class="text-gray-300">info@syntaniumenergy.com</span>
            </li>
            <li class="flex items-center justify-center md:justify-start">
              <Icon name="lucide:clock" class="w-5 h-5 mr-3 text-[#fe4135] flex-shrink-0" />
              <span class="text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Newsletter Subscription -->
      <div class="border-t border-gray-700 pt-8 mb-8">
        <div class="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div class="mb-4 md:mb-0">
            <h3 class="text-lg font-semibold text-white mb-2">Stay Updated</h3>
            <p class="text-gray-300">Subscribe to our newsletter for the latest updates</p>
          </div>
          <div class="flex w-full md:w-auto">
            <input type="email" placeholder="Your email address"
              class="px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#fe4135] w-full md:w-64">
            <button
              class="bg-[#fe4135] hover:bg-[#dc2626] px-4 py-2 rounded-r-lg text-white font-medium transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Footer with Darker Background -->
      <div class="bg-gray-950 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700 pt-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          <p class="text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} Syntanium Energy. All rights reserved.
          </p>
          <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div class="flex space-x-6">
              <NuxtLink to="#" class="text-gray-400 hover:text-[#fe4135] text-sm transition-colors duration-200">
                Privacy Policy
              </NuxtLink>
              <NuxtLink to="#" class="text-gray-400 hover:text-[#fe4135] text-sm transition-colors duration-200">
                Terms of Service
              </NuxtLink>
            </div>
            <div class="text-gray-400 text-sm">
              Design & Developed by
              <NuxtLink to="https://tekfol.io" target="_blank"
                class="text-[#fe4135] hover:text-white transition-colors duration-200">
                Tekfolio Ltd
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for basic footer functionality
</script>