<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8 px-6 sm:px-8">
    <div class="container mx-auto">
      <!-- Main Footer -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <!-- Column 1: Logo and About -->
        <div class="md:col-span-4 flex flex-col items-center md:items-start">
          <NuxtLink to="/">
            <img src="~/assets/img/bot-logo.png" alt="BOT Integrated Services Logo" class="h-12 md:h-14" />
          </NuxtLink>

          <p class="text-gray-300 leading-relaxed mb-6 text-center md:text-left mt-4">
            BOT Integrated Services is your trusted one-stop solution for travel booking, real estate transactions,
            and oil & gas supply. We bring convenience, reliability, and transparent pricing to essential services
            across Nigeria, making your everyday transactions simpler and stress-free.
          </p>
          <NuxtLink to="/contact"
            class="text-[#D2691E] hover:text-white transition-colors text-sm inline-flex items-center">
            Get in touch today
            <Icon name="heroicons:arrow-right" class="h-4 w-4 ml-1" />
          </NuxtLink>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="md:col-span-2 flex flex-col items-center md:items-start">
          <h3 class="text-lg font-semibold mb-6 text-[#D2691E]">
            Quick Links
          </h3>
          <ul class="space-y-3 text-center md:text-left">
            <li>
              <NuxtLink to="/" class="text-gray-300 hover:text-white transition-colors">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/travel" class="text-gray-300 hover:text-white transition-colors">
                Travel & Ticketing
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/properties" class="text-gray-300 hover:text-white transition-colors">
                Properties
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/oil-gas" class="text-gray-300 hover:text-white transition-colors">
                Oil & Gas Supply
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-gray-300 hover:text-white transition-colors">
                Contact Us
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Our Services -->
        <div class="md:col-span-3 flex flex-col items-center md:items-start">
          <h3 class="text-lg font-semibold mb-6 text-[#D2691E]">
            Our Services
          </h3>
          <ul class="space-y-3 text-center md:text-left">
            <li>
              <NuxtLink to="/travel" class="text-gray-300 hover:text-white transition-colors">
                Flight Bookings
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/travel" class="text-gray-300 hover:text-white transition-colors">
                Travel Planning
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/properties" class="text-gray-300 hover:text-white transition-colors">
                Property Sales & Leasing
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/properties" class="text-gray-300 hover:text-white transition-colors">
                Real Estate Investment
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/oil-gas" class="text-gray-300 hover:text-white transition-colors">
                LPG Supply
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/oil-gas" class="text-gray-300 hover:text-white transition-colors">
                Petroleum Products
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact Info -->
        <div class="md:col-span-3 flex flex-col items-center md:items-start">
          <h3 class="text-lg font-semibold mb-6 text-[#D2691E]">
            Contact Us
          </h3>
          <ul class="space-y-4 text-center md:text-left">
            <li class="flex flex-col md:flex-row items-center md:items-start">
              <div class="flex items-start mb-2 md:mb-0 md:mr-3">
                <Icon name="heroicons:map-pin" class="h-5 w-5 text-[#D2691E] flex-shrink-0 mt-1" />
              </div>
              <div class="text-gray-300 text-sm">
                <strong class="block text-white mb-1">Head Office:</strong>
                Lagos, Nigeria
              </div>
            </li>
            <li class="flex flex-col md:flex-row items-center md:items-start">
              <div class="flex items-center mb-2 md:mb-0 md:mr-3">
                <Icon name="heroicons:phone" class="h-5 w-5 text-[#D2691E] flex-shrink-0" />
              </div>
              <div class="text-gray-300 text-sm">
                <strong class="block text-white mb-1">Tel:</strong>
                +234 803 427 2579
              </div>
            </li>
            <li class="flex flex-col md:flex-row items-center md:items-start">
              <div class="flex items-center mb-2 md:mb-0 md:mr-3">
                <Icon name="heroicons:envelope" class="h-5 w-5 text-[#D2691E] flex-shrink-0" />
              </div>
              <div class="text-gray-300 text-sm">
                <strong class="block text-white mb-1">E-mail:</strong>
                <a href="mailto:info@botintegrated.com" class="hover:text-[#D2691E] transition-colors">
                  info@botintegrated.com
                </a>
                <br>
                <a href="mailto:support@botintegrated.com" class="hover:text-[#D2691E] transition-colors">
                  support@botintegrated.com
                </a>
              </div>
            </li>
            <li class="flex flex-col md:flex-row items-center md:items-start">
              <div class="flex items-center mb-2 md:mb-0 md:mr-3">
                <Icon name="mdi:whatsapp" class="h-5 w-5 text-[#D2691E] flex-shrink-0" />
              </div>
              <div class="text-gray-300 text-sm">
                <strong class="block text-white mb-1">WhatsApp:</strong>
                <a href="https://wa.me/2348034272579" class="hover:text-[#D2691E] transition-colors">
                  Chat with us
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-gray-700 pt-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="order-2 md:order-1 text-gray-400 text-sm text-center">
            © {{ new Date().getFullYear() }} BOT Integrated Services. All Rights Reserved.
          </div>

          
          </div>

          <div class="order-3 text-gray-400 text-sm text-center md:text-right">
            Website by <NuxtLink to="https://tekfol.io" target="_blank"
              class="text-gray-300 hover:text-[#D2691E] transition-colors">Tekfolio Ltd</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this component
</script>